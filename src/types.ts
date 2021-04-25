import { ReactNode } from 'react'

export type Ref = HTMLDivElement
export type ChildrenPropTypes = {
  children: ReactNode
}
export type Cols = 'auto' | '1' | '2' | '3' | '4' | '5' | '6'
export type JustifyContentType =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
export type AlignItemsType = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
export type GuttersTypes = '0' | '1' | '2' | '3' | '4' | '5'
export type MarginTypes = '0' | '1' | '2' | '3' | '4' | '5' | 'auto'
export type PaddingTypes = '0' | '1' | '2' | '3' | '4' | '5' | 'auto'
export type OrderTypes = 'first' | '0' | '1' | '2' | '3' | '4' | '5' | 'last'
export type ColSizes =
  | true
  | 'auto'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
export type OffsetTypes =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
export type VisibleTypes = boolean
export type HiddenTypes = boolean

export type TypesOfMargins =
  | 'm'
  | 'mSm'
  | 'mMd'
  | 'mLg'
  | 'mXl'
  | 'mXxl'
  | 'mX'
  | 'mXSm'
  | 'mXMd'
  | 'mXLg'
  | 'mXXl'
  | 'mXXxl'
  | 'mY'
  | 'mYSm'
  | 'mYMd'
  | 'mYLg'
  | 'mYXl'
  | 'mYXxl'
  | 'mB'
  | 'mBSm'
  | 'mBMd'
  | 'mBLg'
  | 'mBXl'
  | 'mBXxl'
  | 'mT'
  | 'mTSm'
  | 'mTMd'
  | 'mTLg'
  | 'mTXl'
  | 'mTXxl'
  | 'mS'
  | 'mSSm'
  | 'mSMd'
  | 'mSLg'
  | 'mSXl'
  | 'mSXxl'
  | 'mE'
  | 'mESm'
  | 'mEMd'
  | 'mELg'
  | 'mEXl'
  | 'mEXxl'
export type TypeOfPaddings =
  | 'p'
  | 'pSm'
  | 'pMd'
  | 'pLg'
  | 'pXl'
  | 'pXxl'
  | 'pX'
  | 'pXSm'
  | 'pXMd'
  | 'pXLg'
  | 'pXXl'
  | 'pXXxl'
  | 'pY'
  | 'pYSm'
  | 'pYMd'
  | 'pYLg'
  | 'pYXl'
  | 'pYXxl'
  | 'pB'
  | 'pBSm'
  | 'pBMd'
  | 'pBLg'
  | 'pBXl'
  | 'pBXxl'
  | 'pT'
  | 'pTSm'
  | 'pTMd'
  | 'pTLg'
  | 'pTXl'
  | 'pTXxl'
  | 'pS'
  | 'pSSm'
  | 'pSMd'
  | 'pSLg'
  | 'pSXl'
  | 'pSXxl'
  | 'pE'
  | 'pESm'
  | 'pEMd'
  | 'pELg'
  | 'pEXl'
  | 'pEXxl'
export type TypeOfOrder =
  | 'order'
  | 'orderSm'
  | 'orderMd'
  | 'orderLg'
  | 'orderXl'
  | 'orderXxl'
export type TypeOfOffset =
  | 'offset'
  | 'offsetSm'
  | 'offsetMd'
  | 'offsetLg'
  | 'offsetXl'
  | 'offsetXxl'
export type TypeOfVisible =
  | 'visible'
  | 'visibleSm'
  | 'visibleMd'
  | 'visibleLg'
  | 'visibleXl'
  | 'visibleXll'
export type TypeOfHidden =
  | 'hidden'
  | 'hiddenSm'
  | 'hiddenMd'
  | 'hiddenLg'
  | 'hiddenXl'
  | 'hiddenXll'
export type TypeOfGutter =
  | 'g'
  | 'gSm'
  | 'gMd'
  | 'gLg'
  | 'gXl'
  | 'gXxl'
  | 'gX'
  | 'gXSm'
  | 'gXMd'
  | 'gXLg'
  | 'gXXl'
  | 'gXXxl'
  | 'gY'
  | 'gYSm'
  | 'gYMd'
  | 'gYLg'
  | 'gYXl'
  | 'gYXxl'
export type TypeOfJustify =
  | 'justifyContent'
  | 'justifyContentSm'
  | 'justifyContentMd'
  | 'justifyContentLg'
  | 'justifyContentXl'
  | 'justifyContentXxl'
export type TypeOfAlign =
  | 'alignItems'
  | 'alignItemsSm'
  | 'alignItemsMd'
  | 'alignItemsLg'
  | 'alignItemsXl'
  | 'alignItemsXxl'

export type MarginProps = {
  [key in TypesOfMargins]?: MarginTypes
}
export type PaddingProps = {
  [key in TypeOfPaddings]?: PaddingTypes
}
export type OrderProps = {
  [key in TypeOfOrder]?: OrderTypes
}
export type OffsetProps = {
  [key in TypeOfOffset]?: OffsetTypes
}
export type VisibleProps = {
  [key in TypeOfVisible]?: VisibleTypes
}
export type HidddenProps = {
  [key in TypeOfHidden]?: HiddenTypes
}
export type GutterProps = {
  [key in TypeOfGutter]?: GuttersTypes
}
export type JustifyContentProps = {
  [key in TypeOfJustify]?: JustifyContentType
}
export type AlignItemsProps = {
  [key in TypeOfAlign]?: AlignItemsType
}

export type ContainerProps = {
  fluid?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
}

export type ContainerPropsType = ContainerProps & ChildrenPropTypes

export type RowProps = {
  Cols?: Cols
  ColsSm?: Cols
  ColsMd?: Cols
  ColsLg?: Cols
  ColsXl?: Cols
  ColsXxl?: Cols
}

export type RowPropsTypes = RowProps &
  MarginProps &
  GutterProps &
  JustifyContentProps &
  AlignItemsProps &
  PaddingProps &
  ChildrenPropTypes

export type ColProps = {
  col?: ColSizes
  sm?: ColSizes
  md?: ColSizes
  lg?: ColSizes
  xl?: ColSizes
  xxl?: ColSizes
}

export type ColPropsTypes = ColProps &
  OrderProps &
  OffsetProps &
  MarginProps &
  PaddingProps &
  VisibleProps &
  HidddenProps &
  ChildrenPropTypes
