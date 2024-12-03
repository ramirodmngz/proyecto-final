import React from 'react'
import { Link } from 'react-router-dom'
import "./contact.css"
import contacts from '../data/contactData'

const Contact = ({name, id, img}) => {

    return (
        

        <Link to={`/contact/${id}`}>
            <div className='contact'>
            <img src={img} alt="foto de perfil" />
            <h3>{name}</h3>
            </div>
            

        </Link>
        
        
    )
}
export default Contact