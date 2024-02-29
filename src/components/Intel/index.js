import { ResponsiveBarCanvas } from '@nivo/bar'

export const Bars = ({ data, padding, legend }) => {
  return (
    <ResponsiveBarCanvas
      data={data}
      keys={[
        'hot dog',
      ]}
      indexBy="country"
      margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
      pixelRatio={1}
      padding={padding || 0.15}
      innerPadding={0}
      minValue="auto"
      maxValue="auto"
      groupMode="stacked"
      layout="vertical"
      reverse={false}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'red_blue' }}
      colorBy="id"
      borderWidth={0}
      borderRadius={0}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            1.6
          ]
        ]
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={legend || null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            1.6
          ]
        ]
      }}
      isInteractive={true}
    />
  )
}

const Intel = ({ data }) => {
  return (
    <section className={`flex items-center bg-white rounded-lg shadow-lg p-6 justify-between`}>
      <div className='w-fit flex flex-col gap-3'>
        <p className='whitespace-nowrap text-base'>Number of Sales</p>
        <h2 className='text-2xl '>5,0009</h2>
        <p className='whitespace-nowrap'>
          <span className='text-green-500'>1.92%</span>
          <span className='ml-2 whitespace-nowrap'>(since last month)</span>
        </p>
      </div>
      <div className='h-20 w-36'>
        <Bars data={data} />
      </div>
    </section>
  )
}

export default Intel