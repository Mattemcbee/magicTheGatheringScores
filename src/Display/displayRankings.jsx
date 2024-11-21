import React, { useState } from 'react';
import { Container, Col, Row, Img } from 'react-bootstrap';
import { PLAYERS } from '../Lists/playerList';

const DisplayRankings = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [openContainers, setOpenContainers] = useState({}); // Track which containers are open
  const [openWinContainers, setOpenWinContainers] = useState({}); // Track which containers are open

  // Sort players by wins
  
  const orderedList = [...PLAYERS].sort(
    (a, b) => (b.winStats.length +b.killedBy.length/10) - (a.winStats.length +a.killedBy.length/10)
  );
  const maxWins = Math.max(...PLAYERS.map(player => player.winStats.length));
  console.log(maxWins);
  
  // Function to toggle specific player's container
  // Function to toggle specific player's Kills container and close others
  const toggleContainer = playerName => {
    setOpenContainers(prev => {
      // Close all other "Kills" containers by setting them to false
      const newOpenState = Object.keys(prev).reduce((acc, name) => {
        acc[name] = false;
        return acc;
      }, {});

      return {
        ...newOpenState,
        [playerName]: !prev[playerName], // Toggle the clicked container
      };
    });

    // Close the "Wins" container when "Kills" is opened
    setOpenWinContainers(prev => ({
      ...prev,
      [playerName]: false,
    }));
  };

  // Function to toggle specific player's Wins container and close others
  const toggleWinContainer = playerName => {
    setOpenWinContainers(prev => {
      // Close all other "Wins" containers by setting them to false
      const newOpenState = Object.keys(prev).reduce((acc, name) => {
        acc[name] = false;
        return acc;
      }, {});

      return {
        ...newOpenState,
        [playerName]: !prev[playerName], // Toggle the clicked container
      };
    });

    // Close the "Kills" container when "Wins" is opened
    setOpenContainers(prev => ({
      ...prev,
      [playerName]: false,
    }));
  };

  // Function to select a random player
  const selectRandomPlayer = () => {
    const getRandomPlayer = () => {
      const randomIndex = Math.floor(Math.random() * orderedList.length);
      return orderedList[randomIndex].name;
    };
    setSelectedPlayer(getRandomPlayer());
    setTimeout(() => {
      setSelectedPlayer(getRandomPlayer());
      setTimeout(() => {
        setSelectedPlayer(getRandomPlayer());
        setTimeout(() => {
          setSelectedPlayer(getRandomPlayer());
          setTimeout(() => {
            setSelectedPlayer(getRandomPlayer());
            setTimeout(() => {
              setSelectedPlayer(getRandomPlayer());
              setTimeout(() => {
                setSelectedPlayer(getRandomPlayer());
                setTimeout(() => {
                  setSelectedPlayer(getRandomPlayer());
                  setTimeout(() => {
                    setSelectedPlayer(getRandomPlayer());
                    setTimeout(() => {
                      setSelectedPlayer(getRandomPlayer());
                      setTimeout(() => {
                        setSelectedPlayer(getRandomPlayer());
                        setTimeout(() => {
                          setSelectedPlayer(getRandomPlayer());
                          setTimeout(() => {
                            setSelectedPlayer(getRandomPlayer());
                            setTimeout(() => {
                              setSelectedPlayer(getRandomPlayer());
                              setTimeout(() => {
                                setSelectedPlayer(getRandomPlayer());
                                setTimeout(() => {
                                  setSelectedPlayer(getRandomPlayer());

                                }, 250); // Final choice
                              }, 250); // Third choice
                            }, 200); // Final choice
                          }, 150); // Third choice
                        }, 100); // Second choice
                      }, 100); // Final choice
                    }, 100); // Third choice
                  }, 100); // Final choice
                }, 100); // Third choice
              }, 100); // Second choice
            }, 100); // Final choice
          }, 100); // Third choice
        }, 100); // Final choice
      }, 100); // Third choice
    }, 100); // Second choice
  };

  return (
    <Container fluid style={{paddingBottom: '40px'}}>
      <Container className='text-center'>
        <h1 className='titleText metal-mania-regular'>GAGIC</h1>
        <h1 className='titleTextSmall metal-mania-regular'>The Mathering</h1>
      </Container>

      {/* Display the top-ranked player */}
      {orderedList.map((player, index) => (
        <Container
          fluid
          key={player.name}
          className={`clickable-container ${player.winStats.length === maxWins ? 'backgroundCardFirst' : 'backgroundCard'
            }`}
        >
          <Row>
            <Col xs='6'>
              <h1 className='nameText'>{player.name}</h1>
            </Col>
            <Col xs='3'>
              <h1
                className={`winText ${openWinContainers[player.name] ? 'chooseWins' : ''
                  }`}
                onClick={() => toggleWinContainer(player.name)} // Only toggle Wins container
              >
                Wins: {player.winStats ? player.winStats.length : 0}
              </h1>
            </Col>
            <Col xs='3'>
              <h1
                className={`winText ${openContainers[player.name] ? 'chooseKills' : ''
                  }`}
                onClick={() => toggleContainer(player.name)} // Only toggle Kills container
              >
                Kills: {player.killedBy ? player.killedBy.length : 0}
              </h1>
            </Col>
          </Row>

          {/* Conditionally render the dropdown for each player */}
          {openContainers[player.name] && (
            <div className='dropdown-container slide-up'>
              {/* Killed by section */}
              {player.killedBy && player.killedBy.length > 0 && (
                <div className='killText'>
                  <h1 className='killText'></h1>
                  <Row>
                  {player.killedBy.map((entry, index) => (
                    <Col xs='4' key={index} className='killText'>
                      <h1 key={index} className='killText'>
                        {entry.killerName}
                      </h1>
                      <img
                        src={entry.commander}    
                        alt={entry.commander}
                        style={{ height: '20px' }}
                      />
                    </Col>
                  ))}
                  </Row>
                </div>
              )}
              {player.killedBy && player.killedBy.length === 0 && (
                <h1 className='killText'>none lol</h1>
              )}
            </div>
          )}
          {openWinContainers[player.name] && (
            <div className='dropdown-container slide-up'>
              {/* Killed by section */}
              {player.winStats && player.winStats.length > 0 && (
                <div className='killText'>
                  <h1 className='killText' style={{marginRight:'10px'}}>Commander: </h1>
                  {player.winStats.map((entry, index) => (
                    <div key={index} className='killText'>
                      {/*<h1>{entry.commander}</h1>*/}
                      <img
                        src={entry.image}
                        alt={entry.commander}
                        style={{ height: '20px' }}
                      />
                    </div>
                  ))}
                </div>
              )}
              {player.winStats && player.winStats.length == 0 && (
                <h1 className='killText'>none lol</h1>
              )}
            </div>
          )}
        </Container>
      ))}

      {/* Button to randomly select a player */}
      <div className='d-flex justify-content-center'>
        <button onClick={selectRandomPlayer} className='buttonColor'>
          Randomly Select First Player
        </button>
      </div>

      {/* Display selected player */}
      {selectedPlayer && (
        <div className='d-flex justify-content-center buttonChoice'>
          <h3 style={{ fontSize: '20px', margin: 0 }}>
            <span className='highlight'>{selectedPlayer}</span>
          </h3>
        </div>
      )}
     {/* <Container
  fluid className='backgroundCard' style={{marginTop:'30px'}}
>
<h1 className='nameText'>Elaborate Score Sheet TBD</h1>*/}
{/* 
  {orderedList.map((player, index) => (
    <h1 className='killText' key={index}>{player.name} {player.winStats.length * 3 + player.killedBy.length}</h1>
  ))}
    */}
{/*</Container>*/}

            </Container>

  );
};

export default DisplayRankings;

{
  /*              <h1 className="killText">Killed:</h1>
              {player.kMatt > 0 && <h1 className="killText">Matt: {player.kMatt}</h1>}
              {player.kNick > 0 && <h1 className="killText">Nick: {player.kNick}</h1>}
              {player.kAndrew > 0 && <h1 className="killText">Andrew: {player.kAndrew}</h1>}
              {player.kPavle > 0 && <h1 className="killText">Pavle: {player.kPavle}</h1>}
              {player.kClay > 0 && <h1 className="killText">Clay: {player.kClay}</h1>}
              {player.kWill > 0 && <h1 className="killText">Will: {player.kWill}</h1>}
              
 */
}
