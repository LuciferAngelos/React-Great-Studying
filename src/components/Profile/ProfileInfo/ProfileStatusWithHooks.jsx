import React, { useEffect, useState } from 'react'


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);        //возвращает массив. Через деструктуризацию достаём элементы
    let [status, setStatus] = useState(props.status);        //возвращает массив. Через деструктуризацию достаём элементы

    useEffect(() => {        //хук, который необходим для выполнения чего-либо после того, когда произойдёт отрисовка компонента. Передача пустого массива означает, чтобы выполнилось 1 раз
        setStatus(props.status)     //синхронизируем статус со статусом из пропсов
    }, [props.status])      //указываем на то, что useEffect должен отработать именно тогда, когда изменяется статус. Если не указывать второй параметр, то этот хук будет вызываться все время
    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (

        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "--------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onBlur={deactivateEditMode} autoFocus onChange={onStatusChange} value={status} />
                </div>
            }
        </div >
    )
}


export default ProfileStatusWithHooks