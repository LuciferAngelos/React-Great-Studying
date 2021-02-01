import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, withRouter } from 'react-router-dom'
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './Login/Login';
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';




class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar  /* state={props.state} */ />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <DialogsContainer
            // store={props.store}
            />} />

          <Route path='/profile/:userId?'
            render={() => <ProfileContainer
            // store={props.store}
            />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <Login />} />
          <Route path='/friend'
            render={() => <Friends
            // store={props.store}
            />} />

        </div>
      </div>


    );
  }
}

const mapStateToProps = (state) => ({      //mapStateToProps - функция, которая принимает стейт и возвращает объект
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)


