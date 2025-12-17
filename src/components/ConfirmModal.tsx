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
            <div className="fixed flex flex-col justify-center items-center bg-white dark:bg-[var(--color-text)] w-[25vw] h-[25vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border-3 border-gray-400">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400">
                    <X size={20} />
                </button>
                <div className="w-full h-1 border-b-2 border-gray-400 my-2"></div>
                <h1 className='p-2 text-center text-[var(--color-text)] dark:text-[var(--color-text-dark)] font-semibold text-lg mb-4'>Are you sure you want to {hidden ? 'unhide' : 'hide'} this post?</h1>
                <div className='flex items-center justify-center gap-8'>
                    <button className='bg-[var(--color-text)] text-[var(--color-accent)] py-2 px-4 border border-2 rounded-lg font-semibold hover:bg-[var(--color-accent)] dark:bg-[var(--color-accent-dark)] hover:text-[var(--color-text)] dark:text-[var(--color-text-dark)]' onClick={onClose}>Cancel</button>
                    <button className='bg-[var(--color-red)] dark:bg-[var(--color-red-dark)] text-[var(--color-accent)] py-2 px-4 border border-2 rounded-lg font-semibold hover:bg-[var(--color-accent)] dark:bg-[var(--color-accent-dark)] hover:text-[#bf0000]' onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;