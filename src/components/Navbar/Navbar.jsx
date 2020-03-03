import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

import Friends from '../Friends/Friends'


// let classes = {      //это выкидывает реакт и переименовывает самостоятельно, если есть совпадения
//     'nav': 'Navbar_nav__AzQ2r',
//     'item': 'Navbar_item__MxrYN'
// }

//мы импортируем модули s из навбар.модулз и затем уже применяем их в стилях. 
//делается это для того, чтобы мы могли использовать одно и то же название класса в разных компонентах 
//Это нужно делать, если мы хотим использовать одинаковые названия по проекту, к примеру, класс .item. Если нам это не нужно, мы можем просто придумать глобальные имена классов для каждого элемента


//если нужно впихнуть 2 класса. Пример, как это бы работало.

// let c1 = 'item';
// let c2 = 'active'
// let classes = `${s.item} ${c2}`

// npm i react-router-dom роутер реакта
// npm i react-router-dom --save - устанавливает пакет и записывает о нём данные в package.json, чтобы при будущей установке установился и роутинг

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.item} >
                {/* Тэг <NavLink></NavLink> для оформления ссылок. Аттрибут to='' указывает путь на страницу. В реакте есть встроенный класс active, который передаётся во время кликания по ссылка роутинга в NavLink. 
                activeClassName={s.active} - таким способом мы перепрограммируем перекодированное название из модульности css реакта и задаём ему конкретное название класса. Т.е., говорим, какое именно название класса нужно использовать */}
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='settings' activeClassName={s.active}> Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.active}> Friends</NavLink>
            </div>
            {/* <Friends state={props.state.sitebar} /> */}
        </nav>
    )
}

export default Navbar