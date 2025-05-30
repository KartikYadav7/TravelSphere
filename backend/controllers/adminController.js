import Package from '../models/Package.js';
import Booking from '../models/Booking.js';

// Get all tours
export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tours', error: err.message });
  }
};

// Create a new tour
export const createPackage = async (req, res) => {
  try {
    const {
      title, location, category, price, priceUnit,
      description, longDescription, details,
      includedItems, tourDays, images
    } = req.body;

    // Parse JSON fields if they come as strings (e.g., from form-data)
    const categoryArr = typeof category === 'string' ? JSON.parse(category) : category;
    const detailsArr = typeof details === 'string' ? JSON.parse(details) : details;
    const includedItemsArr = typeof includedItems === 'string' ? JSON.parse(includedItems) : includedItems;
    const tourDaysArr = typeof tourDays === 'string' ? JSON.parse(tourDays) : tourDays;
    const imagesArr = typeof images === 'string' ? JSON.parse(images) : images; // images URLs as array of strings

    const newPackage = new Package({
      title,
      location,
      category: categoryArr,
      price,
      priceUnit,
      description,
      longDescription,
      details: detailsArr,
      includedItems: includedItemsArr,
      tourDays: tourDaysArr,
      images: imagesArr,  // store public URLs here
    });

    const saved = await newPackage.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create package', error: err.message });
  }
};

export const updatePackage = async (req, res) => {
  try {
    const {
      title, location, category, price, priceUnit,
      description, longDescription, details,
      includedItems, tourDays, images,rating
    } = req.body;

    const categoryArr = typeof category === 'string' ? JSON.parse(category) : category;
    const detailsArr = typeof details === 'string' ? JSON.parse(details) : details;
    const includedItemsArr = typeof includedItems === 'string' ? JSON.parse(includedItems) : includedItems;
    const tourDaysArr = typeof tourDays === 'string' ? JSON.parse(tourDays) : tourDays;
    const imagesArr = typeof images === 'string' ? JSON.parse(images) : images;

    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      {
        title,
        location,
        category: categoryArr,
        price,
        priceUnit,
        description,
        longDescription,
        rating,
        details: detailsArr,
        includedItems: includedItemsArr,
        tourDays: tourDaysArr,
        images: imagesArr,
      },
      { new: true }
    );

    if (!updatedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }

    res.status(200).json(updatedPackage);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update package', error: err.message });
  }
};


// Delete a tour
export const deletePackage = async (req, res) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    if (!deletedPackage) return res.status(404).json({ message: 'Tour not found' });
    res.status(200).json({ message: 'Tour deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete tour', error: err.message });
  }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
   
    const bookings = await Booking.find() .populate('tourPackage', 'title location price') // show basic package info
      .populate('user', 'userName email')
      .populate('contactInfo', 'name email phone')
      .sort({ createdAt: -1 }); // sort by most recent bookings first
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch bookings', error: err.message });
  }
};

// Update booking status
export const updateBookingStatus = async (req, res) => {
  try {
    const { bookingStatus, paymentStatus } = req.body;

    const updateFields = {};
    if (bookingStatus) updateFields.bookingStatus = bookingStatus;
    if (paymentStatus) updateFields['payment.status'] = paymentStatus;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true }
    ).populate('user', 'name email')
     .populate('tourPackage', 'title');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json(booking);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update booking', error: err.message });
  }
};
// delete booking
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking deleted successfully', booking });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete booking', error: err.message });
  }
};
