import styled from 'styled-components';

export const Flex = styled.div`
display: flex;
${({ justify }) => (justify ? `justify-content:${justify};` : '')}
${({ direction }) => (direction ? `flex-direction:${direction};` : '')}
${({ gap }) => (gap ? `gap:${gap};` : '')}
${({ margin }) => (margin ? `margin:${margin};` : '')}

`
