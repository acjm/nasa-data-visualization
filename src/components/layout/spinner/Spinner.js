import React from "react";

const Spinner = ({ message }) => {
  return (
    <div className="loader-container">
      <div className="w-12 h-12 border-2 border-indigo-600 rounded-full loader"></div>
      <h2 className="text-indigo-600">Loading {message}</h2>
    </div>
  );
};

export default Spinner;
