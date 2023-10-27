import React, { useState, useEffect } from "react";

const Cards = ({ car }) => {



  return (
    <div className="w-10/12 md:w-auto">
      <div
        className={`${ 
          car.id === 1
            ? "bg-brightOrange p-12 rounded-tl-md rounded-tr-md rounded-bl-none md:rounded-tr-none md:rounded-bl-xl "
            : car.id === 2
            ? "bg-darkCyan p-12 "
            : "bg-veryDarkCyan p-12  rounded-bl-md rounded-br-md md:rounded-bl-none md:rounded-tr-xl"
        }`}
      >
        <div className="w-full ">
          <img src={car.icon} className="w-20" />
        </div>
        <div className="my-6 w-52">
          <h1 className=" text-transparentWhite font-headerFont py-6 text-5xl">
            {car.title}
          </h1>
          <p className=" text-transparentWhite font-sans py-2">{car.body}</p>
        </div>
        <button
          className={`${
            car.id === 1
              ? "text-brightOrange border-2 border-white bg-white rounded-3xl px-4 py-2 hover:bg-brightOrange hover:border-2 hover:border-white hover:text-white"
              : 
            car.id === 2 
              ? "text-darkCyan border-2 border-white bg-white rounded-3xl px-4 py-2 hover:bg-darkCyan hover:border-2 hover:border-white hover:text-white"
              :
              "text-veryDarkCyan border-2 border-white bg-white rounded-3xl px-4 py-2 hover:bg-veryDarkCyan hover:border-2 hover:border-white hover:text-white"
          }`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};
export default Cards;
