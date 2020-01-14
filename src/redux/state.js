let state = {       //пакуем данные в один объект
    profilePage:{       //группируем данные по компонентам
        posts:[     //оформляем данные в почти джейсон файл
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
    },
    dialogsPage:{
        messages: [     //оформляем данные в почти джейсон файл
            {
                id: 1,
                message: 'Hi!'
            },
            {
                id: 1,
                message: 'Привет'
            },
            {
                id: 1,
                message: 'Че делаешь?'
            },
            {
                id: 1,
                message: 'Куку! Как дела?'
            },
            {
                id: 1,
                message: 'Завтра гуляешь?'
            },
            {
                id: 1,
                message: 'Я видел тебя вчера...'
            }
        ],
        dialogs: [     //оформляем данные в почти джейсон файл
            {
                id: 1,
                name: 'Коля'
            },
            {
                id: 1,
                name: 'Маша'
            },
            {
                id: 1,
                name: 'Катя'
            },
            {
                id: 1,
                name: 'Жорж'
            },
            {
                id: 1,
                name: 'Игнат'
            },
            {
                id: 1,
                name: 'ПеДеомитя'
            }
        ]
    },
    sitebar:{
        
    }
}

export default state