import React from 'react'
import { render } from '@testing-library/react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import RandomIcon from '../../../components/RandomIcon/RandomIcon'
import App from '../../../screens/App/App'

Enzyme.configure({ adapter: new Adapter() })


describe('App Screen', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('should render 20 RandomIcons', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(RandomIcon).length).toBe(20)
  })
})
