import styled from 'styled-components';

export const Label = styled.label`
${({ htmlFor }) => (htmlFor ? `htmlFor: ${htmlFor};` : '')}
`
