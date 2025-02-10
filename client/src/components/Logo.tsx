import React from "react";

const MovAPIeLogo = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative flex items-center">
        {/* Movie Ticket Style Frame */}
        <div className="relative flex items-center border-4 border-orange-600 rounded-lg p-4 shadow-lg bg-stone-950">
          {/* MOV Text */}
          <span className="text-yellow-100 text-5xl font-bold tracking-wide">Mov</span>
          
          {/* {API} Styled in Digital Theme */}
          <span className="text-red-600 text-5xl font-mono font-bold mx-2">{ "{API}" }</span>
          
          {/* e Styled to Resemble Film Strip */}
          <div className="flex items-center">
            <span className="text-yellow-100 text-5xl font-bold">e</span>
            <div className="w-8 h-5 border-2 border-red-600 bg-orange-900 flex justify-between px-1 ml-1">
              <div className="w-1 h-4 bg-yellow-100"></div>
              <div className="w-1 h-4 bg-yellow-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovAPIeLogo;
