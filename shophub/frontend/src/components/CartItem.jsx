import React from "react";
import { Package } from "lucide-react";

export default function CartItem({ item, onDecrease, onIncrease, onRemove }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
      <div className="w-20 h-20 bg-teal-100 rounded flex items-center justify-center">
        <Package className="w-10 h-10 text-teal-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onDecrease}
          className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="w-12 text-center">{item.quantity}</span>
        <button
          onClick={onIncrease}
          className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
      <button onClick={onRemove} className="text-red-600 hover:text-red-800">
        Remove
      </button>
    </div>
  );
}
