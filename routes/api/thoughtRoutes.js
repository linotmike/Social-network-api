const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThoughts,
    updateThoughts,

} = require('../../controllers/thoughtController.js')



router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtId').get(getSingleThought).put(updateThoughts)









module.exports=router