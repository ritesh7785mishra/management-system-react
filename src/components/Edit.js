import React from 'react'
import './Edit.css'
import headShot from '../images/girl-photo.jpg'
import pencilIcon from '../images/pencil-dark.png'
import deleteIcon from '../images/delete-dark.png'
import indianFlag from "../images/indian-flag.png"
import cameraIcon from '../images/camera-fill.png'

function Edit() {
  return (
    <div className="edit">
         <div className="headbar">
            <h3 className="title">
                Management System
            </h3>
            <div className="img__container">
                <img className="header__img" src={headShot} alt="" />
            </div>
         </div>

         <div className="edit__content">
            <div className="left__section">
               <p className="imgWarning">
                  Image size should not be larger than 1MB 
               </p> 

               <div className="img__container fun">
                    <img className="main__img" src={headShot} alt="" />
                    <button className='camera__btn'><img src={cameraIcon} alt="" /></button>
                </div>
                <div className="edDel__box">
                    <div className="edit__box">
                        <img src={pencilIcon} alt="" className="" />
                        <p>Edit</p>
                    </div>
                    <hr/>
                    <div className="delete__box">
                        <img src={deleteIcon} alt="" className="" />
                        <p>Delete</p>
                    </div>
                </div>
                <div className="name">
                    <input type="text" name="" id="" placeholder='First Name'/>
                    <input type="text" name="" id="" placeholder='Last Name' />
                </div>
                <input type="text" name="" id="" placeholder='Designation'/>
            </div>
            <hr/>
            <div className="right__section">
                <div className="dob__gender">
                    <div className="input__dob">
                        <input type="date" placeholder="Date of birth" /> 
                    </div>
                    <div className="input__gender">
                       <select placeholder='Gender' name="" id="">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                       </select>
                    </div>
                </div>
                <div className="phone__number">
                    <img src={indianFlag} alt="" className="flag" />
                    <input className="small__number" type="text" name="" id="" placeholder='Phone number' />
                </div>
                <input type="text" placeholder='Address 1'/>
                <div className="city__state">
                    <input type="text" placeholder='City'/>
                    <input type="text" name="" id="" placeholder='State'/>
                </div>
                <div className="zip__country">
                    <input type="text" name="" id="" placeholder='Zip Code' />
                    <input type="text" name="" id="" placeholder='Country'/>
                </div>
                <p className="warning__text">
                    *All fields are compulsory
                </p>
                <div className="save__cancel">
                   <button className="cancel">
                    Cancel
                   </button>
                   <button className="save">
                    Save
                   </button>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Edit