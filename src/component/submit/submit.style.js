import styled from 'styled-components';

export const Submit = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`
export const ButtonWrapper = styled.div`
  position: relative;

  &::after{
    content: '\uF285';
    position: absolute;
    color: white;
    font-family: bootstrap-icons !important;
    right: 14px;
    top: 20px;
    font-size: 22px;
  }
`
