import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post id={props.id} message={p.message} likesCount={p.likesCount} />)


    //ref`ы не рекомендуется использовать часто...

    let newPostElement = React.createRef()      //создаём ссылку и привязываем к конкретному textarea

    let addPost = () => {

        let text = newPostElement.current.value;        //запрашиваем значение у конктерного элемента
        props.addPost(text)

        newPostElement.current.value = '';
    }

    return (
        <div className={s.content}>

            <div className={s.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
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