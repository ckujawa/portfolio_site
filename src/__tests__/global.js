import React from 'react'
import renderer from 'react-test-renderer'

import { GlobalStyle } from '../components/global'

describe('GlobalStyle', () => {
  it('renders_correctly', () => {
    const tree = renderer.create(<GlobalStyle />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
