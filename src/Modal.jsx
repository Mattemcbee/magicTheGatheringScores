import React from 'react';
import { Modal, Container } from 'react-bootstrap';

const ModalCard = ({ selectedCard, isModalOpen, closeModal }) => {  // Destructure props
  return (
    <Modal show={isModalOpen} onHide={closeModal} centered>
      <Container style={{ position: 'relative' }} className='modalBackground'>
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            fontSize: '40px',
            cursor: 'pointer',
            padding: '10px',
            color: 'grey',
            zIndex: 100,
          }}
        >
          &times;
        </button>

        {selectedCard && selectedCard.image ? (
          <img
            src={selectedCard.image}
            alt={selectedCard.name}
            style={{ width: '100%' }}
          />
        ) : (
          selectedCard && (
            <Modal.Body style={{ width: '100%', aspectRatio: '7/10' }}>
              <Modal.Title>{selectedCard.name}</Modal.Title>
              <p>{selectedCard.text || 'N/A'}</p>

              <p>Power: {selectedCard.power || 'N/A'}</p>
              <p>Toughness: {selectedCard.toughness || 'N/A'}</p>
            </Modal.Body>
          )
        )}
      </Container>
    </Modal>
  );
};

export default ModalCard;
