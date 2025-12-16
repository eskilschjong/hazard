import { useState, useEffect } from "react";
import { Post } from "./Post";
import { ConfirmModal } from "./ConfirmModal"
import { useParams } from "react-router-dom";
import { Explore } from "./Explore";


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
const [selectedPost, setSelectedPost] = useState<number | null>(null);
const { userId } = useParams();
const userIdNumber = userId ? Number(userId) : null;

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((data: Post[]) => {
        const hiddenPosts: number[] = JSON.parse(
            localStorage.getItem("hiddenPosts") || "[]"
        );

        let result: Post[];

        switch (sortBy) {
            case "default":
                result = data.filter(post => !hiddenPosts.includes(post.id));
                break;

            case "hidden":
                result = data.filter(post => hiddenPosts.includes(post.id)).reverse();
                break;

            case "user":
                result = data.filter(post => post.userId === userIdNumber && !hiddenPosts.includes(post.id));
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

        setPosts(result, );
    });
}, [sortBy, userIdNumber]);

const dangerScore = ( body: string ) => {
        let score = 0;
        for (const char of body) {
            if ('aeiouAEIOU'.includes(char)) {
            score++;
            }
        }
        return score;
    };

const hidePost = () => {
    if (selectedPost === null) return;

    const hiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');
    
    if (sortBy === "hidden") {
        const updatedHiddenPosts = hiddenPosts.filter((id: number) => id !== selectedPost);
        localStorage.setItem('hiddenPosts', JSON.stringify(updatedHiddenPosts));
    } else {
        hiddenPosts.push(selectedPost);
        localStorage.setItem('hiddenPosts', JSON.stringify(hiddenPosts));
    }
    
    setPosts(prev => prev.filter(post => post.id !== selectedPost));
    closeConfirmModal();
}

const openConfirmModal = (id: number) => {
    setSelectedPost(id);
}

const closeConfirmModal = () => {
    setSelectedPost(null);
}


    return (
        <>
            <div className="ml-[35vw]">
                {posts.map(p => (
                    <div key={p.id}>
                        <Post id={p.id} title={p.title} body={p.body} userId={p.userId} dangerScore={dangerScore(p.body)} hidden={sortBy === "hidden"} onHide={openConfirmModal} />
                    </div>
                ))}
                {selectedPost !== null && (
                    <ConfirmModal onConfirm={hidePost} onClose={closeConfirmModal} hidden={sortBy === "hidden"}/>
                )}
            </div>
            <Explore sortBy={sortBy}/>
        </>
    );
}

export default Feed;