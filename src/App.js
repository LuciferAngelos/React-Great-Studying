import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router-dom'
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {

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
        <Route path='/friend'
          render={() => <Friends
          // store={props.store}
          />} />

      </div>
    </div>


  );
}

export default App;
