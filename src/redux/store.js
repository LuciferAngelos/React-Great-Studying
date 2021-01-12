import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";

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
            newPostText: 'Hello! You can type your post here!'
        },
        dialogsPage: {
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
                    id: 2,
                    name: 'Маша',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1_cB_z2jVf-eK2Yo6ePIJMwt5DWNnazeauE9BKh9C4P8cVMs&s',
                    alt: 'User`s Avatar!'
                },
                {
                    id: 3,
                    name: 'Катя',
                    src: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg',
                    alt: 'User`s Avatar!'
                },
                {
                    id: 4,
                    name: 'Жорж',
                    src: 'https://banner2.cleanpng.com/20180128/yvw/kisspng-ninja-ico-icon-black-ninja-5a6dee087cdc18.5588411915171538005114.jpg',
                    alt: 'User`s Avatar!'
                },
                {
                    id: 5,
                    name: 'Игнат',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbsBSPWYZK6exsVL86MJuEIOxkWAdAYdxiOCjBCDXq3u2f9RkAw&s',
                    alt: 'User`s Avatar!'
                },
                {
                    id: 6,
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);      //исходя из работы редьюсеров, мы к определённому свойству стейта присваиваем экспортированную функцию и передаём в неё состояние стейта и action

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._state.sitebar = sitebarReducer(this._state.sitebar, action)

        this._callSubscriber(this._state);       //перериросываем весь СПА при изменении страницы. Передаём в пропсах стейт

    }
}






//в стрелочных функциях, если возвращается что-то одно, не тело функции, то можно убрать return. Но, т.к. здесь мы возвращаем объект, а в первую очередь функция обрабатывает фигурные скобки, как тело функции, то оборачиваем эти фигурные скобки в круглые



//обсервер. Наблюдатель. Слушатель. Ждём, когда изменится стейт ЮИ и присваиваем из index.js данные к функции-заглушке
export default store
window.store = store;


//store - ООП

//reducer - это чистая функция, которая принимает action, принимает кусок state, который относится к редьюсеру, если нужно применяет этот action применяет к этому стейту и возвращает новый стейт или возвращает стейт, который был не изменённым

// npm i redux --save устанавливаем редакс