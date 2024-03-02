import React, { useState } from 'react';
import * as a from './ViewSingleUserElements';
import TextInput from '../shared/TextInput';

const ViewSingleUser = ({ user, update }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [mobile, setMobile] = useState(user.mobile);
  const [country, setCountry] = useState(user.country);
  const [photo, setPhoto] = useState('');
  return (
    <a.Container>
      <a.Header>View User</a.Header>
      <a.UserInfoContainer>
        <a.InfoLeft>
          <a.ImgContainer />
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
                disabled={update ? false : true}
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
          <a.Update>Update User</a.Update>
        </a.InfoFooter>
      )}
    </a.Container>
  );
};

export default ViewSingleUser;
