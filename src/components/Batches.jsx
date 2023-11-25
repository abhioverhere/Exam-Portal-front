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
      <h3 style={{textAlign:'center', marginTop:'2%'}}>Batch List</h3>
      <div className="batchlist">
        <List sx={{ width: '100%', maxWidth:' 50%', bgcolor: 'background.paper' }} component="nav">
          <ListItemButton onClick={()=>handleClick('CSA')}>
            <ListItemIcon><p>O</p></ListItemIcon>
            <ListItemText>KKEM March CSA</ListItemText>        
          </ListItemButton>
          <ListItemButton onClick={()=>handleClick('DSA')}>
            <ListItemIcon><p>O</p></ListItemIcon>
            <ListItemText>KKEM March DSA</ListItemText>        
          </ListItemButton>
          <ListItemButton onClick={()=>handleClick('ML-AI')}>
            <ListItemIcon><p>O</p></ListItemIcon>
            <ListItemText>KKEM March ML-AI</ListItemText>        
          </ListItemButton>
          <ListItemButton  onClick={()=>handleClick('FSD')}>
            <ListItemIcon><p>O</p></ListItemIcon>
            <ListItemText>KKEM March FSD</ListItemText>        
          </ListItemButton>
          <ListItemButton onClick={()=>handleClick('ST')}>
            <ListItemIcon><p>O</p></ListItemIcon>
            <ListItemText>KKEM March ST</ListItemText>        
          </ListItemButton>
        </List>
      </div>
    </div>
  )
}

export default AdminDash
