const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) =>{      //приняли стейт, экшн

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state        //возвращает стейт
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
    
            state.messages.push({
                id: 6,
                message: body
            })
            return state        //возвращает стейт
        default:
            return state        //возвращает стейт
    }
} 

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer