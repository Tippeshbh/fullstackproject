const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('Backend running...');
});

// auth routes
app.use('/api/auth', require('./routes/authRoutes'));

// item routes
app.use('/api/items', require('./routes/itemRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});