// server.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.get('/api/dados', async (req, res) => {
  try {
    const response = await axios.get('https://api.hiperfocoplay.com', {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro na API' });
  }
});

app.listen(3000, () => console.log('Servidor rodando'));