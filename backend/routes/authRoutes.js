import express from 'express'
const router = express.Router()
import { register, login,  resetPassword,resetPasswordLink} from '../controllers/authController.js';

// Authentication Routes
router.post('/register', register);
router.post('/login', login);
router.post('/resetPassword/:token', resetPassword);
router.post('/resetPasswordLink',resetPasswordLink);



export default router;