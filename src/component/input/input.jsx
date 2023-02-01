import * as S from './input.style';

const Input = ({ type, id, placeholder, children, height, width }) => {
  return (
    <S.Input
      type={type}
      id={id}
      placeholder={placeholder}
      $width={width}
      $height={height}
    >
      {children}
    </S.Input>
  );
};

export default Input;
