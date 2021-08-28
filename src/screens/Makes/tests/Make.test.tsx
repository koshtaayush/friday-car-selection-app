import React from 'react'
import { shallow } from 'enzyme'
import Make from '..'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
    }),
}))

describe('Make', () => {

    it('Should match the snapshot', () => {
        const component = shallow(
            <Make />
        )

        expect(component).toMatchSnapshot()
    })
})
