import express from 'express';

const app = express();

const books = [
  {id: 1, "title": "Senhor do Anéis"},
  {id: 2, "title": "Senhor do Anéis 2"},
];

app.get('/',(req, res) => {
  res.status(200).send('BookStore app');
});

app.get('/books',(req, res) => {
  res.status(200).json(books);
});

export default app;
