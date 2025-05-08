const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const PORT = 3000;
const API_BASE = 'https://rickandmortyapi.com/api/character';

app.use(cors());

app.get('/characters/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`${API_BASE}/?name=${name}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(404).json({ error: 'Personaje no encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
