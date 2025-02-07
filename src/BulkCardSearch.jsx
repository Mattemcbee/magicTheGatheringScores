import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import MattList from './Lists/mattDefaultList';
import   getMoxfieldDeck from './moxfieldScrape'
const BulkCardSearch = () => {
  const [bulkCards, setBulkCards] = useState({ Matt: [...MattList] }); // Initialize with MattList
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  const [currentUserForUpload, setCurrentUserForUpload] = useState('Matt');
  const [bulkInput, setBulkInput] = useState('');
  const [cardDetails, setCardDetails] = useState({});
  const [toggleImages, setToggleImages] = useState(false);


  // Handle bulk input processing
  const handleBulkInput = () => {
    const lines = bulkInput.split('\n');
    const groupedData = lines.reduce((acc, line) => {
      const match = line.match(/^\d+\s+(.*)$/);
      if (!match) return acc;

      const cardName = match[1].trim();
      const playerName = currentUserForUpload;

      if (!acc[playerName]) {
        acc[playerName] = [];
      }

      acc[playerName].push(cardName);
      return acc;
    }, {});

    setBulkCards((prevBulkCards) => {
      const updatedBulkCards = { ...prevBulkCards };

      Object.entries(groupedData).forEach(([player, newCards]) => {
        if (!updatedBulkCards[player]) {
          updatedBulkCards[player] = [];
        }
        updatedBulkCards[player] = [...new Set([...updatedBulkCards[player], ...newCards])];
      });

      return updatedBulkCards;
    });

    setBulkInput('');
  };
  
  
  // Search for matching cards in both uploaded and MattList
// Handle search for cards
const handleSearch = () => {
  if (!searchTerm.trim()) {
    setFilteredCards([]);
    return;
  }

  // Split search terms by new lines or commas, trim each term, and remove empty strings
  const searchTerms = searchTerm
    .split(/[\r\n,]+/)
    .map((term) => term.replace(/^\d+\s+/, '').trim()) // Remove leading numbers
    .filter((term) => term);

  // Filter through MattList to find matching cards for each player
  const matches = MattList.map(({ player, cards }) => {
    const matchingCards = cards.filter((card) =>
      searchTerms.some((term) => card.toLowerCase().includes(term.toLowerCase()))
    );

    if (matchingCards.length > 0) {
      return { player, cards: matchingCards };
    }
    return null;
  }).filter(Boolean); // Remove null values

  // Update filtered cards state
  setFilteredCards(matches.length > 0 ? matches : []);
};

  // Toggle image visibility
  const toggleImageVisibility = () => setToggleImages((prevState) => !prevState);

  return (
    <Container style={{marginBottom:'40px'}}>
      <h1 className='nameText'>Bulk Card Search</h1>
      <textarea
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for cards (one per line)"
        style={{ width: '100%', marginBottom: '10px' }}
        rows={3}
        className='backgroundCardFirst'

      />
      <button onClick={handleSearch} className='buttonColor'>Search</button>

      {filteredCards.length > 0 ? (
  <div className='backgroundCardFirst text-left'>
          <h2 className='nameText'>Search Results</h2>
          {filteredCards.map(({ player, cards }) => (
            <div key={player}>
              <h3>{player}</h3>
              <Container fluid>
                <Row>
                  {cards.map((card, index) => (
                    <Col xs={12} key={index}>
                      {!toggleImages && <span>{card}</span>}
                      {toggleImages && cardDetails[card]?.image && (
                        <img src={cardDetails[card]?.image} alt={card} style={{ width: '100%' }} />
                      )}
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching cards found.</p>
      )}
{/*
      <h2>All Bulk Cards</h2>
      <button onClick={toggleImageVisibility}>Toggle Image Visibility</button>
     */}
      </Container>
  );
};

export default BulkCardSearch;
