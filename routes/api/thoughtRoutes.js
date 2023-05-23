const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    createReaction,

} = require('../../controllers/thoughtController.js')



router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtId').get(getSingleThought).put(updateThoughts).delete(deleteThoughts)
router.route('/:thoughtId/reactions').post(createReaction)









module.exports=router