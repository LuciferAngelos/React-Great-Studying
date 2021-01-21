import React from 'react'
// import Answer from './Message/Answer'
import { sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))        //криэйтор вызываем. Нам нужно именно получить данные
        }

    }
};


//вызвали функцию коннект, а затем вызываем ту функцию, которую вызвала функция connect. Законнектили компоненту Dialogs к стору

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);