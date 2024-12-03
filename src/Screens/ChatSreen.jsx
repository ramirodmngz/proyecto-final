import React from 'react'
import ContactList from '../Components/ContactList'
import Chat from '../Components/Chat'
import "./chatScreen.css"
import SideBar from '../Components/SideBar'


const ChatScreen = () => {
return (
    <div className='main_container_chats'>
        <div className='chats'>
            <SideBar/>
            <ContactList/>
        </div>
        <div className='chat'>
            <Chat/>
        </div>

    </div>
)
}

export default ChatScreen