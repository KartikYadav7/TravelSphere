import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";
const Hero = () => {
  const Heading = ({ heading, text, className1, className2 }) => {
    return (
      <>
        <p
          className={`text-sm text-[#F97316] font-semibold uppercase mb-2 ${className1}`}
        >
          {heading}
        </p>
        <h2
          className={`text-2xl md:text-4xl font-bold text-[#1E293B] mb-4 md:mb-12 ${className2}`}
        >
          {text}
        </h2>
      </>
    );
  };

  const Package = ({
    title,
    img1,
    img2,
    alt1,
    alt2,
    days,
    people,
    city,
    country,
    price1,
    price2,
    text,
    stars,
  }) => {
    return (
      <>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            <img src={img1} alt={alt1} className="w-full h-52 object-cover" />
            <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src={img2}
                alt={alt2}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-6 space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>{`${days} Days`}</span>
              {/* <span>{`${people} People Going`}</span> */}
            </div>
            <div className="flex justify-between items-center ">
              <h3 className="text-xl font-bold text-gray-800">{city}</h3>
              <span className="text-yellow-400 flex gap-1">{stars}</span>
            </div>
            <p className="text-sm text-gray-500">{country}</p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-800">{`$${price1}`}</span>
              <span className="line-through text-gray-400 text-sm">
                {price2}
              </span>
            </div>

            <p className="text-xs text-gray-500">{text}</p>
            <Link to={`/package/${title}`}><Button className="mt-3 " text="Explore Now" /></Link>
          </div>
        </div>
      </>
    );
  };

  const tourServices = [
    {
      image: "/tour.png",
      heading: "Guided Tours",
      text: "Expert-led tours with cultural insights and smooth travel experiences.",
    },
    {
      image: "/travelling.png",
      heading: "Best Flight Options",
      text: "Affordable, flexible flights with trusted airlines ",
    },
    {
      image: "/hands.png",
      heading: "Religious Tours",
      text: "Meaningful pilgrimages to sacred sites with comfort and cultural insight.",
    },
    {
      image: "/medical.png",
      heading: "Medical Assists",
      text: "Comprehensive travel healthcare support, emergency help, and medical coordination anytime, anywhere.",
    },
  ];

  return (
    <>
      {/* logo images */}
      <section className="bg-gray-100 py-4 md:py-8">
        <div className="max-w-7xl mx-auto md:px-6 flex  items-center overflow-x-hidden md:justify-evenly gap-4 md:gap-10">
          <img
            src="/image1.png"
            alt="Emirates"
            className="h-6 md:h-8 object-contain"
          />
          <img
            src="/image2.png"
            alt="Trivago"
            className="h-6 md:h-8 object-contain"
          />
          <img
            src="/image3.png"
            alt="Airbnb"
            className="h-6 md:h-8 object-contain"
          />
          <img
            src="/image4.png"
            alt="Turkish Airlines"
            className="h-6 md:h-8 object-contain"
          />
          <img
            src="/image5.png"
            alt="Swiss"
            className="h-6 md:h-8 object-contain"
          />
        </div>
      </section>

      {/* Services Category */}
      <section className="py-12 md:py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Heading heading="Category" text="We Offer Best Services" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {tourServices.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-xl px-6 py-8 flex flex-col items-center space-y-3"
              >
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-12 h-12"
                />
                <h4 className="font-semibold text-[#1E293B]">{item.heading}</h4>
                <p className="text-gray-500 text-sm ">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specials */}
      <section className="py-12 md:py-16 bg-white relative">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="relative w-full md:w-1/2">
            <div className="relative rounded-t-full overflow-hidden border-solid   p-2">
              <img
                src="./image.png"
                alt="Couple on Beach"
                className="w-fit rounded-t-full object-cover"
              />
            </div>

            <div className="absolute top-4 md:top-8 md:left-10 w-24 h-24 rounded-full overflow-hidden shadow-xl">
              <img
                src="/Ellipse.png"
                alt="Sunset Couple"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-40 -left-4 md:left-0 w-16 h-16 rounded-full overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1525353399991-49aaac5fe02d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Adventure"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -right-20 bottom-52 transform -rotate-90 text-gray-300 font-semibold  text-3xl">
              Honeymoon Packages
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Heading
              heading="Honeymoon Specials"
              text={`Our Romantic Tropical
          Destinations`}
              className1="tracking-wide"
              className2="leading-tight md:mb-4 "
            />

            <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-md">
              Discover our romantic tropical destinations, perfect for couples
              seeking paradise. Enjoy serene beaches, lush landscapes, luxurious
              resorts, and unforgettable sunsets. Create lasting memories with
              personalized experiences designed for love, relaxation, and
              adventure in the world’s most beautiful tropical settings.
            </p>
            <Link to="/packages">
              <Button text="View Packages" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resort Bookings */}
      <section className="bg-white px-6 md:px-24 py-4 md:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-16">
          <div className="lg:w-1/2">
            <span className="text-[#FD644F] uppercase font-semibold tracking-wider">
              Fast & Easy
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800  mt-2">
              Get Your Favourite
              <br />
              Resort Bookings
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-white p-3 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Choose Destination</h4>
                  <p className="text-gray-500 text-sm ">
                    You just pick your Favourite Destination to explore,pack
                    your bags and enjoy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-400 text-white p-3 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Check Availability</h4>
                  <p className="text-gray-500 text-sm">
                    No need to check Availability , we've managed everything for
                    you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sky-500 text-white p-3 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 9V7a4 4 0 00-8 0v2M5 13h14l-1.5 9h-11z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Let’s Go</h4>
                  <p className="text-gray-500 text-sm">
                    Pack your Bags and get ready to Explore your Favourite
                    Destinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* usa photo */}
      <div className="relative">
        <img src="/promotion.png" alt="" className="mt-8" />
        <p className="absolute top-4 left-4  z-20 md:top-20 md:left-30 text-white md:text-5xl font-bold font-cursive ">
          {" "}
          Let's Make Your <br />
          Next Holiday Amazing
        </p>
      </div>

      {/* promotions */}
      <section className="bg-white px-6 md:px-24  py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="lg:w-1/2">
            <span className="text-[#FD644F] uppercase font-semibold tracking-wider">
              Promotion
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug mt-2">
              We Provide You Best
              <br />
              Sightseeing Tours
            </h2>
            <p className="text-gray-500 mt-4 mb-6">
              We offer top-rated sightseeing tours with expert guides, stunning
              locations, and seamless planning for an unforgettable travel
              experience.
            </p>
            <Link to="/packages">
              <Button text="View Packages" />
            </Link>

            <div className="flex gap-4 mt-10">
              {[
                {
                  image:
                    "/Illustration.png",
                  alt: "Big Ben",
                  text: "$700",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1690027427023-11d0424f7c20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "London",
                  text: "$800",
                },
                {
                  image:
                    "https://media.istockphoto.com/id/475606798/photo/the-palace-of-westminster-in-london-in-the-evening.webp?a=1&b=1&s=612x612&w=0&k=20&c=qZ0REM6UkEU4bvjFYT1ai2jcU-ik1gtC9BTdMeYEIWA=",
                  alt: "Rome",
                  text: "$500",
                },
                {
                  image:
                    "https://media.istockphoto.com/id/508540910/photo/rome-sunset-over-tiber-and-st-peters-basilica-vatican-italy.webp?a=1&b=1&s=612x612&w=0&k=20&c=DO9rOk8gsv12TKbtDGFt_yGZlARQmhYwwuBpY733WsE=",
                  alt: "Berlin",
                  text: "$600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden"
                >
                  <img
                    src={item.image}
                    className="w-32 h-24 object-cover rounded-xl"
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="rounded-t-full overflow-hidden  w-[260px] h-[420px]">
              <img
                src="/Illustration.png"
                alt="Eiffel Tower"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -right-20 top-60 text-gray-300 text-2xl rotate-90 tracking-widest hidden lg:block">
              BREATH TAKING VIEWS
            </div>
          </div>
        </div>
      </section>

      {/* 2 img */}
      <section>
        <div className=" grid md:grid-cols-2 ">
          <img src="/promotions.png" alt="" />
          <img src="/cities.png" alt="" />
        </div>
      </section>

      {/* trending tours */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-24 relative">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-[#FD644F] uppercase font-semibold tracking-wider">
            Trendy
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">
            Our Trending Tour Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <Package
          title="Switzerland"
            img1="https://plus.unsplash.com/premium_photo-1690464561785-e7e82e9ced74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D"
            img2="https://flagcdn.com/w40/ch.png"
            alt="SwitzerLand"
            alt2="SwitzerLand Flag"
            days="5"
            // people="25"
            stars={
              <>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </>
            }
            city="SwitzerLand"
            country="Europe"
            text="Explore the beauty of Switzerland."
            price1="5,100"
            price2="8,300"
          />

          <Package
          title="Amazon Rainforest"
            img1="https://plus.unsplash.com/premium_photo-1687189802896-c39884e4c63c?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            img2="https://flagcdn.com/w40/br.png"
            alt1="Amazon"
            alt2="Brazil Flag"
            days="3"
            //  people="30"
            city="Amazon"
            country="Brazil"
            stars={
              <>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </>
            }
            text=" Explore the Amazon Rainforest ."
            price1="9000"
            price2="11000"
          />

          <Package
          title="Giza Pyramids"
            img1="https://images.unsplash.com/photo-1736531347893-83e03b7a408b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            img2="https://flagcdn.com/w40/eg.png"
            alt1="Giza"
            alt2="Egypt Flag"
            days="3"
            //  people="155"
            city="Giza"
            stars={
              <>
                <FaStar />
                <FaStar />
                <FaStar />
              </>
            }
            country="Egypt"
            price1="8000"
            text=" Explore the Giza Pyramids."
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
