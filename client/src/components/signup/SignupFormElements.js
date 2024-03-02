import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  display: flex;
  padding: 1.5rem 3rem;
`;

export const ContainerLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
`;

export const ImageContainer = styled.img`
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://demos.creative-tim.com/material-dashboard/assets/img/illustrations/illustration-signup.jpg');
`;
export const ContainerRight = styled.div`
  flex: 1;
  /* background-color: #eee; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const FormContainer = styled.form`
  width: 100%;
  min-height: 50rem;
  background-color: #fff;
  padding: 0 5rem;
`;

export const FormContainerTop = styled.div`
  width: 100%;
  padding: 0 2rem;
  /* min-height: 20rem; */
  /* background-color: red; */
`;
export const FormHeader = styled.h1`
  font-size: 2.5rem;
  color: #555;
  text-align: left;
`;
export const FormSubHeader = styled.p`
  font-size: 1.5rem;
  color: #555;
  text-align: left;
`;

export const FormBody = styled.div`
  width: 100%;
  /* min-height: 30rem; */
  /* background-color: yellow; */
  display: flex;
  padding: 2rem 2rem 0;
`;

export const FormBodyLeft = styled.div`
  width: 50%;
  /* background-color: green; */
`;
export const FormBodyRight = styled.div`
  flex: 1;
  /* background-color: blue; */
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

export const FormFooter = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 2rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignupBtn = styled.button`
  width: 80%;
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

export const FormFooterText = styled.p`
  font-size: 1.3rem;
  color: #333;
  text-align: center;
  margin: 1rem 0 0;
`;

export const Span = styled(Link)`
  font-size: 1.5rem;
  color: #ec407a;
  text-decoration: none;
  font-weight: 600;
`;
