import * as S from './/flex.style';

const Flex = ({ children, justify, direction }) => {
  return (
    <S.Flex justify={justify} direction={direction}>
      {children}
    </S.Flex>
  );
};

export default Flex;
