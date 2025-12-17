import { useState } from 'react';

export const Settings = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.theme === "dark";
    });

    const [isConfirmModal, setIsConfirmModal] = useState(() => {
        return localStorage.confirmModal === "true";
    });

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        if (newDark) {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        } else {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        }
    };

    const toggleConfirmModal = () => {
        const newConfirmModal = !isConfirmModal;
        setIsConfirmModal(newConfirmModal);
        localStorage.confirmModal = newConfirmModal;
    };

    return (
        <div className="ml-[35vw]">
            <h1 className="text-4xl mt-[25vh] font-semibold">Settings</h1>
            <div className="w-60 h-1 bg-[var(--color-red)] dark:bg-[var(--color-red-dark)] mb-4"></div>
            <div className='flex flex-col'>
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isDark}
                        onChange={toggleTheme}
                        className="sr-only peer"
                    />
                    <div className="relative w-9 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                    peer-checked:after:border-gray-500 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full
                    after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-600"></div>
                    <span className="select-none ms-3 text-sm font-medium text-heading">Dark Mode</span>
                </label>
                <label className="inline-flex items-center cursor-pointer mt-4">
                    <input
                        type="checkbox"
                        checked={isConfirmModal}
                        onChange={toggleConfirmModal}
                        className="sr-only peer"
                    />
                    <div className="relative w-9 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                    peer-checked:after:border-gray-500 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full
                    after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-600"></div>
                    <span className="select-none ms-3 text-sm font-medium text-heading">Disable Hide Confirm</span>
                </label>
            </div>
        </div>
    );
}

export default Settings;