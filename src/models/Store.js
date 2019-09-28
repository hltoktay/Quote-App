import { types, destroy } from 'mobx-state-tree';

const Book = types.model('Book', {
    author: types.string,
    description: types.string,
    read: false
  }).actions(self => ({
      toogleRead() {
          self.read = !self.read
      }
  }))
  
const BookStore = types.model('Books', {
    books: types.array(Book)
  })
  .views(self => ({
      get readBooks() {
          return self.books.filter(book => book.read)
      },
      booksByAuthor(author) {
          return self.books.filter(book => book.author === author)
      }
  }))
  .actions(
      self => ({
          addBook(book) {
              self.books.push(book)
          },
          removeBook(book) {
              destroy(book)
          }
      })
  ).create({
    books: [
      { author: 'Nail Gaimen', description: 'asdasdasdsadadasdsad', read: true}
    ]
  }); 

export default BookStore;