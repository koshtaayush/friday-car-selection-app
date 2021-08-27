import React from 'react'
import { shallow } from 'enzyme'

import Button from '..';

describe('Button', () => {

    it('Should match the snapshot', () => {

        const mockFn = jest.fn()

        const component = shallow(
            <Button 
                onClickProp={mockFn}
                buttonType={'S'}
        />);  

        expect(component).toMatchSnapshot();
    })

    it('Should render the button component correctly', () => {

        const mockFn = jest.fn()

        const component = shallow(
            <Button 
                onClickProp={mockFn}
                buttonType={'S'}
        />);    

        expect(component.find({ 'test-id': 'buttonTest' })).toHaveLength(1)
    })
    
    it('Should pass the same value which is passed', () => {

        const mockFn = jest.fn()

        const component = shallow(
            <Button 
                onClickProp={mockFn}
                buttonType={'S'}
        />);  

        expect(component.find({ 'test-id': 'buttonTest' }).props().buttonType).toEqual('S');
    })
    
    it('Should render the proper name of button', () => {

        const mockFn = jest.fn()

        const component = shallow(
            <Button 
                onClickProp={mockFn}
                buttonType={'S'}
        />);  

        expect(component.text()).toEqual('Send');
    })
    
})
