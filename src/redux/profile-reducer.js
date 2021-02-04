import { profileAPI, usersAPI } from "../api/api";



const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {      //приняли стейт, экшн
    switch (action.type) {       //по сути, тип - это строковая константа
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.postId != action.postId)     //отфильтруем по ИД. Если ИД не равен action.postId, то 
            }
        }
        default:
            return state;

    }

    //не указываем брейк, потому что делаем return после каждого кейса    
}

//action creator

export const addPostActionCreator = (newPostText) => {      //создаём функцию для создания экшенов
    return {
        type: ADD_POST, newPostText                 //указываем обязательно newText, т.к. в стейте, т.е. в бизнесс-логике, в диспатче указано именно newText
    }
}
export const setStatus = (status) => ({
    type: SET_STATUS, status
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const deletePost = (postId) => ({
    type: DELETE_POST, postId
})

//thunk
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);        //если thunk что-то возвращает, то результат его возврата мы записываем в переменную. Соответственно, мы записываем результат промиса

    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);       //если thunk что-то возвращает, то результат его возврата мы записываем в переменную. Соответственно, мы записываем результат промиса
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);        //если thunk что-то возвращает, то результат его возврата мы записываем в переменную. Соответственно, мы записываем результат промиса
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer