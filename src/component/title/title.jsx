import * as S from './title.style';

const Title = ({ fsize, children }) => {
  return <S.Title fsize={fsize}>{children}</S.Title>;
};

export default Title;
