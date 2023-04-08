import items from "./Object";
import { Avatar } from "@mui/material";
const Trending = () => {
    return (
        <div className="flex flex-col items-center pt-8 pb-20">
            <div className="flex flex-row py-2 mb-10">
                <p className="text-3xl font-bold mr-3 text-slate-800">On Trending Now</p>
                <p className="py-1 px-2 border rounded-2xl text-white bg-red-600">New</p>
            </div>
            <div className="grid lg:grid-cols-3 border  md:grid-cols-2 grid-cols-2 overflow-x-scroll gap-[6vw]">
                {
                    items.map((item) => {
                        return (
                            <div key={item.id} className="lg:w-[16vw] md:w-[40vw] w-[190px] border rounded-2xl overflow-hidden pb-6 mb-6">
                                <p className="absolute border py-1 px-2 border-white rounded-2xl m-3 bg-white text-black">{item.price}</p>
                                <img src={item.img} className="h-[200px] lg:w-[300px] md:w-[40vw] w-[200px]" />
                                <div className="flex flex-col pl-4 mt-6">
                                    <p className="text-[18px] mb-1 font-bold text-slate-800 ">{item.name}</p>
                                    <p className="text-[14px] text-slate-800 font-old mb-3">{item.address}</p>
                                    <div className="flex flex-row items-center">
                                        <Avatar alt="Remy Sharp" src={item.ownerImg} />
                                        <p className="ml-3 text-slate-800 font-normal text-[16px]">{item.owner}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Trending