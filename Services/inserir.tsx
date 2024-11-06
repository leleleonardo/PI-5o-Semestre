/*// app.js ou um arquivo de rota
const express = require('express');
const mongoose = require('mongoose');
const Fila = require('./models/Fila');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/seu-banco', { useNewUrlParser: true, useUnifiedTopology: true });

// Rota para adicionar à fila
app.post('/fila', async (req, res) => {
  try {
    const userId = req.body.userId; // Recebe userId do corpo da requisição
    const consoleName = req.body.console; // Recebe console do corpo da requisição

    const posicaoNaFila = await Fila.countDocuments(); // Conta documentos na coleção para a posição
    const novoItem = new Fila({
      userId,
      console: consoleName,
      posicaoNaFila,
      status: "esperando"
    });

    await novoItem.save(); // Salva o novo item
    res.status(201).json(novoItem); // Retorna o item inserido
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
*/