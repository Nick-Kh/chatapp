const express = require('express');
const messageService = require('./services/messageService.js');
const data = require('./data/data');
const cors = require('cors');

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());
app.options('*', cors());

const PORT = 3001;

app.post('/api/ping_message', (req, res) => {
  const message = messageService.getRandomMessage(data);
  res.status(200).json(message);
})



app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));