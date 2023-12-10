import React from 'react'
import AdminNavSub from '../components/AdminNavSub.jsx'
//  AdminMainSub is used with AdminDashboard as its child component. The structure of AdminMainSub ensures that the admin navigation (AdminNav) is displayed along with the specific content provided as a child (AdminDashboard or any other component).
const AdminMainSub = (props) => {
  return (
    <div>
      <AdminNavSub/>
      {props.child}      
    </div>
  )
}

export default AdminMainSub
