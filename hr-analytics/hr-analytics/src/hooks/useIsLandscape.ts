'use client'

import { useState, useEffect, useLayoutEffect } from 'react';

const useIsLandscapeMode = () => {
  'use client'
  const [isLandscape, setIsLandscape] = useState(typeof window !== 'undefined' ? window?.innerWidth > 8000 : false);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window?.innerWidth > 5500);
    };

    window?.addEventListener('resize', handleOrientationChange);

    handleOrientationChange(); // Set initial orientation on mount

    return () => window?.removeEventListener('resize', handleOrientationChange);
  }, []);

  return isLandscape;
};

export default useIsLandscapeMode;