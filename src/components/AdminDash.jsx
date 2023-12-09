import React from 'react'
import Batches from './Batches.jsx'
const AdminDash = () => {
// The <h1> element has inline styles applied for centering the text, adding a top margin, and setting the text color to white.
//  The text content of the <h1> is "Welcome,Test Admin".
  return (
    <div className='batches'>
      <h1 style={{textAlign:'center', marginTop:'2%', color:'white', fontSize:'350%'}}>Welcome, Test Admin</h1>   
      <Batches/>   
    </div>
  )
}

export default AdminDash
