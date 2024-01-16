// SortByDialog.js
import React from 'react';

const SortByDialog = ({ selectedSortOption, onSortOptionChange, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[200] bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Sort By</h2>
        <label className="inline-flex items-center cursor-pointer hover:text-blue-500">
          <input
            type="radio"
            checked={selectedSortOption === 'highToLow'}
            onChange={() => onSortOptionChange('highToLow')}
            className="form-radio h-5 w-5 text-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
          <span className="ml-2">Price High to Low</span>
        </label>
        <br />
        <label className="inline-flex items-center cursor-pointer hover:text-blue-500">
          <input
            type="radio"
            checked={selectedSortOption === 'lowToHigh'}
            onChange={() => onSortOptionChange('lowToHigh')}
            className="form-radio h-5 w-5 text-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
          <span className="ml-2">Price Low to High</span>
        </label>
        <div className="mt-6 flex justify-end">
          <button
            className="bg-gray-300 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray"
            onClick={onClose}
          >
            Close
          </button>
          {/* Add styling and hover effects as needed */}
        </div>
      </div>
    </div>
  );
};

export default SortByDialog;
