import React from 'react';
import s from './users.module.css'
import userPhoto from '../../assets/img/avatarImg.png'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.paginationWrapper}>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectPage : ''} onClick={() => { props.onPageChanged(p); }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id} >
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        usersAPI.unfollow(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)        //если отписка произошла и сервер это подтвердил, то тогда отписка происходит. Запрос отправляется только после подтверждения сервером
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            });

                                    }}>

                                        Unfollow</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        usersAPI.follow(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)        //если подписка произошла и сервер это подтвердил, то тогда подписка происходит. Запрос отправляется только после подтверждения сервером
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            });

                                    }}>
                                        Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div >
    )
}

export default Users