import React from 'react'
import HistoryVideo from './HistoryVideo'

export default function ViewHistory() {
    return (
        <div className='w-full lg:w-[55%] flex flex-col gap-y-4 lg:order-1 order-2'>
            {
                [1,2,3,4,5].map(item=><HistoryVideo key={item}/>)
            }
        </div>
    )
}
