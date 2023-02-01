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
}) => {
  return (
    <S.Flex
      onClick={onClick}
      justify={justify}
      direction={direction}
      gap={gap}
      align={align}
      margin={margin}
      flex={flex}
      color={color}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
