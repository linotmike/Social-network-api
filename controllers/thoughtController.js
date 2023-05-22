const Thought = require('../models/thought');


module.exports = {
    getThoughts(req,res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) =>res.status(500).json(err))
    },
    













}