import React from 'react'
import renderer from 'react-test-renderer'

import { Footer } from '../components/footer'

describe('Footer', () => {
  it('renders_correctly', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
