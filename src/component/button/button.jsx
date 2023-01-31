import * as S from './button.style';

const Button = ({ children, width, height, href }) => {
  return (
    <S.Button width={width} height={height} href={href}>
      {children}
    </S.Button>
  );
};
export default Button;
