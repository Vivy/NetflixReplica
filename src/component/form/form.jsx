import Submit from '../submit/submit';
import Title from '../title/title';
import * as S from './form.style';

const Form = () => {
  return (
    <S.Form>
      <Title fsize='small'>
        Ready to watch ? Enter your email to create or restart your membership
      </Title>
      <Submit />
    </S.Form>
  );
};

export default Form;
