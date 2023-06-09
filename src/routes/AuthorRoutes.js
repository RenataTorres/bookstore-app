import express from 'express';
import AuthorController from '../controllers/AuthorController.js';

const router = new express.Router()

router
  .get('/authors', AuthorController.listAuthors)
  .get('/authors/:id', AuthorController.listAuthorById)
  .post('/authors', AuthorController.registerAuthor)
  .put('/authors/:id', AuthorController.updateAuthor)
  .delete('/authors/:id', AuthorController.deleteAuthorById)

  export default router;
