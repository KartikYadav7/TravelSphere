import express from 'express'
const router = express.Router()
import reviews from '../Data/reviews.js';
import images from '../Data/images.js';
import Package from '../models/Package.js'

router.get('/reviews', (req, res) => {
    res.json(reviews);
  });
router.get('/images', (req, res) => {
    res.json(images);
  });
  
router.get("/packages/:title", async (req, res) => {
  try {
    const titleParam = req.params.title;
    if (!titleParam) {
      return res.status(400).json({ error: "Title parameter is required" });
    }

    // Case-insensitive search for title
    const packageData = await Package.findOne({
      title: { $regex: new RegExp(`^${titleParam}$`, "i") },
    });

    if (!packageData) {
      return res.status(404).json({ error: "Package not found" });
    }

    res.json(packageData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/packages",async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
export default router;