import React from 'react'
import s from './../Dialogs.module.css'




const Answer = () => {
    //создали рефку, ссылку на что-то, и привязали её к тексэреа.
    //далее сделали функцию, которую повесили на кнопку. Функция получает данные из текстэреа и передаёт в алерт при клике на кнопку


    let ref  = React.createRef();
    let getTextFromTextarea = () => {
        let text = ref.current.value;
        alert(text)
    }
    return (
        <div className={s.answerArea}>
            <textarea className={s.answer} placeholder='Возможно, стоит ответить?' ref={ref}></textarea>
            <button className={s.addAnswer} onClick={getTextFromTextarea}>Ответить</button>
        </div>
    )
}


export default Answer