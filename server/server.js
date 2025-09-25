const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:5173'  // ← Votre frontend uniquement
}));

app.get('/', (req, res) => {
    res.send('<h1>Hello, Geeks!</h1><p>This is your simple Express server.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});