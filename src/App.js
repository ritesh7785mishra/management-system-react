import React from 'react'
import Login from './components/Login.js'
import Home from './components/Home'
import './App.css'
import Edit from './components/Edit.js'
import Admin from './components/Admin'
import Card from './components/Card'

function App() {
  return (
    <div>
        <Login/>
        <Home/>
        <Edit/>
        <Admin/>
        <Card/>
    </div>
  )
}

export default App