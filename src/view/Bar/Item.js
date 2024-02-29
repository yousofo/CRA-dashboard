import React, { useContext } from 'react'
import Small from './Small'
import { barWidth } from '../../App'
import { Link } from 'react-router-dom'
const Item = ({ items, children = "Name" }) => {
  const [width,] = useContext(barWidth)
  function handleActive(e) {
    let actives = document.querySelectorAll(".active-btn")
    if (e.target.classList.contains("active-btn")) {
      e.target.classList.remove("active-btn")
    } else {
      if (actives.length > 0) actives.forEach(e => e.classList.remove("active-btn"))
      e.target.classList.add("active-btn")
    }
  }
  return (
    <li
      className='relative cursor-pointer active-btn'
      onClick={(e) => handleActive(e)}
    >
      <button className={`py-2 ${items.length > 0 && "pointer-events-none"} w-full flex items-center ${width ? "justify-between" : "justify-center"}`}>
        <Link to="/">
          <div className={`flex justify-center items-center ${width && "gap-3"}`}>
            <svg className='w-6' viewBox="0 0 24 24" id="home">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path fill="white" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path>
            </svg>
            <span className='text-sm'>
              {width ? children : ""}
            </span>
          </div>
        </Link>
        {
          items.length > 0 ?
            <svg className={`${!width && "hidden"} w-8 yn-trans`} fill='white' viewBox="0 0 24 24" id="chevron-down">
              <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z">
              </path>
            </svg>
            : false
        }
      </button>
      <ul className='border-l ml-3 overflow-hidden'>
        {width ? items.map(e => <Small name={e[0]} rl={e[1]} />) : ""}
      </ul>
    </li>
  )
}

export default Item