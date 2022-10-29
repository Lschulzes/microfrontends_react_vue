import { mount } from "marketing/MarketingIndex";
import React, { useEffect, useRef } from "react";

const MarketingApp = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
