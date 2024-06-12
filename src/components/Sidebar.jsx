import React from 'react';
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { FaFireFlameSimple } from "react-icons/fa6";
import { MdSubscriptions } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSportsHandball } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { TbMessageReport } from "react-icons/tb";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { SiCoursera } from "react-icons/si";
import { MdMovie } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";


import { useSelector } from "react-redux";

const sidebarItem = [
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },




];

const sidebarItem1 = [
    {
        icons: <FaHistory size="24px" />,
        title: "hisory"
    },
    {
        icons: <MdOutlinePlaylistPlay size="24px" />,
        title: "playlist"
    },
    {
        icons: < CiStopwatch size="24px" />,
        title: "watchletter"
    },
    {
        icons: <AiFillLike size="24px" />,
        title: "like"
    },
]



const sidebarItem2 = [
    {
        icons: <FaFireFlameSimple size="24px" />,
        title: "tranding"
    },
    {
        icons: <MdSubscriptions size="24px" />,
        title: "Subscription"
    },

    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "music"
    },
    {
        icons: <MdMovie size="24px" />,
        title: "movie"
    },
    {
        icons: <MdLiveTv size="24px" />,
        title: "live"
    },
    {
        icons: <IoLogoGameControllerB size="24px" />,
        title: "gaming"
    },
    {
        icons: <IoNewspaperOutline size="24px" />,
        title: "news"
    },
    {
        icons: <MdOutlineSportsHandball size="24px" />,
        title: "sport"
    },
    {
        icons: <RiProductHuntLine size="24px" />,
        title: "prodcast"
    },
    {
        icons: <SiCoursera size="24px" />,
        title: "course"
    },
    {
        icons: <FaShoppingBag size="24px" />,
        title: "fasion & beauty"
    },
]

const sidebarItem3 = [
    {
        icons: <CiSettings size="24px" />,
        title: "setting"
    },
    {
        icons: <TbMessageReport size="24px" />,
        title: "report history"
    },
    {
        icons: <IoIosHelpCircleOutline size="24px" />,
        title: "help"
    },
    {
        icons: <MdFeedback size="24px" />,
        title: "send feedback"
    },
]

const Sidebar = () => {
    //const open = useSelector((store)=>store.app.open);

    return (
        <><br />
        <br />
            <div className={`relative left-0 ${open ? "w-[20%]" : "w-[6%]"} p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}>
                {
                    sidebarItem.map((item, index) => {
                        return (
                            <div key={index} className='flex my-3 ml-2'>
                                {item.icons}
                                <p className={`ml-5 ${open ? "" : 'hidden'}`}>{item.title}</p>
                            </div>
                        )
                    })
                }
                <hr  />
                <h1 className='font-extrabold'>you</h1>
                {
                    sidebarItem1.map((item, index) => {
                        return (
                            <div key={index} className='flex my-3 ml-2'>
                                {item.icons}
                                <p className={`ml-5 ${open ? "" : 'hidden'}`}>{item.title}</p>
                            </div>
                        )
                    })
                }
                <hr />
                <h1 className='font-extrabold' >explore</h1>
                {
                    sidebarItem2.map((item, index) => {
                        return (
                            <div key={index} className='flex my-3 ml-2'>
                                {item.icons}
                                <p className={`ml-5 ${open ? "" : 'hidden'}`}>{item.title}</p>
                            </div>
                        )
                    })
                }
                <h1 className='font-extrabold'><hr /></h1>
                {
                    sidebarItem3.map((item, index) => {
                        return (
                            <div key={index} className='flex my-3 ml-2'>
                                {item.icons}
                                <p className={`ml-5 ${open ? "" : 'hidden'}`}>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>



        </>

    )
}

export default Sidebar