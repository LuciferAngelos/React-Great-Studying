import React from 'react'

const StoreContext = React.createContext(null)      //создаём контекст, компоненту и передаём туда для начала null

export const Provider = (props) => {
    return <StoreContext.Provider value={props.store} >
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext

//.Provider - предоставляет контекст
//.Consumer - получает данные