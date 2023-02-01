import * as S from './label.style';

const Label = ({ htmlFor, children, color }) => {
  return (
    <S.Label htmlFor={htmlFor} color={color}>
      {children}
    </S.Label>
  );
};

export default Label;
