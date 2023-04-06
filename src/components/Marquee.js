const Marquee = () => {
    return (
        <div className="w-[100vw] h-[120px] border flex justify-center items-center">
            <marquee direction="left">
                <div className="flex flex-row">
                    <p className="text-4xl text-gray-400 mr-10">airbnb</p>
                    <p className="text-4xl text-gray-400 mr-10">logitech</p>
                    <p className="text-4xl text-gray-400 mr-10">pipedrive</p>
                    <p className="text-4xl text-gray-400">Google</p>
                </div>

            </marquee>

        </div>
    )
}
export default Marquee;