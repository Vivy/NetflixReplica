import BckImage from '../bckimage/bckimage';
import Flex from '../flex/flex';
import Header from '../header/header';
import { DivGradient } from '../home/home.style';
import * as S from './signin.style';

const SignIn = () => {
  return (
    <S.SignIn>
      <DivGradient>
        <Header page='signin' />
        <Flex>
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
        </Flex>
      </DivGradient>
    </S.SignIn>
  );
};

export default SignIn;
