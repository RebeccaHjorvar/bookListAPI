'use strict';

const mongoose = require('mongoose'),
    Book = mongoose.model('Book');

exports.listAllBooks = (req, res) => {
    Book.find({}, (err, book) => {
        try {
            res.json(book)
        } catch {
            res.send('error:' + err)
        }
    });
};

exports.createABook = (req, res) => {
    let newBook = new Book(req.body);
    newBook.save((err, book) => {
        try {
            res.json(book);
        } catch {
            res.send('error: ' + err);
        }
    });
};

exports.readABook = (req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
        try {
            book.save();
        } catch {
            res.send('error: ' + err)
        }
    });
};

exports.updateABook = (req, res) => {
    Book.findOneAndUpdate({_id: req.params.bookId}, req.body, {new: true}, (err, task) => {
        try {
            res.json(book)
        } catch {
            res.send(err)
        }
    });
};

exports.deleteABook = (req, res) => {
    Book.remove({_id: req.params.bookId}, (err, book) => {
        try {
            res.json({message: 'Book successfully deletyed'});
        } catch {
            res.send('error: ' + err)
        }
    })
}