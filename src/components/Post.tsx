import React, { useState } from 'react';
import { Skull, MessageCircle, CircleUserRound, Eye, EyeOff } from 'lucide-react';
import {DetailedPost} from './DetailedPost'
import { NavLink } from "react-router-dom";


interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
    dangerScore: number;
    hidden: boolean;
    onHide: (id: number) => void;
}

export const Post: React.FC<PostProps> = ({
    id,
    title,
    body,
    userId,
    dangerScore,
    hidden,
    onHide
}) => {
    const [showDetails, setShowDetails] =  useState<boolean>(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
        document.body.style.overflow = !showDetails ? 'hidden' : 'auto';
    }

    return (
        <div className='w-[30vw] min-w-80 mt-8 pb-4 border-b border-gray-400'>
            <div className='font-semibold flex mb-1 text-[var(--color-text)] dark:text-[var(--color-text-dark)]'>
                <NavLink to={`/user/${userId}`} className='flex-1 flex flex-row gap-2'>
                    <CircleUserRound />
                    User {userId}
                </NavLink>

                <button title={hidden ? "Show" : "Hide"} onClick={() => onHide(id)} className="cursor-pointer">
                    {hidden ? <EyeOff /> : <Eye />}
                </button>
            </div>
            <img 
                src={`https://placehold.co/500x550/DAE2DF/63736D/?text=${title}`}
                alt={title}
                className='w-full h-auto object-cover cursor-pointer'
                title='Enter Detailed View'
                onClick={toggleDetails}
            />

            <div className='flex '>
                <h2 className='text-base font-semibold flex-1 mr-2'>{title}</h2>
                <div className='flex font-bold text-xl items-center mr-2 gap-1' title='Comments'>
                    5
                    <MessageCircle size={20} />
                </div>
                <div className='text-[var(--color-red)] dark:text-[var(--color-red-dark)] flex font-bold text-xl items-center gap-1' title='Danger Score'>
                    {dangerScore}
                    <Skull size={24} />
                </div>
            </div>
            <p>{body}</p>
            {showDetails && (
                <DetailedPost id={id} title={title} body={body} userId={userId} dangerScore={dangerScore} onClose={toggleDetails} />
            )}
        </div>
    );
};

export default Post