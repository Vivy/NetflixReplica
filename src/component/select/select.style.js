import styled from 'styled-components';

export const Select = styled.select`
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px 20px 10px 38px;
  border-radius: 5px;
  -moz-appearance: none;
  -webkit-appearance: none;

`
export const IconSomething = styled.div`
    position: relative;
    width: fit-content;
    ${grid}

    &::before {
      content: '\f3ee';
      color: white;
      position: absolute;
      top: 13px;
      left: 24px;
      font-family: bootstrap-icons !important;
      font-size: 13px;
    }
    &::after {
      content: '\uF27E';
      color: white;
      position: absolute;
      top: 13px;
      right: 6px;
      font-family: bootstrap-icons !important;
      font-size: 13px;
    }
` 
