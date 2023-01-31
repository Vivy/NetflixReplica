import styled from 'styled-components';


const getPadding = ({ padding = 'm' }) => (padding === 'm' ? `padding: 0 3.5rem;` : 'padding: 7px 17px;')
const getFont = ({ fontSize = 's' }) => (fontSize === 's' ? 'font-size: 15px;' : 'font-size: 35px;')
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
  ${({ width }) => (width ? `width: ${width};` : '')}
  ${({ height }) => (height ? `height: ${height};` : '')}
  ${getPadding}
`
