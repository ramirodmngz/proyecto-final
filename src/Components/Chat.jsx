import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContactsContext } from '../Context/ContactsContext'
import MessagesList from './MessagesList'
import "./chat.css"

const Chat = () => {
    const {contact_id} = useParams()

    const {addNewMessageToContact, getContactById} = useContext(ContactsContext)

    const contact_selected = getContactById(contact_id)

    const handleSubmitNewMessage = (event) =>{
        event.preventDefault()
        const text = event.target.message.value
        addNewMessageToContact (text, contact_id)
    }


    return (
        <div>
            {
                !contact_selected
                ? <div className='main-descarga'>
                    <div className='descarga'>
                        <img src="https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png" alt="whatsapp" />
                        <h1>Descarga Whatsapp Para Windows</h1>
                        <p>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</p>
                        <button>Descargar de Microsoft Store</button>
                    </div>
                    
                </div>
                : (
                    <div className='message_list'>
                        <div className='headerr'>
                            <div className='info-header'>
                                <img src={contact_selected.img} alt="" />
                                <h1>{contact_selected.name}</h1>
                            </div>
                            <div className='icon-header'>
                                
                                <i class="bi bi-camera-video-fill" id='video'><i class="bi bi-chevron-down"></i></i>
                                <i class="bi bi-search"></i>
                                <i class="bi bi-three-dots-vertical"></i>
                                
                            </div>
                            
                        </div>
                        <div className='mensajes'>
                            <MessagesList
                                messages={contact_selected.messages}
                            />
                        </div>
                        
                        
                        
                        <form className='form-chat' onSubmit={handleSubmitNewMessage}>
                            
                                <button className='form-chat-icon'><i class="bi bi-emoji-smile"></i></button>
                                <button className='form-chat-icon'><i class="bi bi-plus-lg"></i></button>
                            
                                <input className='form-chat-input'  placeholder='Escribe un mensaje' id='message' name='message' />
                                <button className='form-chat-icon'><i class="bi bi-mic"></i></button>
                                
                        </form>
                    </div>
                )
            }
            
        </div>
    )
}

export default Chat