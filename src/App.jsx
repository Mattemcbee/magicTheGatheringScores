import React from 'react';
import FetchCardNames from './cardLogic';
import { Container, Col, Row, Modal, Button } from 'react-bootstrap'; // Add Button from Bootstrap
import DisplayRankings from './Display/displayRankings'

export function App(props) {
  return (
    <Container className='appBackground'>
      <DisplayRankings/>
      <FetchCardNames />
    </Container>
  );
}

// Log to console
console.log('Hello console');