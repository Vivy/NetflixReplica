import { useRef, useState } from 'react';
import { readOne, signIn, signUp } from '../../firebase';
import Anchor from '../anchor/anchor';
import Button from '../button/button';
import DivGradient from '../divgradient/divgradient';
import Flex from '../flex/flex';
import Footer from '../footer/footer';
import Header from '../header/header';
import Text from '../text/text';
import * as S from './signin.style';
import SmartInput from './smartinput/smartinput';
import { Field, Form, Formik } from 'formik';

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const firsttry = new FormData(e.target);
    console.log(firsttry, 'what is this');

    // signIn(firsttry.get('email'), firsttry.get('password'));
    signUp(firsttry.get('email'), firsttry.get('password'));
  };

  // const onSubmit = (valueList) => {
  //   console.log(valueList, 'this is valuKISTTTTT');
  // };

  return (
    <div>
      {/* <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <Field name='email' type='email' />
            <Field name='password' type='password' />
            <button type='submit'>click this new button</button>
          </Form>
        )}
      </Formik> */}
      <S.SignIn onSubmit={handleSubmit}>
        <DivGradient gradient dataTestId='signin' flex='flex' align='center'>
          <Header page='signin' />
          <Flex flex='flex' grow={1} align='center'>
            <Flex
              padding='60px 68px 40px'
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
                name='email'
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
                name='password'
                placeholder='Password'
              />
              <Button
                fontSize='16px'
                padding='21px'
                fontWeight='500'
                justify='center'
                margin='24px 0 12px'
              >
                <Anchor href='signin' color='white'>
                  Sign In
                </Anchor>
              </Button>

              <Flex direction='row' flex='flex' justify='space-between'>
                <SmartInput
                  type='checkbox'
                  id='checkbox'
                  textLabel='Remember me'
                  color={1}
                />
                <Anchor href='help' color={1}>
                  Need Help?
                </Anchor>
              </Flex>

              <Text color={1}>
                New to Netflix?
                <Anchor href='/' color='white'>
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
          <Footer gradient page='signin' />
        </Flex>
      </S.SignIn>
    </div>
  );
};

export default SignIn;
