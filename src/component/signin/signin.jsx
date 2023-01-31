import * as S from './signin.style';

const SignIn = () => {
  return (
    <S.SignIn>
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
    </S.SignIn>
  );
};

export default SignIn;
