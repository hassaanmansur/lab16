const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

const todos = [];

app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
  todos.push(req.body.todo);
  res.json({ message: 'Todo added' });
});

app.listen(PORT, () => console.log(`Todo Service running on port ${PORT}`));
