import * as S from './text.style';

const Text = ({ as = 'p', children }) => {
  return <S.Text as={as}>{children}</S.Text>;
};

export default Text;
