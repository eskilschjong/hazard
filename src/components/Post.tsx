import React from 'react';
import { Skull, MessageCircle } from 'lucide-react';


interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export const Post: React.FC<PostProps> = ({
    id,
    title,
    body,
    userId
}) => {
    const dangerScore = () => {
        let score = 0;
        for (const char of body) {
            if ('aeiouAEIOU'.includes(char)) {
            score++;
            }
        }
        return score;
    };
    return (
        <article className='w-[30vw] min-w-80 mt-8 pb-4 border-b border-gray-400'>
            <div className='font-semibold'>User {userId}</div>
            <img src={`https://placehold.co/500x550?text=${encodeURIComponent(title)}`} alt={title} className='w-full h-auto object-cover'></img>
            <div className='flex '>
                <h2 className='text-base font-semibold flex-1 mr-2'>{title}</h2>
                <div className='flex font-bold text-xl items-center mr-2 gap-1' title='Comments'>
                    5
                    <MessageCircle size={20} />
                </div>
                <div className='text-red-500 flex font-bold text-xl items-center gap-1' title='Danger Score'>
                    {dangerScore()}
                    <Skull size={24} />
                </div>
            </div>
            <p>{body}</p>
        </article>
    );
};

export default Post