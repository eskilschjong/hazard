import { useState, useEffect } from "react";
import { Post } from "./Post";
import { ConfirmModal } from "./ConfirmModal"
import { useParams } from "react-router-dom";
import { Explore } from "./Explore";
import { CircleOff, Ellipsis } from "lucide-react";


interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface FeedProps {
    sortBy: string;
}

export const Feed = ({ sortBy }: FeedProps) => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState<number | null>(null);
    const { userId } = useParams();
    const userIdNumber = userId ? Number(userId) : null;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);

                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data: Post[] = await response.json();

                const hiddenPosts: number[] = JSON.parse(
                    localStorage.getItem("hiddenPosts") || "[]"
                );

                let result: Post[];

                switch (sortBy) {
                    case "default":
                        result = data.filter(post => !hiddenPosts.includes(post.id));
                        break;

                    case "hidden":
                        result = data
                            .filter(post => hiddenPosts.includes(post.id))
                            .reverse();
                        break;

                    case "user":
                        result = data.filter(
                            post =>
                                post.userId === userIdNumber &&
                                !hiddenPosts.includes(post.id)
                        );
                        break;

                    case "length":
                        result = data
                            .filter(post => !hiddenPosts.includes(post.id))
                            .sort((a, b) => b.body.length - a.body.length);
                        break;

                    case "danger":
                        result = data
                            .filter(post => !hiddenPosts.includes(post.id))
                            .sort((a, b) => dangerScore(b.body) - dangerScore(a.body));
                        break;

                    default:
                        result = data;
                }

                setPosts(result);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [sortBy, userIdNumber]);

    const dangerScore = (body: string) => {
        let score = 0;
        for (const char of body) {
            if ('aeiouAEIOU'.includes(char)) {
                score++;
            }
        }
        return score;
    };

    const hidePost = (postId?: number) => {
        const id = postId ?? selectedPost;
        if (id === null || id === undefined) return;

        const hiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');

        if (sortBy === "hidden") {
            const updatedHiddenPosts = hiddenPosts.filter((hidId: number) => hidId !== id);
            localStorage.setItem('hiddenPosts', JSON.stringify(updatedHiddenPosts));
        } else {
            hiddenPosts.push(id);
            localStorage.setItem('hiddenPosts', JSON.stringify(hiddenPosts));
        }

        setPosts(prev => prev.filter(post => post.id !== id));
        closeConfirmModal();
    }

    const openConfirmModal = (id: number) => {
        if (localStorage.getItem('confirmModal') === "false") {
            hidePost(id);
        } else {
            setSelectedPost(id);
        }
    };

    const closeConfirmModal = () => {
        setSelectedPost(null);
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[100vh] w-[100vw]">
                <Ellipsis size={64} className="text-gray-400 animate-pulse" />
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="flex items-center justify-center h-[100vh] w-[100vw] gap-4">
                <h1 className="text-4xl font-semibold">This feed is empty</h1><CircleOff className="mt-3" size={30} />
            </div>
        )
    }

    return (
        <>
            <div className="mx-auto md:ml-[35vw] md:mx-0">
                {(posts.map(p => (
                    <div key={p.id}>
                        <Post id={p.id} title={p.title} body={p.body} userId={p.userId} dangerScore={dangerScore(p.body)} hidden={sortBy === "hidden"} onHide={openConfirmModal} />
                    </div>
                ))
                )}
                {selectedPost !== null && (
                    <ConfirmModal 
                        onConfirm={() => hidePost()} 
                        onClose={closeConfirmModal} 
                        hidden={sortBy === "hidden"}
                    />
                )}
            </div>
            <Explore sortBy={sortBy}/>
        </>
    );
}

export default Feed;