import { useState, useEffect } from "react";
import { Post } from "./Post";
import { ConfirmModal } from "./ConfirmModal"


interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const Feed = () => {
    
const [posts, setPosts] = useState<Post[]>([]);
const [selectedPost, setSelectedPost] = useState<number | null>(null);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            const hiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');
            const filteredPosts = data.filter((post: Post) => !hiddenPosts.includes(post.id));
            setPosts(filteredPosts);
        })
        .catch(err => console.error(err))
}, []);

const hidePost = () => {
    if (selectedPost === null) return;

    const hiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');
    hiddenPosts.push(selectedPost);
    localStorage.setItem('hiddenPosts', JSON.stringify(hiddenPosts));
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
        
        <div className="ml-[35vw]">
            {posts.map(p => (
                <div key={p.id}>
                    <Post id={p.id} title={p.title} body={p.body} userId={p.userId} onHide={openConfirmModal} />
                    
                </div>
            ))}
            {selectedPost !== null && (
                <ConfirmModal onConfirm={hidePost} onClose={closeConfirmModal} />
            )}
        </div>
    );
}

export default Feed;