import { NavLink } from "react-router-dom";
import { ChevronDown, CircleUserRound } from "lucide-react";

interface ExploreProps {
    sortBy?: string;
}

export const Explore = ({ sortBy = "Default" }: ExploreProps) => {
    return (
        <div className="ml-[75vw] h-[70vh] mt-[15vh] p-4 fixed w-[20vw] min-w-80 flex-col items-center border-l-2 bg-white dark:bg-[var(--color-text)] border-gray-300 hidden md:flex">
            <h1 className="text-xl font-semibold mb-2">Browsing By:</h1>
            <div className="relative inline-block group w-[50%] mb-10">
                <button className="flex justify-center items-center w-full py-2 bg-[var(--color-accent)] dark:bg-[var(--color-accent-dark)] rounded-2xl group-hover:rounded-b-none capitalize">
                    <ChevronDown className="absolute left-4 text-[var(--color-text)] dark:text-[var(--color-text-dark)]" />
                    {sortBy}
                </button>
                <div className="absolute left-0 hidden flex-col bg-white dark:bg-[var(--color-text)] group-hover:flex w-full rounded-b-2xl overflow-hidden">
                    <NavLink to="/" className="flex justify-center items-center gap-2 px-4 py-2 bg-[#e8ede9] border-b border-t border-white hover:bg-[var(--color-accent)] dark:bg-[var(--color-accent-dark)]">
                        <span>Default</span>
                    </NavLink>
                    <NavLink to="/danger" className="flex justify-center items-center gap-2 px-4 py-2 bg-[#e8ede9] border-b border-t border-white hover:bg-[var(--color-accent)] dark:bg-[var(--color-accent-dark)]">
                        <span>Danger</span>
                    </NavLink>
                    <NavLink to="/length" className="flex justify-center items-center gap-2 px-4 py-2 bg-[#e8ede9] hover:bg-[var(--color-accent)] dark:bg-[var(--color-accent-dark)]">
                        <span>Length</span>
                    </NavLink>
                </div>
            </div>
            <div className="font-semibold">Sort by user:</div>
            <div className="overflow-y-scroll flex flex-col h-70 mt-4 w-[70%]
                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-gray-300">
                {Array.from({ length: 10 }, (_, i) => (
                    <NavLink to={`/user/${i+1}`} className="border-b border-[var(--color-accent)] py-2 px-8 flex flex-row gap-2 font-semibold mb-1 text-[var(--color-text)] dark:text-[var(--color-text-dark)] hover:bg-[#e8ede9]" key={i + 1}>
                        <CircleUserRound />
                        User {i + 1}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
export default Explore;