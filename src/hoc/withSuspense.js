import React from 'react'
import Preloader from '../components/common/Preloader/Preloader'

//hoc - компонент высшего порядка. Это функция, которая принимает один компонент на входе и возвращает другой компонент
export const withSuspense = (Component) => {

    return (props) => {
        return <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>
    }
}