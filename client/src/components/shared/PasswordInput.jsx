import React, { useState } from 'react';
import styled from 'styled-components';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const Container = styled.div`
  position: relative;
`;

const InputField = styled.input`
  position: relative;
  font-size: 1.4rem;
  color: #777;
  font-weight: 500;
  outline: none;
  border: 1px solid #ccc;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  width: 100%;
  transition: all 0.6s;

  &:focus {
    border: 1px solid #ec407a;
  }
`;

const ToggleBtn = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0%;
  right: 3%;
  outline: none;
  font-size: 2.2rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #999;

  :hover {
    cursor: pointer;
  }
`;
const PasswordInput = ({ placeholder, value, setValue, required }) => {
  const [type, setType] = useState('password');

  return (
    <Container>
      <InputField
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        placeholder={placeholder || 'placeholder'}
      />
      <ToggleBtn
        onClick={(e) =>
          type === 'password' ? setType('text') : setType('password')
        }
      >
        {type === 'password' ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        {/* <AiOutlineEye /> */}
      </ToggleBtn>
    </Container>
  );
};

export default PasswordInput;
