import Anchor from '../anchor/anchor';
import Button from '../button/button';
import DivGradient from '../divgradient/divgradient';
import Flex from '../flex/flex';
import Header from '../header/header';
import Text from '../text/text';
import * as S from './signin.style';
import SmartInput from './smartinput/smartinput';

const SignIn = () => {
  return (
    <S.SignIn>
      <DivGradient gradient dataTestId='signin' flex='flex' align='center'>
        <Header page='signin' />
        <Flex flex='flex' grow={1} align='center'>
          <Flex
            padding={90}
            gradient
            width='500'
            direction='column'
            flex='flex'
            gap='20px'
          >
            <Text as='h1'>Sign in</Text>
            <SmartInput
              type='email'
              id='email'
              placeholder='email'
              height='50px'
              width='100%'
            />
            <SmartInput
              height='50px'
              width='100%'
              type='password'
              id='password'
              placeholder='Add password'
            />
            <Button fontSize='l'>Sign In</Button>

            <SmartInput type='checkbox' id='checkbox' />

            <Anchor href='help'>Need Help?</Anchor>
            <Text>New to Netflix?</Text>
            <Anchor href='register'>Sing up now</Anchor>
            <Text>
              This page is protected by google reCAPTCHA to ensure bla bla.
              <Anchor href='info'>Learn more</Anchor>
            </Text>
          </Flex>
        </Flex>
      </DivGradient>
    </S.SignIn>
  );
};

export default SignIn;
