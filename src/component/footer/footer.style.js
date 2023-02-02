import styled from 'styled-components';

const getGradient = (({ $gradient }) => ($gradient ? `background-image: linear-gradient(
  0deg,
  rgba(0,0,0,0.8) 0%,
  rgba(0,0,0,0.8)
);` : ''))

export const Footer = styled.div`
display: grid;
/* background-color: #222; */
color:grey;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
padding: 70px 45px;
row-gap: 12px;
font-size:13px;
${getGradient}
`
export const AnchorStyle = styled.a`
text-decoration: none;
color:grey;
`
