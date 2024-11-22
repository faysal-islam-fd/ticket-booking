import express from 'express';
import { createBus, deleteBus, getAllBuses, getBus } from '../controllers/bus.controllers.js';

const router = express.Router()



router.get('/', getAllBuses)
router.get('/:id', getBus)
router.post('/', createBus)
router.delete('/:id', deleteBus)
export {router as busRoutes}