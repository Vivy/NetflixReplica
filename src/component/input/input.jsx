import * as S from './input.style';

const Input = ({
  type,
  bgcolor,
  border,
  id,
  placeholder,
  children,
  height,
  width,
  name,
}) => {
  return (
    <S.Input
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      $width={width}
      $height={height}
      $border={border}
      $bgcolor={bgcolor}
    >
      {children}
    </S.Input>
  );
};

export default Input;
