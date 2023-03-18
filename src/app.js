import express from 'express';

const app = express();
app.use(express.json());

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

app.get('/books/:id', (req, res) => {
  const index = searchBooks(req.params.id);
  res.json(books[index]);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('Livro foi cadastrado com sucesso');
});

app.put('/books/:id', (req, res) => {
  const index = searchBooks(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
});

app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = searchBooks(id);
  books.splice(index, 1);
  res.send(`Livro ${id} apagado com sucesso`);
});

function searchBooks(id) {
  return books.findIndex(book => book.id === id);
}

export default app;
