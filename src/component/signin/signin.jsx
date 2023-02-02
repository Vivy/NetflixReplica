import Anchor from '../anchor/anchor';
import Button from '../button/button';
import DivGradient from '../divgradient/divgradient';
import Flex from '../flex/flex';
import Footer from '../footer/footer';
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
              placeholder='Email or phone number'
              height='50px'
              width='100%'
              bgcolor='#222'
              border='none'
            />
            <SmartInput
              bgcolor='#222'
              border='none'
              height='50px'
              width='100%'
              type='password'
              id='password'
              placeholder='Password'
            />
            <Button fontSize='l'>Sign In</Button>

            <SmartInput
              type='checkbox'
              id='checkbox'
              textLabel='Remember me'
              color={1}
            />

            <Anchor href='help' color={1}>
              Need Help?
            </Anchor>

            <Text color={1}>
              New to Netflix?
              <Anchor href='register' color='white'>
                Sing up now
              </Anchor>
            </Text>
            <Text color={1}>
              This page is protected by google reCAPTCHA to ensure bla bla.
              <Anchor href='info'>Learn more</Anchor>
            </Text>
          </Flex>
        </Flex>
      </DivGradient>
      <Flex gradient>
        <Footer gradient />
      </Flex>
    </S.SignIn>
  );
};

export default SignIn;
