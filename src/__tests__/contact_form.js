import React from 'react'
import renderer from 'react-test-renderer'

import ContactForm from '../components/contact_form'

describe('ContactForm', () => {
  it('renders_correctly', () => {
    const tree = renderer.create(<ContactForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
