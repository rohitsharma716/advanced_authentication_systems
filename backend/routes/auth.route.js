import express from 'express';
import { logout,longin,signup } from '../controllers/auth.controller.js';

const routes = express.Router();

routes.get('/signup', signup);
routes.get('/login', longin);
routes.get('/logout', logout);


export default routes;