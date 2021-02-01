import { createSelector } from "reselect";
//библиотека ресилект позволяет создавать зависимости в своих функциях. 
//Реселект будет отслеживать, были ли изменения в какой-то функции и, если были, то он пересчитает. Если не было, то в перерассчете нет смысла
//Реселект вызывает только тогда, когда это нужно делать
//+библиотека инкапсулирует детали


const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector,       //возвращает селектор. Не можем передать весь стейт. Нужно сделать специальный юзерский селектор. Сначала передаём функцию первым параметром, а потом вызов функции с параметром users
    (users) => { return users.filter(u => true) }
)

export const getPageSize = (state) => {       //селектор - это функция, которая принимает стейт, достатает из него то, что нужно и возвращает это
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {       //селектор - это функция, которая принимает стейт, достатает из него то, что нужно и возвращает это
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {       //селектор - это функция, которая принимает стейт, достатает из него то, что нужно и возвращает это
    return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {       //селектор - это функция, которая принимает стейт, достатает из него то, что нужно и возвращает это
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state) => {       //селектор - это функция, которая принимает стейт, достатает из него то, что нужно и возвращает это
    return state.usersPage.followingInProgress;
}
// export const countSomethingDifficult = (state) => {       //селектор - это функция, которая принимает стейт, достатает из него то, что нужно и возвращает это
//     //for...math methods, big arrays

//     return state.usersPage.followingInProgress;
// }



