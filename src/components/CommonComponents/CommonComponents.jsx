import React, { useEffect, useRef, useState } from 'react';

export function Title({text}) {
    return (
        <p className='fw-bold fs-3 theme-color-1-text'>
            {text}
          </p>
    );
}

export const SectionWrapper = ({ id, avoidPadding = false, reducedPadding = false, children }) => {

  const sectionRef = useRef(null);
  const [extraPadding, setExtraPadding] = useState(0);
  

  useEffect(() => {

    if (avoidPadding) return;

    const checkHeight = () => {
      if (sectionRef.current) {
        const vh = window.innerHeight;
        const sectionHeight = sectionRef.current.offsetHeight;
        if (sectionHeight > 0.95 * vh) {
          const paddingUnits = 5;
          setExtraPadding(paddingUnits);
        } else {
          setExtraPadding(0);
        }
      }
    };

    checkHeight();
    window.addEventListener("resize", checkHeight);
    return () => window.removeEventListener("resize", checkHeight);
  }, []);

  return (
    <div id={id} className={`container-fluid ${(!reducedPadding) ? "min-vh-100" : ""} my-1 d-flex flex-column align-items-center justify-content-center`} ref={sectionRef} style={{ paddingTop: `${extraPadding}rem`, minHeight: reducedPadding ? '93vh' : 'auto' }}>
      {children}
    </div>
  );
};