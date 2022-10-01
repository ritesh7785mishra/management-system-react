import React from 'react'
import './Card.css'
import headShot from "../images/girl-photo.jpg"
import deleteIcon from "../images/delete-bin-7-line.png"

function Card() {
  return (
    <div className='card'>
        <img className='card__mainImg' src={headShot} alt="" />
        <h4 className="card__name">Jenny Carreon</h4>
        <p className='card__designation'>HR Manager</p>
        <button className='card__deleteBtn'>
            <img className='card__deleteImg' src={deleteIcon} alt="" />
        </button>
    </div>
  )
}

export default Card