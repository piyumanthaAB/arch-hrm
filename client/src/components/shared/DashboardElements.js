import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ddd;
  display: flex;
  padding: 2rem;
  justify-content: space-around;
`;

export const LeftPanel = styled.div`
  width: 18%;
  background-image: linear-gradient(195deg, #42424a, #191919);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
export const PanelTop = styled.div`
  width: 100%;
  min-height: 8rem;
  background-color: #444;
`;

export const PanelBody = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 2rem 0;
`;

export const NavItem = styled(Link)`
  width: 100%;
  text-decoration: none;
  /* background-color: ${(props) => props.fontsize || '1.5rem'}; */
  background-image: ${(props) => props.background};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0 2rem;
  margin: 1rem 0;
  transition: all 1s;

  &:hover {
    transition: all 1s;
    background-image: linear-gradient(195deg, #244, #242424);
  }
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
`;

export const NavItemTextContainer = styled.div`
  color: #eee;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const RightContainer = styled.div`
  flex: 0 1 80%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 3rem 5rem;
  position: relative;
`;
