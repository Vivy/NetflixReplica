import styled from 'styled-components';

export const Question = styled.div`
  display: flex;
  background-color: grey;
  width: 50%;
  height:100%;
  flex-direction: column ;
`
export const Answer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 20px;
  line-height: 20px;
  font-size: 20px;
  padding: 20px;
  transition: max-height .25s cubic-bezier(.5,0,.1,1);
`
export const AnswerText = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 1.5rem;
`
