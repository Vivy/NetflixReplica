import styled from 'styled-components';

export const Flex = styled.div`
display: flex;
${({ justify }) => (justify ? `justify-content:${justify}` : '')}
${({ direction }) => (direction ? `flex-direction:${direction}` : '')}
`
