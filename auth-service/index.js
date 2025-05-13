const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    return res.json({ token: 'fake-jwt-token' });
  }
  res.status(401).json({ message: 'Unauthorized' });
});

app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
