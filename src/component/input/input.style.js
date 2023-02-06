import styled from 'styled-components';

export const Input = styled.input`
${({ type }) => (type ? `type: ${type};` : '')}
${({ id }) => (id ? `id: ${id};` : '')}
${({ placeholder }) => (placeholder ? `placeholder: ${placeholder};` : '')}
${({ $height }) => ($height ? `height: ${$height};` : '')}
${({ $width }) => ($width ? `width: ${$width};` : '')}
${({ $border }) => ($border ? `border: ${$border};` : '')}
color:white;
${({ $bgcolor }) => ($bgcolor ? `background-color: ${$bgcolor};` : '')}
`
