"use client";
import { signOut } from 'next-auth/react';
import { BsList } from 'react-icons/bs';

type props =  {
    onToggle: () => void;
}

const Navbar = ({ onToggle }:props) => {
    return (
        <nav className="bg-main p-4 flex justify-between items-center">
            <div className="gap-x-2 flex items-center">
                <button className="text-white md:hidden" onClick={onToggle}>
                    <BsList/>
                </button>
                <h3 className='text-white'>Video Show</h3>
            </div>
            <button className='text-white' onClick={()=>signOut()}>Logout</button>
        </nav>
    );
};

export default Navbar;