import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { startRemoveContact } from '../../actions/contact'
import swal from 'sweetalert'

function ContactList(props)
{
    const handleRemove = (id) =>
    {
        props.dispatch(startRemoveContact(id))
    }
    return(
            <div>
                <h2 className = "text-center">Contacts</h2>
                <table className = "table table-striped table-hover">
                    <thead className = "table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.contacts.map((contact)=>
                            {
                                return(
                                    <tr key = {contact._id}>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.mobile}</td>
                                        <td><Link to = {`/contacts/${contact._id}`} className = "btn btn-primary">Show</Link></td>
                                        <td><Link to = {`/contacts/edit/${contact._id}`} className = "btn btn-secondary">Edit</Link></td>
                                        <td><button className = "btn btn-danger" onClick = {()=>
                                        {
                                            swal({
                                                title: "Are you sure?",
                                                text: "Once deleted, you will not be able to recover this file!",
                                                icon: "warning",
                                                buttons: true,
                                                dangerMode: true,
                                              })
                                              .then((willDelete) => {
                                                if (willDelete) {
                                                    handleRemove(contact._id)
                                                  swal("Poof! Your file has been deleted!", {
                                                    icon: "success",
                                                  });
                                                } else {
                                                  swal("Your imaginary file is safe!");
                                                }
                                              });
                                            
                                        }}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Link to = "/contacts/new" className = "btn btn-primary">Add Contact</Link>
            </div>
        )
}

const mapStateToProps = ( state ) =>
{
    return({
        contacts : state.contacts
    })
}
export default connect(mapStateToProps)(ContactList)