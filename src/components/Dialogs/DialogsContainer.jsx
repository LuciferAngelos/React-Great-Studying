import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import UserAvatar from './DialogItem/UserAvatar'
// import Answer from './Message/Answer'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'


const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        { //фигурные скобки ОБЯЗАТЕЛЬНО должны быть на новой строчке
            (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body) => {       //передаём объект события
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
                />
            }
        }
    </StoreContext.Consumer>

}

export default DialogsContainer