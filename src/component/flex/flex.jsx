import * as S from './/flex.style';

const Flex = ({ children, justify, direction, gap, margin }) => {
  return (
    <S.Flex justify={justify} direction={direction} gap={gap} margin={margin}>
      {children}
    </S.Flex>
  );
};

export default Flex;
