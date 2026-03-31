
import React, { useEffect, useState } from "react";
import { chatSession } from "./AIModel";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

 const SelectTravelList = [
    {
        id:1,
        title: 'Just Me',
        desc: 'A sole traveles in exploration',
        icon: '✈️',
        people:'1 person'
    },
    {
        id:2,
        title: 'A Couple',
        desc: 'Two traveles in tandem',
        icon: '🥂',
        people:'2 people'
    },
    {
        id:3,
        title: 'Family',
        desc: 'A group of fun loving adv',
        icon: '🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekes',
        icon: '⛵',
        people:'5 to 10 people'
    }
]

 const SelectBudgetOptions = [
    {
        id:1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵',
    },
    {
        id:2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰',
    },
    {
        id:3,
        title: 'Luxury',
        desc: 'Dont worry about cost',
        icon: '💸',
    }
]

 const AI_PROMPT = `
Generate a travel plan for {location} for {totalDays} days for {traveler} with a {budget} budget.

Return ONLY valid JSON with:
- hotel_options (name, address, price, image_url, geo_coordinates, rating, description)
- itinerary (day-wise plan with time, place, details, image_url, geo_coordinates, ticket_pricing, rating)

No markdown. No backticks. No explanation.
`;

function Trip() {
    const [tripData, setTripData] = useState(null);
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);

//   const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

const onGenerateTrip = async () => {
  const user = localStorage.getItem("user");
  if (!user) {
    alert("Login")
    return};

  if (
    !formData?.location ||
    !formData?.noOfDays ||
    !formData?.budget ||
    !formData?.traveler
  ) {
    console.error("Please fill all details");
    return;
  }

  setLoading(true);

  const FINAL_PROMPT = AI_PROMPT
    .replace("{location}", formData.location.label)
    .replace(/{totalDays}/g, formData.noOfDays)
    .replace("{traveler}", formData.traveler)
    .replace("{budget}", formData.budget);

  try {
    const data = await chatSession(FINAL_PROMPT);

    if (data) {
      setTripData(data);
    } else {
      console.error("No data received");
    }

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="px-5 mt-10 sm:px-10 md:px-20 lg:px-56 ">
      <h2 className="text-4xl text-red-500 font-semibold">
        Tell us your travel preferences🏕️🌴
      </h2>
      <p className="mt-3  text-gray-500">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="flex flex-col gap-10 mt-8">
        <div>
          <h2 className="font-medium mb-2">
            What is destination of choice?
          </h2>

          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            value={place?.label || ""}
            onChange={(e) => {
              const value = e.target.value.trim();
              const locationObj = { label: value, value };
              setPlace(locationObj);
              handleInputChange("location", locationObj);
            }}
            placeholder="Enter a location"
          />
        </div>

        <div>
          <h2 className=" font-medium mb-2">
            How many days are you planning your trip?
          </h2>
          <input
            placeholder={"Ex.4"}
            type="number"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="mb-2 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                  formData?.budget == item.title && "shadow-lg border-black"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2 font-medium">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelList.map((item, index) => (
               <div
               key={index}
               onClick={() => handleInputChange("traveler", item.people)}
               className={`group p-4 border cursor-pointer rounded-lg transition-all duration-300 ${
                 formData?.traveler === item.people
                   ? "shadow-lg border-gray-900"
                   : "hover:shadow-lg hover:border-red-300"
               }`}
             >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end my-10">
        <Button disabled={loading} onClick={onGenerateTrip}
         text= {loading ? (
            "Generating Trip....."
          ) : (
            "Generate Trip"
          )}
        />
      </div>

      {tripData && (
  <div className="mt-10">
    <h2 className="text-2xl font-bold text-red-500 mb-4">🏨 Hotel Recommendations</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tripData.hotel_options.map((hotel, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-md">
          <img src={hotel.image_url} alt={hotel.name} className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-xl font-semibold">{hotel.name}</h3>
          <p className="text-sm text-gray-600">{hotel.address}</p>
          <p className="text-sm mt-1">{hotel.description}</p>
          <p className="mt-1 font-medium">Price: {hotel.price}</p>
          <p className="text-yellow-500">Rating: {hotel.rating}</p>
        </div>
      ))}
    </div>
    
    <h2 className="text-2xl font-bold text-red-500 mt-10 mb-4">📅 Itinerary</h2>
    {Array.isArray(tripData?.itinerary) && tripData.itinerary.map((day, dayIndex) => (
  <div key={dayIndex} className="mb-8">
    <h3 className="text-xl font-semibold mb-2">{day.day}</h3>
    <div className="space-y-4">
      {Array.isArray(day.plan) && day.plan.map((activity, actIndex) => (
        <div key={actIndex} className="border rounded-lg p-4">
          <div className="flex gap-4">
            <img
              src={activity.image_url}
              alt={activity.place}
              className="w-32 h-24 object-cover rounded-md"
            />
            <div>
              <h4 className="font-semibold text-lg">{activity.place}</h4>
              <p className="text-gray-600">{activity.details}</p>
              <p className="text-sm mt-1">🕒 {activity.time}</p>
              <p className="text-sm">🎟️ {activity.ticket_pricing}</p>
              <p className="text-yellow-500">⭐ {activity.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
))}


  </div>
)}




    </div>
  );
}

export default Trip;
