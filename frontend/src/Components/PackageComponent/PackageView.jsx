
import { useParams } from "react-router-dom";
import  { useEffect ,useState} from "react";
import { useAuth } from "../../../context/AuthContext";
import BookingForm from "./BookingForm";
import {ImageCarousel} from "./packages";
const TourPlan = ({ tourpackage }) => (
  
  <section className="space-y-8 ">
     <div className="text-sm text-gray-700 space-y-2">
        <h2 className="text-2xl font-semibold text-[#343434]">{tourpackage.location}</h2>
        <p className="text-red-500 font-bold text-lg">{tourpackage.price}$<span className="text-sm font-normal">/{tourpackage.priceUnit}</span></p>
        <p className="text-gray-600 text-sm">{tourpackage.longDescription}</p>
        <ul className="space-y-2">
        {tourpackage.details.map((item, index) => (
          <li key={index} className="flex gap-x-2">
            <span className="font-medium text-red-500">{item.title}: </span>
            <span className="text-gray-900">{item.desc}</span>
          </li>
        ))}
      </ul>
      <div className="pt-2">
         <h2 className="font-bold mt-2">What's Included</h2>
      <ul className="list-disc list-inside text-gray-800 ">
        {tourpackage.includedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
  <div/>
    <h2 className="text-2xl font-bold text-[#343434] mt-8">Tour Plan</h2>
   

    {tourpackage.tourDays.map(({ day, title, desc ,activities},index) => (
      <div
        key={index}
        className="flex items-start gap-4 border border-gray-200 rounded-xl p-4 shadow-sm"
      >
        <div className="bg-[#FF5722] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
          {day}
        </div>
        <div>
          <h4 className="text-lg font-bold">{`Day ${day}: ${title}`}</h4>
          <p className="text-gray-600 text-sm">{desc}</p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
                  {activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
        </div>
      </div>
    ))}
 </div>
  <section className="mt-10">
        <h2 className="text-2xl font-bold text-[#343434] mb-4">From our gallery</h2>
        <p className="text-gray-600 text-sm mb-6">
          Explore the beauty of our tours through these stunning images. Each picture tells a story of adventure, culture, and unforgettable experiences. Join us and create your own story!
        </p>
        <ImageCarousel images={tourpackage.images}/>
      </section>
  </section>
);

const PackageView = () => {
  
  const {title } = useParams();
  const decodedTitle = decodeURIComponent(title);
   const [tourpackage, setTourpackage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId,setUserId] = useState('');
   const { user } = useAuth();
      useEffect(() => {
        if (user && user.userId) {
          setUserId(user.userId);
        }
      }, [user]);


 useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/packages/${encodeURIComponent(decodedTitle)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Package not found: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setTourpackage(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [decodedTitle]);

  if (loading) {
    return <p className="text-center mt-10">Loading package details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 mt-10">{error}</p>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <TourPlan tourpackage={tourpackage} />
      <BookingForm userId={userId} tourPackageId={tourpackage._id}/>
    </div>
  );
};

export default PackageView;
