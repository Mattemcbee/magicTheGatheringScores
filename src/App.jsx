import React from 'react';
import FetchCardNames from './cardLogic';
import { Container, Col, Row, Modal, Button } from 'react-bootstrap'; // Add Button from Bootstrap
import DisplayRankings from './Display/displayRankings'
import BulkCardSearch from './BulkCardSearch.jsx';

export function App(props) {
  return (
    <Container className='appBackground'>
      <Container className='text-center'>
        <h1 className='titleText metal-mania-regular'>GAGIC</h1>
        <h1 className='titleTextSmall metal-mania-regular'>The Mathering</h1>
      </Container>

      <BulkCardSearch />
      <DisplayRankings />
      <FetchCardNames />
    </Container>
  );
}

// Log to console
console.log('Hello console');