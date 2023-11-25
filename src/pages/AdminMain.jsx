import React from 'react'
import AdminNav from '../components/AdminNav.jsx'

const AdminMain = (props) => {
  return (
    <div>
      <AdminNav/>
      {props.child}      
    </div>
  )
}

export default AdminMain
