import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser}) => (

   <div> <Navbar bg="dark" variant="dark">
   <Navbar.Brand href="/">
     <img
       alt=""
       src={'assets/logo.png'}
       width="30"
       height="30"
       className="d-inline-block align-top"
     />{' '}
    Restauranto
   </Navbar.Brand>

  <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
     {/* <Nav.Link href="#sign-in-sign-up">Sign In</Nav.Link>*/}
      <Nav.Link href="#contact">Contact</Nav.Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Nav.Link href="/signin">SignIn</Nav.Link>

      )}
     
    
</Nav>
 </Navbar>

 </div>


    
);

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default Header;

