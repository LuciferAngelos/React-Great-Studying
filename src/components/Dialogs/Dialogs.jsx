import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import UserAvatar from './DialogItem/UserAvatar'
import Answer from './Message/Answer'


const Dialogs = (props) => {

    let userAvatar = props.state.userAvatar.map(a => <UserAvatar src={a.src} alt={a.alt} />)

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

    // let answerElement = 

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
                    {messagesElements}
                </div>
                <div>
                    <Answer />
                    <Answer />
                    <Answer />
                    <Answer />
                    <Answer />
                    <Answer />
                    
                </div>
            </div>
        </div >
    )
}

export default Dialogs