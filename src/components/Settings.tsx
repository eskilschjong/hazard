import { useState } from 'react';

export const Settings = () => {
    const [isDark, setIsDark] = useState(() => {
        try {
            return localStorage.getItem('theme') === "dark";
        } catch (error) {
            console.error('Error accessing localStorage:', error);
            return false;
        }
    });

    const [isConfirmModal, setIsConfirmModal] = useState(() => {
        try {
            const stored = localStorage.getItem('confirmModal');
            return stored !== "false";
        } catch (error) {
            console.error('Error accessing localStorage:', error);
            return true;
        }
    });

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        try {
            if (newDark) {
                localStorage.setItem('theme', 'dark');
                document.documentElement.classList.add("dark");
            } else {
                localStorage.setItem('theme', 'light');
                document.documentElement.classList.remove("dark");
            }
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    };

    const toggleConfirmModal = () => {
        const newConfirmModal = !isConfirmModal;
        setIsConfirmModal(newConfirmModal);
        try {
            localStorage.setItem('confirmModal', String(newConfirmModal));
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    };

    return (
        <div className="ml-[35vw]">
            <h1 className="text-4xl mt-[25vh] font-semibold mb-1">Settings</h1>
            <div className="w-35 h-1 bg-[var(--color-red)] dark:bg-[var(--color-red-dark)] mb-4"></div>
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