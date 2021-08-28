import React from 'react'
import { shallow } from 'enzyme'

import LoadingPill from '..'

describe('LoadingPill', () => {
    it('Should match the snapshot', () => {

        const component = shallow(
            <LoadingPill/>
        )

        expect(component).toMatchSnapshot()
    })
})
