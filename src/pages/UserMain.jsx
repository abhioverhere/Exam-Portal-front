import React from 'react'
import UserNavMain from '../components/UserNavMain.jsx'
// UserMain is used with UserProfile as its child component. The structure of UserMain ensures that the user navigation (UserNavMain) is displayed along with the specific content provided as a child (UserProfile or potentially any other component).
const UserMain = (props) => {
  return (
    <div>
      <UserNavMain/>
      {props.child}      
    </div>
  )
}

export default UserMain
