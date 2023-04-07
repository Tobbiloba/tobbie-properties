import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Avatar } from "@mui/material";

// import React, { useEffect, useState } from "react";

import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const Process = () => {
    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${id === open ? "rotate-180" : ""
                    } h-5 w-5 transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        );
    }

    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };



    return (
        <div className="flex flex-col items-center justify-center pt-24">
            <div className=' flex flex-row justify-between items-center mb-24'>
                <div className='w-[25vw]  h-[500px] mr-[12.5vw]'>
                    <img src="https://images.adsttc.com/media/images/5b69/e826/f197/cc60/7f00/0185/newsletter/Andy_Ryan.jpg?1533667359" className="rounded-2xl absolute w-[20vw] h-[500px]" />
                    <div className='relative top-48 py-10 rounded-2xl right-20 bg-white flex flex-col   w-[250px] justify-center items-center text-center'>
                        <OfflineBoltIcon style={{
                            color: 'green', fontSize: '40px'
                        }} />
                        <p className='text-2xl font-bold mt-4 text-slate-800'>Horeey!</p>
                        <p className='text-[12px] mt-4'>Your <span>Appreciable Mansion</span> will always appreciate and it is an investment.</p>
                        <button className='bg-blue-500 mt-6 hover:border hover:border-blue-700 hover:text-blue-500 hover:bg-white text-white w-contain py-1 px-3 rounded-2xl'>Purchase</button>
                    </div>
                </div>
                <div className='max-w-[350px] px-6 py-6 flex flex-col justify-center'>
                    <p className='text-3xl font-bold text-black mb-6'>Simple Process to Follow in Minutes</p>
                    <p className='font-normal text-[12px] mb-4'>A simple and easy way to listing your properties by just in minutes your properties will be seen globally in our platform.</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center'>
                            <p className='py-1 px-3 bg-black text-white rounded-full  mr-3'>01</p>
                            <p className='font-bold'>Create an account</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <p className='py-1 px-3 bg-black text-white rounded-full  mr-3'>02</p>
                            <p className='font-bold'>List your properties</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <p className='py-1 px-3 bg-black text-white rounded-full  mr-3'>03</p>
                            <p className='font-bold'>Good to go...</p>
                        </div>
                        <p className='font-light text-[14px] mt-4 mb-4'>Still confused? Let's learn more about it</p>
                        <button className='py-1 px-3 rounded-2xl bg-black text-white hover:text-black hover:border hover:border-black hover:bg-white'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col w-[25vw] mr-[12.5vw] pl-3 pt-3'>
                    <p className="text-2xl font-bold text-slate-800 mb-3">Several Reasons <br /> why People use <span>Tobbie<span>|</span>Properties</span></p>
                    <p className='text-[12px] mb-6 text-slate-500'>Our platform, Tobbie|Properties is different from other platform and there are several reasons why we are special.</p>
                    <div className=''>
                        <Fragment>
                            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className={`flex px-6 py-2 flex-col justify-between ${open === 1 ? 'border rounded-2xl' : ''}`}>
                                <AccordionHeader onClick={() => handleOpen(1)} className='text-[17px] font-bold text-slate-800'>
                                    What is Material Tailwind?
                                </AccordionHeader>
                                <AccordionBody className="text-[13px]">
                                    We&apos;re not always in the position that we want to be at.
                                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                    We&apos;re constantly trying to express ourselves and actualize our
                                    dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className={`flex px-6 py-2 flex-col justify-between ${open === 2 ? 'border rounded-2xl' : ''}`}>
                                <AccordionHeader onClick={() => handleOpen(2)} className='text-[17px] font-bold text-slate-800'>
                                    How to use Material Tailwind?
                                </AccordionHeader>
                                <AccordionBody className="text-[13px]">
                                    We&apos;re not always in the position that we want to be at.
                                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                    We&apos;re constantly trying to express ourselves and actualize our
                                    dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className={`flex px-6 py-2 flex-col justify-between ${open === 3 ? 'border rounded-2xl' : ''}`}>
                                <AccordionHeader onClick={() => handleOpen(3)} className='text-[17px] font-bold text-slate-800'>
                                    What can I do with Material Tailwind?
                                </AccordionHeader>
                                <AccordionBody className="text-[13px]">
                                    We&apos;re not always in the position that we want to be at.
                                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                    We&apos;re constantly trying to express ourselves and actualize our
                                    dreams.
                                </AccordionBody>
                            </Accordion>
                        </Fragment>
                    </div>
                    <button className='mt-4 py-1 px-1 border hover:bg-black hover:text-white w-[130px] rounded-2xl'>Learn More</button>
                </div>
                <div className='w-[25vw] h-[500px] '>
                    <img src="https://matison.se/wp-content/uploads/2020/05/Matison-market-balcony-glazing-series-630-1920x1280px-5.jpg" className='rounded-2xl absolute w-[20vw] h-[500px]' />
                    <div className='relative top-48 py-10 rounded-2xl right-20 bg-white flex flex-col  border w-[250px] justify-center items-center text-center'>
                        <p className='font-bold text-slate-800 text-xl mb-2'>Minimal Apart</p>
                        <div className='flex flex-row mb-4'>
                            <StarRateIcon style={{ color: 'gold', fontSize: '16px' }} />
                            <p className='text-[13px] ml-2'>4.7 (32 Reviews)</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Avatar alt="Remy Sharp" src='https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg' />
                            <p className='text-[14px] ml-3 font-slate-800 font-bold'>Johnson Derulo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Process;