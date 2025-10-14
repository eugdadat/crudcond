import React, {useState, useEffect} from "react";
import './ContactForm.css'

function ContactForm({onSave, contactToEdit}){
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    // useEffect é um hook que executa quando o componente monta ou 'contactToEdit' muda
    // usamos para preencher o formulario quando o contato é selecionado para edição
    useEffect(() => {
        if(contactToEdit){
            setName(contactToEdit.name)
            setPhone(contactToEdit.phone)
        }else{
            setName('')
            setPhone('')
        }
    }, [contactToEdit])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !phone){
            alert('Por favor, preencha nome e telefone');
            return; // sai da função
        }
        onSave({id:contactToEdit ? contactToEdit.id : null, name, phone})
    }

    return(
        <div>
            <h2>{contactToEdit ? 'Alterar contato' : 'Cadastrar novo contato'}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                <button type="submit">Salvar </button>
            </form>
        </div>
    )
}

export default ContactForm;