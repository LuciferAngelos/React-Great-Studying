const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {       //пакуем данные в один объект
        profilePage: {       //группируем данные по компонентам
            posts: [     //оформляем данные в почти джейсон файл
                {
                    id: 1,
                    message: 'Hi! How are you?',
                    likesCount: 120
                },
                {
                    id: 2,
                    message: 'Go to the KFC!',
                    likesCount: 44
                },
                {
                    id: 3,
                    message: 'Хуллоу!',
                    likesCount: 5
                },
                {
                    id: 4,
                    message: 'It is the first post!',
                    likesCount: 1
                }
            ],
            newPostText: 'Hello! You can post here!'
        },
        dialogsPage: {
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
        },
        sitebar: {
            friendDatas: [
                {
                    id: 1,
                    name: 'Коля',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjiwVkKQQlPupAlapBSv-p5LE0Rv7FpqAIaPHciIhpFqv3zOz&s',
                    alt: 'User`s Avatar!'
                },
                {
                    id: 1,
                    name: 'Маша',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1_cB_z2jVf-eK2Yo6ePIJMwt5DWNnazeauE9BKh9C4P8cVMs&s',
                    alt: 'User`s Avatar!'
                },
                {
                    id: 1,
                    name: 'Катя',
                    src: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg',
                    alt: 'User`s Avatar!'
                },
                {
                    id: 1,
                    name: 'Жорж',
                    src: 'https://banner2.cleanpng.com/20180128/yvw/kisspng-ninja-ico-icon-black-ninja-5a6dee087cdc18.5588411915171538005114.jpg',
                    alt: 'User`s Avatar!'
                },
                {
                    id: 1,
                    name: 'Игнат',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbsBSPWYZK6exsVL86MJuEIOxkWAdAYdxiOCjBCDXq3u2f9RkAw&s',
                    alt: 'User`s Avatar!'
                },
                {
                    id: 1,
                    name: 'ПеДеомитя',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzO9Grv30ae9fD7Fo7VG-XtoE6wIe69RWcgKC574mfQF0Wp-yzkA&s',
                    alt: 'User`s Avatar!'
                }
            ]
        },
        friendList: {


        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;      //паттерн observer-наблюдатель
    },

    dispatch(action) {      //action - это всегда объект. Type - text. К примеру, action.type === 'ADD-POST'. Передаём метод текстом
        if (action.type === ADD_POST) {       //по сути, тип - это строковая константа
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';

            this._callSubscriber(this._state);       //перериросываем весь СПА при изменении страницы. Передаём в пропсах стейт
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;

            this._callSubscriber(this._state);       //перериросываем весь СПА при изменении страницы. Передаём в пропсах стейт
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;

            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';

            this._state.dialogsPage.messages.push({
                id: 6,
                message: body
            })

            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator = () => {      //создаём функцию для создания экшенов
    return {
        type: ADD_POST
    }
}

export const updateNewPosttextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text       //указываем обязательно newText, т.к. в стейте, т.е. в бизнесс-логике, в диспатче указано именно newText

})

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

//в стрелочных функциях, если возвращается что-то одно, не тело функции, то можно убрать return. Но, т.к. здесь мы возвращаем объект, а в первую очередь функция обрабатывает фигурные скобки, как тело функции, то оборачиваем эти фигурные скобки в круглые



//обсервер. Наблюдатель. Слушатель. Ждём, когда изменится стейт ЮИ и присваиваем из index.js данные к функции-заглушке
export default store
window.store = store;


//store - ООП