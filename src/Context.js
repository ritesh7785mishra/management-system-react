import React,{useState, useEffect} from 'react'
import data from './data'

const Context = React.createContext();

function ContextProvider({children}){
    const [userData, setUserData] = useState([])
    const [user , setUser] = useState()
    useEffect(()=>{
        setUserData(data)
        console.log(data)
    },[user])

    function removeUser(email){
        setUserData(prevUsers => prevUsers.filter(user => user.email !== email))
    }

    function currentUserFound(currentUser){
       setUser(currentUser)
        
    }

    function addUser(userToAdd){
        const newUserData = [...userData,userToAdd]
        setUserData(newUserData)
        console.log(userData)
    }
    
    return (
        <Context.Provider value={{
            userData,
            removeUser,
            currentUserFound,
            user,
            addUser
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}