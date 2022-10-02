import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { Context } from '../Context'
// import Home from './Home'
// import Admin from './Admin'
// import Edit from './Edit'


function Login() {
  // const {findCurrentUser} = useContext(Context)
  const [loggin, setLoggin] = useState({
    currentEmail:'',
    currentPassword:''
  })

  const {currentEmail, currentPassword} = loggin

  const {userData,currentUserFound} = useContext(Context)

  const navigate = useNavigate()

  function handleChange(e){
    setLoggin({...loggin,
      [e.target.name]:e.target.value
    })
  }

  function findCurrentUser(){
    const currentUser = userData.find( user => user.email === currentEmail)
    if(currentEmail==="admin" && currentPassword==="admin"){
      console.log('admin')
      navigate('/admin')
    }else if(currentUser){
      // console.log(currentUser,"*******")
         if(currentUser.password !== currentPassword){
            console.log("wrong password")
            alert('Wrong Password')
            
          }else{
            console.log('correct password')
            currentUserFound(currentUser)
            navigate('/home')
          }
    }else{
      console.log('user not found')
      navigate('/edit')
    }
  }

  return (

    <div className='login'>
        
            <h3 className="login__text">Employee and Admin login/ Signup</h3><br/>
            <input type="text" value={currentEmail} name="currentEmail" id="" placeholder='Email' onChange={(e)=>handleChange(e)}/><br/>
            <input type="text" value={currentPassword} name="currentPassword" id="" placeholder='Password' onChange={(e)=>handleChange(e)}/><br/>
            <button className='login__btn' onClick={()=>findCurrentUser()}>Login/Signup</button>
        
    </div>
  )
}

export default Login