import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import logo from './logo.png';
import AddCardForm from './components/Form';
import Footer from './components/Footer';

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);


  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };


  useEffect(() => {

    // Fetch cards from the API
    axios.get('http://localhost:5000/api/cards')
      .then(response => setCards(response.data))
      .catch(error => console.error("Error fetching cards:", error));
  }, []);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // console.log( cards[0])
  return (<>




    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className='flex items-center'>
          <a href="/"><img className='h-10' src={logo} alt="" /></a>|
          <h1 className="text-xl font-semibold ml-4 ">Help Center</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-gray-800 text-white px-4 py-2 rounded mx-4"
          >
            Add New Card
          </button>
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded ">Submit a request</button>
      </header>
      <main className="container mx-auto py-8 bg-[#dadbf0]">
        <h2 className="text-5xl font-semibold text-center mb-8">How can we help?</h2>
        <SearchBar setSearchTerm={setSearchTerm} />

      </main>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 px-40">
        {filteredCards.map(card => (
          <Card key={card._id} title={card.title} description={card.description} link={card.link} />
        ))}
      </div>
    </div>



    {isFormOpen && (
      <AddCardForm
        onClose={() => setIsFormOpen(false)}
        onCardAdded={handleAddCard}
      />
    )}

    <Footer/>
  </>
  );
}

export default App;
