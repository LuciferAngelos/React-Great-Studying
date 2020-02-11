const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [     //оформляем данные в почти джейсон файл
        {
            id: 1,
            message: 'Hi!'
        },
        {
            id: 1,
            message: 'Привет'
        },
        {
            id: 1,
            message: 'Че делаешь?'
        },
        {
            id: 1,
            message: 'Куку! Как дела?'
        },
        {
            id: 1,
            message: 'Завтра гуляешь?'
        },
        {
            id: 1,
            message: 'Я видел тебя вчера...'
        }
    ],
    dialogs: [     //оформляем данные в почти джейсон файл
        {
            id: 1,
            name: 'Коля'
        },
        {
            id: 1,
            name: 'Маша'
        },
        {
            id: 1,
            name: 'Катя'
        },
        {
            id: 1,
            name: 'Жорж'
        },
        {
            id: 1,
            name: 'Игнат'
        },
        {
            id: 1,
            name: 'ПеДеомитя'
        }
    ],
    userAvatar: [
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjiwVkKQQlPupAlapBSv-p5LE0Rv7FpqAIaPHciIhpFqv3zOz&s',
            alt: 'User`s Avatar!'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1_cB_z2jVf-eK2Yo6ePIJMwt5DWNnazeauE9BKh9C4P8cVMs&s',
            alt: 'User`s Avatar!'
        },
        {
            src: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg',
            alt: 'User`s Avatar!'
        },
        {
            src: 'https://banner2.cleanpng.com/20180128/yvw/kisspng-ninja-ico-icon-black-ninja-5a6dee087cdc18.5588411915171538005114.jpg',
            alt: 'User`s Avatar!'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbsBSPWYZK6exsVL86MJuEIOxkWAdAYdxiOCjBCDXq3u2f9RkAw&s',
            alt: 'User`s Avatar!'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzO9Grv30ae9fD7Fo7VG-XtoE6wIe69RWcgKC574mfQF0Wp-yzkA&s',
            alt: 'User`s Avatar!'
        },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {      //приняли стейт, экшн

    switch (action.type) {
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