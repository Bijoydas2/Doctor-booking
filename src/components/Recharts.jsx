import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';


const CustomBar = ({ x, y, width, height, fill }) => {
  const path = `
    M${x},${y + height}
    L${x + width / 2},${y}
    L${x + width},${y + height}
    Z
  `;
  return <path d={path} fill={fill} />;
};


const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#845EC2', '#00C9A7', '#F95738', '#0081CF', '#F9A826', '#9B59B6'];

const Recharts = ({ doctors }) => {
  const chartData = doctors.map((doctor) => ({
    name: doctor.name,
    fee: parseInt(doctor.consultationFee) || 0,
  }));

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            interval={0}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="fee" shape={<CustomBar />}>
            {
              chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recharts;
