import { AiOutlineClose ,AiOutlineHome,AiOutlineHistory} from 'react-icons/ai';
import TopicBox from './TopicBox';
import { useState } from 'react';
import Explore from './Explore';

type props = {
    isOpen: boolean;
    onClose: () => void;
}

const topics = [
    {
        icon:AiOutlineHome,
        title:"Home",
        link:'/'
    },
    {
        icon:AiOutlineHistory,
        title:"History",
        link:'/history'
    },
]

const Sidebar  = ({ isOpen, onClose }:props) => {
    return (
        <div className='md:relative md:block md:w-1/4 lg:w-1/6'>
            <div
            className={`fixed inset-y-0 left-0 w-[60%] md:w-1/4 lg:w-1/6 bg-white shadow z-50 transition-transform transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            >
            <button
                className="md:hidden absolute top-4 right-2 text-[#0000008a]"
                onClick={onClose}
            >
                <AiOutlineClose/>
            </button>
            <div className="px-4 pb-4 pt-10 lg:pt-4">
                <ul className="list-none">
                    {
                        topics.map((item)=><TopicBox item={item} key={item.title}/>)
                    }
                    <hr className='mt-3 mb-3'/>
                    <Explore/>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;