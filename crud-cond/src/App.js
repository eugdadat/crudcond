import React, { useState } from "react";
import './App.css'

import Login from './components/Login/Login';

function App(){

const [isLoggedIn, setIsLoggedIn] = useState(false)

const handleLogin = (userName, password) => {
  if(userName === 'admin' && password === '123'){
    setIsLoggedIn(true)
  }
  else{
    alert("Usuário ou Senha inválidos")
  }
}

if(!isLoggedIn){
  return <Login onLogin={handleLogin}/>
}

}export default App;