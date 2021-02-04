import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
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
    ]
};

it('length of new state posts should incremented', () => {
    //1. готовим исходные данные

    let action = addPostActionCreator('some new text');


    //2. делаем какой-то экшн

    let newState = profileReducer(state, action);

    //3. ожидания

    expect(newState.posts.length).toBe(5)
})
it('new post message should be correct', () => {
    //1. готовим исходные данные

    let action = addPostActionCreator('some new text');
    //2. делаем какой-то экшн

    let newState = profileReducer(state, action);

    //3. ожидания

    expect(newState.posts[4].message).toBe('some new text')
})
it('length after deleting should be decremented', () => {
    //1. готовим исходные данные

    let action = deletePost(1);
    //2. делаем какой-то экшн

    let newState = profileReducer(state, action);

    //3. ожидания

    expect(newState.posts.length).toBe(4)
})
it('length after deleting should not be decremented if postId is incorrect', () => {
    //1. готовим исходные данные

    let action = deletePost(1000);
    //2. делаем какой-то экшн

    let newState = profileReducer(state, action);

    //3. ожидания

    expect(newState.posts.length).toBe(4)
})

