import styled from 'styled-components';

const getColor = ({ color }) => (color ? `color: ${typeof color === 'string' ? `${color}` : '#b3b3b3'};` : ``)

export const Label = styled.label`
${getColor}
${({ htmlFor }) => (htmlFor ? `htmlFor: ${htmlFor};` : '')}
`
