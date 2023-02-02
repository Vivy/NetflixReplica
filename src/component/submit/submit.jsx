import Button from '../button/button';
import * as S from './submit.style';
const Submit = () => {
  return (
    <S.Submit>
      <input
        type='email'
        id='email'
        placeholder='Email Address'
        style={{ height: '60px', minWidth: '450px' }}
      />
      <label htmlFor='email' style={{ display: 'none' }}>
        Email Address
      </label>
      <Button height='60px' padding='16px 12px;' fontSize='35px'>
        Get Started
      </Button>
    </S.Submit>
  );
};

export default Submit;
