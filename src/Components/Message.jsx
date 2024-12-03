import React from 'react'
import "./message.css"

const Message = ({text, author, time, id}) => {


    return (
        <div className={author === "YO" ? "main" : "main-recibido"}>
        <div className={author === "YO" ? "mensaje" : "mensaje-recibido"} >
            <div className='mensaje-text'>
            <p>{text}</p>
            </div>
            <div className='mensaje-time'>
            <span>{time}</span>
            <i class="bi bi-check-all"></i>
            </div>
            
        </div>
        </div>
        
    )
}

export default Message