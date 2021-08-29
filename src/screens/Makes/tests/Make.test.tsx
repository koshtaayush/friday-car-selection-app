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
        const component = shallow(<Make />)

        expect(component).toMatchSnapshot()
    })

    test('Should show loader when loading state is true', () => {
        const initialStateForLoading = true
        const initialStateForSearchValue = ''
        const initialStateForMakes = []
        const initialStateForIsError = false

        React.useState = jest
            .fn()
            .mockReturnValueOnce([initialStateForLoading, {}])
            .mockReturnValueOnce([initialStateForSearchValue, {}])
            .mockReturnValueOnce([initialStateForMakes, {}])
            .mockReturnValueOnce([initialStateForIsError, {}])

        const component = shallow(<Make />)

        expect(component.find({ 'test-id': 'makeLoadingPill' })).toHaveLength(
            12
        )
    })

    test('Should not show loader when loading state is false', () => {
        const initialStateForLoading = false
        const initialStateForSearchValue = ''
        const initialStateForMakes = []
        const initialStateForIsError = false

        React.useState = jest
            .fn()
            .mockReturnValueOnce([initialStateForLoading, {}])
            .mockReturnValueOnce([initialStateForSearchValue, {}])
            .mockReturnValueOnce([initialStateForMakes, {}])
            .mockReturnValueOnce([initialStateForIsError, {}])

        const component = shallow(<Make />)

        expect(component.find({ 'test-id': 'makeLoadingPill' })).toHaveLength(0)
    })

    test('Should show error component when error comes', () => {
        const initialStateForLoading = false
        const initialStateForSearchValue = ''
        const initialStateForMakes = []
        const initialStateForIsError = true

        React.useState = jest
            .fn()
            .mockReturnValueOnce([initialStateForLoading, {}])
            .mockReturnValueOnce([initialStateForSearchValue, {}])
            .mockReturnValueOnce([initialStateForMakes, {}])
            .mockReturnValueOnce([initialStateForIsError, {}])

        const component = shallow(<Make />)

        expect(component.find({ 'test-id': 'makeError' })).toHaveLength(1)
    })
    
    test('Should show proper results after search', () => {
        const initialStateForLoading = false
        const initialStateForSearchValue = 'bm'
        const initialStateForMakes = ['Cadillac', 'Mini (Bmw)', 'Bmw']
        const initialStateForIsError = false

        React.useState = jest
            .fn()
            .mockReturnValueOnce([initialStateForLoading, {}])
            .mockReturnValueOnce([initialStateForSearchValue, {}])
            .mockReturnValueOnce([initialStateForMakes, {}])
            .mockReturnValueOnce([initialStateForIsError, {}])

        const component = shallow(<Make />)

        expect(component.find({ 'test-id': 'makePill' })).toHaveLength(2)
    })
    
    test('Should show all results if search is empty', () => {
        const initialStateForLoading = false
        const initialStateForSearchValue = ''
        const initialStateForMakes = ['Cadillac', 'Mini (Bmw)', 'Bmw']
        const initialStateForIsError = false

        React.useState = jest
            .fn()
            .mockReturnValueOnce([initialStateForLoading, {}])
            .mockReturnValueOnce([initialStateForSearchValue, {}])
            .mockReturnValueOnce([initialStateForMakes, {}])
            .mockReturnValueOnce([initialStateForIsError, {}])

        const component = shallow(<Make />)

        expect(component.find({ 'test-id': 'makePill' })).toHaveLength(3)
    })
})
