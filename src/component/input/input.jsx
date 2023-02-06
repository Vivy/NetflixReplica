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
  // ref,
  name,
}) => {
  return (
    <S.Input
      // ref={ref}
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
