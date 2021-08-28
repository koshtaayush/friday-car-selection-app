import React from 'react'
import { shallow } from 'enzyme'

import Search from '..'

describe('Search', () => {
    it('Should match the snapshot', () => {
        const mockFn = jest.fn()

        const component = shallow(
            <Search
                placeholder={'Placeholder text'}
                value= {'Input Value'}
                onChangeProp= {mockFn}
            />
        )

        expect(component).toMatchSnapshot()
    })
})
