import * as S from './input.style';

const Input = ({ type, id, placeholder, children }) => {
  return (
    <S.Input type={type} id={id} placeholder={placeholder}>
      {children}
    </S.Input>
  );
};

export default Input;
