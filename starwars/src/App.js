import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/Card.js";
import styled from "styled-components"

const Body = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results)
        console.log(data)
      })
      .catch(error => {
        console.log("Sorry no data", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Body className = "thecard">
      {data.map(item => {
      return (
        <Card 
        key = {item.name}
        name = {item.name}
        height = {item.height}
        mass = {item.mass}
        hair = {item.hair_color}
        skin = {item.skin_color}
        />
      );
      })}
      </Body>
    </div>
  );
}

export default App;
