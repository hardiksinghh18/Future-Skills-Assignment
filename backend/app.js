const express = require('express');
const cardRoutes = require('./routes/cardRoutes');
require('./db/connection')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

//cors
app.use(cors({

  origin: ['http://localhost:3000'],

  methods: ["POST", "GET"],

  credentials: true

}))
// Routes
app.use('/api', cardRoutes);

// Health Check Endpoint
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

