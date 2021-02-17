import React from 'react'
import { create } from 'react-test-render'
import ProfileStatus from './ProfileStatus'


describe('ProfileStatus component', () => {        // описываем компонент, который хотим тестить
    test('Status from props should be in the state', () => {
        const instance = create(<ProfileStatus status='Subscribe to basic' />)
        const component = component.getInstance();      //instance - экземпляр
        expect(instance.state.text).toBe('Subscribe to basic');
    })
})















//npm i react-test-render --save-dev  библиотека для тестов. нужнл устанавливать такую же версию, как версия реакта. Правда, у меня не сработало npm i react-test-render@16.12.0 
//--save-dev нужен только для разработки. Полностью для проекта не нужна, поэтому, в dependencies не устанавливаем