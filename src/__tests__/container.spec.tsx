import { render, screen } from '@testing-library/react'

import Container from '../container'

describe('<Container /> Component', () => {
  test('render <Container />', () => {
    render(
      <Container>
        <h1>Container component</h1>
      </Container>
    )

    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('Container component')
    expect(container).toHaveClass('container')
    expect(container).toMatchSnapshot()
  })

  test('render <Container /> with fluid props', () => {
    render(
      <Container fluid>
        <h1>Container fluid component</h1>
      </Container>
    )
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('Container fluid componen')
    expect(container).toHaveClass('container-fluid')
    expect(container).not.toHaveClass('container')
    expect(container).toMatchSnapshot()
  })

  test('render <Container /> with breakpoints props', () => {
    render(
      <Container sm md lg xl xxl>
        <h1>Container with breakpoints</h1>
      </Container>
    )

    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('Container with breakpoints')
    expect(container).toHaveClass('container-sm')
    expect(container).toHaveClass('container-md')
    expect(container).toHaveClass('container-lg')
    expect(container).toHaveClass('container-xl')
    expect(container).toHaveClass('container-xxl')
    expect(container).toMatchSnapshot()
  })
})
