import * as S from './tv.style';

const Tv = ({ src }) => {
  return (
    <S.TvWrapper>
      <S.Tv src={src} alt='change me' />
    </S.TvWrapper>
  );
};

export default Tv;
