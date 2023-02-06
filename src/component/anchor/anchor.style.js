import styled from 'styled-components';

const colorMap = {
  grey: '#737373',
  wg: '#b3b3b3'
}
const getColor = ({ color }) => (color ? `color: ${typeof color === 'string' ? `${color}` : `${colorMap[color]}`};` : ``)


export const Anchor = styled.a`
  text-decoration: none;
  /* cursor: pointer; */
  ${getColor}
  ${({ zIndex }) => (zIndex ? `z-index: ${zIndex};` : '')}
`
