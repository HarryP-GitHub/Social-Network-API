const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

//for /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

//for thoughtId
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//for /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(addReaction);

//for reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;