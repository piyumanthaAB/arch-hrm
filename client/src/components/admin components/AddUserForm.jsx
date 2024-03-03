import React, { useState } from 'react';
import * as a from './AddUserFormElements';
import TextInput from '../shared/TextInput';
import PasswordInput from '../shared/PasswordInput';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AddUserForm = () => {
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

  const handleSubmit = async (e, formData) => {
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

  const AddUser = async (e) => {
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
      handleSubmit(e, formData),
      {
        loading: 'Adding User...',
        success: (data) => {
          // console.log({ data });
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
    <a.Container>
      <a.Header>Add Users</a.Header>
      <a.Form onSubmit={AddUser}>
        <a.FormBody>
          <a.FormLeft>
            <a.InputContainer>
              <TextInput
                placeholder={'First Name'}
                value={firstName}
                setValue={setFirstName}
                required={true}
              />
            </a.InputContainer>
            <a.InputContainer>
              <TextInput
                placeholder={'Last Name'}
                value={lastName}
                setValue={setLastName}
                required={true}
              />
            </a.InputContainer>
            <a.InputContainer>
              <TextInput
                placeholder={'Email'}
                value={email}
                setValue={setEmail}
                required={true}
                type={'email'}
              />
            </a.InputContainer>
            <a.InputContainer>
              <TextInput
                placeholder={'Mobile'}
                value={mobile}
                setValue={setMobile}
                required={true}
                type={'number'}
              />
            </a.InputContainer>
          </a.FormLeft>
          <a.FormRight>
            <a.InputContainer>
              <TextInput
                placeholder={'Country'}
                value={country}
                setValue={setCountry}
                required={true}
              />
            </a.InputContainer>
            <a.InputContainer>
              <input
                type="file"
                id="file1"
                accept="image/*"
                onChange={handlePhoto}
              />
            </a.InputContainer>
            <a.InputContainer>
              <PasswordInput
                placeholder={'Password'}
                value={password}
                setValue={setPassword}
                required={true}
              />
            </a.InputContainer>
            <a.InputContainer>
              <PasswordInput
                placeholder={'Re-enter Password'}
                value={passwordReEnter}
                setValue={setPasswordReEnter}
                required={true}
              />
            </a.InputContainer>
          </a.FormRight>
        </a.FormBody>
        <a.FormFooter>
          <a.FormBtn
            type="submit"
            background="linear-gradient(195deg, #ec407a, #d81b60)"
          >
            Add User
          </a.FormBtn>
          <a.FormBtn
            onClick={() => {
              setFirstName('');
              setLastName('');
              setEmail('');
              setMobile('');
              setCountry('');
              setPhoto();
              setPassword();
              setPasswordReEnter();
            }}
            background="linear-gradient(195deg, #444, #444)"
          >
            Clear
          </a.FormBtn>
        </a.FormFooter>
      </a.Form>
    </a.Container>
  );
};

export default AddUserForm;
