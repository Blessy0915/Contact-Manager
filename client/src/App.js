import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import Home from './components/common/Home'
import Register from './components/user/Register'
import Login from './components/user/Login'


import ContactList from './components/contacts/ContactList'
import ContactNew from './components/contacts/ContactNew'
import ContactShow from './components/contacts/ContactShow'
import ContactEdit from './components/contacts/ContactEdit'
import { startLogoutUser } from './actions/user';

function App(props) {
  const handleLogout = () =>
  {
      props.dispatch(startLogoutUser())
  }
  return (
    <BrowserRouter>
        <div className = "container-fullwidth">
        <nav className ="navbar navbar-expand-md navbar-dark bg-dark">
        <Link to="/" className="navbar-brand mb-0 h4">Contact Manager</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
      <ul className="nav justify-content-end">
      {

      !_.isEmpty(props.user) ? 
      <div>
      <li className="navbar-nav">
        <Link className="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
        <Link className="nav-item nav-link active" to="/contacts"> Contacts <span class="sr-only">(current)</span></Link>
        <Link className="nav-item nav-link active" to="#" onClick = {handleLogout}>Logout <span class="sr-only">(current)</span></Link>
      </li>
      </div>
      :
      <div>
      <li className="navbar-nav">
        <Link className="nav-item nav-link active" to="/users/register">Register <span className="sr-only">(current)</span></Link>
        <Link className="nav-item nav-link active" to="/users/login">Login <span className="sr-only">(current)</span></Link>
      </li>

      </div>
}
     </ul>
</nav>
 <br/>
 <br/>
 </div>
        <div className = "container">
          

          <Switch>
              <Route path = "/" component = {Home} exact = {true}/>
              <Route path = "/users/register" component= {Register}/>
              <Route path = "/users/login" component = {Login}/>

              <Route path = "/contacts" component = {ContactList} exact = {true}/>
              <Route path = "/contacts/new" component = {ContactNew} exact = {true}/> 
              <Route path = "/contacts/edit/:id" component = {ContactEdit}/>
              <Route path = "/contacts/:id" component = {ContactShow}/>
          </Switch>
         
          
        </div>
    </BrowserRouter>
  );
}

const mapStateToProps = ( state ) =>
{
    return({
      user : state.user
    })
}
export default connect(mapStateToProps)(App);
