import express from 'express';
import {login,signup} from '../controllers/auth.js'

const router = express.Router();

router .post('/signup',() => {})
router .post('/login',login)

export default router

