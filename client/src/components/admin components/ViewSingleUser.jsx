import React, { useState } from 'react';
import * as a from './ViewSingleUserElements';
import TextInput from '../shared/TextInput';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ViewSingleUser = ({ user, update, manualFetch }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [mobile, setMobile] = useState(user.mobile);
  const [country, setCountry] = useState(user.country);
  const [photo, setPhoto] = useState(user.profilePicture);

  const handleUpdate = async (e) => {
    try {
      const res = await axios({
        method: 'PATCH',
        url: `/api/v1/users/${user._id}`,
        data: {
          firstName,
          lastName,
          mobile,
          country,
        },
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'multipart/form-data',
        },
      });
      manualFetch();
      return res;
    } catch (err) {
      console.log(err.response.data);
      throw err;
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();

    toast.promise(
      handleUpdate(e),
      {
        loading: 'Updating User...',
        success: (data) => {
          return ` ${data?.data?.message} ` || 'success';
        },
        error: (err) => {
          console.log({ err });
          if (!err.response?.data?.message) {
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
      <a.Header>View User</a.Header>
      <a.UserInfoContainer>
        <a.InfoLeft>
          <a.ImgContainer imageUrl={photo} />
        </a.InfoLeft>
        <a.InfoRight>
          <a.InfoGroup>
            <a.Label>First Name</a.Label>
            <a.InputContainer>
              <TextInput
                placeholder={'First Name'}
                value={firstName}
                setValue={setFirstName}
                required={true}
                disabled={update ? false : true}
              />
            </a.InputContainer>
          </a.InfoGroup>
          <a.InfoGroup>
            <a.Label>Last Name</a.Label>
            <a.InputContainer>
              <TextInput
                placeholder={'Last Name'}
                value={lastName}
                setValue={setLastName}
                required={true}
                disabled={update ? false : true}
              />
            </a.InputContainer>
          </a.InfoGroup>
          <a.InfoGroup>
            <a.Label>Email</a.Label>
            <a.InputContainer>
              <TextInput
                placeholder={'Email'}
                value={email}
                setValue={setEmail}
                required={true}
                type={'email'}
                disabled={true}
              />
            </a.InputContainer>
          </a.InfoGroup>
          <a.InfoGroup>
            <a.Label>Mobile</a.Label>
            <a.InputContainer>
              <TextInput
                placeholder={'Mobile'}
                value={mobile}
                setValue={setMobile}
                required={true}
                type={'number'}
                disabled={update ? false : true}
              />
            </a.InputContainer>
          </a.InfoGroup>

          <a.InfoGroup>
            <a.Label>Country</a.Label>
            <a.InputContainer>
              <TextInput
                placeholder={'Country'}
                value={country}
                setValue={setCountry}
                required={true}
                disabled={update ? false : true}
              />
            </a.InputContainer>
          </a.InfoGroup>
        </a.InfoRight>
      </a.UserInfoContainer>
      {update && (
        <a.InfoFooter>
          <a.Update onClick={updateUser}>Update User</a.Update>
        </a.InfoFooter>
      )}
    </a.Container>
  );
};

export default ViewSingleUser;
