import React from 'react'
import { Field } from 'redux-form'
import s from './FormsControl.module.css'


const FormControl = ({ input, meta: { touched, error }, child, children }) => {
    const hasError = touched && error  //если инпут был затронут и есть ошибка

    //{props.child} - через child можно передать какие-то данные от ребёнка, т.е, от компоненты, которая будет пользоваться этой обёрткой

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            {children}
            {hasError && <span>{error}</span>
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

export const createField = (placeholder, name, validators, component, id, className, props = {}, text = "") => (
    <div>
        <Field {...props} name={name} placeholder={placeholder} component={component} validate={validators} id={id} className={className} /> { text}
    </div>

)
