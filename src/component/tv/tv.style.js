import styled from 'styled-components';



export const Tv = styled.img`
  height: 200px;
  width: 500px;
  margin: 30px 60px;
  width:100%;
  height:100%;
  aspect-ratio: 16/9;
  object-fit: contain;
  object-position: center;
  `
export const TvWrapper = styled.div`
  position: relative;
  width:100%;
  height:100%;
  aspect-ratio: 16/9;
`
export const VideoWrapper = styled.div`
  height: 100%;
  left: 60%;
  max-height: 46%;
  max-width: 55%;
  position: absolute;
  top: 48%;
  transform: translate(-50%,-50%);
  width: 100%;
`
export const Video = styled.video`
  height: 100%;
  width: 100%;
`
export const Source = styled.source`
  ${({ video }) => (video ? `src: ${video};` : '')}
`
