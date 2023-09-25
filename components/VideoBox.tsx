import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const image = "https://i.pinimg.com/236x/52/56/6d/52566db13340c7d3a53880750ec049a5.jpg"

export default function VideoBox() {
    return (
        <Link href={'video/1'}>
            <Image alt='image' src={image} width={200} height={180} className='w-full rounded-md h-[200px] mb-2'/>
            <h3 className='text-[15px] text-Black font-semibold'>
                Sequelize: Validation 4/TBD
            </h3>
            <div className='flex items-center text-[13px] gap-x-[2px] text-Gray font-semibold'>
                <span>10 views</span>
                <span>.</span>
                <span>10 days ago</span>
            </div>
        </Link>
    )
}
