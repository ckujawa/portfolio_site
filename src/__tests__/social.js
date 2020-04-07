import React from 'react'
import renderer from 'react-test-renderer'

import { SocialBlock } from '../components/social'
import { render } from 'react-dom'

describe('SocialBlock', () => {
  it('renders-correctly', () => {
    const tree = renderer
      .create(
        <SocialBlock>
          <p>one</p>
          <p>two</p>
        </SocialBlock>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree.children).toHaveLength(2)
  })
})
