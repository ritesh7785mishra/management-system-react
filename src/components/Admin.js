import React,{useContext} from 'react'
import './Admin.css'
import Card from './Card'
import addIcon from "../images/add-line.png"
// import data from '../data'
import { Context } from '../Context'
import {useNavigate} from "react-router-dom"

function Admin() {
  const navigate = useNavigate()
  const {userData} = useContext(Context)
  const cardElements = userData.map(user => (
    <Card key={user.email} email={user.email} firstName={user.firstName} lastName={user.lastName} designation={user.designation}/>
  ))

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
                {cardElements}
                <div className='card btn__config'>
                    <div className='add__btn' onClick={() => navigate('/edit')}>
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