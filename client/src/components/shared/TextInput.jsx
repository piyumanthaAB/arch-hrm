import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 1.4rem;
  color: #777;
  font-weight: 500;
  outline: none;
  border: 1px solid #ccc;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  width: 100%;

  &:focus {
    border: 1px solid #ec407a;
  }
`;

const TextInput = ({
  placeholder,
  value,
  setValue,
  required,
  type,
  disabled,
}) => {
  return (
    <Input
      required={required}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type || 'text'}
      placeholder={placeholder || 'placeholder'}
      disabled={disabled || false}
    />
  );
};

export default TextInput;
