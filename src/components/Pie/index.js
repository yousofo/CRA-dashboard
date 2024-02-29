// yarn add @nivo/pie
import { ResponsivePie } from '@nivo/pie'
import data from './data.json'
import { useEffect, useState } from 'react'

const Pie = () => {
  let custom = data.map(e => ({ ...e, value: 1 }))
  const [data2, setData] = useState(custom)
  useEffect(() => {
    let timeout = setTimeout(() => {
      setData(data)
      clearTimeout(timeout)
    }, 300);
  }, [])
  return (
    <ResponsivePie
      data={data2}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      sortByValue={true}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.2
          ]
        ]
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            '2.2'
          ]
        ]
      }}
      transitionMode="pushOut"
    />
  )
}

export default Pie;