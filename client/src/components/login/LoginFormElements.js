import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    background-image: linear-gradient(195deg, #42424a, #191919);
    opacity: 0.6 !important;
    z-index: 1;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 28%;
  /* min-height: 50rem; */
  background-color: #fff;
  border-radius: 1rem;
`;
export const FormTop = styled.div`
  position: relative;
  width: 90%;
  min-height: 15rem;
  background-image: linear-gradient(195deg, #ec407a, #d81b60);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(233, 30, 99, 0.4) !important;
  border-radius: 1rem;
  left: 0;
  right: 0;
  margin: -10% auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Span = styled(Link)`
  font-size: 1.5rem;
  color: #ec407a;
  text-decoration: none;
  font-weight: 600;
`;

export const FormHeader = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
`;
export const FormSubHeader = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
`;
export const FormFooterText = styled.p`
  font-size: 1.3rem;
  color: #333;
  text-align: center;
  margin: 1rem 0 0;
`;

export const FormBody = styled.form`
  padding: 5rem 2rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  /* background-color: green; */
  padding: 1rem;
`;

export const Input = styled.input`
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

export const LoginBtn = styled.button`
  width: 100%;
  background-image: linear-gradient(195deg, #ec407a, #d81b60);
  color: #fff;
  border-radius: 1rem;
  text-transform: uppercase;
  padding: 1.3rem 1.5rem;
  outline: none;
  border: none;
  font-weight: 800;
  font-size: 1.2rem;
`;
