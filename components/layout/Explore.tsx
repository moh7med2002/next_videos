import Link from 'next/link'
import React , {useState} from 'react'

export default function Explore() {
    const [open,setOpen] = useState(false)
    return (
        <div>
            <button className='mb-2' onClick={()=>setOpen(back=>!back)}>Explore</button>
            <div className='flex flex-wrap gap-x-1 gap-y-2 items-center'>
                {open&&
                    [1,2,3,4,5,6,7].map(item=>{
                        return(
                            <Link href={`/2`} key={item}>
                                <div className='bg-main text-white text-[12px] px-2 py-1 rounded-[20px]'>Comdey</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
