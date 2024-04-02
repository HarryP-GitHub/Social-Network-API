const { Schema, model } = require('mongoose');

// Schema to create new User model
const userSchema = new Schema(
  {
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/.+\@.+..+/, 'Must match an']
    },
    thoughts: [{
        type: Schema.type.ObjectId, 
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.type.ObjectId,
        ref: 'User'
    }],
  },
  {
    toJSON: { 
      virtuals: true
    },
    id: false 
    }
);

// Creating virtual 'friendCount' that will get the friend count of the user by getting the length of the user's 'friends' array.
userSchema.virtual('friendCount').get(function() { 
  return this.friends.length; 
});

// Initialises User Model
const User = model('User', userSchema);

module.exports = User;