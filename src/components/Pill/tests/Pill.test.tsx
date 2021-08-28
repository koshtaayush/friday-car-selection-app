import React from 'react'
import { shallow } from 'enzyme'

import Pill from '..'

describe('Pill', () => {
    it('Should match the snapshot', () => {
        const mockFn = jest.fn()

        const component = shallow(
            <Pill
                value={'Car Name'}
                onClickProp={mockFn}
            />
        )

        expect(component).toMatchSnapshot()
    })

    it('Should render the Pill text correctly', () => {
        const mockFn = jest.fn()

        const component = shallow(
            <Pill
            value={'Car Name'}
            onClickProp={mockFn}
        />
        )

        expect(component.find({ 'test-id': 'name' }).text()).toEqual('car name')
    })
    
    it('Should execute click method on click event correctly', () => {
        const mockFn = jest.fn()

        const component = shallow(
            <Pill
            value={'Car Name'}
            onClickProp={mockFn}
        />)

        component.find({ 'test-id': 'pillContainer'}).simulate("click")
        expect(mockFn).toHaveBeenCalled()
    })

    
})
