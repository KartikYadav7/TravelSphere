import React from 'react';
const PaymentCancel = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">❌ Payment Canceled</h2>
      <p className="mb-6">It looks like your payment didn’t go through. You can try again now.</p>
    <a href="/">Back to Previous </a>
    </div>
  );
};

export default PaymentCancel;
