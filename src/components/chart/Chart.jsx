import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.scss'

const data = [
  {name: "January", Total: 2500},
  {name: "February", Total: 3500},
  {name: "March", Total: 1200},
  {name: "April", Total: 3200},
  {name: "May", Total: 2000},
  {name: "June", Total: 5000},
  
];

const Chart = ({aspect, title}) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
       <ResponsiveContainer width="100%" aspect={aspect}>
          <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#a7b49e" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="#82ca9d" fillOpacity={1} fill="url(#total)" />
         </AreaChart>
       </ResponsiveContainer>
    </div>
  )
}

export default Chart