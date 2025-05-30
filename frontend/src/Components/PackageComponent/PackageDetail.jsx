import { useState, useMemo,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const DestinationCard = ({ dest }) => (
  <Link to={`/package/${encodeURIComponent(dest.title)}`} className="block">
    <div className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition">
      <img
        src={dest.images?.[0]} 
        alt={dest.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-orange-600">{dest.title}</h3>
        <p className="text-sm text-gray-600">{dest.description}</p>
        <span className="block mt-2 text-sm text-gray-700">
          ${dest.price} &nbsp; ★ {dest.rating}
        </span>
      </div>
    </div>
  </Link>
);
const SidebarModal = ({ search, setSearch, priceLimit, setPriceLimit, sortOption, setSortOption, category, setCategory }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm ">
    <h2 className="text-xl font-bold mb-4">Search Tours</h2>

    <input
      type="text"
      placeholder="Search destination"
      value={search}
      onChange={e => setSearch(e.target.value)}
      className="w-full px-3 py-2 border rounded mb-4"
    />

    <label className="block mb-1 text-sm font-medium">Price under: ${priceLimit}</label>
    <input
      type="range"
      min="500"
      max="9000"
      value={priceLimit}
      onChange={e => setPriceLimit(Number(e.target.value))}
      className="w-full mb-4"
    />

    <label className="block mb-1 text-sm font-medium">Sort By</label>
    <select
      value={sortOption}
      onChange={e => setSortOption(e.target.value)}
      className="w-full px-3 py-2 border rounded mb-4"
    >
      <option value="">None</option>
      <option value="priceLow">Price: Low to High</option>
      <option value="priceHigh">Price: High to Low</option>
      <option value="nameAsc">Name: A-Z</option>
      <option value="nameDesc">Name: Z-A</option>
    </select>

    <label className="block mb-1 text-sm font-medium">Category</label>
    <select
      value={category}
      onChange={e => setCategory(e.target.value)}
      className="w-full px-3 py-2 border rounded"
    >
      <option value="">All Categories</option>
      <option value="tropical">Tropical</option>
      <option value="religious">Religious</option>
      <option value="honeymoon">Honeymoon</option>
      <option value="vacations">Vacations</option>
      <option value="indian">Indian</option>
      <option value="international">International</option>
    </select>
  </div>
);



const PackageDetail = () => {
  const [search, setSearch] = useState("");
  const [priceLimit, setPriceLimit] = useState(1500);
  const [sortOption, setSortOption] = useState("");
  const [category, setCategory] = useState("");
   const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/packages`); 
        setDestinations(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);
  
 const filteredDestinations = useMemo(() => {
  const normalizedSearch = search.toLowerCase();
  const normalizedCategory = category.toLowerCase();

  let filtered = destinations.filter((dest) => {
    const title = dest.title?.toLowerCase() || "";
    const categories = Array.isArray(dest.category)
      ? dest.category.map((cat) => cat.toLowerCase())
      : [];

    const numericPrice = parseFloat(dest.price?.toString().replace(/[^0-9.]/g, "")) || 0;

    return (
      title.includes(normalizedSearch) &&
      numericPrice <= priceLimit &&
      (category ? categories.includes(normalizedCategory) : true)
    );
  });

  // Sorting
  if (sortOption === "priceLow") {
    filtered.sort(
      (a, b) =>
        parseFloat(a.price?.toString().replace(/[^0-9.]/g, "")) -
        parseFloat(b.price?.toString().replace(/[^0-9.]/g, ""))
    );
  } else if (sortOption === "priceHigh") {
    filtered.sort(
      (a, b) =>
        parseFloat(b.price?.toString().replace(/[^0-9.]/g, "")) -
        parseFloat(a.price?.toString().replace(/[^0-9.]/g, ""))
    );
  } else if (sortOption === "nameAsc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "nameDesc") {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }

  return filtered;
}, [search, priceLimit, sortOption, category, destinations]);


  
return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 py-10 flex flex-col-rev lg:flex-row gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 flex-1">
          {loading ? (
            <p className="text-red-400">Loading packages...</p>
          ) : filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest) => (
              <DestinationCard key={dest._id} dest={dest} />
            ))
          ) : (
            <p className="col-span-2 text-red-600">No destinations found.</p>
          )}
        </div>

        <div className="lg:w-1/3">
          <SidebarModal
            search={search}
            setSearch={setSearch}
            priceLimit={priceLimit}
            setPriceLimit={setPriceLimit}
            sortOption={sortOption}
            setSortOption={setSortOption}
            category={category}
            setCategory={setCategory}
          />
        </div>
      </div>
    </div>
  );
};


export { DestinationCard, SidebarModal };
export default PackageDetail;
