import React from 'react'
import "./sideBar.css"
import perfil from "../assets/img/perfil.jpeg"


const SideBar = () => {
    return (
        <div className='main-sidebar'>
            <div className='sidebar1'>
                <button><i class="bi bi-chat-left-text-fill"></i></button>
                <button><i class="bi bi-plus-circle-dotted"></i></button>
                <button><i class="bi bi-chat-dots"></i></button>
                <button><i class="bi bi-people-fill"></i></button>
                
            </div>
            <div className='sidebar2'>
                <button><i class="bi bi-gear"></i></button>
                <button className='perfil'><img src={perfil} alt="foto de perfil" /></button>
            </div>
        </div>
    )
}

export default SideBar