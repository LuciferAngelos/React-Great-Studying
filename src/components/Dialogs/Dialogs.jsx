import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import UserAvatar from './DialogItem/UserAvatar'
// import Answer from './Message/Answer'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let userAvatar = state.userAvatar.map(a => <UserAvatar src={a.src} alt={a.alt} />)

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = state.messages.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {       //передаём объект события
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
                    <div>
                        <div>
                             <textarea placeholder='Возможно, стоит ответить?' value={newMessageBody} onChange={onNewMessageChange}></textarea> 
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}> Отправить</button>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <Answer />
                    <Answer />
                    <Answer />
                    <Answer />
                    <Answer />
                    <Answer />

                </div> */}
            </div>
        </div >
    )
}

export default Dialogs