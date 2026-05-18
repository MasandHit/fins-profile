import { useEffect, useRef, useState } from 'react';

export default function useScrollSnap(totalSections, sectionHeight = null) {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  // Use the provided sectionHeight, or fall back to window.innerHeight
  const getHeight = () => sectionHeight || window.innerHeight;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const h = getHeight();
      const index = Math.round(scrollTop / h);
      setCurrentSection(Math.min(index, totalSections - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [totalSections, sectionHeight]);

  const goToSection = (index) => {
    const container = containerRef.current;
    if (!container) return;
    isScrolling.current = true;
    container.scrollTo({
      top: index * getHeight(),
      behavior: 'smooth',
    });
    setTimeout(() => { isScrolling.current = false; }, 1000);
  };

  return { containerRef, currentSection, goToSection };
}