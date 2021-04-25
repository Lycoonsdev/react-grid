import { render, screen } from '@testing-library/react'

import Row from '../row'

describe('<Row /> Component', () => {
  test('render <Row />', () => {
    render(
      <Row>
        <h1>Row component</h1>
      </Row>
    )

    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveTextContent('Row component')
    expect(row).toHaveClass('row')
    expect(row).toMatchSnapshot()
  })

  test('render <Row /> with row props', () => {
    render(
      <Row Cols='1' ColsSm='2' ColsMd='3' ColsLg='4' ColsXl='5' ColsXxl='6'>
        <h1>Row component with row props</h1>
      </Row>
    )
    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveTextContent('Row component with row props')
    expect(row).toHaveClass('row-cols-1')
    expect(row).toHaveClass('row-cols-sm-2')
    expect(row).toHaveClass('row-cols-md-3')
    expect(row).toHaveClass('row-cols-lg-4')
    expect(row).toHaveClass('row-cols-xl-5')
    expect(row).toHaveClass('row-cols-xxl-6')
    expect(row).toMatchSnapshot()
  })

  test('render <Row /> with margin props', () => {
    render(
      <Row
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
        <h1>Row component with margin props</h1>
      </Row>
    )

    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveTextContent('Row component with margin props')
    expect(row).toHaveClass('row')
    expect(row).toHaveClass('m-0')
    expect(row).toHaveClass('m-sm-1')
    expect(row).toHaveClass('m-md-2')
    expect(row).toHaveClass('m-lg-3')
    expect(row).toHaveClass('m-xl-4')
    expect(row).toHaveClass('m-xxl-5')
    expect(row).toHaveClass('mx-0')
    expect(row).toHaveClass('mx-sm-1')
    expect(row).toHaveClass('mx-md-2')
    expect(row).toHaveClass('mx-lg-3')
    expect(row).toHaveClass('mx-xl-4')
    expect(row).toHaveClass('mx-xxl-5')
    expect(row).toHaveClass('my-0')
    expect(row).toHaveClass('my-sm-1')
    expect(row).toHaveClass('my-md-2')
    expect(row).toHaveClass('my-lg-3')
    expect(row).toHaveClass('my-xl-4')
    expect(row).toHaveClass('my-xxl-5')
    expect(row).toHaveClass('mb-0')
    expect(row).toHaveClass('mb-sm-1')
    expect(row).toHaveClass('mb-md-2')
    expect(row).toHaveClass('mb-lg-3')
    expect(row).toHaveClass('mb-xl-4')
    expect(row).toHaveClass('mb-xxl-5')
    expect(row).toHaveClass('mt-0')
    expect(row).toHaveClass('mt-sm-1')
    expect(row).toHaveClass('mt-md-2')
    expect(row).toHaveClass('mt-lg-3')
    expect(row).toHaveClass('mt-xl-4')
    expect(row).toHaveClass('mt-xxl-5')
    expect(row).toHaveClass('ms-0')
    expect(row).toHaveClass('ms-sm-1')
    expect(row).toHaveClass('ms-md-2')
    expect(row).toHaveClass('ms-lg-3')
    expect(row).toHaveClass('ms-xl-4')
    expect(row).toHaveClass('ms-xxl-5')
    expect(row).toHaveClass('me-0')
    expect(row).toHaveClass('me-sm-1')
    expect(row).toHaveClass('me-md-2')
    expect(row).toHaveClass('me-lg-3')
    expect(row).toHaveClass('me-xl-4')
    expect(row).toHaveClass('me-xxl-5')
    expect(row).toMatchSnapshot()
  })

  test('render <Row /> with padding props', () => {
    render(
      <Row
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
        <h1>Row with padding props</h1>
      </Row>
    )

    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveTextContent('Row with padding props')
    expect(row).toHaveClass('p-0')
    expect(row).toHaveClass('p-sm-1')
    expect(row).toHaveClass('p-md-2')
    expect(row).toHaveClass('p-lg-3')
    expect(row).toHaveClass('p-xl-4')
    expect(row).toHaveClass('p-xxl-5')
    expect(row).toHaveClass('px-0')
    expect(row).toHaveClass('px-sm-1')
    expect(row).toHaveClass('px-md-2')
    expect(row).toHaveClass('px-lg-3')
    expect(row).toHaveClass('px-xl-4')
    expect(row).toHaveClass('px-xxl-5')
    expect(row).toHaveClass('py-0')
    expect(row).toHaveClass('py-sm-1')
    expect(row).toHaveClass('py-md-2')
    expect(row).toHaveClass('py-lg-3')
    expect(row).toHaveClass('py-xl-4')
    expect(row).toHaveClass('py-xxl-5')
    expect(row).toHaveClass('pb-0')
    expect(row).toHaveClass('pb-sm-1')
    expect(row).toHaveClass('pb-md-2')
    expect(row).toHaveClass('pb-lg-3')
    expect(row).toHaveClass('pb-xl-4')
    expect(row).toHaveClass('pb-xxl-5')
    expect(row).toHaveClass('pt-0')
    expect(row).toHaveClass('pt-sm-1')
    expect(row).toHaveClass('pt-md-2')
    expect(row).toHaveClass('pt-lg-3')
    expect(row).toHaveClass('pt-xl-4')
    expect(row).toHaveClass('pt-xxl-5')
    expect(row).toHaveClass('ps-0')
    expect(row).toHaveClass('ps-sm-1')
    expect(row).toHaveClass('ps-md-2')
    expect(row).toHaveClass('ps-lg-3')
    expect(row).toHaveClass('ps-xl-4')
    expect(row).toHaveClass('ps-xxl-5')
    expect(row).toHaveClass('pe-0')
    expect(row).toHaveClass('pe-sm-1')
    expect(row).toHaveClass('pe-md-2')
    expect(row).toHaveClass('pe-lg-3')
    expect(row).toHaveClass('pe-xl-4')
    expect(row).toHaveClass('pe-xxl-5')
    expect(row).toMatchSnapshot()
  })

  test('render <Row /> with justify-content props', () => {
    render(
      <Row
        justifyContent='around'
        justifyContentSm='between'
        justifyContentMd='center'
        justifyContentLg='end'
        justifyContentXl='evenly'
        justifyContentXxl='start'
      >
        <h1>Row with justify-content props</h1>
      </Row>
    )
    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveTextContent('Row with justify-content props')
    expect(row).toHaveClass('justify-content-around')
    expect(row).toHaveClass('justify-content-sm-between')
    expect(row).toHaveClass('justify-content-md-center')
    expect(row).toHaveClass('justify-content-lg-end')
    expect(row).toHaveClass('justify-content-xl-evenly')
    expect(row).toHaveClass('justify-content-xxl-start')
    expect(row).toMatchSnapshot()
  })

  test('render <Row /> with-align items props', () => {
    render(
      <Row
        alignItems='start'
        alignItemsSm='stretch'
        alignItemsMd='baseline'
        alignItemsLg='center'
        alignItemsXl='end'
        alignItemsXxl='end'
      >
        <h1>Row with align-items props</h1>
      </Row>
    )

    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveTextContent('Row with align-items props')
    expect(row).toHaveClass('align-items-start')
    expect(row).toHaveClass('align-items-sm-stretch')
    expect(row).toHaveClass('align-items-md-baseline')
    expect(row).toHaveClass('align-items-lg-center')
    expect(row).toHaveClass('align-items-xl-end')
    expect(row).toHaveClass('align-items-xxl-end')
    expect(row).toMatchSnapshot()
  })

  test('render <Row /> with gutter props', () => {
    render(
      <Row
        g='0'
        gSm='1'
        gMd='2'
        gLg='3'
        gXl='4'
        gXxl='5'
        gX='0'
        gXSm='1'
        gXMd='2'
        gXLg='3'
        gXXl='4'
        gXXxl='5'
        gY='0'
        gYSm='1'
        gYMd='2'
        gYLg='3'
        gYXl='4'
        gYXxl='5'
      >
        <h1>Row with gutter props</h1>
      </Row>
    )

    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveTextContent('Row with gutter props')
    expect(row).toHaveClass('g-0')
    expect(row).toHaveClass('g-sm-1')
    expect(row).toHaveClass('g-md-2')
    expect(row).toHaveClass('g-lg-3')
    expect(row).toHaveClass('g-xl-4')
    expect(row).toHaveClass('g-xxl-5')
    expect(row).toHaveClass('gx-0')
    expect(row).toHaveClass('gx-sm-1')
    expect(row).toHaveClass('gx-md-2')
    expect(row).toHaveClass('gx-lg-3')
    expect(row).toHaveClass('gx-xl-4')
    expect(row).toHaveClass('gx-xxl-5')
    expect(row).toHaveClass('gy-0')
    expect(row).toHaveClass('gy-sm-1')
    expect(row).toHaveClass('gy-md-2')
    expect(row).toHaveClass('gy-lg-3')
    expect(row).toHaveClass('gy-xl-4')
    expect(row).toHaveClass('gy-xxl-5')
    expect(row).toMatchSnapshot()
  })
})
