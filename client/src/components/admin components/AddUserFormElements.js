import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 3rem;
`;
export const Header = styled.h1`
  font-size: 2.5rem;
  color: #555;
  text-align: left;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
`;

export const FormBody = styled.div`
  width: 100%;
  /* min-height: 30rem; */
  /* background-color: yellow; */
  display: flex;
  padding: 2rem 2rem 0;
`;
export const FormLeft = styled.div`
  flex: 0 1 50%;
`;
export const FormRight = styled.div`
  flex: 1;
`;

export const InputContainer = styled.div`
  width: 100%;
  /* background-color: green; */
  padding: 1rem;
`;

export const FormFooter = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 2rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBtn = styled.button`
  width: 20%;
  /* background-image: linear-gradient(195deg, #ec407a, #d81b60); */
  background-image: ${(props) => props.background};
  color: #fff;
  border-radius: 1rem;
  text-transform: uppercase;
  padding: 1.3rem 1.5rem;
  outline: none;
  border: none;
  font-weight: 800;
  font-size: 1.2rem;
  margin: 0 1rem;

  &:hover {
    cursor: pointer;
  }
`;
