import React from 'react'
import { startRegisterUser } from '../../actions/user'
import { connect } from 'react-redux'

class Register extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            username : '',
            email : '',
            password : ''
        }
    }
    handleChange = (e) =>
    {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startRegisterUser(formData, this.props))
    }
    render()
    {
        return(
            <div className = "container offset col-md-5">
                <h3 align= "center">Register With Us!!!</h3>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "username"></label>
                        <input type = "text"
                               value = {this.state.username}
                               onChange = {this.handleChange}
                               id = "username"
                               className = "form-control"
                               placeholder = "--username--"
                               name = "username"/><br/>
                    <label htmlFor = "email"></label>
                        <input type = "text"
                               value = {this.state.email}
                               onChange = {this.handleChange}
                               placeholder = "abc123@gmail.com"
                               id = "email"
                               className = "form-control"
                               name = "email"/><br/>
                    <label htmlFor = "password"></label>
                        <input type = "password"
                               value = {this.state.password}
                               onChange = {this.handleChange}
                               placeholder = "--password--"
                               id = "password"
                               className = "form-control"
                               name = "password"/><br/>
                    <input type = "submit" className = "brn btn-primary btn-lg btn-block"/>
                </form>
            </div>
        )
    }
}

export default connect()(Register)