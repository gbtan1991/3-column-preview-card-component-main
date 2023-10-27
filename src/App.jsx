import React from 'react'
import Cards from './Cards.jsx'

export default function App() {

  
const carData = [
  {
      "id": 1,
      "icon" : "./icon-sedans.svg",
      "title" : "SEDANS",
      "body" : "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      "styling" : "bg-brightOrange p-12 rounded-tl-md rounded-tr-md rounded-bl-none md:rounded-tr-none md:rounded-bl-md"
      
      
  },

  {
      "id": 2,
      "icon" : "./icon-suvs.svg",
      "title" : "SUVS",
      "body" : "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      "accent" : 'hsl(184, 100%, 22%)',
      "styling" : "bg-darkCyan p-12"
      
  },

  {
      "id": 3,
      "icon" : "./icon-luxury.svg",
      "title" : "LUXURY",
      "body" : "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      "accent" : 'hsl(179, 100%, 13%)',
      "styling" : "bg-veryDarkCyan p-12  rounded-bl-md rounded-br-md md:rounded-bl-none md:rounded-tr-md"
      

  }
 

  
]




  return (
    <div className="h-screen">
    <div className='flex flex-col py-20 justify-center  items-center md:flex-row'>
      {carData.map((car) => (
        <Cards key={car.id} car={car}/>
      ))}
      
    </div>
    </div>
  )
}
