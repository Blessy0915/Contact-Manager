import axios from '../config/axios'
import { startSetContacts } from './contact'
import swal from 'sweetalert'
export const setUser = (user = {}) =>
{
    return({
        type : 'SET_USER',
        payload : user
    })
}
export const startRegisterUser = ( formData, props ) =>
{
    return (dispatch) =>
    {
        axios.post('/users/register', formData)
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                swal(response.data.message)
            }
            else
            {
                swal({
                    title: "Successfully Registered!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                dispatch(setUser())
                props.history.push('/users/login')
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const startLoginUser = ( formData, props ) =>
{
    return (dispatch) =>
    {
        axios.post('/users/login', formData)
        .then((response)=>
        {
            if(response.data.hasOwnProperty('token'))
            {
                const token = response.data.token
                localStorage.setItem('authToken', token)
                swal({
                    title: "Logged in Successfully!",
                    icon: "success",
                    button: "Aww yiss!",
                  });

                Promise.all([axios.get('/users/accounts', {
                    headers : {
                        'x-auth' : token
                    }
                }), axios.get('/contacts', {
                    headers : {
                        'x-auth' : token
                    }
                })])
                .then((values)=>
                {
                    const [usersResponse, contactsResponse] = values
                    dispatch(setUser(usersResponse.data))
                    dispatch(startSetContacts(contactsResponse.data))
                    props.history.push('/')
                })
                .catch((err)=>
                {
                    console.log(err)
                })
            }
            else
            {
                swal(response.data)
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const startGetUser = () =>
{
    return (dispatch) =>
    {
        axios.get('/users/accounts', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const user = response.data
            dispatch(setUser(user))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const startLogoutUser = () =>
{
    return (dispatch) =>
    {
        axios.delete('/users/logout', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            if(response.data.hasOwnProperty('notice'))
            {
                swal({
                    title: "Successfully Logged Out!",
                    text : "Thank You!!",
                    icon: "success",
                    button: "Aww yiss!",
                  });

                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href = "/users/login"
            }
        })
    }
}