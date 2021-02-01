import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../components/common/FormsControl/FormsControls'
import { required } from '../utils/validators/validator'
import { login } from '../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import s from '../components/common/FormsControl/FormsControl.module.css'


const LoginForm = (props) => {
    return (
        //компонента Field специально необходима для того, чтобы отрисовать те тэги, которые нам нужны в форме - input, textarea и т.д. Соответственно, далее мы указываем сам компонент, который нужно отрисовать - component={'...'}. Button не трогаем. props.handleSubmit - обработчик для сабмита формы - делает preventDefault, собирает все данные, вызывает функцию onSubmit и передаёт объект с данными
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field type={"text"} name={'email'} placeholder={"Email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={"password"} name={"password"} id="" placeholder={"Password"} component={Input} validate={[required]} />
            </div>
            <div>

                <Field type={"checkbox"} name={"rememberMe"} id="rememberMe" component={Input} />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
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