import React from 'react'
import { FiBriefcase } from "react-icons/fi";

const Small = ({children}) => {
  return (
    <section>
      <div className='flex gap-4 items-center'>
        <FiBriefcase className='darkfont  text-3xl' />
        <div className='pb-3'>
          <p className='text-base font-semibold darkfont'>{children}</p>
          <h2 className='text-2xl darkfont font-bold'>6834</h2>
        </div>
      </div>
      <p className='text-md darkfont'>63% From Last Month</p>
    </section>
  )
}

const WideBar = () => {
  return (
    <section className='flex w-full justify-between items-center bg-white rounded-lg shadow-lg p-6'>
      <Small>Active Projects</Small>
      <Small>Total Orders</Small>
      <Small>New Visistors</Small>
      <Small>Total Earnings</Small>
    </section>
  )
}

export default WideBar