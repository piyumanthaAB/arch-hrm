import React, { useState } from 'react';
import * as s from './SignupFormElements';
import TextInput from '../shared/TextInput';
import PasswordInput from '../shared/PasswordInput';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState();
  const [country, setCountry] = useState('Sri Lanka');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [passwordReEnter, setPasswordReEnter] = useState('');

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
                <TextInput
                  placeholder={'First Name'}
                  value={firstName}
                  setValue={setFirstName}
                  required={true}
                />
              </s.InputContainer>
              <s.InputContainer>
                <TextInput
                  placeholder={'Last Name'}
                  value={lastName}
                  setValue={setLastName}
                  required={true}
                />
              </s.InputContainer>
              <s.InputContainer>
                <TextInput
                  placeholder={'Email'}
                  value={email}
                  setValue={setEmail}
                  required={true}
                  type={'email'}
                />
              </s.InputContainer>
              <s.InputContainer>
                <TextInput
                  placeholder={'Mobile'}
                  value={mobile}
                  setValue={setMobile}
                  required={true}
                  type={'number'}
                />
              </s.InputContainer>
            </s.FormBodyLeft>
            <s.FormBodyRight>
              <s.InputContainer>
                <TextInput
                  placeholder={'Country'}
                  value={country}
                  setValue={setCountry}
                  required={true}
                />
              </s.InputContainer>
              <s.InputContainer>
                <TextInput
                  placeholder={'Photo'}
                  value={photo}
                  setValue={setPhoto}
                  required={true}
                />
              </s.InputContainer>
              <s.InputContainer>
                <PasswordInput
                  placeholder={'Password'}
                  value={password}
                  setValue={setPassword}
                  required={true}
                />
              </s.InputContainer>
              <s.InputContainer>
                <PasswordInput
                  placeholder={'Re-enter Password'}
                  value={passwordReEnter}
                  setValue={setPasswordReEnter}
                  required={true}
                />
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
