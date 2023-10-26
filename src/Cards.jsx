import React, { useState, useEffect } from "react";

const Cards = ({ car }) => {
  return (
    <div>
      <div
        className={`${
          car.id === 1
            ? "bg-brightOrange rounded-tl-xl rounded-tr-xl rounded-bl-none md:rounded-tr-none md:rounded-bl-xl "
            : car.id === 2
            ? "bg-darkCyan"
            : "bg-veryDarkCyan rounded-bl-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl"
        }`}
      >
        <div className="w-full ">
        <img src={car.icon} className="w-20" />
        </div>
        <div className="my-6 w-52">
          <h1 className="font-headerFont py-6 text-5xl">{car.title}</h1>
          <p className="font-sans py-2">{car.body}</p>
        </div>
        <button className="rounded-full py-4 px-7">Learn More</button>
      </div>
    </div>
  );
};
export default Cards;
