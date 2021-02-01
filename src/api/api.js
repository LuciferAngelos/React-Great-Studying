import * as Axios from 'axios';

//подключили библиотеку Axios. 
//Axios нужен для отправки запросов и получения данных на\с сервера



let instance = Axios.create({        //инстанс, изменяемый экземпляр объекта, куда мы можем передамть необходимые нам параметры
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',       //именно обязательно baseURL. По-другому не будет работать
    headers: {
        "API-KEY": "0bbf385b-665b-41bd-a81a-d9ea10f6280a"
    }       //заголовки ответов\запросов. Здесь передадим АПИ ключ

});


export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow: (id) => {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow: (id) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)

    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {
            status: status
        })
    }
}
export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)

    }
}




