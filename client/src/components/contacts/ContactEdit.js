import React from 'react'
import { startUpdateContact } from '../../actions/contact'
import ContactForm from './ContactForm'
import { connect } from 'react-redux'
import _ from 'lodash'

function ContactEdit(props)
{
    const handleSubmit = (formData) =>
    {
          props.dispatch(startUpdateContact(formData, props)) 
    }
    return(
            <div align = "center">
                <h2>Edit Contact</h2>
                {
                    !_.isEmpty(props.contact) && <ContactForm {...props.contact} handleSubmit = {handleSubmit}/>
                }
            </div>
    )
}

const mapStateToProps = (state, props ) =>
{
    return({
        contact : state.contacts.find(contact =>contact._id === props.match.params.id)
    })
}
export default connect(mapStateToProps)(ContactEdit)