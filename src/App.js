import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom'
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';




let someComponent = () => <Dialogs />

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar  /* state={props.state} */ />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer
          // store={props.store}
          />} />

        <Route path='/profile'
          render={() => <Profile
          // store={props.store}
          />} />
        <Route path='/friends'
          render={() => <Friends
            state={props.state.dialogsPage} />} />
      </div>
    </div>


  );
}

export default App;
