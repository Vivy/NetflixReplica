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
}) => {
  return (
    <S.Flex
      onClick={onClick}
      justify={justify}
      direction={direction}
      gap={gap}
      align={align}
      margin={margin}
      color={color}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
