import React, { useState, useEffect } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/reviews`);
        // console.log("Fetched reviews:", res.data); 
        setReviews(res.data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    }
    fetchReviews();
  }, []);

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  if (reviews.length === 0) {
    return (
      <section className="bg-[#F5F5F5] py-20 px-6 md:px-24 text-center relative">
        <p className="text-sm text-[#FD644F] font-semibold uppercase mb-2">
          Promotion
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-10">
          What Our Clients Say About Us
        </h2>
        <p className="text-red-400">Loading reviews...</p>
      </section>
    );
  }

  const { name,image,quote } = reviews[index];

  return (
    <section className="bg-[#F5F5F5] py-20 px-6 md:px-24 text-center relative">
      <p className="text-sm text-[#FD644F] font-semibold uppercase mb-2">
        Promotion
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-10">
        What Our Clients Say About Us
      </h2>

      <div className="bg-white max-w-xl mx-auto rounded-xl p-8 shadow-lg relative"> 
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full mx-auto border-4 border-white -mt-16 shadow-md"
        />
        <p className="text-gray-600 italic mt-6 min-h-[3rem]">“{quote}”</p>
        <h4 className="font-semibold mt-4 text-[#212529]">
          {name}
        </h4>

        <div
          className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl cursor-pointer select-none"
          onClick={prevReview}
          role="button"
          tabIndex={0}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === "ArrowLeft") && prevReview()
          }
          aria-label="Previous review"
        >
          ❮
        </div>
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl cursor-pointer select-none"
          onClick={nextReview}
          role="button"
          tabIndex={0}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === "ArrowRight") && nextReview()
          }
          aria-label="Next review"
        >
          ❯
        </div>
      </div>

      <hr className="my-4 text-[#FD644F] w-1/10 mx-auto border-2" />
    </section>
  );
};

export default Reviews;
