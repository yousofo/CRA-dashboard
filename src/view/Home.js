import React, { useEffect, useState } from 'react'
import Intel from '../components/Intel'
import { Bars } from '../components/Intel'
import data from '../datagroup/data.json'
import Map from '../components/Map';
import Pie from '../components/Pie';
import { RiArrowDropDownLine } from "react-icons/ri";
import WideBar from '../components/WideBar';
data.length = 6;
const Home = () => {
  const [data2, setData2] = useState([])
  useEffect(() => {
    setData2(data)
  }, [])
  return (
    <main className='p-10 overflow-x-hidden flex flex-col gap-6'>
      <div className='intel-con gap-6 w-full h-fit'>
        <section className='flex gap-6'>
          <Intel data={data2} />
          <Intel data={data2} />
        </section>
        <section className='flex gap-6'>
          <Intel data={data2} />
          <Intel data={data2} />
        </section>
      </div>
      <div className='min-w-full  sec2 flex flex-wrap gap-6'>
        <div className='sec2-1 flex flex-1 items-center justify-center  h-fit bg-white rounded-lg shadow-lg p-6 gap-6'>
          <section className='sec2-1-1 flex flex-col flex-1'>
            <h2 className='font-semibold text-base mb-4'>USER SALES OVERVIEW</h2>
            <div className='map-con'>
              <Map />
            </div>
          </section>
          <section className='flex sec2-1-2 flex-1 flex-col overflow-visible items-center gap-7 p-7'>
            <h2 className='text-base'>USER SESSIONS</h2>
            <div className='pie-con'>
              <Pie />
            </div>
            <p className='text-center text-md'>
              Consectetur adipisicing elit. Architecto atque cupiditate enim et eum ex fugit illum.
            </p>
            <button className='bg-blue-800 text-white px-3 py-2 rounded-lg text-base'>Print Report</button>
          </section>
        </div>
        <div className='sec2-2 h-full bg-white p-6 flex flex-1 flex-col justify-between rounded-lg shadow-lg'>
          <div className='sec2-2-1 flex flex-col gap-2'>
            <p className='font-semibold pb-3 darkfont text-base'>AVERAGE SALE SIZE</p>
            <button className='flex items-center bg-green-500 pl-1 pr-3 rounded-3xl w-fit'>
              <RiArrowDropDownLine className='text-3xl text-white' />
              <span className='text-white text-md font-semibold -space-y-7'>23.36%</span>
            </button>
            <h2 className='text-3xl font-semibold darkfont'>$956.78</h2>
            <p className='text-lg font-semibold darkfont'>PER SALE</p>
            <p className='darkfont yn-text sec2-spam font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis dolor.</p>
          </div>
          <div className='sec2-2-2 flex-1'>
            <Bars
              data={data}
              padding={0.5}
              legend={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
              }} />
          </div>
        </div>
      </div>
      <WideBar />
    </main>
  )
}

export default Home