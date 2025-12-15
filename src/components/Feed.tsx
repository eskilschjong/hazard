import { useState, useEffect } from "react";
import { Post } from "./Post";


interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const Feed = () => {
    
const [posts, setPosts] = useState<Post[]>([]);

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

const hidePost = (id: number) => {
        const hiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');
        if (!hiddenPosts.includes(id)) {
            hiddenPosts.push(id);
            localStorage.setItem('hiddenPosts', JSON.stringify(hiddenPosts));
        }
        setPosts(prev => prev.filter(post => post.id !== id));
    }

    return (
        
        <div className="ml-[35vw]">
            {posts.map(p => (
                <div key={p.id}>
                    <Post id={p.id} title={p.title} body={p.body} userId={p.userId} onHide={hidePost} />
                </div>
            ))}
        </div>
    );
}

export default Feed;