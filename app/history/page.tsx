import SettingsHistory from 'components/history/SettingsHistory'
import ViewHistory from 'components/history/ViewHistory'
import React from 'react'

export default function page() {
    return (
        <div className='py-4'>
            <div className='flex lg:flex-row flex-col gap-y-8 items-start justify-between'>
                <ViewHistory/>
                <SettingsHistory/>
            </div>
        </div>
    )
}
