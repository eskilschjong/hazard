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
    setPosts(data);
    })
    .catch(err => console.error(err))
}, []); 


    return (
        <div className="ml-[35vw]">
            {posts.map(p => (
                <div key={p.id}>
                    <Post id={p.id} title={p.title} body={p.body} userId={p.userId} />
                </div>
            ))}
        </div>
    );
}

export default Feed;