import { useState } from 'react';

export const Settings = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches;
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

    return (
        <div className="ml-[35vw]">
            <h1 className="text-4xl mt-[25vh] font-semibold">Settings</h1>
            <div className="w-60 h-1 bg-[var(--color-red)] dark:bg-[var(--color-red-dark)] mb-4"></div>
            <button onClick={toggleTheme} className="w-[30vw] text-lg">
                Toggle theme
            </button>
        </div>
    )


}

export default Settings;