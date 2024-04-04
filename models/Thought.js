const { Schema, model, Types } = require('mongoose');

// Schema to create new reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String, 
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date, 
      default: Date.now
    },
  },
  {
    toJSON: { 
    getters: true 
    }
  }
);

// Schema to create new Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280 
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false 
  }
);

// Creating virtual 'reactionCount' that will get the reactions count of the thought by getting the length of the thoughts's reactions array.
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialises Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;