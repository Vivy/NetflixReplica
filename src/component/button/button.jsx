import * as S from './button.style';

const Button = ({ children, width, height }) => {
  return (
    <S.Button width={width} height={height}>
      {children}
    </S.Button>
  );
};
export default Button;
