import React from "react";

const TopBar = () => (
  <div className="bg-gray-800 text-white text-sm py-2">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <i className="fas fa-map-marker-alt"></i>
        <span>26 Seddon St, Ivanhoe VIC 3079</span>
      </div>
      <div className="flex items-center space-x-2">
        <i className="fas fa-phone-alt"></i>
        <span>03 9497 5429</span>
      </div>
    </div>
  </div>
);

export default TopBar;
