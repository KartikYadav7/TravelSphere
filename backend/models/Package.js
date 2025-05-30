import mongoose from "mongoose";

const DetailSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true }
});

const TourDaySchema = new mongoose.Schema({
  day: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  activities: [{ type: String, required: true }]
});

const PackageSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  location: { type: String, required: true },
  category: [{ type: String,
      enum: ["tropical", "religious", "honeymoon", "vacations", "indian", "international"],
      required: true
   }],   // array of strings
  price: { type: Number, required: true },
  priceUnit: { type: String,required: true }, // e.g., "per person", "per couple"
  description: { type: String ,required: true },
  longDescription: { type: String ,required: true }, // long description of the package
  details: [DetailSchema],         // array of detail objects
  includedItems: [{ type: String,required:true }],  // array of strings
  images: [{ type: String }],      // array of image URLs
  tourDays: [TourDaySchema]  ,
  rating: {
  type: Number,
  min: 1,
  max: 5,
  default: 3
}     
});

const Package = mongoose.model("Package", PackageSchema);
export default Package;