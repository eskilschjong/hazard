import { Biohazard, House, Compass, Cog, EyeOff, CircleQuestionMark } from 'lucide-react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="fixed ml-30 w-64 h-lvh border-r-2 bg-white border-gray-400">
            <div className='flex items-center text-3xl font-bold mt-6'>
                <Biohazard className='w-8 h-8' /><h1>HAZARD</h1>
            </div>
            <div className="w-40 h-1 bg-[#BF0000]"></div>

            <nav className='mt-12 text-xl flex flex-col gap-6'>
                <NavLink to="/" className='flex p-3 items-center gap-2 hover:text-[#BF0000] hover:bg-[#DAE2DF] rounded-l-lg'>
                    <House /> Home
                </NavLink>
                <NavLink to="/explore" className='flex p-3 items-center gap-2 hover:text-[#BF0000] hover:bg-[#DAE2DF] rounded-l-lg'>
                    <Compass /> Explore
                </NavLink>
                <NavLink to="/settings" className='flex p-3 items-center gap-2 hover:text-[#BF0000] hover:bg-[#DAE2DF] rounded-l-lg'>
                    <Cog /> Settings
                </NavLink>
                <NavLink to="/hidden" className='flex p-3 items-center gap-2 hover:text-[#BF0000] hover:bg-[#DAE2DF] rounded-l-lg'>
                    <EyeOff /> Hidden
                </NavLink>
                <NavLink to="/about" className='flex p-3 items-center gap-2 hover:text-[#BF0000] hover:bg-[#DAE2DF] rounded-l-lg'>
                    <CircleQuestionMark /> About
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;