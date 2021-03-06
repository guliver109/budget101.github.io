import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', Expenses: 2200, Income: 3400 },
  { name: 'Tue', Expenses: 1280, Income: 2398 },
  { name: 'Wed', Expenses: 5000, Income: 4300 },
  { name: 'Thu', Expenses: 4780, Income: 2908 },
  { name: 'Fri', Expenses: 5890, Income: 4800 },
  { name: 'Sat', Expenses: 4390, Income: 3800 },
  { name: 'Sun', Expenses: 4490, Income: 4300 },
];

function SimpleLineChart() {
  return (
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Expenses" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Income" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;