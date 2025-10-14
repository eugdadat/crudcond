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

const handleSaveContact = (contact) => {
  if(contact.id){ // se o contato ja tem id, então é uma atualização
    setContacts(contacts.map(c => c.id === contact.id ? contact : c));
    alert('Contato alterado com sucesso')
  }
  else{
    // cadastra-se um contato novo
    contact.id = Date.now();
    setContacts([...contacts, contact])
    alert('Contato cadastrado com sucesso')
  }
  setActiveScreen('list');
  setContactToEdit(null);
}

const handleDeleteContact = (id) => {
  setContacts(contacts.filter(c => c.id !== id));
  alert('Contato removido com sucesso')
}

const startEdit = (contact) => {
  setContactToEdit(contact)
  setActiveScreen('form')
}

const showCraetForm = () => {
  setContactToEdit(null)
  setActiveScreen('form')

}

const handleNavigate = (screen) => {
  if(screen === 'logout'){
    setIsLoggedIn(false)
  }
  else{
    setActiveScreen(screen)
  }
}


if(!isLoggedIn){
  return <Login onLogin={handleLogin}/>
}

return(
  <div className="app-container">
    <Menu onNavigate={handleNavigate} onCreate={showCraetForm}/>
    <main className="content">
      {activeScreen === 'Welcome' && <Welcome/>}
      {activeScreen === 'list' && <ContactList contacts={contacts} onEdit={startEdit} onDelete={handleDeleteContact}/>}
      {activeScreen === 'form' && <ContactForm contactToEdit={contactToEdit} onSave={handleSaveContact}/>}
    </main>
  </div>
)

}export default App;