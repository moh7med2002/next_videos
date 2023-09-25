import Image from 'next/image'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const image = "https://i.pinimg.com/236x/52/56/6d/52566db13340c7d3a53880750ec049a5.jpg"

export default function HistoryVideo() {
    return (
        <div className='flex items-start justify-between'>
            <div className='flex items-start gap-x-4'>
                <Image alt='image' src={image} width={200} height={110} className='rounded-md w-[200px] h-[110px] mb-2'/>
                <div>
                    <h3 className='text-[15px] text-Black font-semibold'>
                    Sequelize: Validation 4/TBD
                    </h3>
                    <p className='text-[14px] text-Gray font-semibold'>10K views</p>
                </div>
            </div>
            <button><AiOutlineClose className='text-[24px] text-Gray'/></button>
        </div>
    )
}
