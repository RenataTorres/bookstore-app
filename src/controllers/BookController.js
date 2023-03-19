import books from "../models/Book.js";

class BookController {
  static listBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    })
  }

  static listBookById = (req, res) => {
    const id = req.params.id;

    books.findById(id, (err, books) => {
      if(err) {
        res.status(400).send(`${err.message} - Id do livro não localizado`)
      }

      res.status(200).send(books)
    })
  }

  static registerBook = (req, res) => {
    const book = new books(req.body);

    book.save((err) => {
      if(err){
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro`})
      }

      res.status(201).send(book.toJSON())
    })
  }

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err){
        res.status(500).send({message: `${err.message} - falha ao atualizar livro`})
      }

      res.status(200).send({message: 'Livro atualizado com sucesso'})
    })
  }

  static deleteBookById = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if(err) {
        res.status(500).send(`${err.message} - Id do livro não localizado`)
      }

      res.status(200).send({message: 'Livro removido com sucesso'})
    })
  }
}

export default BookController;
