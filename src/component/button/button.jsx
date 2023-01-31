import * as S from './button.style';

const Button = ({ children, width, height, href, padding, fontSize }) => {
  return (
    <S.Button
      width={width}
      height={height}
      href={href}
      fontSize={fontSize}
      padding={padding}
    >
      {children}
    </S.Button>
  );
};
export default Button;
