import { X } from 'lucide-react'
interface ConfirmModalProps {
    onConfirm: () => void;
    onClose: () => void;
    hidden: boolean;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
    onConfirm,
    onClose,
    hidden
}) => {
    return (
        <div>
            <div className="fixed flex flex-col justify-center items-center bg-white w-[25vw] h-[25vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-2 border-3 border-gray-400">
                <h1 className='p-2 text-center text-[#36423e] font-semibold text-lg mb-4'>Are you sure you want to {hidden ? 'unhide' : 'hide'} this post?</h1>
                <div className='flex items-center justify-center gap-8'>
                    <button className='bg-[#36423e] text-[#DAE2DF] py-2 px-4 border border-2 rounded-lg font-semibold hover:bg-[#DAE2DF] hover:text-[#36423e]' onClick={onClose}>Cancel</button>
                    <button className='bg-[#BF0000] text-[#DAE2DF] py-2 px-4 border border-2 rounded-lg font-semibold hover:bg-[#DAE2DF] hover:text-[#BF0000]' onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;