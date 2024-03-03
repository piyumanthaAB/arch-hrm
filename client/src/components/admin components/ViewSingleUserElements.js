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

export const ImgContainer = styled.div`
  width: 30rem;
  height: 30rem;
  /* background-color: #ccc; */
  border-radius: 50%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border: 2px solid #ec407a;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(233, 30, 99, 0.4) !important;
`;

export const UserInfoContainer = styled.form`
  width: 100%;
  /* min-height: 40rem; */
  /* background-color: green; */
  display: flex;
  padding: 1.5rem 8rem;
`;

export const InfoLeft = styled.div`
  flex: 0 1 50%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InfoRight = styled.div`
  flex: 0 1 50%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
`;

export const InfoFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputContainer = styled.div`
  width: 100%;
  /* background-color: green; */
  padding: 1rem;
`;

export const Label = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  margin: 0 0 1rem;
`;

export const Update = styled.button`
  width: 30%;
  background-image: linear-gradient(195deg, #ec407a, #d81b60);
  color: #fff;
  border-radius: 1rem;
  text-transform: uppercase;
  padding: 1.3rem 1.5rem;
  outline: none;
  border: none;
  font-weight: 800;
  font-size: 1.2rem;
  border: 1px solid #fff;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    background-image: linear-gradient(195deg, #fff, #fff);

    color: #d81b60;
    border: 1px solid #d81b60;
  }
`;
