import React from 'react'
import UserNav from '../components/UserNav.jsx'
const UserSubMain = (props) => {
  return (
    <div>
      <UserNav/>
      {props.child}      
    </div>
  )
}

export default UserSubMain