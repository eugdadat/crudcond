import React, {useState} from "react";
import './Welcome.css'

function Welcome(){
    return(
        <div className="welcome-container">
            <h1>Bem vindo a sua agenda</h1>
            <p>Use o menu da esquerda para gerenciar seus comtatos</p>
        </div>
    )
}

export default Welcome;