import * as S from './/flex.style';

const Flex = ({
  children,
  justify,
  direction,
  gap,
  margin,
  align,
  onClick,
  color,
  flex,
  gradient,
  padding,
  grow,
  dataTestId,
  width,
}) => {
  return (
    <S.Flex
      $width={width}
      data-testid={dataTestId}
      $gradient={gradient}
      $grow={grow}
      onClick={onClick}
      $justify={justify}
      $direction={direction}
      $gap={gap}
      $align={align}
      $margin={margin}
      $flex={flex}
      $padding={padding}
      $color={color}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
