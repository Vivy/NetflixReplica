import Flex from '../flex/flex';
import * as S from './hero.style';
import Title from '../title/title';

const Hero = () => {
  return (
    <S.Hero>
      <Flex direction='column'>
        <Title fsize='xl'>Enjoy on your TV.</Title>
        <Title fsize='large'>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, AppleTV, Blu-ray
          players, and more.
        </Title>
      </Flex>
    </S.Hero>
  );
};

export default Hero;
