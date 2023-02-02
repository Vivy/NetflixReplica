import * as S from './button.style';

const Button = ({
  children,
  width,
  height,
  href,
  padding,
  fontSize,
  fontWeight,
  justify,
  margin,
}) => {
  return (
    <S.Button
      $margin={margin}
      $justify={justify}
      fontWeight={fontWeight}
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
