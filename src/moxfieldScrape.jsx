const getMoxfieldDeck = async (deckId) => {
    try {
      const moxfieldUrl = `https://api.moxfield.com/v2/decks/all/${deckId}`;
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(moxfieldUrl)}`;
  
      const response = await fetch(proxyUrl);
      const result = await response.json();
  
      // Moxfield's JSON will be in the 'contents' key
      const data = JSON.parse(result.contents);
      console.log(data.mainboard);
      return data.mainboard;
    } catch (error) {
      console.error('Error fetching deck:', error);
    }
  };
  
  export default getMoxfieldDeck;
  