"use client";

import React, { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    const getscreenSize = () => {
      return window.innerWidth;
    };

    const handleResize = () => {
      setScreenSize(getscreenSize());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenSize;
};

export default useScreenSize;
