import React from 'react';
import DisplayRankings from './Display/displayRankings'
import { Container, Col, Row } from "react-bootstrap";
import './App.css'

function App() {
  return (
    <Container fluid className='backgroundContainer' >
      <DisplayRankings/>
    </Container>
  );
}

export default App;

