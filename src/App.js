import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import RestaurantPage from './pages/restaurantpage/restaurantpage.component';
import  RestaurantDisplay from './pages/restaurantdisplay/restaurantdisplay.component';

class App extends React.Component {
  
    render() {
      return (

        <div>
          <Header />
          <div>
            <Route exact path='/' component={HomePage} />
            <Route exact path="/restaurantpage/:id"  component={RestaurantPage}/>
             {/* <Route exact path="/restaurantpage" component={RestaurantDisplay} />  */}
            <Route
              exact
              path='/signin'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
  });
  
  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  