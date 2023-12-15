import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import axiosInst from '../AxiosInst';

export default function PieActiveArc() {
  const[info, setInfo]= useState([])
  useEffect(()=>{
    axiosInst.post('/admin/deets')
    axiosInst.post('http://localhost:4000/admin/deets')
    .then(res=>setInfo(res.data))
    .catch(err=>console.log(err))
  },[]);
  
  const data=[
    { id: 0, value: info.regCount, label: 'Registered', color:'#6c6464' },
    { id: 1, value: info.unregCount, label: 'Unregistered', color:'#2e2c2f' },
  ]
  return (
    <PieChart margin={{ top: 10, bottom: 10, left: 10, right:10 }}
      series={[
        {
          startAngle: -90,
          endAngle: 90,
          paddingAngle: 3,
          innerRadius: 40,
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -15, color: 'gray' },
        },
      ]}
      height={200}
      slotProps={{
        legend: {          
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          itemMarkWidth: 20,
          itemMarkHeight: 6,
          markGap: 5,
          itemGap: 11,},
      }}
    />
  );
}