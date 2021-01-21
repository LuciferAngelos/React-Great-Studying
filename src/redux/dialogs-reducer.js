const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [     //оформляем данные в почти джейсон файл
        {
            id: 1,
            message: 'Hi!'
        },
        {
            id: 2,
            message: 'Привет'
        },
        {
            id: 3,
            message: 'Че делаешь?'
        },
        {
            id: 4,
            message: 'Куку! Как дела?'
        },
        {
            id: 5,
            message: 'Завтра гуляешь?'
        },
        {
            id: 6,
            message: 'Я видел тебя вчера...'
        }
    ],
    dialogs: [     //оформляем данные в почти джейсон файл
        {
            id: 1,
            name: 'Коля'
        },
        {
            id: 2,
            name: 'Маша'
        },
        {
            id: 3,
            name: 'Катя'
        },
        {
            id: 4,
            name: 'Жорж'
        },
        {
            id: 5,
            name: 'Игнат'
        },
        {
            id: 6,
            name: 'ПеДеомитя'
        }
    ],
    userAvatar: [
        {
            id: 1,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjiwVkKQQlPupAlapBSv-p5LE0Rv7FpqAIaPHciIhpFqv3zOz&s',
            alt: 'User`s Avatar!'
        },
        {
            id: 2,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1_cB_z2jVf-eK2Yo6ePIJMwt5DWNnazeauE9BKh9C4P8cVMs&s',
            alt: 'User`s Avatar!'
        },
        {
            id: 3,
            src: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg',
            alt: 'User`s Avatar!'
        },
        {
            id: 4,
            src: 'https://banner2.cleanpng.com/20180128/yvw/kisspng-ninja-ico-icon-black-ninja-5a6dee087cdc18.5588411915171538005114.jpg',
            alt: 'User`s Avatar!'
        },
        {
            id: 5,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbsBSPWYZK6exsVL86MJuEIOxkWAdAYdxiOCjBCDXq3u2f9RkAw&s',
            alt: 'User`s Avatar!'
        },
        {
            id: 6,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzO9Grv30ae9fD7Fo7VG-XtoE6wIe69RWcgKC574mfQF0Wp-yzkA&s',
            alt: 'User`s Avatar!'
        },
    ]
}

const dialogsReducer = (state = initialState, action) => {      //приняли стейт, экшн

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {
                    id: 7,
                    message: body
                }]      //и в спред операторе запушили новый элемент
            };      //копирование объекта в одну строчку через запятую
        default:
            return state        //возвращает стейт
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}


export default dialogsReducer