import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/helpers/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false || []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })

                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return { ...user, followed: true }
                //     }
                //     return user;
                // })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })



                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return { ...user, followed: false }
                //     }
                //     return user;
                // })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))

        let data = await usersAPI.getUsers(page, pageSize);      //если thunk что-то возвращает, то результат его возврата мы записываем в переменную. Соответственно, мы записываем результат промиса

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId);        //если thunk что-то возвращает, то результат его возврата мы записываем в переменную. Соответственно, мы записываем результат промиса

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))        //если отписка произошла и сервер это подтвердил, то тогда отписка происходит. Запрос отправляется только после подтверждения сервером
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        //производим рефакторинг, чтобы уменьшить код и вынести общие действия в третью функцию followUnfollowFlow. 
        //Для этого мы выносим действия, которые относятся только к конкретной санке в переменные
        let apiMethod = usersAPI.follow.bind(usersAPI);
        let actionCreator = followSuccess;

        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        //производим рефакторинг, чтобы уменьшить код и вынести общие действия в третью функцию followUnfollowFlow. 
        //Для этого мы выносим действия, которые относятся только к конкретной санке в переменные

        //можно не создавать отдельные переменные, а сразу передать методы в функцию. *** Имхо, в переменных выглядит нагляднее

        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)

    }
}

export default usersReducer;

//thunk - это функция, которая принимает функцию dispatch и диспатчит обычные экшены