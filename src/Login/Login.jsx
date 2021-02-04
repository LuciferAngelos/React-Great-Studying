import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createField, Input } from '../components/common/FormsControl/FormsControls'
import { required } from '../utils/validators/validator'
import { login } from '../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import s from '../components/common/FormsControl/FormsControl.module.css'


const LoginForm = ({ handleSubmit, error }) => {        //деструктуризация в пропсах
    return (
        //компонента Field специально необходима для того, чтобы отрисовать те тэги, которые нам нужны в форме - input, textarea и т.д. Соответственно, далее мы указываем сам компонент, который нужно отрисовать - component={'...'}. Button не трогаем. props.handleSubmit - обработчик для сабмита формы - делает preventDefault, собирает все данные, вызывает функцию onSubmit и передаёт объект с данными
        <form action="" onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input, "email", null, { type: "text" })}
            {createField("Password", "password", [required], Input, "password", null, { type: "password" })}
            {createField(null, "rememberMe", [], Input, "rememberMe", null, { type: "checkbox" })}
            <label htmlFor="rememberMe">Remember me</label>


            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({      //коннектим редаксовскую форму. Нужно каждой форме давать уникальное имя. Редьюсер всегда будет один. И стор один. Форм - много
    form: 'login'       //даём уникальное имя формы
})(LoginForm)       //сюда передаём ту форму, к которой мы коннектимся

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    login
})(Login)