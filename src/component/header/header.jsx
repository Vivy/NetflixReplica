import Button from '../button/button';
import Select from '../select/select';
import * as S from './header.style';

const Header = () => {
  return (
    <S.Header>
      <S.ImgWrapper>
        <S.Img src='netflix.png' />
      </S.ImgWrapper>

      <S.Wrapper>
        <Select />
        <Button href='/signin' padding='s'>
          Sign In
        </Button>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
