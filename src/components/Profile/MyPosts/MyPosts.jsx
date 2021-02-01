import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLegnthCreator, required } from '../../../utils/validators/validator'
import { Textarea } from '../../common/FormsControl/FormsControls'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const maxLength10 = maxLegnthCreator(10);

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post id={props.id} message={p.message} likesCount={p.likesCount} />)


    //ref`ы не рекомендуется использовать часто...

    let newPostElement = React.createRef()      //создаём ссылку и привязываем к конкретному textarea

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
        values.newPostText = ''
    }


    return (
        <div className={s.content}>

            <div className={s.postBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost} />
                <div className={s.posts}>
                    {postsElements}

                </div >
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field value={props.newPostText} name={"newPostText"} placeholder={"You can post here!"} component={Textarea} placeholder={"Post Message"}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm)

export default MyPosts