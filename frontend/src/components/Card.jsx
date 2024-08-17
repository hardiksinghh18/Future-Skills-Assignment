import React from 'react';

function Card({ title, description,link }) {
  return (
    <div className="border border-gray-300 rounded-xl p-4 mx-8  bg-[#f2f2f2] shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out hover:cursor-pointer">
       <a href={link} target="_blank" > 
      <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b-2 py-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      </a>
    </div>
  );
}

export default Card;
