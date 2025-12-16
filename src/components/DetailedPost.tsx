import React, { useEffect, useState } from 'react';
import { Skull, MessageCircle, CircleUserRound, X } from 'lucide-react';

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
    dangerScore: number;
    onClose: () => void;
}

export const DetailedPost: React.FC<PostProps> = ({
    id,
    title,
    body,
    userId,
    dangerScore,
    onClose
}) => {

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => {
        setComments(data);
        })
        .catch(err => console.error(err))
    }, []); 
    const [comments, setComments] = useState<Comment[]>([]);
    return (
        <div>
            <div className='fixed z-39 inset-0 bg-black opacity-50' onClick={onClose} />
            <button onClick={onClose} className='fixed text-white top-4 right-4 z-50 p-2' title='Close Post'>
                <X size={30} />
            </button>
            <div className="fixed z-40 flex bg-white w-[60vw] h-[80vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-r-lg">
                <img 
                    src={`https://placehold.co/500x550/DAE2DF/63736D/?text=${title}`}
                    alt={title}
                    className='w-full h-auto object-cover'
                />
                <div className='flex flex-col pb-4'>
                    <div className='flex flex-col border-b border-gray-300 p-4'>
                        <div className='font-semibold flex gap-2 text-[#36423E]'><CircleUserRound /> User {userId}</div>
                        <div className='flex '>
                            <h2 className='text-base font-semibold flex-1 mr-2'>{title}</h2>
                            <div className='flex font-bold text-xl items-center mr-2 gap-1' title='Comments'>
                                {comments.length}
                                <MessageCircle size={20} />
                            </div>
                            <div className='text-[#BF0000] flex font-bold text-xl items-center gap-1' title='Danger Score'>
                                {dangerScore}
                                <Skull size={24} />
                            </div>
                        </div>
                        <p className='text-sm'>{body}</p>
                    </div>
                    {/* Comments */}
                    <div className='overflow-y-scroll pl-4
                                    [&::-webkit-scrollbar]:w-2
                                    [&::-webkit-scrollbar-track]:bg-gray-100
                                    [&::-webkit-scrollbar-thumb]:bg-gray-300'>
                        {comments.map(c => (
                            <div key={c.id} className='border-b border-gray-300 pb-8 mt-4 pr-4'>
                                <div className='font-semibold flex items-center gap-2 text-[#36423E]'>
                                    <CircleUserRound />
                                    {c.email}
                                </div>
                                <div className='ml-4 text-sm'>
                                    {c.body}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedPost;