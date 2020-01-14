import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom'

let someComponent = () => <Dialogs />

const App = (props) => {

  return (
    <BrowserRouter>  {/*  обрамление (оболочка, обертка) для того, чтобы роутинг работал. */}

      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route path='/dialogs' component={Dialogs} /> */}   {/* указываем компонент, который будет обрабатываться на этом роуте. Exact - указывает то, что нужно перейти именно по этой ссылке */}
          {/* <Route path='/profile' component={Profile} /> */}   {/* путь к странице */}
          {/* <Route path='/news' component={News} />
          <Route path='/music' component={Mucis} />
          <Route path='/settings' component={Settings} /> */}


          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
