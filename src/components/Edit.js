import React,{useState,useContext} from 'react'
import './Edit.css'
import headShot from '../images/girl-photo.jpg'
import pencilIcon from '../images/pencil-dark.png'
import deleteIcon from '../images/delete-dark.png'
import indianFlag from "../images/indian-flag.png"
import cameraIcon from '../images/camera-fill.png'
import {Context} from '../Context'
import {useNavigate} from 'react-router-dom'


function Edit() {
    const {addUser,currentUserFound, userData} = useContext(Context)
    const [cameraBtn, setCameraBtn] = useState(false)
    const navigate = useNavigate()
    const [userToAdd, setUserToAdd] = useState({
        firstName:"",
        lastName:"",
        designation:"",
        dateOfBirth:"",
        gender:"",
        phoneNumber:"",
        address:"",
        city:'',
        state:'',
        zipCode:'',
        country:'',
        headImage:'',
        email:'',
        password:""
    })
    const {firstName,
    lastName,
    designation,
    dateOfBirth,
    gender,
    phoneNumber,
    address,
    city,
    state,
    zipCode,
    country,
    headImage,
    email,
    password} = userToAdd


    function handleChange(e){
        setUserToAdd({
            ...userToAdd,
            [e.target.name] : e.target.value
        })
    }

    function SubmitButton(){
        if (firstName&&
            lastName&&
            designation&&
            dateOfBirth&&
            gender&&
            phoneNumber&&
            address&&
            city&&
            state&&
            zipCode&&
            country&&
            email&&
            password){
          return  <button className="save" onClick={addDetail}>
          Save
         </button>
        } else {
          return  <button className="save" onClick={addDetail} disabled>
          Save
         </button>
        };
      };

    function addDetail(){
        addUser(userToAdd)
        currentUserFound(userToAdd)
        navigate('/home')
    }

    // console.log(userToAdd)
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
                    <button className='camera__btn' onClick={() => setCameraBtn(preVal => !preVal)}><img src={cameraIcon} alt="" /></button>
                </div>
                <div className="edDel__box" style={{display: cameraBtn ? 'block':'none'}}>
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
                    <input type="text" name="firstName" value={firstName} id="" placeholder='First Name' onChange={(e)=>handleChange(e)}/>
                    <input type="text" name="lastName" value={lastName} id="" placeholder='Last Name' onChange={(e)=>handleChange(e)} />
                </div>
                <input type="text" name="designation" value={designation} id="" placeholder='Designation' onChange={(e)=>handleChange(e)}/>
                <input type="text" name="email" value={email} id="" placeholder='Email' onChange={(e)=>handleChange(e)}/>
            </div>
            <hr/>
            <div className="right__section">
                <div className="dob__gender">
                    <div className="input__dob">
                        <input type="date" name="dateOfBirth" value={dateOfBirth} placeholder="Date of birth" onChange={(e)=>handleChange(e)}/> 
                    </div>
                    <div className="input__gender">
                       <input type="text" placeholder='Gender' name="gender" value={gender} id="" onChange={(e)=>handleChange(e)}>
                       </input>
                    </div>
                </div>
                <div className="phone__number">
                    <img src={indianFlag} alt="" className="flag" />
                    <input className="small__number" type="text" name="phoneNumber" value={phoneNumber} id="" placeholder='Phone number' onChange={(e)=>handleChange(e)} />
                </div>
                <input type="text" name="address" value={address} placeholder='Address 1' onChange={(e)=>handleChange(e)}/>
                <div className="city__state">
                    <input type="text" placeholder='City' name='city' value={city} onChange={(e)=>handleChange(e)}/>
                    <input type="text" name="state" id="" placeholder='State' value={state} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="zip__country">
                    <input type="text" name="zipCode" id="" placeholder='Zip Code' value={zipCode} onChange={(e)=>handleChange(e)}/>
                    <input type="text" name="country" id="" placeholder='Country' value={country} onChange={(e)=>handleChange(e)}/>
                </div>
                <input type="text" name="password" id="" placeholder='Set password' value={password} onChange={(e)=>handleChange(e)}/>
                <p className="warning__text">
                    *All fields are compulsory
                </p>
                <div className="save__cancel">
                   <button className="cancel">
                    Cancel
                   </button>
                    <SubmitButton/>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Edit