import React from "react";
import styled from "styled-components"



const NewP = styled.p`
border-bottom: 2px solid black;
`;




const Para = props => {
    return (
        <div className="cardlist">
            <NewP>Height: {props.card.height}</NewP>
            <NewP>Mass: {props.card.mass}</NewP>
            <NewP>Hair: {props.card.hair}</NewP>
            <NewP>Skin: {props.card.skin}</NewP>
        </div>
    );
};

export default Para;