import React from 'react'
import UserNav from '../components/UserNav.jsx'
// UserSubMain is used with UserNotifications as its child component. The structure of UserSubMain ensures that the user navigation (UserNav) is displayed along with the specific content provided as a child (UserNotifications or potentially any other component).
const UserSubMain = (props) => {
  return (
    <div>
      <UserNav/>
      {props.child}      
    </div>
  )
}

export default UserSubMain