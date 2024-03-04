import React, { useState } from 'react';
import * as s from './SignupFormElements';
import TextInput from '../shared/TextInput';
import PasswordInput from '../shared/PasswordInput';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState();
  const [country, setCountry] = useState('Sri Lanka');
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordReEnter, setPasswordReEnter] = useState('');

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    // validateImageResolution(e.target.files[0]);
    // validateImage(e.target.files[0], 1080, 1080, setCover);
  };

  const navigate = useNavigate();

  const handleSignUp = async (e, formData) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `/api/v1/users`,
        data: formData,
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      return res;
    } catch (err) {
      console.log(err.response.data);
      throw err;
    }
  };

  const SignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('country', country);
    formData.append('photo', photo);
    formData.append('password', password);
    formData.append('passwordConfirm', passwordReEnter);

    if (password !== passwordReEnter) {
      return toast.error(
        "Password and Password Re Enter doesn't match! Check again!"
      );
    }

    toast.promise(
      handleSignUp(e, formData),
      {
        loading: 'Signing Up...',
        success: (data) => {
          // console.log({ data });
          setFirstName('');
          setLastName('');
          setEmail('');
          setMobile('');
          setCountry('');
          setPhoto();
          setPassword();
          setPasswordReEnter();
          navigate('/');
          return ` ${data.data.message} ` || 'success';
        },
        error: (err) => {
          if (!err.response.data.message) {
            return 'Something went wrong. Please Try again.';
          }
          return `${err?.response?.data?.message?.toString()}`;
        },
      },
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '1.6rem',
        },
      }
    );
  };

  return (
    <s.Container>
      <s.ContainerLeft>
        <s.ImageContainer />
      </s.ContainerLeft>
      <s.ContainerRight>
        <s.FormContainer onSubmit={SignUp}>
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
                <input
                  type="file"
                  id="file1"
                  accept="image/*"
                  onChange={handlePhoto}
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
