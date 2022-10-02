import React,{useContext} from 'react'
import './Card.css'
import headShot from "../images/girl-photo.jpg"
import deleteIcon from "../images/delete-bin-7-line.png"
import { Context } from '../Context'
// import data from '../data'


function Card({firstName,lastName,email,designation}) {
const {removeUser} = useContext(Context)
  return (
    <div className='card'>
        <img className='card__mainImg' src={headShot} alt="" />
        <h4 className="card__name">{firstName} {lastName}</h4>
        <p className='card__designation'>{designation}</p>
        <button onClick={() => removeUser(email)} className='card__deleteBtn'>
            <img className='card__deleteImg' src={deleteIcon} alt="" />
        </button>
    </div>
  )
}


export default Card