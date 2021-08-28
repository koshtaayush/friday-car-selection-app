import React from 'react'
import { shallow } from 'enzyme'

import Input from '..'

describe('Input', () => {
    it('Should match the snapshot', () => {
        const mockFn = jest.fn()

        const component = shallow(
            <Input
                placeHolderText={'Dummy placeholder text'}
                onChangeProp={mockFn}
                inputValue={'Hello'}
            />
        )

        expect(component).toMatchSnapshot()
    })

    it('Should render the input component correctly', () => {
        const mockFn = jest.fn()

        const component = shallow(
            <Input
                placeHolderText={'Dummy placeholder text'}
                onChangeProp={mockFn}
                inputValue={'Hello'}
            />
        )

        expect(component.find({ 'test-id': 'input' })).toHaveLength(1)
    })

    it('Should pass the same value which is passed', () => {
        const mockFn = jest.fn()

        const component = shallow(
            <Input
                placeHolderText={'Dummy placeholder text'}
                onChangeProp={mockFn}
                inputValue={'Hello'}
            />
        )

        expect(component.find({ 'test-id': 'input' }).props().value).toEqual(
            'Hello'
        )
    })
})
