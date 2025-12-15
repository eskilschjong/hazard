import { Biohazard, House, Compass, Cog, EyeOff, CircleQuestionMark } from 'lucide-react'

export const Navbar = () => {
    return (
        <div className="fixed ml-30 w-64 h-lvh border-r-2 border-gray-400">
            <div className='flex items-center text-3xl font-bold mt-6'>
                <Biohazard className='w-8 h-8' /><h1>HAZARD</h1>
            </div>
            <div className="w-40 h-1 bg-[#BF0000]"></div>

            <nav className='mt-12 text-xl flex flex-col gap-6'>
                <a href="/" className='flex p-3 items-center gap-2 hover:text-[#BF0000] hover:bg-[#DAE2DF] rounded-l-lg'>
                    <House /> Home
                </a>
                <a href="/explore" className='flex p-3 items-center gap-2 hover:text-[#BF0000] hover:bg-[#DAE2DF] rounded-l-lg'>
                    <Compass /> Explore
                </a>
                <a href="/settings" className='flex p-3 items-center gap-2 hover:text-[#BF0000] hover:bg-[#DAE2DF] rounded-l-lg'>
                    <Cog /> Settings
                </a>
                <a href="/hidden" className='flex p-3 items-center gap-2 hover:text-[#BF0000] hover:bg-[#DAE2DF] rounded-l-lg'>
                    <EyeOff /> Hidden
                </a>
                <a href="/about" className='flex p-3 items-center gap-2 hover:text-[#BF0000] hover:bg-[#DAE2DF] rounded-l-lg'>
                    <CircleQuestionMark /> About
                </a>
            </nav>
        </div>
    );
};

export default Navbar;