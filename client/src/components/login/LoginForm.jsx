import React from 'react';
import * as l from './LoginFormElements';

const LoginForm = () => {
  return (
    <l.Container>
      <l.FormContainer>
        <l.FormTop>
          <l.FormHeader>Sign in</l.FormHeader>
          <l.FormSubHeader>Welcome to the ARCH-HRM</l.FormSubHeader>
        </l.FormTop>
        <l.FormBody>
          <l.InputContainer>
            <l.Input type="email" placeholder="Email" />
          </l.InputContainer>
          <l.InputContainer>
            <l.Input type="password" placeholder="Password" />
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
