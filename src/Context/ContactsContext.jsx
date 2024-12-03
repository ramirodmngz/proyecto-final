import { createContext, useState } from "react";
import contacts from "../data/contactData";
import { v4 as uuidv4 } from 'uuid';

const ContactsContext = createContext();

const ContactsContextProvider = ({children}) => {

    const [contacts_state, setContactsState] = useState(contacts)

    const getContactById = (contact_id) => {
        return contacts_state.find(
            contact => contact.id === Number(contact_id)
        )
    }


    

    const addNewMessageToContact = (text, contact_id) => {

        const new_message = {
            author: 'YO', 
            text: text, 
            id: uuidv4(),
            time: new Date().toLocaleTimeString('es-ES',{hour:'2-digit', minute:'2-digit', hour12: false})
        }
        setContactsState(
            (prev_contacts_state) => {
                const contact_found = prev_contacts_state.find(contact =>  contact.id == contact_id)
                contact_found.messages.push(new_message)
                
                return [...prev_contacts_state]
            }
        )
    }

    
    return (    
        <ContactsContext.Provider value={
                {
                    contacts_state,
                    getContactById: getContactById,
                    addNewMessageToContact: addNewMessageToContact
                }
            } 
        >
            {children}
        </ContactsContext.Provider>
    )
}

export {ContactsContext, ContactsContextProvider}