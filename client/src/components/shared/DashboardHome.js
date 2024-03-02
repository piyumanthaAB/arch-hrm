import React, { useState } from 'react';
import styled from 'styled-components';
import { adminCards } from '../../data/home page cards/adminCards';
import { userCards } from '../../data/home page cards/userCards';

export const Container = styled.div`
  ${'' /* background-color:green ; */}
  width:100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 3rem 2rem;
  ${'' /* background-color:red ; */}
`;

export const HeaderContainer = styled.div`
  ${'' /* background-color:red ; */}
  width:100%;
`;

export const CardRow = styled.div`
  width: 55%;
  padding: 2rem 0;
  display: flex;
  ${'' /* justify-content:space-around ; */}
  justify-content:flex-start;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  flex: 0 0 30%;
  min-height: 18rem;
  margin-right: 2rem;
  margin-top: 1rem;
`;

const DashboardHome = () => {
  const [cards, setCards] = useState(adminCards);
  return (
    <Container>
      <HeaderContainer>Welcome</HeaderContainer>
      <CardRow>
        {cards.map((card, i) => {
          return <CardContainer key={i}> {card.element} </CardContainer>;
        })}
      </CardRow>
    </Container>
  );
};

export default DashboardHome;
