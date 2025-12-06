import React from "react";

export default function OrderCard({ order }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Order #{order.orderId}
          </h3>
          <p className="text-gray-600">Date: {order.date}</p>
          <p className="text-gray-600">
            Status:{" "}
            <span className="text-teal-600 font-semibold">{order.status}</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-teal-600">${order.total}</p>
        </div>
      </div>
      <div className="border-t pt-4">
        <h4 className="font-semibold mb-2">Items:</h4>
        <div className="space-y-2">
          {order.items.map((item) => (
            <div
              key={item.orderItemId || item.productId}
              className="flex justify-between text-gray-700"
            >
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t pt-4 mt-4">
        <h4 className="font-semibold mb-2">Shipping Address:</h4>
        <p className="text-gray-700">
          {order.address.street}, {order.address.city}, {order.address.state} -{" "}
          {order.address.pincode}
        </p>
      </div>
    </div>
  );
}
