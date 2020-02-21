import React from "react";
import styled from "styled-components"
import Para from "./Para.js"

const NewDiv = styled.div`
background: peru;
  color: white;
  width: 385px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const Newh3 = styled.h3`
font-family: 'Lobster'
`;



const Card = props => {
    return (
        <NewDiv className="cardlist">
            <Newh3>Character: {props.name}</Newh3>
            <Para card = {props}/>
        </NewDiv>
    );
};

export default Card;

