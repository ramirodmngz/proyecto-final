import React, { useContext } from 'react'
import { ContactsContext } from '../Context/ContactsContext'
import Contact from './Contact'
import "./contactList.css"


const ContactList = () => {


    const {contacts_state} = useContext(ContactsContext)
    
    return (
        <div className='principal'>
            <div className='header'>
                <div className='title'>
                    <h1>Chats</h1>
                </div>
                <button className='btn'><i class="bi bi-chat-left"></i></button>
                <button className='btn'><i class="bi bi-three-dots-vertical"></i></button>
            </div>
            <div className='footer'>
                <form className='footer-form'>
                    <i class="bi bi-search"></i>
                    <input className='form-input' placeholder='Buscar'/>
                </form>
            </div>
            
                <div className='btn-footer'>
                    <button>Todos</button>
                    <button>No Leidos</button>
                    <button>Favoritos</button>
                    <button>Grupos</button>
                </div> 
                <div className='footer-archive'>
                    <i class="bi bi-archive"></i>
                    <button> Archivados</button>
                </div>
                
            {
                contacts_state.map(contact => {
                    return (
                        
                        <Contact
                            
                            name={contact.name}
                            id={contact.id}
                            key={contact.id}
                            img={contact.img}
                            text={contact.text}
                        />
                    )
                })
                
            }
        </div>
    )
}

export default ContactList