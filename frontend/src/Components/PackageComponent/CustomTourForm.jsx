import React, { useState,useEffect } from "react";
import Button from "../Button";
import axios from "axios";
import { useNavigate } from "react-router";
import {useAuth} from '../../../context/AuthContext'

const CustomTourForm = () => {

  const {user} = useAuth()
  const [step, setStep] = useState(1);
  const [tourType, setTourType] = useState("single");
  const [numCities, setNumCities] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [cities, setCities] = useState([
    { name: "", days: "", nights: "", activities: [] },
  ]);

  

  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "",
  });

  const [tripDetails, setTripDetails] = useState({
    peoples: "",
    interests: [],
    budgetRange: "",
    specialRequests: "",
  });

  const totalSteps = 4;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleCityChange = (index, field, value) => {
    const updatedCities = [...cities];
    updatedCities[index][field] = value;
    setCities(updatedCities);
  };

  const handleActivityChange = (index, activity) => {
    const updatedCities = [...cities];
    const activities = updatedCities[index].activities;
    if (activities.includes(activity)) {
      updatedCities[index].activities = activities.filter((a) => a !== activity);
    } else {
      updatedCities[index].activities = [...activities, activity];
    }
    setCities(updatedCities);
  };

  const handleNumCitiesChange = (value) => {
    if (value > 3) {
      alert("You can select a maximum of 3 cities only!");
      value = 3;
    }
    setNumCities(value);
    const updatedCities = Array.from({ length: value }, () => ({
      name: "",
      days: "",
      activities: [],
    }));
    setCities(updatedCities);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {
    userId: user?._id,
    personalDetails,
    tourType,
    cities,
    tripDetails,
  };

  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/customTour`,
      formData,
      {
        headers: {
        
          Authorization: `${user.token}`,
        },
      }
    );

    setSubmissionStatus("success");
  } catch (error) {
    console.error("Error submitting form:", error);
    setSubmissionStatus("error");
  }
};


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-2 rounded-full mb-8">
        <div
          className="bg-gradient-to-r from-[#FD644F] to-[#FF8871] h-2 rounded-full transition-all duration-300"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        ></div>
      </div>
      <h2 className="text-3xl font-semibold mb-6 text-center text-red-500">
        Custom Tour Package Form
      </h2>

      <form onSubmit={handleSubmit} className="text-left">
        {/* Step 1 - Personal Details */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-red-400">Personal Details</h3>
            <input
              type="text"
              required
              placeholder="Full Name"
              value={personalDetails.fullName}
              onChange={(e) =>
                setPersonalDetails({ ...personalDetails, fullName: e.target.value })
              }
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              value={personalDetails.email}
              onChange={(e) =>
                setPersonalDetails({ ...personalDetails, email: e.target.value })
              }
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              required
              placeholder="Phone Number"
              value={personalDetails.phone}
              onChange={(e) =>
                setPersonalDetails({ ...personalDetails, phone: e.target.value })
              }
              className="border p-2 rounded w-full"
            />
            <select
              value={personalDetails.contactMethod}
              onChange={(e) =>
                setPersonalDetails({ ...personalDetails, contactMethod: e.target.value })
              }
              className="border p-2 rounded w-full"
            >
              <option value="">Preferred Contact Method</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
        )}

        {/* Step 2 - Tour Type, City Details, and People Count */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-red-400">Tour Details</h3>
            <select
              value={tourType}
              onChange={(e) => setTourType(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="single">Single City Tour</option>
              <option value="multi">Multi-City Tour</option>
            </select>

            {tourType === "multi" && (
              <div>
                <label className="block mb-2 font-semibold">How many cities?</label>
                <input
                  type="number"
                  min="2"
                  max="3"
                  value={numCities}
                  onChange={(e) => handleNumCitiesChange(Number(e.target.value))}
                  className="border p-2 rounded w-full"
                />
              </div>
            )}

            {cities.map((city, index) => (
              <div key={index} className="border p-4 rounded bg-gray-50 mb-4">
                <h4 className="font-semibold mb-2">City {index + 1}</h4>
                <input
                  type="text"
                  placeholder="City Name"
                  value={city.name}
                  onChange={(e) => handleCityChange(index, "name", e.target.value)}
                  className="border p-2 rounded w-full mb-2"
                />
                <input
                  type="number"
                  placeholder="Days"
                  value={city.days}
                  onChange={(e) => handleCityChange(index, "days", e.target.value)}
                  className="border p-2 rounded w-full mb-2"
                />
                
                <label className="font-semibold">Activities</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    "City Tours",
                    "Museum Visits",
                    "Wildlife",
                    "Adventure Activities",
                    "Shopping",
                    "Nightlife",
                  ].map((activity) => (
                    <label key={activity} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={city.activities.includes(activity)}
                        onChange={() => handleActivityChange(index, activity)}
                      />
                      <span>{activity}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {/* Number of People */}
          
            <div className="grid grid-cols-3 gap-4">

              <input
                type="number"
                placeholder="no. of peoples"
                value={tripDetails.adults}
                onChange={(e) => setTripDetails({ ...tripDetails, peoples: Number(e.target.value) })}
                className="border p-2 rounded w-full"
              />

              

            </div>

            {/* Budget Range */}
            <select
              value={tripDetails.budgetRange}
              onChange={(e) => setTripDetails({ ...tripDetails, budgetRange: e.target.value })}
              className="border p-2 rounded w-full"
            >
              <option value="">Select Budget Range</option>
              <option value="Economy">Economy</option>
              <option value="Mid-range">Mid-range</option>
              <option value="Luxury">Luxury</option>
            </select>
         

<textarea
placeholder="Special Requests or Notes"
value={tripDetails.specialRequests}
onChange={(e) => setTripDetails({ ...tripDetails, specialRequests: e.target.value })}
className="border p-2 rounded w-full"
rows="4"
/>
</div>
        )}

        {/* Step 3 - Review and Submit */}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Review & Submit</h3>
            <p className="bg-gray-100 p-4 rounded overflow-x-auto whitespace-pre-wrap">
  {`Personal Details:
  Name: ${personalDetails.fullName}
  Email: ${personalDetails.email}
  Phone: ${personalDetails.phone}
  Preferred Contact Method: ${personalDetails.contactMethod}

Tour Type: ${tourType === "single" ? "Single City Tour" : "Multi-City Tour"}

${cities
                  .map(
                    (city, index) => `City ${index + 1}:
  Name: ${city.name}
  Days: ${city.days}
  Nights: ${city.nights}
  Activities: ${city.activities.join(", ")}`
                  )
                  .join("")}

Trip Details:
  No of Peoples: ${tripDetails.peoples}
  Budget: ${tripDetails.budgetRange}
  Special Requests: ${tripDetails.specialRequests || "None"}
`}
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && <Button type="button" onClick={prevStep} text="Back" />}
          {step < 3 && <Button type="button" onClick={nextStep} text="Next" />}
          {step === 3 && (
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      {submissionStatus === "success" && (
  <p className="mt-4 text-green-600 font-semibold">
    Tour package submitted successfully!
  </p>
)}

{submissionStatus === "error" && (
  <p className="mt-4 text-red-600 font-semibold">
    Something went wrong. Please try again.
  </p>
)}
    </div>
  );
};

export default CustomTourForm;
