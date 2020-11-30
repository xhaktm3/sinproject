const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
router.use(cors());

const authRouter = require('./auth/index');
const addRouter = require('./add');

router.use('/auth', authRouter);
router.use('/add', addRouter);

module.exports = router;