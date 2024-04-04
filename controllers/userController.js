const { User, Thought } = require('../models');

const userController = {
    // getting all users
  async getAllUsers(req, res) {
    try {
        const users = await User.find()
        .populate('thoughts')
        .populate('friends');
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
  },

  // Get user by id
  async getUserById(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.userId})
        .populate('thoughts')
        .populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'No user was found matching this ID' });
      }
      res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
  },

  // creating new user
  async createUser(req, res) {
    try { 
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // update a user

  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body,
        { new: true, runValidators: true }
    );
    if (!updatedUser) {
        return res.status(404).json({ message: 'No user found matching this ID' });
    }
    res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
  },

  //remove user

  async deleteUser(req, res) {
    try {
        const userDelete = await User.findByIdAndDelete(req.params.userId);
        if (!userDelete) {
          return res.status(404).json({ message: 'No user found matching this ID' });
        }
        await Thought.deleteMany({ username: userDelete.username });
        res.json({ message: 'User and their thoughts have been deleted!' });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
  },

  // Adding a friend to user's friend list

  async addFriend(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
    );
    if (!user) {
        return res.status(404).json({ message: 'No user found matching this ID' });
    }
    res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
  },

  // removing friend from user's friend list

  async removeFriend(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: 'No user found matching this ID' });
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
  },
};

module.exports = userController;