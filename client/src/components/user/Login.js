import React from 'react'
import { startLoginUser } from '../../actions/user'
import { connect } from 'react-redux'

class Login extends React.Component
{
    constructor()
    {
        super()
        this.state = {
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
            email : this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startLoginUser(formData, this.props))
    }
    render()
    {
        return(
            <div className = "container offset col-md-5">
                <h3 className = "text-center">Login</h3>
                <form onSubmit = {this.handleSubmit} className = "form-group">
                    <label htmlFor = "email">Email</label>
                       <input type = "text"
                              value = {this.state.email}
                              name = "email"
                              id = "email"
                              className = "form-control"
                              placeholder = "abc123@gmail.com"
                              onChange = {this.handleChange}/>
                    
                    <label htmlFor = "password">Password</label>
                       <input type = "password"
                              value = {this.state.password}
                              name = "password"
                              id = "password"
                              className = "form-control"
                              placeholder = "--password--"
                              onChange = {this.handleChange}/><br/>
                    <input type = "submit" className = "btn btn-primary btn-lg btn-block"/>
                </form>

            </div>
        )
    }
}
export default connect()(Login)