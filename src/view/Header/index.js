import React, { useContext } from 'react'
import { LiaBarsSolid, LiaEnvelopeSolid } from 'react-icons/lia';
import { BsBell, BsFullscreen } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { barWidth } from '../../App';

const Header = () => {
  const [width, setWidth] = useContext(barWidth)
  function handleFullScreen() {
    if (document.fullscreenElement !== null) {
      document.exitFullscreen().then(e => console.log(e)).catch(e => console.log(e))
    } else {
      document.body.requestFullscreen().then(e => e).catch(e => console.log(e))
    }
  }
  return (
    <header className='flex bg-white justify-between py-3 px-7 pl-0 items-center'>
      <div className='flex h-10 items-center gap-4'>
        <button onClick={_ => setWidth(!width)} className='barClose w-10 h-full rounded-e p-1 yn-full'>
          <LiaBarsSolid className='text-white' />
        </button>
        <div className='relative'>
          <input type="text" className='border py-2 pl-12' name="" id="" />
          <svg className='w-5 absolute left-4 top-1/2 -translate-y-1/2' fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" clipRule="evenodd" viewBox="0 0 128 128" id="search">
            <path fill="none" d="M.211 0h128v128h-128z"></path>
            <path fillRule="nonzero" d="M75.941 79.528c-11.617 10.144-28.988 13.34-43.601 7.365C14.72 79.689 3.496 59.425 6.867 40.571 10.24 21.704 27.782 6.443 47.398 6.008c.361-.006.722-.008 1.084-.007 19.279.183 37.454 15.06 41.025 34.312 2.394 12.904-1.734 26.845-10.689 36.433l34.787 33.82c.746.788.617 1.05.605 1.489-.042 1.525-2.11 2.527-3.394 1.379L75.941 79.528ZM47.965 10.001c-17.208.163-33.355 13.173-36.934 30.111-2.634 12.469 1.515 26.166 10.639 35.073 10.478 10.228 27.063 13.662 40.897 8.005 16.003-6.542 26.182-25.034 23.007-42.148-3.147-16.967-18.86-30.64-36.627-31.035a53.632 53.632 0 0 0-.982-.006Z">
            </path>
          </svg>
        </div>
      </div>
      <div className='flex r-opt gap-5'>
        <button className='w-4 yn-full' onClick={handleFullScreen}>
          <BsFullscreen className='w-full'/>
        </button>
        <button className='w-4 yn-full'>
          <BsBell className='w-full'/>
        </button>
        <button className='w-6 yn-full'>
          <LiaEnvelopeSolid/>
        </button>
        <button className='flex items-center'>
          <p id='username' className='whitespace-nowrap'>yousef nabil</p>
          <RiArrowDropDownLine className='w-6 h-full'/>
        </button>
      </div>
    </header>
  )
}

export default Header