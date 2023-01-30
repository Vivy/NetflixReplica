import Button from '../button/button';
import * as S from './submit.style';
const Submit = () => {
  return (
    <S.Submit>
      <label placeholder='email'>
        <input
          type='email'
          placeholder='Email Address'
          style={{ height: '60px', minWidth: '450px' }}
        />
        <label id='email' style={{ display: 'none' }}>
          Email Address
        </label>
      </label>
      <Button height='60px'>Get Started</Button>
    </S.Submit>
  );
};

export default Submit;
