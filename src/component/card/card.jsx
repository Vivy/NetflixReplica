import Flex from '../flex/flex';
import Submit from '../submit/submit';
import Title from '../title/title';
import * as S from './card.style';

const Card = () => {
  return (
    <S.Card>
      <Title fsize='xl'>Unlimited movies, TV shows, and more</Title>
      <Title fsize='large'>Watch anywhere. Cancel anytime</Title>
      <form>
        <Title fsize='small'>
          Ready to watch ? Enter your email to create or restart your membership
        </Title>
        <Submit />
      </form>
    </S.Card>
  );
};

export default Card;
