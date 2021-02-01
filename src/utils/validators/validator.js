export const required = (value) => {
    if (value) {
        return undefined
    }

    return 'Field is required'
}

//thunk
export const maxLegnthCreator = (maxLength) => (value) => {       //создаём санку, чтобы передавать maxlength
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`

    return undefined
}
