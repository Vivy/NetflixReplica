import styled from 'styled-components';

export const Question = styled.div`
  display: flex;
  background-color: grey;
  min-width: 50%;
  height:100%;
  flex-direction: column ;
`
export const Answer = styled.div`
  min-width: 50%;
  max-height: 500px;
  transition: max-height .25s cubic-bezier(.5,0,.1,1);
` 
