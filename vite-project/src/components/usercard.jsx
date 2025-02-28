import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150"; // Placeholder image
  const name = "ronnie";
  const email = "ronnie@gmail.com";
  const phone = "6548904570";
  const address = "123 Main Street, Springfield, USA";

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-5 flex flex-col items-center border border-gray-200">
      <img
        className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
        src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2014/01/13flex_ronnie-coleman_most-muscular_inset.jpg?quality=40&strip=all"
        alt="Profile"
      />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 text-sm">{email}</p>
      <p className="text-gray-600 text-sm">{phone}</p>
      <p className="text-gray-600 text-sm text-center mt-2">{address}</p>
    </div>
  );
};

export default Usercard;