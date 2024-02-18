import React from 'react'

const BtnPrimary = ({ children = "", className = ""}) => {
  return (
    <button 
      className={`btn btn-info bg-[#40A2E3] text-white font-pop font-semibold hover:outline hover:outline-2 hover:outline-offset-2 ${className}`}
    >
      {children}
    </button>
  );
};


export default BtnPrimary
