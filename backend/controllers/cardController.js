const Card = require('../models/cardModel');

// Create a new card
exports.createCard = async (req, res) => {
  try {
    const { title, description,link } = req.body;
    const newCard = new Card({ title, description,link });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all cards
exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific card by title
exports.getCardByTitle = async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
