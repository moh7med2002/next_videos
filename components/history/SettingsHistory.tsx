import React from 'react'
import { BsTrash3 } from 'react-icons/bs';
import { AiOutlinePause } from 'react-icons/ai';

export default function SettingsHistory() {
    return (
        <div className='w-full lg:w-[35%] lg:order-2 order-1 flex lg:flex-col flex-row gap-x-2'>
            <button className='Button lg:mb-6'>
                <BsTrash3/>
                <span className='text-[15px]'>Clear viewing history</span>
            </button>
            <button className='Button'>
                <AiOutlinePause className='text-[20px]'/>
                <span className='text-[15px]'>Pause viewing history</span>
            </button>
        </div>
    )
}
