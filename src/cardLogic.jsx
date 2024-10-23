import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import ModalCard from './Modal.jsx';
import MyTable from './MyTable.jsx';
import { db } from './firebase'; // Firestore instance
import { collection, doc, setDoc, getDocs } from 'firebase/firestore'; // Firestore functions

const FetchCardNames = () => {
    const [cardName, setCardName] = useState('');
    const [cardDetails, setCardDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [userTables, setUserTables] = useState({
        Matt: [],
        Nick: [],
        Andrew: [],
        Will: [],
        Pavle: [],
        Clay: [],
    });
    const [currentUser, setCurrentUser] = useState('Matt');
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchOptionsOpen, setSearchOptionsOpen] = useState(true);

    // Fetch user tables from Firestore when the component mounts
    useEffect(() => {
        const fetchUserTables = async () => {
            const snapshot = await getDocs(collection(db, 'userTables'));
            const tables = {};
            snapshot.forEach(doc => {
                tables[doc.id] = doc.data().cards || [];
            });
            setUserTables(tables);
        };

        fetchUserTables();
    }, []);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `https://api.scryfall.com/cards/search?q=${encodeURIComponent(cardName)}`
                );

                const fetchedDetails = data.data.map(card => ({
                    name: card.name,
                    manaCost: card.mana_cost || 'N/A',
                    power: card.power || 'N/A',
                    toughness: card.toughness || 'N/A',
                    image: card.image_uris?.normal || '',
                    text: card.oracle_text || 'No description',
                }));

                setCardDetails(fetchedDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching card:', error);
                setLoading(false);
            }
        };

        if (cardName) {
            fetchCard();
        }
    }, [cardName]);

    const openModal = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSearch = () => setCardName(inputValue);
    const handleHidden = () => setSearchOptionsOpen(!searchOptionsOpen);

    const handleUserChange = (e) => setCurrentUser(e.target.value);

    const addToMyTable = async (card) => {
        setUserTables((prevTables) => {
            const updatedTable = [...(prevTables[currentUser] || [])];
            const cardIndex = updatedTable.findIndex((item) => item.name === card.name);

            if (cardIndex !== -1) {
                updatedTable[cardIndex].count += 1;
            } else {
                updatedTable.push({ ...card, count: 1 });
            }

            const newTables = { ...prevTables, [currentUser]: updatedTable };
            setDoc(doc(db, 'userTables', currentUser), { cards: updatedTable });
            return newTables;
        });
    };

    const removeFromMyTable = async (cardName) => {
        setUserTables((prevTables) => {
            const updatedTable = [...(prevTables[currentUser] || [])];
            const cardIndex = updatedTable.findIndex((item) => item.name === cardName);

            if (cardIndex !== -1) {
                if (updatedTable[cardIndex].count > 1) {
                    updatedTable[cardIndex].count -= 1;
                } else {
                    updatedTable.splice(cardIndex, 1);
                }
            }

            const newTables = { ...prevTables, [currentUser]: updatedTable };
            setDoc(doc(db, 'userTables', currentUser), { cards: updatedTable });
            return newTables;
        });
    };

    return (
        <Container fluid className='text-center'>

            <h1 className='cleanFont titleTextSm text-center'>Reading the Card</h1>
            <h1 className='metalFont titleTextLg text-center'>EXPLAINS THE CARD</h1>
            <select name="selectedUser" style={{marginBottom:'20px', marginTop:'10px'}} onChange={handleUserChange}>
                <option value="Matt">Matt</option>
                <option value="Nick">Nick</option>
                <option value="Andrew">Andrew</option>
                <option value="Will">Will</option>
                <option value="Pavle">Pavle</option>
                <option value="Clay">Clay</option>
            </select>

            <Container fluid className='text-center'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter card name"
                />
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleHidden}>
                    {searchOptionsOpen ? 'Hide Results' : 'Show Results'}
                </button>
            </Container>
            {loading ? (
                <p>Loading...</p>
            ) : (
                searchOptionsOpen && (
                    <Container fluid style={{ backgroundColor: '', textAlign: 'left' }}>
                        {cardDetails.length > 0 ? (
                            cardDetails.map((card, index) => (
                                <ul key={index} style={{ listStyleType: 'none', padding: 0 }}>
                                    <li>
                                        <Container  >

                                            <Row>
                                                <Col xs='9'>
                                                    {card.name}, {card.power}/{card.toughness}{' '}
                                                </Col>
                                                <Col xs='3' className='counterBoxIntro'>
                                                    <button className='counterPlusMinus' onClick={() => addToMyTable(card)}>+</button>
                                                    <button className='counterPlusMinus' onClick={() => removeFromMyTable(card.name)}>−</button>
                                                </Col>
                                            </Row>
                                        </Container>

                                    </li>
                                </ul>
                            ))
                        ) : (
                            <p>No cards found</p>
                        )}
                    </Container>
                )
            )}

            <MyTable
                myTable={userTables[currentUser]}
                openModal={openModal}
                currentUser={currentUser}
                addToMyTable={addToMyTable}
                removeFromMyTable={removeFromMyTable}
            />

            <ModalCard
                selectedCard={selectedCard}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />
        </Container>
    );
};

export default FetchCardNames;
