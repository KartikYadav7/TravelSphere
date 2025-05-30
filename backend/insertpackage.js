import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Package from './models/Package.js'// adjust path if needed
import connectDB from "./config/connectDB.js";



const packagesData = [
  {
 
  title: "Giza Pyramids ",
  location: "Giza, Egypt",
  price: "8000 $",
  priceUnit: "per Person",
  rating: 4.8,
  category: [ "international", "vacations"],
  description: "Uncover the secrets of ancient Egypt.",
  longDescription: "Step back in time and experience the grandeur of the pyramids, the Great Sphinx, and the ancient Egyptian culture in this 3-day curated tour.",
  images: [
    "https://media.istockphoto.com/id/1306141437/photo/woman-standing-on-the-terrace-on-the-background-of-giza-pyramids.webp?a=1&b=1&s=612x612&w=0&k=20&c=vo93gF0zREmGJt0kkFqKiAVwnXGaY4dp1fygs2Ky_D8=",
    "https://plus.unsplash.com/premium_photo-1694475367746-526db5575bb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2l6YSUyMGVneXB0fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1694475496945-238ac1177291?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2l6YSUyMGVneXB0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1525604529863-915380184a43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpemElMjBlZ3lwdHxlbnwwfHwwfHx8MA%3D%3D",
  ],
  includedItems: [
    "AirLine Tickets",
    "3-star hotel accommodation",
    "Professional Egyptologist guide",
  ],
  details: [
    { title: "Destination", desc: "Giza Egypt" },
    { title: "Departure", desc: "Mumbai,India" },
    { title: "Best Season", desc: "October to April" }
  ],
  tourDays: [
    {
      day: 1,
      title: "Arrival & Sound & Light Show",
      desc: "Arrive in Cairo, check into your hotel, and enjoy the evening sound and light show at the pyramids.",
      activities: [
        "Airport pickup and hotel check-in",
        "Welcome briefing",
        "Sound & Light Show at Giza",
        "Traditional Egyptian dinner"
      ]
    },
    {
      day: 2,
      title: "Giza Plateau & Museum",
      desc: "Visit the Great Pyramid, Sphinx, and Egyptian Museum with a certified Egyptologist guide.",
      activities: [
        "Guided tour of the Pyramids of Giza",
        "Visit the Solar Boat Museum",
        "Tour of the Egyptian Museum"
      ]
    },
    {
      day: 3,
      title: "Old Cairo & Departure",
      desc: "Explore historic Islamic Cairo before your transfer back to the airport.",
      activities: [
        "Breakfast at hotel",
        "Khan El-Khalili Bazaar visit",
        "Al-Azhar Mosque tour",
        "Airport transfer"
      ]
    }
  ]
},
{
  title: "Amazon Rainforest",
  location: "Amazon Rainforest, Brazil",
  price: "9000$",
  priceUnit: " per Person",
  rating: 4.7,
  category: ["tropical", "vacations", "international"],
  description: "Explore the heart of the Amazon .",
  longDescription: "Dive into the world’s largest rainforest with expert guides.",
  images: [
    "https://plus.unsplash.com/premium_photo-1687525932622-b2192d27ac34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9uJTIwZm9yZXN0fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1687879820677-d965e81d3270?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW1hem9uJTIwZm9yZXN0fGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/1143984881/photo/boat-on-the-tributary-of-the-river-rio-negro.webp?a=1&b=1&s=612x612&w=0&k=20&c=DRnaE5kNsz28MmTxnPXVl4bHSI51zzUIIgXF2DQWUcY="
  ],
  includedItems: [
    "Airline tickets",
    "Jungle lodge accommodation",
    "All meals included",
    "Bilingual guide",
    "River canoe tour",
    "Wildlife sighting trek"
  ],
  details: [
    { title: "Destination", desc: "Mumbai,India" },
    { title: "Departure", desc: "Manaus, Brazil" },
    { title: "Best Season", desc: "May to October" }
  ],
  tourDays: [
    {
      day: 1,
      title: "Arrival & Canoe Exploration",
      desc: "Arrive in Manaus and transfer to your jungle lodge. After lunch, enjoy a canoe ride through the flooded forest.",
      activities: [
        "Arrival and lodge check-in",
        "Welcome drink and orientation",
        "Afternoon canoe exploration",
        "Dinner at the lodge"
      ]
    },
    {
      day: 2,
      title: "Jungle Trekking & Wildlife Watching",
      desc: "Full day of jungle trekking with native guides, wildlife observation, and medicinal plant education.",
      activities: [
        "Early morning birdwatching",
        "Guided jungle trek",
        "Learning about Amazonian plants",
        "Night wildlife spotting tour"
      ]
    },
    {
      day: 3,
      title: "River Village Visit & Departure",
      desc: "Visit a nearby river community before returning to Manaus for departure.",
      activities: [
        "Breakfast and river community tour",
        "Cultural exchange with locals",
        "Transfer to airport"
      ]
    }
  ]
}

]
async function insertPackage() {
  
 try {
   await connectDB();
    console.log("MongoDB connected......");
    console.log('Connected to MongoDB for package insertion');
    // const existingPackages = await Package.find({});
    // if (existingPackages.length) {
    //   console.log("Packages already exist. Skipping insertion.");
    //   return;
    // }


   const insertedPackages = await Package.insertMany(packagesData);
    console.log(`Inserted ${insertedPackages.length} packages successfully!`);

  } catch (error) {
    console.error('Error inserting package:', error);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed after err or insertion.');
  }
}

insertPackage();
