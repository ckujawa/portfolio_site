import React from 'react'
import renderer from 'react-test-renderer'

import { navigator } from '../components/navigator'

describe('navigator', () => {
  it('renders-correctly', () => {
    const tree = renderer.create(<navigator />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
