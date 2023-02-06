import Select from '../select/select';
import * as S from './footer.style';

const Footer = ({ gradient, page = 'home' }) => {
  return (
    <S.Footer $gradient={gradient}>
      {page === 'home' ? (
        <>
          <h3 style={{ gridRow: '1/1', gridColumn: '1/5' }}>
            Questions? Call
            <S.AnchorStyle href='tel:0800-672-120'> 0800-672-120</S.AnchorStyle>
          </h3>
          <S.AnchorStyle href='Faq'>Faq</S.AnchorStyle>
          <S.AnchorStyle href='Investor Relations'>
            Investor Relations
          </S.AnchorStyle>
          <S.AnchorStyle href='Privacy'>Privacy</S.AnchorStyle>
          <S.AnchorStyle href='Speed Test'>Speed Test</S.AnchorStyle>
          <S.AnchorStyle href='Help Center'>Help Center</S.AnchorStyle>
          <S.AnchorStyle href='jobs'>jobs</S.AnchorStyle>
          <S.AnchorStyle href='cookie preferences'>
            cookie preferences
          </S.AnchorStyle>
          <S.AnchorStyle href='Legal Guarantee'>Legal Guarantee</S.AnchorStyle>
          <S.AnchorStyle href='Accounts'>Accounts</S.AnchorStyle>
          <S.AnchorStyle href='Ways to watch'>Ways to watch</S.AnchorStyle>
          <S.AnchorStyle href='Corporate information'>
            Corporate information
          </S.AnchorStyle>
          <S.AnchorStyle href='Legal Notices'>Legal Notices</S.AnchorStyle>
          <S.AnchorStyle href='Media Center'>Media Center</S.AnchorStyle>
          <S.AnchorStyle href='Terms of use'>Terms of use</S.AnchorStyle>
          <S.AnchorStyle href='Contact us'>Contact us</S.AnchorStyle>
          <S.AnchorStyle href='Only on Netflix'>Only on Netflix</S.AnchorStyle>
          <Select style={{ justifySelf: 'left' }} />
          <p style={{ gridRow: '7/8' }}>Netflix Romania</p>
        </>
      ) : (
        <>
          <h3 style={{ gridRow: '1/1', gridColumn: '1/5' }}>
            Questions? Call
            <S.AnchorStyle href='tel:0800-672-120'> 0800-672-120</S.AnchorStyle>
          </h3>
          <S.AnchorStyle href='Faq'>Faq</S.AnchorStyle>
          <S.AnchorStyle href='Help Center'>Help Center</S.AnchorStyle>
          <S.AnchorStyle href='Terms of use'>Terms of use</S.AnchorStyle>
          <S.AnchorStyle href='Privacy'>Privacy</S.AnchorStyle>
          <S.AnchorStyle href='cookie preferences'>
            cookie preferences
          </S.AnchorStyle>
          <S.AnchorStyle href='Corporate information'>
            Corporate information
          </S.AnchorStyle>
          <Select style={{ gridRow: '4' }} />
        </>
      )}
    </S.Footer>
  );
};

export default Footer;
