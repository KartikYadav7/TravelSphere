import express from 'express'
const router = express.Router()

import {
  getAllPackages,
  createPackage,
  updatePackage,
  deletePackage,
  getAllBookings,
  updateBookingStatus,
  deleteBooking
} from '../controllers/adminController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

//Admin Routes
router.get('/packages', verifyToken('admin') ,getAllPackages);
router.post('/packages', verifyToken('admin') ,createPackage);
router.put('/packages/:id',verifyToken('admin') , updatePackage);
router.delete('/packages/:id', verifyToken('admin') ,deletePackage);

router.get('/bookings', verifyToken('admin') ,getAllBookings);
router.put('/bookings/:id/status', verifyToken('admin') , updateBookingStatus);
router.delete('/bookings/:id', verifyToken('admin') , deleteBooking);

export default router;