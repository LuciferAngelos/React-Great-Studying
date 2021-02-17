import React, { useState } from 'react';
import s from './Paginator.module.css'

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10, ...props }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);     //делим общее кол-во пользователей на кол-во страниц и получаем, сколько всего есть страниц
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount / portionSize);      //дробим на порции. Находим кол-во порций
    let [portionNumber, setPortionNumber] = useState(1);;            //если визуально что-то меняется, то в каком-то стейте что-то происходит (в глобальном или локальном). Задаем начальное значение 1, т.е. данный хук со старта будет хранить первую порцию и функцию, которая будет менять portionNumber
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;      //получаем левую границу
    let rightPortionPageNumber = portionNumber * portionSize;       //получаем правую границу

    //показывай кнопку Влево, если portionNumber больше 1

    return (
        <div className={s.paginationWrapper}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span className={props.currentPage === p ? s.selectPage : ''} onClick={() => { onPageChanged(p); }}>{p} </span>
                    })
            }
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
            }
        </div>

    )
}

export default Paginator