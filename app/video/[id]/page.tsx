'use client'
import VideoBox from 'components/VideoBox'
import React from 'react'
import ReactPlayer from 'react-player/youtube'

export default function page() {
    return (
        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=PFZKTDqQ1vU' width="100%" height={600}/>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 mt-8">
            {
                [1,2,3,4,5,6,7,8,9].map(item=><VideoBox key={item}/>)
            }
            </div>
        </div>
    )
}
