import * as S from './text.style';

const Text = ({ as = 'p', children, color = 'white' }) => {
  return (
    <S.Text color={color} as={as}>
      {children}
    </S.Text>
  );
};

export default Text;
