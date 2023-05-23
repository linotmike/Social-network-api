const Thought = require('../models/thought');


module.exports = {
    getThoughts(req,res) {
        Thought.find()
        .populate()
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
    },
    // addReaction(req,res){
    //     Thought.findOneAndUpdate({_id:req.params.thoughtId },
    //         {reactionBody: req.body.reactionBody,username:req.body.username},
    //         {$push: 
    //             {thought:req.params.thoughtId}
    //             //Thought.reactions
    //     })
    //     .then((dbThoughtsData)=> res.json(dbThoughtsData))
    //     .catch((err)=>res.status(500).json(err))
    // }
    
    async createReaction  (req, res)  {
        const { thoughtId } = req.params;
        const { reactionBody, username } = req.body;
      
        try {
          
          console.log(thoughtId);
          console.log(req.params.thoughtId);
          const thought = await Thought.findOneAndUpdate({_id:req.params.thoughtId},{$addToSet:{reactions:req.body}},{new:true});
      
         
          if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
          }
      
   
          // const newReaction = { reactionBody, username };
          // thought.reactions.push(newReaction);
          // await thought.save();
      
          res.status(200).json(thought);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Server error' });
        }
      },
      

















}
