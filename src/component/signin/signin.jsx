import BckImage from '../bckimage/bckimage';
import Header from '../header/header';
import { DivGradient } from '../home/home.style';
import * as S from './signin.style';

const SignIn = () => {
  return (
    <S.SignIn>
      <BckImage>
        <DivGradient>
          <Header page='signin' />
          <div>
            <input type='email' id='email' placeholder='email' />
            Email<label htmlFor='email'></label>
          </div>
          <div>
            <input type='password' id='password' placeholder='password' />
            Password<label htmlFor='password'></label>
          </div>
          <div>
            <input type='checkbox' id='checkbox' />
            <label htmlFor='checkbox'>Remember me</label>
          </div>
        </DivGradient>
      </BckImage>
    </S.SignIn>
  );
};

export default SignIn;
