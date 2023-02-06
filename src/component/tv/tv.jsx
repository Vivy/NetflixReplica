import * as S from './tv.style';

const Tv = ({ src, video }) => {
  return (
    <S.TvWrapper>
      <S.Tv src={src} alt='change me' />
      <S.VideoWrapper>
        <S.Video autoPlay loop muted playsInline>
          <S.Source src={video} type='video/mp4' />
        </S.Video>
      </S.VideoWrapper>
    </S.TvWrapper>
  );
};

export default Tv;
