


import express from 'express';
import { createBus, getAllBuses, getBusById, seatSelecting } from '../controllers/bus.controller.js';
import { protectRoute } from '../middlewire/protectRoute.js';


const router = express.Router();


router.post("/create-bus",protectRoute, createBus)
router.get('/:id',protectRoute, getBusById)
router.get('/',protectRoute, getAllBuses)
router.patch('/:id/seat-selecting',protectRoute, seatSelecting)

export {router as busRouter}