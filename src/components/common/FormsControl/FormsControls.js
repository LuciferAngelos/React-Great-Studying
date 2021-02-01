import React from 'react'
import s from './FormsControl.module.css'


const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched &&
        meta.error  //если инпут был затронут и есть ошибка

    //{props.child} - через child можно передать какие-то данные от ребёнка, т.е, от компоненты, которая будет пользоваться этой обёрткой

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            {props.children}
            {hasError && <span>{meta.error}</span>
            }
        </div>
    )
}

export const Textarea = (props) => {            //пропсы будут содержать все, кроме input и meta
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {            //пропсы будут содержать все, кроме input и meta
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} />
        </FormControl>
    )
}
