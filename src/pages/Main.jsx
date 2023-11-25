import React from 'react'
import GenNav from '../components/GenNav'

const Main = (props) => {
  return (
    <div>
        <GenNav/>
        {props.child}
    </div>
  )
}

export default Main
