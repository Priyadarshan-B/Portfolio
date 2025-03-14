import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/src/vanta.topology";
import p5 from "p5";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const vantaEffect = TOPOLOGY({
      el: vantaRef.current,
      p5, 
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.4,
      scaleMobile: 0.5,
      color:  0x9e9bd9,
      backgroundColor: 0xe2efef,
    });

    vantaRef.current.vantaEffect = vantaEffect;

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default VantaBackground;
