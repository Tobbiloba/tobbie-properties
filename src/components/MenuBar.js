import HomeIcon from '@mui/icons-material/Home';
const MenuBar = () => {
    return (
        <div className='absolute flex flex-row items-center w-[100vw] py-6 bg-transparent justify-around px-3'>
            <div className='flex lg:flex-row md:flex-row flex-col'>
                <div className='flex flex-row lg:mr-14 md:mr-10 mr-4'>
                    <HomeIcon />
                    <p className='ml-1 font-bold text-slate-800'>Tobbie<span className='text-slate-200'>|</span>Properties</p>
                </div>
                <div className='flex lg:flex-row md:flex-row flex-col'>
                    <p className='font-normal text-slate-700 mr-4'>About</p>
                    <p className='font-normal text-slate-700 mr-4'>Listing</p>
                    <p className='font-normal text-slate-700 mr-4'>Buy</p>
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