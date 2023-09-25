import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

type props = {
    item:{
        title:string,
        icon:any,
        link:string
    }
}

export default function TopicBox({item}:props) {

    const pathName = usePathname();
    const isActive = pathName === item.link;

    return (
        <div className={`p-2 ${isActive?'bg-bgMain':""} rounded-md`}>
            <Link href={item.link}>
                <li className="flex items-center">
                    <item.icon className="mr-2" />
                    <span className="text-black">{item.title}</span>
                </li>
            </Link>
        </div>
    )
}
