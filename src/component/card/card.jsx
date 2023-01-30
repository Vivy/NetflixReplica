import Flex from '../flex/flex';
import Form from '../form/form';
import Submit from '../submit/submit';
import Title from '../title/title';
import * as S from './card.style';

const Card = () => {
  return (
    <S.Card>
      <Title fsize='xl'>Unlimited movies, TV shows, and more</Title>
      <Title fsize='large'>Watch anywhere. Cancel anytime</Title>
      <Form>
        Ready to watch ? Enter your email to create or restart your membership
      </Form>
    </S.Card>
  );
};

export default Card;
