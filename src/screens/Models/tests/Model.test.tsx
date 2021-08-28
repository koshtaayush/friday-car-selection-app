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

    test('Should show loader when loading state is true', () => {
        const initialStateForLoading = true
        const initialStateForSearchValue = ''
        const initialStateForModels = []
        const initialStateForIsError = false

        React.useState = jest
            .fn()
            .mockReturnValueOnce([initialStateForLoading, {}])
            .mockReturnValueOnce([initialStateForSearchValue, {}])
            .mockReturnValueOnce([initialStateForModels, {}])
            .mockReturnValueOnce([initialStateForIsError, {}])

        const component = shallow(<Model />)

        expect(component.find({ 'test-id': 'modelLoadingPill' })).toHaveLength(
            12
        )
    })

    test('Should show loader when loading state is false', () => {
        const initialStateForLoading = false
        const initialStateForSearchValue = ''
        const initialStateForModels = []
        const initialStateForIsError = false

        React.useState = jest
            .fn()
            .mockReturnValueOnce([initialStateForLoading, {}])
            .mockReturnValueOnce([initialStateForSearchValue, {}])
            .mockReturnValueOnce([initialStateForModels, {}])
            .mockReturnValueOnce([initialStateForIsError, {}])

        const component = shallow(<Model />)

        expect(component.find({ 'test-id': 'modelLoadingPill' })).toHaveLength(0)
    })

    test('Should show error component when error comes', () => {
        const initialStateForLoading = false
        const initialStateForSearchValue = ''
        const initialStateForModels = []
        const initialStateForIsError = true

        React.useState = jest
            .fn()
            .mockReturnValueOnce([initialStateForLoading, {}])
            .mockReturnValueOnce([initialStateForSearchValue, {}])
            .mockReturnValueOnce([initialStateForModels, {}])
            .mockReturnValueOnce([initialStateForIsError, {}])

        const component = shallow(<Model />)

        expect(component.find({ 'test-id': 'modelError' })).toHaveLength(1)
    })
})
