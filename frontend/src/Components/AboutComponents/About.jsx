import React,{useState,useEffect} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Reviews from "../Reviews";

import { Nav } from "../Navbar";
import Footer from "../Footer";
const About = () => {
   const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/images`);
        console.log("Response from server:", response);
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();
        console.log("Fetched image data:", data);

        // Pick 9 random images from data
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 9);

        setImages(selected);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return (
    <>
      <div
        style={{ backgroundImage: `url(/about.png)` }}
        className="relative h-screen w-full object-cover bg-center text-white"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Nav />

        <div className="relative pt-40 font-cursive z-10 text-center justify-center text-3xl md:text-8xl  font-sans cursive italic">
          About Us
        </div>
      </div>

{/* about us */}
      <section className="py-12 md:py-16 ">
        <p className="text-sm text-red-500 font-semibold uppercase text-center mb-4 ">
          About Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-10 text-center">
          {" "}
          What Our Clients Say About Us
        </h2>
        <div className="text-left mx-8">
          {" "}
          <p>
            Welcome to TravelSphere — your trusted partner in discovering the
            beauty of the world! We are a passionate team of travel enthusiasts
            dedicated to curating unforgettable experiences for every kind of
            explorer. Whether you're dreaming of sun-soaked beaches, mountain
            escapes, cultural adventures, or off-the-beaten-path discoveries,
            we’re here to make it happen. With years of experience in the travel
            industry, we specialize in personalized tour packages, seamless
            bookings, and round-the-clock support to ensure every journey is
            smooth and stress-free. From solo travelers to families and
            corporate groups, we cater to all, blending comfort, adventure, and
            authentic local experiences. At TravelSphere, we believe travel is
            more than just a destination — it's a way to connect, grow, and
            create lasting memories. That's why we partner with trusted guides,
            handpicked accommodations, and unique local experiences to make
            every trip special. Let us turn your travel dreams into reality.
            Explore the world with confidence, curiosity, and excitement — we’ll
            take care of the rest.
          </p>
        </div>
      </section>

{/* popular plans */}
      <section>
        <div className="bg-[#F5F5F5] py-16 px-6 md:px-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm text-red-500 font-semibold uppercase">
              Trend
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Our Popular Tour Plans
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our popular tour plans offer diverse, expertly crafted experiences for unforgettable and hassle-free travel adventures.
            </p>
          </div>

          {/* Stats Circles */}
          <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
            <div className="w-32 h-32 flex flex-col items-center">
              <CircularProgressbar
                value={78}
                text="78%"
                styles={buildStyles({
                  pathColor: "text-blue-500",
                  textColor: "text-blue-500",
                  trailColor: "#E5E7EB",
                })}
              />
              <p className="mt-3  text-gray-700">Vacations</p>
            </div>

            {/* Honeymoon */}
            <div className="w-32 h-32 flex flex-col items-center">
              <CircularProgressbar
                value={55}
                text="55%"
                styles={buildStyles({
                  pathColor: "text-purple-400",
                  textColor: "text-purple-400",
                  trailColor: "#E5E7EB",
                })}
              />
              <p className="mt-3 text-gray-700">HoneyMoon</p>
            </div>

            {/*Tropical*/}
            <div className="w-32 h-32 flex flex-col items-center">
              <CircularProgressbar
                value={40}
                text="40%"
                styles={buildStyles({
                  pathColor: "text-red-500",
                  textColor: "text-red-500",
                  trailColor: "#E5E7EB",
                })}
              />
              <p className="mt-3 text-gray-700">Tropical</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <p className="text-sm text-red-500 font-semibold uppercase">
            Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
            Awesome Gallery
          </h2>
         
        </div>
          {loading && <p className="text-center">Loading images...</p>}

      {!loading && images.length === 0 && <p className="text-center">No images found.</p>}

      {!loading && images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((url, i) => (
            <img
              key={i}
              src={`${url}?auto=format&fit=crop&w=400&h=300&q=80`}
              alt={`Travel ${i + 1}`}
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
          ))}
        </div>
      )}

      </section>

      <Reviews />
      
      <Footer/>
    </>
  );
};

export default About;
