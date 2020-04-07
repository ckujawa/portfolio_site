import React from 'react'
import renderer from 'react-test-renderer'

import { tagLine } from '../components/tagLine'

describe('tagLine', () => {
  it('renders-correctly', () => {
    const tree = renderer.create(<tagLine />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
