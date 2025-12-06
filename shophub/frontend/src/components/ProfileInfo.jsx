import React from "react";

export default function ProfileInfo({ user, totalOrders, totalSpent }) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">
          Account Information
        </h4>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-medium">User ID:</span> {user?.userId}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Username:</span> {user?.username}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span> {user?.email}
          </p>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Order Statistics</h4>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-medium">Total Orders:</span> {totalOrders}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Total Spent:</span>{" "}
            ${totalSpent.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
