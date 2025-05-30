import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';

const emptyPackage = {
  title: '',
  location: '',
  price: '',
  priceUnit: '',
  description: '',
  longDescription: '',
  category: '',
  images: '',
  tourDays: [],
  includedItems: [],
  details: [], // <-- added details here
};

const PackageManager= () => {
  const { user } = useAuth();
  const [packages, setPackages] = useState([]);
  const [form, setForm] = useState(emptyPackage);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const[showFields, setShowFields] = useState(true); // toggle for fields UI
  const [showTourDays, setShowTourDays] = useState(true);
  const [showIncludedItems, setShowIncludedItems] = useState(true);
  const [showDetails, setShowDetails] = useState(true); // toggle for details UI
//modal
 
const validate = () => {
  if (!form.title.trim()) {
    setError('Title is required');
    return false;
  }
  if (!form.location.trim()) {
    setError('Location is required');
    return false;
  }
  if (!form.price || isNaN(form.price) || Number(form.price) <= 0) {
    setError('Price must be a positive number');
    return false;
  }
  if (!form.category.trim()) {
    setError('Category is required');
    return false;
  }

  // Validate details array
  if (form.details.length === 0) {
    setError('At least one detail is required');
    return false;
  }
  for (let i = 0; i < form.details.length; i++) {
    if (!form.details[i].title.trim()) {
      setError(`Detail #${i + 1} title is required`);
      return false;
    }
    if (!form.details[i].desc.trim()) {
      setError(`Detail #${i + 1} description is required`);
      return false;
    }
  }

  // Similarly validate tourDays
  if (form.tourDays.length === 0) {
    setError('At least one tour day is required');
    return false;
  }
  for (let i = 0; i < form.tourDays.length; i++) {
    const day = form.tourDays[i];
    if (!day.day.trim()) {
      setError(`Tour day #${i + 1} day field is required`);
      return false;
    }
    if (!day.title.trim()) {
      setError(`Tour day #${i + 1} title is required`);
      return false;
    }
    if (!day.desc.trim()) {
      setError(`Tour day #${i + 1} description is required`);
      return false;
    }
    if (!day.activities || day.activities.length === 0) {
      setError(`Tour day #${i + 1} must have at least one activity`);
      return false;
    }
    for (let j = 0; j < day.activities.length; j++) {
      if (!day.activities[j].trim()) {
        setError(`Activity #${j + 1} in day #${i + 1} cannot be empty`);
        return false;
      }
    }
  }

  // Validate includedItems
  if (form.includedItems.length === 0) {
    setError('At least one included item is required');
    return false;
  }
  for (let i = 0; i < form.includedItems.length; i++) {
    if (!form.includedItems[i].trim()) {
      setError(`Included item #${i + 1} cannot be empty`);
      return false;
    }
  }

  // If you want, validate images (optional)
  // You could check if images are valid URLs

  setError('');
  return true;
};

  const fetchPackages = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/packages`, {
        headers: { Authorization: `${user.token}` },
      });
      setPackages(res.data);
    } catch (err) {
      setError('Failed to fetch packages');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Tour days handlers (unchanged)
  const handleTourDayChange = (index, field, value) => {
    const updatedDays = [...form.tourDays];
    updatedDays[index] = { ...updatedDays[index], [field]: value };
    setForm((prev) => ({ ...prev, tourDays: updatedDays }));
  };

  const handleActivityChange = (dayIndex, actIndex, value) => {
    const updatedDays = [...form.tourDays];
    const activities = [...(updatedDays[dayIndex].activities || [])];
    activities[actIndex] = value;
    updatedDays[dayIndex].activities = activities;
    setForm((prev) => ({ ...prev, tourDays: updatedDays }));
  };

  const addTourDay = () => {
    setForm((prev) => ({
      ...prev,
      tourDays: [...prev.tourDays, { day: '', title: '', desc: '', activities: [''] }],
    }));
  };

  const removeTourDay = (index) => {
    const updatedDays = form.tourDays.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, tourDays: updatedDays }));
  };

  const addActivity = (dayIndex) => {
    const updatedDays = [...form.tourDays];
    updatedDays[dayIndex].activities = [...(updatedDays[dayIndex].activities || []), ''];
    setForm((prev) => ({ ...prev, tourDays: updatedDays }));
  };

  const removeActivity = (dayIndex, actIndex) => {
    const updatedDays = [...form.tourDays];
    updatedDays[dayIndex].activities = updatedDays[dayIndex].activities.filter((_, i) => i !== actIndex);
    setForm((prev) => ({ ...prev, tourDays: updatedDays }));
  };

  // Included items handlers (unchanged)
  const handleIncludedItemChange = (index, value) => {
    const updated = [...form.includedItems];
    updated[index] = value;
    setForm((prev) => ({ ...prev, includedItems: updated }));
  };

  const addIncludedItem = () => {
    setForm((prev) => ({ ...prev, includedItems: [...prev.includedItems, ''] }));
  };

  const removeIncludedItem = (index) => {
    const updated = form.includedItems.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, includedItems: updated }));
  };

  // New: Details handlers
  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...form.details];
    updatedDetails[index] = { ...updatedDetails[index], [field]: value };
    setForm((prev) => ({ ...prev, details: updatedDetails }));
  };

  const addDetail = () => {
    setForm((prev) => ({
      ...prev,
      details: [...prev.details, { title: '', desc: '' }], // you can add icon or other fields if needed
    }));
  };

  const removeDetail = (index) => {
    const updatedDetails = form.details.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, details: updatedDetails }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return; // stop submit if validation fails

  setLoading(true);
    setLoading(true);
    setError('');

    const payload = {
      ...form,
      price: Number(form.price),
      category: form.category.split(',').map((c) => c.trim()),
      images: form.images.split(',').map((img) => img.trim()),
      details: form.details, // send details as is
      rating:Number(form.rating),
    };

    try {
      if (editingId) {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/admin/packages/${editingId}`, payload, {
          headers: { Authorization: `${user.token}` },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/admin/packages`, payload, {
          headers: { Authorization: `${user.token}` },
        });
      }
      setForm(emptyPackage);
      setEditingId(null);
      fetchPackages();
    } catch (err) {
      setError('Failed to save package');
    }
    setLoading(false);
  };

  const handleEdit = (pkg) => {
    setForm({
      ...pkg,
      category: pkg.category.join(', '),
      images: pkg.images.join(', '),
      details: pkg.details || [],
      rating: pkg.rating 
    });
    setEditingId(pkg._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this package?')) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/admin/packages/${id}`, {
        headers: { Authorization: `${user.token}` },
      });
      fetchPackages();
    } catch {
      alert('Failed to delete package');
    }
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Manage Packages</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='mb-4'>
        <div
  className="flex items-center justify-between cursor-pointer bg-gray-100 p-2 rounded text-blue-600 font-semibold"
  onClick={() => setShowFields(!showFields)}
>
  
 {showFields ?  '▼' : '►'} Basic Tour Information
</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {showFields && (<>
          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="border p-2" />
          <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required className="border p-2" />
          <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required className="border p-2" />
          <input name="priceUnit" placeholder="Price Unit" value={form.priceUnit} onChange={handleChange} required className="border p-2" />
          <input name="description" placeholder="Short Description" value={form.description} onChange={handleChange} required className="border p-2" />
          <input name="longDescription" placeholder="Long Description" value={form.longDescription} onChange={handleChange} required className="border p-2" />
          <input name="category" placeholder="Categories (comma-separated)" value={form.category} onChange={handleChange} required className="border p-2" />
          <input name="images" placeholder="Images URLs (comma-separated)" value={form.images} onChange={handleChange} className="border p-2" />
          <input
    type="number"
    id="rating"
    name="rating"
    min={1}
    max={5}
    step={0.1}
    value={form.rating || ''}
    onChange={(e) => setForm((prev) => ({ ...prev, rating: e.target.value ? Number(e.target.value) : '' }))}
    className="border p-2 "
    placeholder="Rating (1-5)"
  />
  </>)}
        </div>
        </div>

        {/* Toggle: Tour Days */}
        <div className="mb-4">
          <div className="flex items-center justify-between cursor-pointer bg-gray-100 p-2 rounded text-blue-600 font-semibold mb-4" onClick={() => setShowTourDays(!showTourDays)}>
            {showTourDays ? '▼' : '►'} Tour Days & Activities
          </div>
          {showTourDays && (
            <>
              {form.tourDays.map((day, dayIndex) => (
                <div key={dayIndex} className="border p-3 mb-3 rounded">
                  <input
                    placeholder="Day (e.g., Day 1)"
                    value={day.day}
                    onChange={(e) => handleTourDayChange(dayIndex, 'day', e.target.value)}
                    className="border p-1 mb-2 w-full"
                  />
                  <input
                    placeholder="Title"
                    value={day.title}
                    onChange={(e) => handleTourDayChange(dayIndex, 'title', e.target.value)}
                    className="border p-1 mb-2 w-full"
                  />
                  <textarea
                    placeholder="Description"
                    value={day.desc}
                    onChange={(e) => handleTourDayChange(dayIndex, 'desc', e.target.value)}
                    rows={3}
                    className="border p-1 mb-2 w-full"
                  />
                  <div>
                    <h4 className="font-medium mb-1">Activities</h4>
                    {day.activities.map((act, actIndex) => (
                      <div key={actIndex} className="flex gap-2 mb-1 items-center">
                        <input
                          value={act}
                          onChange={(e) => handleActivityChange(dayIndex, actIndex, e.target.value)}
                          className="border p-1 flex-grow"
                        />
                        <button type="button" onClick={() => removeActivity(dayIndex, actIndex)} className="text-red-600">
                          Remove
                        </button>
                      </div>
                    ))}
                    <button type="button" onClick={() => addActivity(dayIndex)} className="text-blue-600">
                      + Add Activity
                    </button>
                  </div>
                  <button type="button" onClick={() => removeTourDay(dayIndex)} className="mt-2 text-red-700">
                    Remove Day
                  </button>
                </div>
              ))}
              <button type="button" onClick={addTourDay} className="text-blue-700 mb-4">
                + Add Tour Day
              </button>
            </>
          )}
        </div>

        {/* Toggle: Included Items */}
        <div className="mb-4">
          <div className="flex items-center justify-between cursor-pointer bg-gray-100 p-2 rounded text-blue-600 font-semibold mb-4" onClick={() => setShowIncludedItems(!showIncludedItems)}>
            {showIncludedItems ? '▼' : '►'} Included Items
          </div>
          {showIncludedItems && (
            <div>
              {form.includedItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleIncludedItemChange(index, e.target.value)}
                    className="border p-1 flex-grow"
                  />
                  <button type="button" onClick={() => removeIncludedItem(index)} className="text-red-600">
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={addIncludedItem} className="text-blue-700">
                + Add Included Item
              </button>
            </div>
          )}
        </div>

        {/* Toggle: Details */}
        <div className="mb-4">
          <div className="flex items-center justify-between cursor-pointer bg-gray-100 p-2 rounded text-blue-600 font-semibold mb-4" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? '▼' : '►'} Details (Extra Info)
          </div>
          {showDetails && (
            <>
              {form.details.map((detail, index) => (
                <div key={index} className="border p-3 mb-3 rounded">
                  <input
                    placeholder="Title"
                    value={detail.title}
                    onChange={(e) => handleDetailChange(index, 'title', e.target.value)}
                    className="border p-1 mb-2 w-full"
                  />
                  <textarea
                    placeholder="Description"
                    value={detail.desc}
                    onChange={(e) => handleDetailChange(index, 'desc', e.target.value)}
                    rows={2}
                    className="border p-1 mb-2 w-full"
                  />
                  <button type="button" onClick={() => removeDetail(index)} className="text-red-700">
                    Remove Detail
                  </button>
                </div>
              ))}
              <button type="button" onClick={addDetail} className="text-blue-700 mb-4">
                + Add Detail
              </button>
            </>
          )}
        </div>

        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId ? 'Update Package' : 'Create Package'}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={() => {
              setForm(emptyPackage);
              setEditingId(null);
              setError('');
            }}
            className="ml-4 px-4 py-2 border rounded"
          >
            Cancel
          </button>
        )}

        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>

     <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Existing Packages</h3>
        {loading && <p>Loading packages...</p>}
        {!loading && packages.length === 0 && <p>No packages found.</p>}
        <ul>
          {packages.map((pkg) => (
            <li key={pkg._id} className="border p-3 rounded mb-3 flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">{pkg.title} - ${pkg.price}</h4>
                <p>{pkg.location} | {pkg.priceUnit}</p>
                <p className="text-sm">{pkg.description}</p>
                {pkg.tourDays?.length > 0 && <p className="mt-1 text-xs text-gray-600">Days: {pkg.tourDays.length}</p>}
              </div>
              <div className="space-x-2">
                <button onClick={() => handleEdit(pkg)} className="text-blue-600">Edit</button>
                <button onClick={() => handleDelete(pkg._id)} className="text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PackageManager;
