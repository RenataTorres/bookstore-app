import express from 'express';
import BookRoutes from './BookRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: 'Bookstore app'})
  })

  app.use(
    express.json(),
    BookRoutes
  )
};

export default routes;
