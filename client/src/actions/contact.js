import axios from '../config/axios'
import swal from 'sweetalert'
export const setContacts = ( contacts ) =>
{
    return({
        type : 'SET_CONTACTS',
        payload : contacts
    })
}
export const startSetContacts = () =>
{
    return (dispatch) =>
    {
        axios.get('/contacts',{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const contacts = response.data
            dispatch(setContacts(contacts))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}


export const addContact = ( contact ) =>
{
    return({
        type : 'ADD_CONTACT',
        payload : contact
    })
}
export const startAddContact = ( formData, props ) =>
{
    return (dispatch) =>
    {
        axios.post('/contacts', formData, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                swal(response.data.message)
            }
            else
            {
                const contact = response.data
                dispatch(addContact(contact))
                props.history.push(`/contacts`)
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}


export const updateContact = ( contact ) =>
{
    return({
        type : 'UPDATE_CONTACT',
        payload : contact
    })
}
export const startUpdateContact = ( formData, props ) =>
{
    return (dispatch) =>
    {
        axios.put(`/contacts/${props.match.params.id}`, formData, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                swal(response.data.message)
            }
            else
            {
                const contact = response.data
                dispatch(updateContact(contact))
                props.history.push(`/contacts/${contact._id}`)
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}


export const removeContact = ( id ) =>
{
    return({
        type : 'REMOVE_CONTACT',
        payload : id
    })
}
export const startRemoveContact = ( id ) =>
{
    return (dispatch) =>
    {
        axios.delete(`/contacts/${id}`, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const contact = response.data
            dispatch(removeContact(contact._id))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}