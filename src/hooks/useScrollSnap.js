import { useEffect, useRef, useState } from 'react';

export default function useScrollSnap(totalSections) {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;
      const index = Math.round(scrollTop / sectionHeight);
      setCurrentSection(Math.min(index, totalSections - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [totalSections]);

  const goToSection = (index) => {
    const container = containerRef.current;
    if (!container) return;

    // Always allow nav button clicks — override any ongoing scroll
    isScrolling.current = true;
    container.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth',
    });
    setTimeout(() => { isScrolling.current = false; }, 1000);
  };

  return { containerRef, currentSection, goToSection };
}