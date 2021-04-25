import { render, screen } from '@testing-library/react'

import Col from '../col'

describe('<Col /> Component', () => {
  test('render <Col />', () => {
    render(
      <Col>
        <h1>Col component</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('Col component')
    expect(col).toHaveClass('col')
    expect(col).toMatchSnapshot()
  })

  test('render <Col /> component with col boolean props', () => {
    render(
      <Col col sm md lg xl xxl>
        <h1>Col with col boolean props</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('Col with col boolean props')
    expect(col).toHaveClass('col')
    expect(col).toHaveClass('col-sm')
    expect(col).toHaveClass('col-md')
    expect(col).toHaveClass('col-lg')
    expect(col).toHaveClass('col-xl')
    expect(col).toHaveClass('col-xxl')
    expect(col).toMatchSnapshot()
  })

  test('render <Col /> component with col props', () => {
    render(
      <Col col='6' sm='7' md='8' lg='9' xl='10' xxl='11'>
        <h1>Col with col props</h1>
      </Col>
    )
    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('Col with col props')
    expect(col).toHaveClass('col-6')
    expect(col).toHaveClass('col-sm-7')
    expect(col).toHaveClass('col-md-8')
    expect(col).toHaveClass('col-lg-9')
    expect(col).toHaveClass('col-xl-10')
    expect(col).toHaveClass('col-xxl-11')
    expect(col).toMatchSnapshot()
  })

  test('render <Col /> component with order props', () => {
    render(
      <Col
        order='0'
        orderSm='1'
        orderMd='2'
        orderLg='3'
        orderXl='4'
        orderXxl='5'
      >
        <h1>Col with order props</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('Col with order props')
    expect(col).toHaveClass('order-0')
    expect(col).toHaveClass('order-sm-1')
    expect(col).toHaveClass('order-md-2')
    expect(col).toHaveClass('order-lg-3')
    expect(col).toHaveClass('order-xl-4')
    expect(col).toHaveClass('order-xxl-5')
    expect(col).toMatchSnapshot()
  })

  test('render <Col /> component with offset props', () => {
    render(
      <Col
        offset='1'
        offsetSm='2'
        offsetMd='3'
        offsetLg='4'
        offsetXl='5'
        offsetXxl='6'
      >
        <h1>Col with offset props</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('Col with offset props')
    expect(col).toHaveClass('offset-1')
    expect(col).toHaveClass('offset-sm-2')
    expect(col).toHaveClass('offset-md-3')
    expect(col).toHaveClass('offset-lg-4')
    expect(col).toHaveClass('offset-xl-5')
    expect(col).toHaveClass('offset-xxl-6')
    expect(col).toMatchSnapshot()
  })

  test('render <Col /> with margin props', () => {
    render(
      <Col
        m='0'
        mSm='1'
        mMd='2'
        mLg='3'
        mXl='4'
        mXxl='5'
        mX='0'
        mXSm='1'
        mXMd='2'
        mXLg='3'
        mXXl='4'
        mXXxl='5'
        mY='0'
        mYSm='1'
        mYMd='2'
        mYLg='3'
        mYXl='4'
        mYXxl='5'
        mB='0'
        mBSm='1'
        mBMd='2'
        mBLg='3'
        mBXl='4'
        mBXxl='5'
        mT='0'
        mTSm='1'
        mTMd='2'
        mTLg='3'
        mTXl='4'
        mTXxl='5'
        mS='0'
        mSSm='1'
        mSMd='2'
        mSLg='3'
        mSXl='4'
        mSXxl='5'
        mE='0'
        mESm='1'
        mEMd='2'
        mELg='3'
        mEXl='4'
        mEXxl='5'
      >
        <h1>Col component with margin props</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('Col component with margin props')
    expect(col).toHaveClass('col')
    expect(col).toHaveClass('m-0')
    expect(col).toHaveClass('m-sm-1')
    expect(col).toHaveClass('m-md-2')
    expect(col).toHaveClass('m-lg-3')
    expect(col).toHaveClass('m-xl-4')
    expect(col).toHaveClass('m-xxl-5')
    expect(col).toHaveClass('mx-0')
    expect(col).toHaveClass('mx-sm-1')
    expect(col).toHaveClass('mx-md-2')
    expect(col).toHaveClass('mx-lg-3')
    expect(col).toHaveClass('mx-xl-4')
    expect(col).toHaveClass('mx-xxl-5')
    expect(col).toHaveClass('my-0')
    expect(col).toHaveClass('my-sm-1')
    expect(col).toHaveClass('my-md-2')
    expect(col).toHaveClass('my-lg-3')
    expect(col).toHaveClass('my-xl-4')
    expect(col).toHaveClass('my-xxl-5')
    expect(col).toHaveClass('mb-0')
    expect(col).toHaveClass('mb-sm-1')
    expect(col).toHaveClass('mb-md-2')
    expect(col).toHaveClass('mb-lg-3')
    expect(col).toHaveClass('mb-xl-4')
    expect(col).toHaveClass('mb-xxl-5')
    expect(col).toHaveClass('mt-0')
    expect(col).toHaveClass('mt-sm-1')
    expect(col).toHaveClass('mt-md-2')
    expect(col).toHaveClass('mt-lg-3')
    expect(col).toHaveClass('mt-xl-4')
    expect(col).toHaveClass('mt-xxl-5')
    expect(col).toHaveClass('ms-0')
    expect(col).toHaveClass('ms-sm-1')
    expect(col).toHaveClass('ms-md-2')
    expect(col).toHaveClass('ms-lg-3')
    expect(col).toHaveClass('ms-xl-4')
    expect(col).toHaveClass('ms-xxl-5')
    expect(col).toHaveClass('me-0')
    expect(col).toHaveClass('me-sm-1')
    expect(col).toHaveClass('me-md-2')
    expect(col).toHaveClass('me-lg-3')
    expect(col).toHaveClass('me-xl-4')
    expect(col).toHaveClass('me-xxl-5')
    expect(col).toMatchSnapshot()
  })

  test('render <Col /> with padding props', () => {
    render(
      <Col
        p='0'
        pSm='1'
        pMd='2'
        pLg='3'
        pXl='4'
        pXxl='5'
        pX='0'
        pXSm='1'
        pXMd='2'
        pXLg='3'
        pXXl='4'
        pXXxl='5'
        pY='0'
        pYSm='1'
        pYMd='2'
        pYLg='3'
        pYXl='4'
        pYXxl='5'
        pB='0'
        pBSm='1'
        pBMd='2'
        pBLg='3'
        pBXl='4'
        pBXxl='5'
        pT='0'
        pTSm='1'
        pTMd='2'
        pTLg='3'
        pTXl='4'
        pTXxl='5'
        pS='0'
        pSSm='1'
        pSMd='2'
        pSLg='3'
        pSXl='4'
        pSXxl='5'
        pE='0'
        pESm='1'
        pEMd='2'
        pELg='3'
        pEXl='4'
        pEXxl='5'
      >
        <h1>Col with padding props</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('Col with padding props')
    expect(col).toHaveClass('p-0')
    expect(col).toHaveClass('p-sm-1')
    expect(col).toHaveClass('p-md-2')
    expect(col).toHaveClass('p-lg-3')
    expect(col).toHaveClass('p-xl-4')
    expect(col).toHaveClass('p-xxl-5')
    expect(col).toHaveClass('px-0')
    expect(col).toHaveClass('px-sm-1')
    expect(col).toHaveClass('px-md-2')
    expect(col).toHaveClass('px-lg-3')
    expect(col).toHaveClass('px-xl-4')
    expect(col).toHaveClass('px-xxl-5')
    expect(col).toHaveClass('py-0')
    expect(col).toHaveClass('py-sm-1')
    expect(col).toHaveClass('py-md-2')
    expect(col).toHaveClass('py-lg-3')
    expect(col).toHaveClass('py-xl-4')
    expect(col).toHaveClass('py-xxl-5')
    expect(col).toHaveClass('pb-0')
    expect(col).toHaveClass('pb-sm-1')
    expect(col).toHaveClass('pb-md-2')
    expect(col).toHaveClass('pb-lg-3')
    expect(col).toHaveClass('pb-xl-4')
    expect(col).toHaveClass('pb-xxl-5')
    expect(col).toHaveClass('pt-0')
    expect(col).toHaveClass('pt-sm-1')
    expect(col).toHaveClass('pt-md-2')
    expect(col).toHaveClass('pt-lg-3')
    expect(col).toHaveClass('pt-xl-4')
    expect(col).toHaveClass('pt-xxl-5')
    expect(col).toHaveClass('ps-0')
    expect(col).toHaveClass('ps-sm-1')
    expect(col).toHaveClass('ps-md-2')
    expect(col).toHaveClass('ps-lg-3')
    expect(col).toHaveClass('ps-xl-4')
    expect(col).toHaveClass('ps-xxl-5')
    expect(col).toHaveClass('pe-0')
    expect(col).toHaveClass('pe-sm-1')
    expect(col).toHaveClass('pe-md-2')
    expect(col).toHaveClass('pe-lg-3')
    expect(col).toHaveClass('pe-xl-4')
    expect(col).toHaveClass('pe-xxl-5')
    expect(col).toMatchSnapshot()
  })
})
