import * as S from './divgradient.style';

const DivGradient = ({
  children,
  flex,
  gradient,
  dataTestId = 'change me',
}) => {
  return (
    <S.DivGradient flex={flex} gradient={gradient} data-testid={dataTestId}>
      {children}
    </S.DivGradient>
  );
};

export default DivGradient;
