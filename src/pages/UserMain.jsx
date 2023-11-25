import React from 'react'
import UserNavMain from '../components/UserNavMain.jsx'
const UserMain = (props) => {
  return (
    <div>
      <UserNavMain/>
      {props.child}      
    </div>
  )
}

export default UserMain
