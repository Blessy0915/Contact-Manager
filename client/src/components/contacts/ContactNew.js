import React from 'react'
import { startAddContact } from '../../actions/contact'
import ContactForm from './ContactForm'
import { connect } from 'react-redux'


function ContactNew(props)
{
    const handleSubmit = (formData)=>
    {
        props.dispatch(startAddContact(formData, props))
    }
    return(
            <div align = "center">
                <h2>Add Contact</h2>
                <ContactForm handleSubmit = {handleSubmit}/>
            </div>
    )
}

export default connect()(ContactNew)