const router = require('express').Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,

} = require('../../controllers/userController.js');



router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser)

module.exports = router;
