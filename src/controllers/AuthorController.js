import authors from "../models/Author.js";

class AuthorController {
  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    })
  }

  static listAuthorById = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authors) => {
      if(err) {
        res.status(400).send(`${err.message} - Id do livro não localizado`)
      }

      res.status(200).send(authors)
    })
  }

  static registerAuthor = (req, res) => {
    const author = new authors(req.body);

    author.save((err) => {
      if(err){
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro`})
      }

      res.status(201).send(author.toJSON())
    })
  }

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err){
        res.status(500).send({message: `${err.message} - falha ao atualizar livro`})
      }

      res.status(200).send({message: 'Livro atualizado com sucesso'})
    })
  }

  static deleteAuthorById = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if(err) {
        res.status(500).send(`${err.message} - Id do livro não localizado`)
      }

      res.status(200).send({message: 'Livro removido com sucesso'})
    })
  }
}

export default AuthorController;
