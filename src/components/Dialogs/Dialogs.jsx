import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import UserAvatar from './DialogItem/UserAvatar'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
// import Answer from './Message/Answer'

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let userAvatar = state.userAvatar.map(a => <UserAvatar src={a.src} alt={a.alt} key={a.id} />)

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

    let newMessageBody = state.newMessageBody


    let addNewMessageChange = (values) => {       //передаём объект события
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) {        //есои пользователь не залогинен, то его перекинет компонентой Redirect на страницу логина
        return <Redirect to={'/login'} />
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.userAvatar}>
                    {userAvatar}
                </div>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>

                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessageChange} />

        </div>

    )
}
const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Возможно, стоит ответить?'} name={"newMessageBody"} component={'textarea'} />
            </div>
            <div>
                <button> Отправить</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(addMessageForm)


export default Dialogs