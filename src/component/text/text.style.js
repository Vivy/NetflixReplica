import styled from 'styled-components';

// const colorMap = {
//   grey: '#737373',
// }

const getColor = ({ color }) => (color ? `color: ${typeof color === 'string' ? `${color}` : '#737373'};` : ``)

export const Text = styled.p`
  ${getColor}
`
