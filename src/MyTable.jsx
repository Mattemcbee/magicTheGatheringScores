import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyTable = ({ myTable, openModal, currentUser, addToMyTable, removeFromMyTable }) => {
  return (
    <Container fluid>
      <h2 className='titleTextTable cleanFont text-center'>{currentUser} Table</h2>

      <Row>
        {myTable.length > 0 ? (
          myTable.map((card, index) => (
  <Col xs="6" key={index}>
    <div style={{ cursor: 'pointer' }} onClick={() => openModal(card)}>
      {card.image ? (
        <img
          src={card.image}
          className="cardImgBox"
          alt={card.name}
        />
      ) : (
        <div className="cardTextBox">
          {`${card.name} ${card.power || 'N/A'}/${card.toughness || 'N/A'}`} 
        </div>
      )}
    </div>
      <Container className='text-center d-flex justify-content-center'>
        <p className='counterBox' style={{width:''}}>{card.count} 
    <button className='counterPlusMinus' onClick={() => addToMyTable(card)}>+</button>
    <button className='counterPlusMinus' onClick={() => removeFromMyTable(card.name)}>−</button>
    </p> 
      </Container>
  </Col>
))

        ) : (
          <p>No cards added to {currentUser} Table</p>
        )}
      </Row>
    </Container>
  );
};

export default MyTable;
