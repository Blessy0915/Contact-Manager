import React from 'react'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function ContactShow(props)
{
    return(
        <div class="container offset col-md-5 card text-white bg-success mb-3">
            {
                !_.isEmpty(props.contact) &&
                <div className = "text-center">
                    <div class="card-header text-center text-uppercase" >{props.contact.name}</div>
                    <p><b>{props.contact.name}</b><br/>{props.contact.email}-{props.contact.mobile}</p>
                    <Link to = "/contacts" className = "btn btn-dark">Back</Link>
                </div>
            }
        
        </div>
    )
}
const mapStateToProps = ( state, props ) =>
{
    return({
        contact : state.contacts.find(contact => contact._id === props.match.params.id)
    })
}
export default connect(mapStateToProps)(ContactShow)