import React, { useState } from 'react';
import * as l from './LoginFormElements';
import TextInput from '../shared/TextInput';
import PasswordInput from '../shared/PasswordInput';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <l.Container>
      <l.FormContainer>
        <l.FormTop>
          <l.FormHeader>Sign in</l.FormHeader>
          <l.FormSubHeader>Welcome to the ARCH-HRM</l.FormSubHeader>
        </l.FormTop>
        <l.FormBody>
          <l.InputContainer>
            <TextInput
              placeholder={'Email'}
              value={email}
              setValue={setEmail}
              required={true}
            />
          </l.InputContainer>
          <l.InputContainer>
            <PasswordInput
              placeholder={'Password'}
              value={password}
              setValue={setPassword}
              required={true}
            />
          </l.InputContainer>
          <l.InputContainer>
            <l.LoginBtn>sign in</l.LoginBtn>
          </l.InputContainer>
          <l.FormFooterText>
            Don't have an account?&nbsp; <l.Span to="/signup">Sign Up</l.Span>{' '}
          </l.FormFooterText>
        </l.FormBody>
      </l.FormContainer>
    </l.Container>
  );
};

export default LoginForm;
