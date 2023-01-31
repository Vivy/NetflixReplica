import styled from 'styled-components';

const getFontSize = ({ fsize }) => {
  if (fsize === 'large') {
    return '1.625rem'
  } else if (fsize === 'small') return '1.2rem'
  else if (fsize === 'xl') return '3.125rem'
}


export const Title = styled.h1`
font-size:${getFontSize} ;
color: white;
margin:0 auto;
text-align: center;
`
