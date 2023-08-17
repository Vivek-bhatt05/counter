import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const AreaChartComponent = ({data}) => {
  return (
    <div>
        <AreaChart width={1000} height={500} data={data} margin={{top: 10,right: 30,left: 0,bottom: 0,}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    </div>
  )
}

export default AreaChartComponent
