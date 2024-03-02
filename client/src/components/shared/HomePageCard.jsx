import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(Link)`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background-color: ${(props) => props.cardcolor};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2rem;
  text-decoration: none;
  color: #333;

  :visited,
  :active,
  :hover,
  :focus,
  :target {
    color: #333;
  }
`;

const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.iconcirclecolor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  ${'' /* padding:2rem ; */}
  color: #333;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const HomePageCard = ({ url, icon, text, cardcolor, iconcirclecolor }) => {
  return (
    <Container to={`${url}`} cardcolor={cardcolor}>
      <IconContainer iconcirclecolor={iconcirclecolor}>{icon}</IconContainer>
      <Text>{text}</Text>
    </Container>
  );
};

export default HomePageCard;
