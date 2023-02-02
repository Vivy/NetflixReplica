import Flex from '../flex/flex';
import * as S from './hero.style';
import Title from '../title/title';
import Tv from '../tv/tv';

const Hero = ({ direction, children, title, src }) => {
  return (
    <S.Hero direction={direction}>
      <Flex
        flex='flex'
        direction='column'
        gap='20px'
        justify='center'
        margin='0 60px'
      >
        <Title fsize='xl'>{title}</Title>

        <Title fsize='large'>{children}</Title>
      </Flex>
      <Tv src={src} />
    </S.Hero>
  );
};

export default Hero;
