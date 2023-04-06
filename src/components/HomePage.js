const HomePage = () => {
    return (
        <div className="w-[100vw] h-fit flex flex-row">
            <div className="w-[100vw] min-  h-[90vh] overflow-hidden " >
                {/* <img src="https://images.unsplash.com/photo-1621831337128-35676ca30868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3MlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" className="w-[50vw] h-[90vh]" /> */}
                <img src="https://previews.123rf.com/images/aomarch/aomarch1603/aomarch160300051/59313601-3d-building-wireframe.jpg" className="w-[100vw] h-[90vh]" />

            </div>
            <div className="w-[25vw] min-h-[90vh] right-0 absolute rounded-bl-2xl backdrop-blur-sm bg-black/30 flex flex-col items-center justify-center py-6">
                <div className="absolute top-[4vh]">
                    <button className='bg-transparent lg:mr-5 md:mr-3 mr-0 mb-3 lg:mb-0 md:mb-0'>SignUp</button>
                    <button className='bg-slate-800 px-5 rounded-2xl py-1 text-white'>SignIn</button>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-3xl font-bold text-slate-800">100+</p>
                        <p className="text-slate-900">Completed Projects</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-3xl font-bold text-slate-800">40+</p>
                        <p className="text-slate-900">Professional Team</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-3xl font-bold text-slate-800">13+</p>
                        <p className="text-slate-900">Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;