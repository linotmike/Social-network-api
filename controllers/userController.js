const {User }= require('../models');
// const Thought = require('../models/thought');

module.exports = {
  getUsers(req, res) {
    User.find()
    
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .populate( "thoughts" )
    .populate("friends","username email")
    
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req,res) {
    User.updateOne({_id:req.params.userId},req.body)
    .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req,res) {
    User.findOneAndDelete({_id:req.params.userId})
    .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findOneAndUpdate({_id:req.params.userId},{
      $push: {friends:req.params.friendId}
    })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req,res) {
    User.findOneAndDelete({_id:req.params.friendId})
    .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  
};
