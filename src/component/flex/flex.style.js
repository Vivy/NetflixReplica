import styled from 'styled-components';


const getGradient = (({ gradient }) => (gradient ? `background-image: linear-gradient(
  0deg,
  rgba(0,0,0,.8) 0,
  transparent 60%,
  rgba(0,0,0,.8)
);` : ''))
const paddingMap = {
  big: '50px',
  med: '20px',
  small: '10px',
}
const getPadding = ({ padding }) => (padding ? `padding: ${paddingMap[padding]};` : '')

export const Flex = styled.div`
  ${({ $justify }) => ($justify ? `justify-content:${$justify};` : '')}
  ${({ direction }) => (direction ? `flex-direction:${direction};` : '')}
  ${({ gap }) => (gap ? `gap:${gap};` : '')}
  ${({ margin }) => (margin ? `margin:${margin};` : '')}
  ${({ align }) => (align ? `align-items:${align};` : '')}
  ${({ color }) => (color ? `background-color:${color};` : '')}
  ${({ flex }) => (flex ? `display: ${flex};` : '')}
  ${({ grow }) => (grow ? `flex-grow: ${grow};` : '')}
  ${getPadding}
  ${getGradient}
`
