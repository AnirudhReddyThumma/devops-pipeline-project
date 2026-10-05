const express = require('express');
const app = express();
const PORT = 3000;

// Route 1: a health check. Tools use this to see if the app is alive.
app.get('/health', (req, res) => {
  res.send('OK');
});

// Route 2: returns a simple list of to-do items.
app.get('/todos', (req, res) => {
  res.json([
    { id: 1, task: 'Learn Docker', done: false },
    { id: 2, task: 'Build a CI pipeline', done: false },
    { id: 3, task: 'Deploy to AWS', done: false }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});