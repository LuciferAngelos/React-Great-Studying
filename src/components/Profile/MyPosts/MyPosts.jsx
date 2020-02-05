import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post id={props.id} message={p.message} likesCount={p.likesCount} />)


    //ref`ы не рекомендуется использовать часто...

    let newPostElement = React.createRef()      //создаём ссылку и привязываем к конкретному textarea

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;        //запрашиваем значение у конктерного элемента
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };      //указываем обязательно newText, т.к. в стейте, т.е. в бизнесс-логике, в диспатче указано именно newText
        
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