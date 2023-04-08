import HomeIcon from '@mui/icons-material/Home';
const MenuBar = () => {
    return (
        <div className='absolute flex flex-row items-center w-[100vw] py-6 bg-transparent md:justify-between justify-start lg:justify-around lg:px-3 md:px-6 px-6'>
            <div className='flex lg:flex-row md:flex-row flex-col'>
                <div className='flex flex-row lg:mr-14 md:mr-10 mr-4'>
                    <HomeIcon />
                    <p className='ml-1 font-bold text-slate-800 z-10'>Tobbie<span className='text-slate-200'>|</span>Properties</p>
                </div>
                <div className='flex lg:flex-row md:flex-row flex-col'>
                    <p className='font-normal text-slate-700 mr-4 mt-2 cursor-pointer hover:text-black '>About</p>
                    <p className='font-normal text-slate-700 mr-4 mt-2 cursor-pointer hover:text-black '>Listing</p>
                    <p className='font-normal text-slate-700 mr-4 mt-2 cursor-pointer hover:text-black '>Buy</p>
                </div>
            </div>
            <div></div>
            {/* <div className='flex lg:flex-row md:flex-row z-10 flex-col justify-center items-center'>
                <button className='bg-transparent lg:mr-5 md:mr-3 mr-0 mb-3 lg:mb-0 md:mb-0'>SignUp</button>
                <button className='bg-black px-5 rounded-2xl py-1 text-white'>SignIn</button>
            </div> */}
        </div>
    )
}
export default MenuBar;