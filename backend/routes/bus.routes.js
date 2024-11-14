


import express from 'express';
// import {protectRoute} from '../middleware/auth.middleware.js';
import { createBus, getAllBuses, getBusById } from '../controllers/bus.controller.js';
import { protectRoute } from '../middlewire/protectRoute.js';

const router = express.Router();


router.post("/create-bus",protectRoute, createBus)
router.get('/:id',protectRoute, getBusById)
router.get('/',protectRoute, getAllBuses)
protectRoute
export {router as busRouter}