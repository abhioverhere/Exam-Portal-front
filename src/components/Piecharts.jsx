import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import axiosInst from '../AxiosInst';

export default function PieActiveArc() {
  const[info, setInfo]= useState([])
  useEffect(()=>{
    axiosInst.post('/admin/deets')
    // axiosInst.post('http://localhost:4000/admin/deets')
    .then(res=>setInfo(res.data))
    .catch(err=>console.log(err))
  },[]);
  
  const data=[
    { id: 1, value: info.countCSA, label: 'CSA', color:'#d2af81' },
    { id: 2, value: info.countDSA, label: 'DSA', color:'#4d7d50' },
    { id: 3, value: info.countDM, label: 'DM', color:'#988671' },
    { id: 4, value: info.countST, label: 'ST', color:'#7d4d7a' },
    { id: 5, value: info.countFSD, label: 'FSD', color:'#4d627d' },
    { id: 6, value: info.countMLAI, label: 'ML-AI', color:'#7d684d' },
  ]
  return (
    <PieChart 
      series={[
        {
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
          direction: 'column',          
          labelStyle: {
            fontSize: 12},
          itemMarkWidth: 20,
          itemMarkHeight: 6,
          markGap: 5,
          itemGap: 11,},
      }}
    />
  );
}