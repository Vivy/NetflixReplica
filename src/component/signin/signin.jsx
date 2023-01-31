import * as S from './signin.style';

const SignIn = () => {
  return (
    <S.SignIn>
      <div>
        <input type='email' placeholder='email' />
        Email<label id='email'></label>
      </div>
      <div>
        <input type='password' placeholder='password' />
        Password<label id='password'></label>
      </div>
      <div>
        <input type='checkbox' />
        <label id='checkbox'>Remember me</label>
      </div>
    </S.SignIn>
  );
};

export default SignIn;
