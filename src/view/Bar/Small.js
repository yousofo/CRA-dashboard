import React from 'react'
import { Link } from 'react-router-dom'

const Small = ({name, rl}) => {
  return (
    <li className='py-1 text-sm pl-4'>
      <Link to={rl}>{name}</Link>
    </li>
  )
}

export default Small