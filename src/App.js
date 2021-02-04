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



//чистые фукнции:
//1. имьютабельны
//2. обязательно что-то возвращают
//3. нет сайдэффектов
//4. детерменированность\иденпотентность - если функция получает одни и те же данные на вход, то функция ВСЕГДА будет возвращать одно и то же. Предсказуемость функции
//4.1 GET запрос иденпотентный, POST - не иденпотентный



/* *** */

//Utin tests
//Тестирование отдельных юнитов. Берём один - протестировали. Берём второй - оттестировали. 


/* *** */

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


