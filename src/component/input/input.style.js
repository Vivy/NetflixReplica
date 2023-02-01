import styled from 'styled-components';

export const Input = styled.input`
${({ type }) => (type ? `type: ${type};` : '')}
${({ id }) => (id ? `id: ${id};` : '')}
${({ placeholder }) => (placeholder ? `placeholder: ${placeholder};` : '')}
`
