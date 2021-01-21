import React from 'react'
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
    return (
        //компонента Field специально необходима для того, чтобы отрисовать те тэги, которые нам нужны в форме - input, textarea и т.д. Соответственно, далее мы указываем сам компонент, который нужно отрисовать - component={'...'}. Button не трогаем. props.handleSubmit - обработчик для сабмита формы - делает preventDefault, собирает все данные, вызывает функцию onSubmit и передаёт объект с данными
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field type={"text"} name={'login'} placeholder={"Login"} component={"input"} />
            </div>
            <div>
                <Field type={"password"} name={"password"} id="" placeholder={"Password"} component={"input"} />
            </div>
            <div>

                <Field type={"checkbox"} name={"rememberMe"} id="rememberMe" component={"input"} />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
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
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login