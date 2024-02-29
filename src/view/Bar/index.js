import userImg from '../../media/bugsbunny.png'
import { createContext, useContext, useRef, useState } from 'react'
import Item from './Item.js'
import { barWidth } from '../../App'


const Bar = () => {
  const bar = useRef(null)
  const [width, setWidth] = useContext(barWidth)
  return (
    <aside
      ref={bar}
      className={`relative ${width ? "w-64" : "w-16"} transition-all side-bar flex flex-col items-center`}
    >
      <figure className='p-4 w-full border-b border-gray-500'>
        <img src={userImg} className='w-20 circle faded m-auto' alt="" />
      </figure>
      <nav onClick={_ => setWidth(true)} className='p-4 w-full '>
        <ul className='relative overflow-hidden'>
          <Item items={[]}>Dashboard</Item>
          <Item items={width ? [["Manage Team","team"], ["Contacts Information"], ["Invoices Balances"]] : []}>Data</Item>
          <Item items={width ? [["Profile Form"], ["Calendar"], ["FAQ Page"]] : []}>Pages</Item>
          <Item items={width ? [["Bar Chart"], ["Pie Chart"], ["Line Chart"], ["Geography Chart"]] : []}>Charts</Item>
        </ul>
      </nav>
    </aside>
  )
}

export default Bar