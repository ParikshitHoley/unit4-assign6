const express = require('express');
const router = express.Router();
const Author = require('../model/author.model');

router.post("", async (req, res) => {
    try {
        const authors = await Author.create(req.body);
        return res.status(201).send(authors);

    } catch (err) {

        return res.status(500).send(err.message)
    }
})

router.get("", async (req, res) => {
    try {
        const authors = await Author.find().lean().exec();
        return res.send(authors);

    } catch (err) {

        return res.status(500).send(err.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const authors = await Author.findById(req.params.id).populate(
            {
                path: "book",
                select: ["name"]
            })
            .lean().exec();
        return res.send(authors);

    } catch (err) {

        return res.status(500).send(err.message)
    }
})




module.exports = router;