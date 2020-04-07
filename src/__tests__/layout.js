import React from 'react'
import renderer from 'react-test-renderer'

import { Layout } from '../components/layout'

describe('Layout', () => {
  it('renders_correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Test Site Title',
        },
      },
    }
    const tree = renderer
      .create(
        <Layout data={data}>
          <p>test</p>
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
