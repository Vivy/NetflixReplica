import styled from 'styled-components';

const getGradient = ({ gradient }) =>
  gradient
    ? `
background: rgba(0,0,0,.4); 
background-image: linear-gradient(
  0deg,
  rgba(0,0,0,.8) 0,
  transparent 60%,
  rgba(0,0,0,.8)
),
 url('back.jpg')
;

`
    : '';

export const DivGradient = styled.div`
  height: 100vh;
  flex-direction: column;
  ${({ flex }) => (flex ? `display: ${flex};` : '')}
  ${getGradient}
  ${({ justify }) => (justify ? `justify-content: ${justify};` : '')}
  ${({ align }) => (align ? `align-items: ${align};` : '')}
`;
