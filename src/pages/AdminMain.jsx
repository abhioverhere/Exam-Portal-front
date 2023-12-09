import React from 'react'
import AdminNav from '../components/AdminNav.jsx'
//  AdminMain is used with AdminDashboard as its child component. The structure of AdminMain ensures that the admin navigation (AdminNav) is displayed along with the specific content provided as a child (AdminDashboard or any other component).
const AdminMain = (props) => {
  return (
    <div>
      <AdminNav/>
      {props.child}      
    </div>
  )
}

export default AdminMain
