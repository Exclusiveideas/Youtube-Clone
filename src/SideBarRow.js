import React from 'react'
import './SideBarRow.css'

const SideBarRow = ({ title, Icon, selected }) => {
  return (
    <div className={`sideBarRow ${selected && 'selected'}`}>
        <Icon className='sideBarRow__icon' />
        <h4 className="sideBarRow__title" >{title}</h4>
    </div>
  )
}

export default SideBarRow