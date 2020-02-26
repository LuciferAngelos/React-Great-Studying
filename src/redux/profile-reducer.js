const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {      //приняли стейт, экшн

    switch (action.type) {       //по сути, тип - это строковая константа
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state        //возвращает стейт

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state        //возвращает стейт
        default:
            return state
    }

    //не указываем брейк, потому что делаем return после каждого кейса    
}

export const addPostActionCreator = () => {      //создаём функцию для создания экшенов
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text       //указываем обязательно newText, т.к. в стейте, т.е. в бизнесс-логике, в диспатче указано именно newText

})

export default profileReducer