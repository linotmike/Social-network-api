const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThoughts,

} = require('../../controllers/thoughtController.js')



router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtId').get(getSingleThought)









module.exports=router