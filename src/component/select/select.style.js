import styled from 'styled-components';

export const Select = styled.select`
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px 10px 10px 38px;
  border-radius: 5px;
`
export const IconSomething = styled.div`
    position: relative;

    &::before {
      content: '\f3ee';
      color: white;
      position: absolute;
      top: 13px;
      left: 24px;
      font-family: bootstrap-icons !important;
      font-size: 13px;
    }
` 
