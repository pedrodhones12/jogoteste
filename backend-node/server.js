const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 🔍 ROTA DE TESTE
app.get('/', (req, res) => {
  res.send('🚀 Backend rodando com sucesso');
});

// 🔐 ROTA SEGURA PARA API EXTERNA
app.get('/api/dados', async (req, res) => {
  try {
    const response = await axios.get('https://api.hiperfocoplay.com', {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: 'Erro ao acessar API externa'
    });
  }
});

// 🚀 PORTA DINÂMICA (Render)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
