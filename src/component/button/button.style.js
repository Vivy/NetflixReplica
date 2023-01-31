import styled from 'styled-components';

export const Button = styled.a`
  display: flex;
  align-items: center;
  background-color: #e50914;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  padding: 7px 17px;
  margin: 0 3.5rem;
  color: white;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  ${({ width }) => (width ? `width:${width}` : '')}
  ${({ height }) => (height ? `height:${height}` : '')}
`
