import React from "react";

function Card({username,btnText="visite me" }){
    console.log(username);
    
    return(
        <>
        {/* Card with background image */}
      <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      {/* Background image container */}
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: "url('https://rukminim2.flixcart.com/image/850/1000/xif0q/examination-pad/r/x/1/cute-cartoon-girl-flipdecor-original-imagz3m6heh85egy.jpeg?q=90&crop=false')" }}
      ></div>
      
      {/* Content container */}
      <div className="bg-white p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{username}</div>
        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet</p>
        <p className="mt-1 text-gray-500">consectetur adipisicing elit.</p>
        <p className="mt-1 text-gray-500">Excepturi, debitis?</p>
        <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
         {btnText }
        </button>
      </div>
    </div>
    </>
    )
}

export default Card