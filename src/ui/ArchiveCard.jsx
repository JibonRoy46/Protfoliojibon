import React from 'react'
import { GoFileDirectory } from 'react-icons/go'
import { RxOpenInNewWindow } from 'react-icons/rx'

const ArchiveCard = ({item}) => {
  return (
    <a href={item?.link} target='blank'>
        <div className='w-full h-80 rounded-lg bg-[#2c3347] p-7 flex flex-col justify-center gap-6 group'>
            <div className='flex justify-between items-center'>
            <GoFileDirectory className='text-4xl text-designColor' />
             <RxOpenInNewWindow className='text-2xl hover:text-designColor duration-200'/>

            </div>
            <div>
                <h2 className='text-xl text-white font-semibold tracking-wide group-hover:text-designColor duration-200'>{item?.title}</h2>
                <p className='text-sm mt-3'>{item?.description}</p>
            </div>
            <ul className=' text-xs md:text-sm text-darkText flex items-center gap-2 justify-between'>
                {item?.listItem.map((menu)=>(
                    <li key={menu}>{menu}</li>
                ))}
            </ul>
        </div>
    </a>
  )
}

export default ArchiveCard