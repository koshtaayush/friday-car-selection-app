import React from 'react'
import { shallow } from 'enzyme'
import Model from '..'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
    }),
}))

describe('Model', () => {

    it('Should match the snapshot', () => {
        const component = shallow(
            <Model />
        )

        expect(component).toMatchSnapshot()
    })
})
