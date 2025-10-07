import React, { useState } from "react";
import './App.css'

// importa os componentes de seus respectivos arquivos
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';


function App(){

const [isLoggedIn, setIsLoggedIn] = useState(false)
const [activeScreen, setActiveScreen] = useState('Welcome')
const [contacts, setContacts] = useState([
  {id:1, name:'Tatiana Silva', phone:'1621068702'},
  {id:2, name:'Graziela Carozelli', phone:'1621068713'}
])
const [contactToEdit, setContactToEdit] = useState(null)

const handleLogin = (userName, password) => {
  if(userName === 'admin' && password === '123'){
    setIsLoggedIn(true)
  }
  else{
    alert("Usuário ou Senha inválidos")
  }
}

const handleSaveContact = (contact) => {}
const handleDeleteContact = (id) => {}
const startEdit = (contact) => {}
const showCraetForm = () => {}
const handleNavigate = (screen) => {}


if(!isLoggedIn){
  return <Login onLogin={handleLogin}/>
}

return(
  <div>
    <Menu onNavigate={handleNavigate} onCreate={showCraetForm}/>
    <main className="content">
      {activeScreen === 'Welcome' && <Welcome/>}
      {activeScreen === 'list' && <ContactList contacts={contacts} onEdit={startEdit} onDelete={handleDeleteContact}/>}
      {activeScreen === 'form' && <ContactForm contactToEdit={contactToEdit} onSave={handleSaveContact}/>}
    </main>
  </div>
)

}export default App;