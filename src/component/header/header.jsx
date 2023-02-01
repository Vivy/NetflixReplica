import Button from '../button/button';
import Select from '../select/select';
import * as S from './header.style';

const Header = ({ page = 'home' }) => {
  return (
    <S.Header>
      <S.ImgWrapper>
        {page === 'home' ? (
          <S.Img src='netflix.png' />
        ) : (
          <a href='/'>
            <S.Img src='netflix.png' />
          </a>
        )}
      </S.ImgWrapper>
      {page === 'home' && (
        <S.Wrapper>
          <Select />
          <Button href='/signin' padding='s'>
            Sign In
          </Button>
        </S.Wrapper>
      )}
    </S.Header>
  );
};

export default Header;
