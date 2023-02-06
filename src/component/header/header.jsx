import { Anchor } from '../anchor/anchor.style';
import Button from '../button/button';
import Select from '../select/select';
import * as S from './header.style';

const Header = ({ page = 'home' }) => {
  return (
    <S.Header>
      <S.ImgWrapper>
        {page === 'home' ? (
          <S.Img src='/image/netflix.png' />
        ) : (
          <a href='/'>
            <S.Img src='/image/netflix.png' />
          </a>
        )}
      </S.ImgWrapper>
      {page === 'home' && (
        <S.Wrapper>
          <Select />
          <Button padding='7px 17px;'>
            <Anchor color='white' href='signin' zIndex='1'>
              Sign In
            </Anchor>
          </Button>
        </S.Wrapper>
      )}
    </S.Header>
  );
};

export default Header;
