import React from 'react'
import { shallow } from 'enzyme'

import ScreenMessenger from '..'

describe('ScreenMessenger', () => {
    it('Should match the snapshot', () => {

        const component = shallow(
            <ScreenMessenger
                primaryMessage={'Dummy Primary Message'}
                secondaryMessage={'Dummy Seconday Message'}
            />
        )

        expect(component).toMatchSnapshot()
    })

    it('Should render the ScreenMessenger text correctly', () => {

        const component = shallow(
            <ScreenMessenger
                primaryMessage={'Dummy Primary Message'}
                secondaryMessage={'Dummy Seconday Message'}
            />
        )

        expect(component.find({ 'test-id': 'primaryMessage' }).text()).toEqual('Dummy Primary Message')
        expect(component.find({ 'test-id': 'secondaryMessage' }).text()).toEqual('Dummy Seconday Message')
    })
    
})
