import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface ExploreProps {
    sortBy?: string;
}

export const Explore = ({ sortBy = "Default" }: ExploreProps) => {
    return (
        <div className="ml-[75vw] h-[70vh] mt-[15vh] p-4 fixed w-[20vw] flex flex-col items-center border-2 border-gray-400 rounded-xl">
            <h1 className="text-xl font-semibold mb-2">Browsing By:</h1>
            <div className="relative inline-block group w-[50%] mb-10">
                <button className="flex justify-center items-center w-full py-2 bg-[#dae2df] rounded-2xl focus:rounded-b-none capitalize">
                    <ChevronDown className="absolute left-4 text-[#36423e]" />
                    {sortBy}
                </button>
                <div className="absolute left-0 hidden flex-col bg-white group-focus-within:flex w-full rounded-b-2xl overflow-hidden">
                    <NavLink to="/" className="flex justify-center items-center gap-2 px-4 py-2 bg-[#dae2df] border-b border-t border-gray-100">
                        <span>Default</span>
                    </NavLink>
                    <NavLink to="/danger" className="flex justify-center items-center gap-2 px-4 py-2 bg-[#dae2df] border-b border-t border-gray-100">
                        <span>Danger</span>
                    </NavLink>
                    <NavLink to="/length" className="flex justify-center items-center gap-2 px-4 py-2 bg-[#dae2df]">
                        <span>Length</span>
                    </NavLink>
                </div>
            </div>
            <div className="overflow-y-scroll flex flex-col h-70 mt-4 w-[70%]
                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-gray-300">
                {Array.from({ length: 10 }, (_, i) => (
                    <NavLink to={`/user/${i+1}`} className="border-b border-[#dae2df] py-2 px-8" key={i + 1}>User {i + 1}</NavLink>
                ))}
            </div>
        </div>
    )
}
export default Explore;