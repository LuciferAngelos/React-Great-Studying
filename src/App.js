import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom'
import Friends from './components/Friends/Friends';




let someComponent = () => <Dialogs />

const App = (props) => {

  return (
    <BrowserRouter>  {/*  обрамление (оболочка, обертка) для того, чтобы роутинг работал. */}

      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state} />
        <div className='app-wrapper-content'>
          {/* <Route path='/dialogs' component={Dialogs} /> */}   {/* указываем компонент, который будет обрабатываться на этом роуте. Exact - указывает то, что нужно перейти именно по этой ссылке */}
          {/* <Route path='/profile' component={Profile} /> */}   {/* путь к странице */}
          {/* <Route path='/news' component={News} />
          <Route path='/music' component={Mucis} />
          <Route path='/settings' component={Settings} /> */}


          <Route path='/dialogs'
            render={() => <Dialogs
              state={props.state.dialogsPage} />} />

          <Route path='/profile'
            render={() => <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />} />
          <Route path='/friends'
            render={() => <Friends
              state={props.state.dialogsPage} />} />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
