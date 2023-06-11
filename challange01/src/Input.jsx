import React from "react";

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form className="w-96" onSubmit={(e) => e.preventDefault()}>
      <label className="hidden">Add color Name:</label>
      <input className="mt-2 p-1 w-full text-xl shadow-md rounded-md outline-none bg-gray-800 text-white h-12"
        type="text"
        autoFocus
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
