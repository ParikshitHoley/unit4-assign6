const express = require('express');
const router = express.Router();
const Book = require('../model/books.model');

router.post('', async (req, res) => {
    try {
        const books = await Book.create(req.body);
        return res.status(201).send(books)
    } catch (err) {
        return res.status(500).send(err.message)
    }
});

router.get('/section/:id', async (req, res) => {
    try {
        const books = await Book.find({ "sec_id": req.params.id }).populate(
            {
                path: "sec_id",
                select: 'sectionName'
            })
            .lean().exec();
        return res.status(201).send(books)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get("/author/:id", async (req, res) => {
    try {
        const books = await Book.find({ "author_id": req.params.id }).populate({ path: "section", select: "sectionName" }).lean().exec();
        res.send(books);

    } catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get("", async (req, res) => {
    try {
        const books = await Book.find().lean().exec();
        res.send(books);

    } catch (err) {
        return res.status(500).send(err.message)
    }
})

module.exports = router;