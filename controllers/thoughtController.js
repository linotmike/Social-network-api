const Thought = require('../models/thought');


module.exports = {
    getThoughts(req,res) {
        Thought.find()
        .then((thought) => res.json(thought))
        .catch((err) =>res.status(500).json(err))
    },
    getSingleThought(req,res){
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));

    },
    createThoughts(req,res){
        Thought.create(req.body)
        .then((dbThoughtsData)=> res.json(dbThoughtsData))
        .catch((err)=> res.status(500).json(err))
    },
    updateThoughts(req,res){
        Thought.updateOne({_id:req.params.thoughtId},req.body)
        .then((dbthoughtsData) => res.json(dbthoughtsData))
        .catch((err)=> res.status(500).json(err));
    },
    deleteThoughts(req,res){
        Thought.findOneAndDelete({_id:req.params.thoughtId})
        .then((dbThoughtsData)=>res.json(dbThoughtsData))
        .catch((err)=>res.status(500).json(err));
    }
















}