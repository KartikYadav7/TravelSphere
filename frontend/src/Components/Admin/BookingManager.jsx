import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';

const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel, confirmText = 'Confirm', cancelText = 'Cancel', confirmClass = 'bg-blue-600 text-white', cancelClass = 'border' }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="mb-4">{message}</p>
        <div className="flex justify-around">
          <button
            onClick={onConfirm}
            className={`${confirmClass} px-4 py-1 rounded hover:brightness-110`}
          >
            {confirmText}
          </button>
          <button
            onClick={onCancel}
            className={`${cancelClass} px-4 py-1 rounded hover:bg-gray-100`}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingManager = () => {
  const [bookings, setBookings] = useState([]);
  const [editedStatus, setEditedStatus] = useState({});
  const [deleteId, setDeleteId] = useState(null);
  const [confirmUpdateId, setConfirmUpdateId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const fetchBookings = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/bookings`, {
        headers: { Authorization: user?.token },
      });
      setBookings(res.data);
    } catch (err) {
      setError('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.token) fetchBookings();
  }, [user]);

  const handleEditChange = (id, key, value) => {
    setEditedStatus((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [key]: value,
      },
    }));
  };

  const handleStatusUpdate = async (id) => {
    const status = editedStatus[id];
    if (!status) return;
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/admin/bookings/${id}/status`,
        {
          bookingStatus: status.bookingStatus,
          paymentStatus: status.paymentStatus,
        },
        { headers: { Authorization: user?.token } }
      );
      setEditedStatus((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
      fetchBookings();
    } catch {
      alert('Failed to update status');
    }
  };

  const handleDeleteBooking = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/admin/bookings/${deleteId}`, {
        headers: { Authorization: user?.token },
      });
      setDeleteId(null);
      fetchBookings();
    } catch {
      alert('Failed to delete booking');
    }
  };

  return (
    <div className="border p-4 rounded shadow mt-10">
      <h2 className="text-xl font-semibold mb-4">Manage Bookings</h2>
      {loading && <p>Loading bookings...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="overflow-x-auto">
        <table className="w-full table-auto border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">User</th>
              <th className="p-2 border">Package</th>
              <th className="p-2 border">Travel Date</th>
              <th className="p-2 border">People</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Booking Status</th>
              <th className="p-2 border">Payment Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 && !loading && (
              <tr>
                <td colSpan={8} className="text-center p-4">No bookings found.</td>
              </tr>
            )}

            {bookings.map((booking) => {
              const edit = editedStatus[booking._id] || {};
              const contact = booking.contactInfo || {};
              return (
                <tr key={booking._id} className="border-t">
                  <td className="p-2 border">
                    <div>{contact.name || 'N/A'}</div>
                    <div className="text-xs text-gray-600">{contact.email || 'No Email'}</div>
                    <div className="text-xs text-gray-600">{contact.phone || 'No Phone'}</div>
                  </td>
                  <td className="p-2 border">{booking.tourPackage?.title || 'N/A'}</td>
                  <td className="p-2 border">{new Date(booking.travelDate).toLocaleDateString()}</td>
                  <td className="p-2 border">{booking.numberOfPeople}</td>
                  <td className="p-2 border">
                    ${booking.payment?.amount ?? '0'}
                    <div className="text-xs text-gray-600">ID: {booking?.stripeSessionId || 'N/A'}</div>
                  </td>
                  <td className="p-2 border">
                    <select
                      value={edit.bookingStatus || booking.bookingStatus}
                      onChange={(e) => handleEditChange(booking._id, 'bookingStatus', e.target.value)}
                      className="border rounded p-1 w-full"
                    >
                      <option value="pending">Pending</option>
                      <option value="booked">Booked</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="error">Error</option>
                      <option value="inProgress">In Progress</option>
                    </select>
                  </td>
                  <td className="p-2 border">
                    <select
                      value={edit.paymentStatus || booking.payment?.status || 'pending'}
                      onChange={(e) => handleEditChange(booking._id, 'paymentStatus', e.target.value)}
                      className="border rounded p-1 w-full"
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                      <option value="failed">Failed</option>
                      <option value="refunded">Refunded</option>
                      <option value="partially_refunded">Partially Refunded</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="error">Error</option>
                    </select>
                  </td>
                  <td className="p-2 border space-y-1">
                    <button
                      onClick={() => setConfirmUpdateId(booking._id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setDeleteId(booking._id)}
                      className="text-red-600 text-xs underline hover:text-red-800 block"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ConfirmationModal
        isOpen={deleteId !== null}
        title="Confirm Deletion"
        message="Are you sure you want to delete this booking?"
        onConfirm={handleDeleteBooking}
        onCancel={() => setDeleteId(null)}
        confirmText="Delete"
        confirmClass="bg-red-600 text-white"
      />

      <ConfirmationModal
        isOpen={confirmUpdateId !== null}
        title="Confirm Status Update"
        message="Are you sure you want to update this booking's status?"
        onConfirm={() => {
          handleStatusUpdate(confirmUpdateId);
          setConfirmUpdateId(null);
        }}
        onCancel={() => setConfirmUpdateId(null)}
        confirmText="Update"
        confirmClass="bg-blue-600 text-white"
      />
    </div>
  );
};

export default BookingManager;
export { ConfirmationModal};