import styled from 'styled-components';

export const Hero = styled.div`
display: flex;
border-bottom: 8px solid #433d3d;
background-color: #222;
color: white;
${({ direction }) => (direction ? `flex-direction: ${direction};` : '')}
`
