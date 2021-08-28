import React from 'react'
import { shallow } from 'enzyme'
import Vehicle from '..'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
    }),
}))

describe('Vehicle', () => {

    it('Should match the snapshot', () => {
        const component = shallow(
            <Vehicle />
        )

        expect(component).toMatchSnapshot()
    })
})
