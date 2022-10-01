import React from 'react'
import './Home.css'
import headShot from '../images/girl-photo.jpg'
import pencilIcon from '../images/pencil-line.png'
import deleteIcon from '../images/delete-bin-7-line.png'
function Home() {
  return (
    <div className='home'>
        <div className="headbar">
            <h3 className="title">
                Management System
            </h3>
            <div className="img__container">
                <img className="header__img" src={headShot} alt="" />
            </div>
        </div>
        <div className="home__content">
            <div className="pencil__icon">
                <img src={pencilIcon} alt="" />
            </div>
            <div className="delete__icon">
                <img src={deleteIcon} alt="" />
            </div>

            <div className="top__details">
                <div className="img__container">
                    <img className="main__img" src={headShot} alt="" />
                </div>
                <h1 className="empl__name">
                    Jenny Carreon
                </h1>
                <p className="designation">
                    HR Manager
                </p>
            </div>
            <div className="low__details">
                <div className="gender">
                    <p className="light__text">
                        Gender
                    </p>
                    <p className="dark__text">
                        Female
                    </p>
                </div>
                
                <div className="dob">
                    <p className="light__text">
                        DOB
                    </p>
                    <p className="dark__text">
                        18/10/2000
                    </p>
                </div>

                <div className="nationality">
                    <p className="light__text">
                        Nationality
                    </p>
                    <p className="dark__text">
                        Turkey
                    </p>
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default Home