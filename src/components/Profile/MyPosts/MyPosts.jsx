import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPosttextActionCreator} from '../../../redux/profile-reducer'




const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post id={props.id} message={p.message} likesCount={p.likesCount} />)


    //ref`ы не рекомендуется использовать часто...

    let newPostElement = React.createRef()      //создаём ссылку и привязываем к конкретному textarea

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;        //запрашиваем значение у конктерного элемента
        let action = updateNewPosttextActionCreator(text)
        
        props.dispatch(action);     
    }

    return (
        <div className={s.content}>

            <div className={s.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}

                </div >
            </div>
        </div>
    )
}

export default MyPosts