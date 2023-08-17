import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ScatterChartComponent = ({data}) => {
  return (
    <div>
       <ScatterChart width={1300} height={600}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name"   />
          <YAxis dataKey="value"  />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={data} fill="#8884d8" />
        </ScatterChart>
    </div>
  )
}

export default ScatterChartComponent
