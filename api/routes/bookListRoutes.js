'use strict';

module.exports = (app) => {
    const bookList = require('../controllers/bookListController');

    // bookList Routes
    app.route('/books')
        .get(bookList.listAllBooks)
        .post(bookList.createABook);

    app.route('/books/:bookId')
        .get(bookList.readABook)
        .put(bookList.updateABook)
        .delete(bookList.deleteABook);
};