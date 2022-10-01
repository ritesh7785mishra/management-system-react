import React from 'react'
import './Admin.css'
import Card from './Card'
import addIcon from "../images/add-line.png"
import deleteIcon from "../images/delete-bin-7-line.png"

function Admin() {
  return (
    <div className="admin">
         <div className="headbar">
            <h3 className="title">
                Management System
            </h3>
            <p>Admin</p>
         </div>
         <div className="admin__content">
            <p className="list__heading">List of Employees</p>
            <div className="list__elements">
                <Card/>
                <Card/>
                <Card/>
                <div className='card btn__config'>
                    <div className='add__btn'>
                        <img className='bgClr' src={addIcon} alt="" />
                        <h4 className="card__name">Add Employee</h4>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Admin