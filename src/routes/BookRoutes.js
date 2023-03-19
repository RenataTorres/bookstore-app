import express from 'express';
import BookController from '../controllers/BookController.js';

const router = new express.Router()

router
  .get('/books', BookController.listBooks)
  .get('/books/:id', BookController.listBookById)
  .post('/books', BookController.registerBook)
  .put('/books/:id', BookController.updateBook)
  .delete('/books/:id', BookController.deleteBookById)

  export default router;
