import React from 'react'

export default class ContactForm extends React.Component
{
    constructor(props)
    {
        super()
        this.state = {
            name : props.name ? props.name : '',
            email :props.email ? props.email : '',
            mobile : props.mobile ? props.mobile : ''
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
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile
        }
        this.props.handleSubmit(formData)
    }
    render()
    {
        return(
            <div className = "container offset col-md-5">
                <form onSubmit = {this.handleSubmit} className = "form-group">
                    <label htmlFor = "name">Name</label>
                        <input type = "text"
                               value = {this.state.name}
                               onChange = {this.handleChange}
                               id = "name"
                               placeholder = "enter name"
                               className = "form-control"
                               name = "name"/>
                    <label htmlFor = "email">Email</label>
                        <input type = "text"
                               value = {this.state.email}
                               id = "email"
                               className = "form-control"
                               placeholder = "abc123@gmail.com"
                               onChange = {this.handleChange}
                               name = "email"/> 
                    <label htmlFor = "mobile">Mobile</label>
                        <input type = "text"
                               value = {this.state.mobile}
                               onChange = {this.handleChange}
                               id = "mobile"
                               placeholder = "+91 8797867566"
                               className = "form-control"
                               name = "mobile"/> <br/>
                    <input type = "submit" className = "btn btn-primary"/>
                </form>
            </div>
        )
    }
}