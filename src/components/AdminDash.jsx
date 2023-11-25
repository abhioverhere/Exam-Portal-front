import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDash = () => {
  const navigate =useNavigate();
  const handleClick=(batch)=>{
    localStorage.setItem('batch', batch)
    navigate('/list')
  }

  return (
    <div className='batches'>
      <h1 style={{textAlign:'center', marginTop:'2%'}}>Welcome, Test Admin</h1>
      
    </div>
  )
}

export default AdminDash
