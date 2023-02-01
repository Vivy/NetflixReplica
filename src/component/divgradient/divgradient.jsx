import * as S from './divgradient.style';

const DivGradient = ({
  children,
  flex,
  gradient,
  dataTestId = 'change me',
  justify,
  align,
}) => {
  return (
    <S.DivGradient
      justify={justify}
      align={align}
      flex={flex}
      gradient={gradient}
      data-testid={dataTestId}
    >
      {children}
    </S.DivGradient>
  );
};

export default DivGradient;
