// components/Preloader.js
import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation/index";


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Development,</span>
        <span>Designing,</span>
        <span>Branding.</span>
      </div>
    </div>
  );
};

export default PreLoader;
