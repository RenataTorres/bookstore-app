import express from 'express';
import BookRoutes from './BookRoutes.js';
import AuthorRoutes from './AuthorRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: 'Bookstore app'})
  })

  app.use(
    express.json(),
    BookRoutes,
    AuthorRoutes
  )
};

export default routes;
