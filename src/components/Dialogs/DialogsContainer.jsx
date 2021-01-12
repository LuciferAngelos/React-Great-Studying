import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import UserAvatar from './DialogItem/UserAvatar'
// import Answer from './Message/Answer'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))      //криэйтор вызываем. Нам нужно именно получить данные
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }

    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)      //вызвали функцию коннект, а затем вызываем ту функцию, которую вызвала функция connect. Законнектили компоненту Dialogs к стору

export default DialogsContainer;