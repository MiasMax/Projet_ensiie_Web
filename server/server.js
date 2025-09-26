const express = require('express');
const cors = require('cors');
const dbService = require('./services/databaseService');
const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:5173'  // ← Votre frontend uniquement
}));
app.use(express.json());

app.get('/api/characters', async (req, res) => {
  try {
    const characters = await dbService.getAllCharacters();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


app.get('/api/characters/:id', async (req, res) => {
  try {
    const character = await dbService.getCharacterById(req.params.id);
    if (!character) {
      return res.status(404).json({ error: 'Personnage non trouvé' });
    }
    res.json(character);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.post('/api/characters', async (req, res) => {
  try {
    const newCharacterId = await dbService.createCharacter(req.body);
    res.status(201).json({ id: newCharacterId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création' });
  }
});

app.get('/', (req, res) => {
    res.send('<h1>Hello, Geeks!</h1><p>This is your simple Express server.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});