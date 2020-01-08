import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
    return (
        <div className={s.content}>

            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post
                        message='Hi! How are you?'
                        likesCount='10' />
                    <Post
                        message='It is the first post!'
                        likesCount='26' />

                </div >
            </div>
        </div>
    )
}

export default MyPosts