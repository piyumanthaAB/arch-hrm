import React from 'react';
import * as s from './SignupFormElements';

const SignupForm = () => {
  return (
    <s.Container>
      <s.ContainerLeft>
        <s.ImageContainer />
      </s.ContainerLeft>
      <s.ContainerRight>
        <s.FormContainer>
          <s.FormContainerTop>
            <s.FormHeader>Sign Up</s.FormHeader>
            <s.FormSubHeader>Complete the form to sign up</s.FormSubHeader>
          </s.FormContainerTop>
          <s.FormBody>
            <s.FormBodyLeft>
              <s.InputContainer>
                <s.Input type="text" placeholder="First Name" />
              </s.InputContainer>
              <s.InputContainer>
                <s.Input type="text" placeholder="Last Name" />
              </s.InputContainer>
              <s.InputContainer>
                <s.Input type="email" placeholder="Email" />
              </s.InputContainer>
              <s.InputContainer>
                <s.Input type="text" placeholder="Mobile" />
              </s.InputContainer>
            </s.FormBodyLeft>
            <s.FormBodyRight>
              <s.InputContainer>
                <s.Input type="text" placeholder="Country" />
              </s.InputContainer>
              <s.InputContainer>
                <s.Input type="text" placeholder="Photo" />
              </s.InputContainer>
              <s.InputContainer>
                <s.Input type="password" placeholder="Password" />
              </s.InputContainer>
              <s.InputContainer>
                <s.Input type="password" placeholder="Re-enter Password" />
              </s.InputContainer>
            </s.FormBodyRight>
          </s.FormBody>
          <s.FormFooter>
            <s.SignupBtn>Sign Up</s.SignupBtn>
            <s.FormFooterText>
              Already have an account? <s.Span to="/">Sign in</s.Span>
            </s.FormFooterText>
          </s.FormFooter>
        </s.FormContainer>
      </s.ContainerRight>
    </s.Container>
  );
};

export default SignupForm;
