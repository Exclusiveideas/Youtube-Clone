import React from 'react'
import './SideBarRow.css'

const SideBarRow = ({ title, Icon }) => {
  return (
    <div className='sideBarRow'>
        <Icon className="sideBarRow__icon" />
        <h2  className="sideBarRow__title" >{title}</h2>
    </div>
  )
}

export default SideBarRow