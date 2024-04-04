const { Thought, User } = require('../models');
// const { ObjectId } = require('mongoose').Types; no longer necessary

const ThoughtController = {

    // Get all thoughts

  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

    // Get thought by id
  async getThoughtById(req, res) {
    try { 
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'No thought found matching this ID' });
      }
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

    //Create new thought

  async createThought(req, res) {
    try { 
      const newThought = await Thought.create(req.body);
      await User.findByIdAndUpdate(req.body.userId,
        { $push: { thoughts: newThought._id } },
        { new: true }
      );
      res.json(newThought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

    // update thought by id

  async updateThought(req, res) {
    try { 
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId,
        req.body,
        { new: true, runValidators: true }
    );
    if (!updatedThought) {
        return res.status(404).json({ message: 'No thought found matching this ID' });
    }
    res.json(updatedThought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

    //delete thought by id

  async deleteThought(req, res) {
    try {
      const thoughtDelete = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!thoughtDelete) {
        return res.status(404).json({ message: 'No thought found matching this ID' });
      }
      await User.findByIdAndUpdate(thoughtDelete.userId,
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );
      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

    // create reaction to thought

  async addReaction(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId,
        { $push: { reactions: req.body } }, 
        { new: true, runValidators: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: 'No thought found matching this ID' });
    }
    res.json(updatedThought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

    // remove reaction from thought

  async removeReaction(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: 'No thought or reaction found matching this ID' });
    }
    res.json(updatedThought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};

module.exports = ThoughtController;