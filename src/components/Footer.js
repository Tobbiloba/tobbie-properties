const Footer = () => {
    return (
        <div className="flex justify-center items-center py-16">
            <div className="w-[75vw] flex flex-row justify-between items-center">
                <div className="flex flex-col gap-3">
                    <p className="text-[20px] font-bold text-slate-800">Tobbie<span className="text-2xl text-slate-500">|</span>Properties</p>
                    <p className="text-[13px]">tobbieproperties@gmail.com</p>
                    <p className="text-[13px]">+234192974385</p>
                    <p className="text-[13px]">No 3, Itaoluwo, Ikeja, Lagos State.</p>
                </div>
                <div className="flex flex-row">
                    <div className="gap-3 flex flex-col ml-12">
                        <p className="text-[16px] font-bold">Summary</p>
                        <p className="text-[13px]">Properties</p>
                        <p className="text-[13px]">Listings</p>
                        <p className="text-[13px]">Locations</p>
                    </div>
                    <div className="gap-3 flex flex-col ml-12">
                        <p className="text-[16px] font-bold">Support</p>
                        <p className="text-[13px]">Questions</p>
                        <p className="text-[13px]">Contact Us</p>
                    </div>
                    <div className="gap-3 flex flex-col ml-12">
                        <p className="text-[16px] font-bold">Company</p>
                        <p className="text-[13px]">Career</p>
                        <p className="text-[13px]">Openings</p>
                        <p className="text-[13px]">About</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;