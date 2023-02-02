import styled from 'styled-components';


const getPadding = ({ padding }) => (padding ? `padding:${padding};` : '')
const getFont = ({ fontSize }) => (fontSize ? `font-size: ${fontSize};` : '')
const getFontWeight = ({ fontWeight }) => (fontWeight ? `font-weight: ${fontWeight};` : '')
const getMargin = ({ $margin }) => ($margin ? `margin: ${$margin};` : '')
export const Button = styled.a`
  display: flex;
  align-items: center;
  background-color: #e50914;
  text-align: center;
  ${getFont}
  font-weight: 400;
  line-height: normal;
  color: white;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  ${getMargin}
  ${({ width }) => (width ? `width: ${width};` : '')}
  ${({ height }) => (height ? `height: ${height};` : '')}
  ${({ $justify }) => ($justify ? `justify-content: ${$justify};` : '')}
  ${getPadding}
  ${getFontWeight}
`
