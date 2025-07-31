import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const buttonRef = useRef();
  const scrollTriggerInstance = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth scroll to top on route change with a small delay to allow page rendering
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);

    // Immediately hide the button on route change
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { xPercent: 200, opacity: 0, scale: 0 });
      setIsVisible(false);
    }

    // Refresh ScrollTrigger globally so other components re-calc correctly
    ScrollTrigger.refresh();

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // Create a ScrollTrigger for the button's show/hide on scroll
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    // Clean up old ScrollTrigger instance for this button
    if (scrollTriggerInstance.current) {
      scrollTriggerInstance.current.kill();
      scrollTriggerInstance.current = null;
    }

    scrollTriggerInstance.current = ScrollTrigger.create({
      trigger: document.body,
      start: () => `${window.innerHeight * 0.1} top`, // Show after 10% scroll down
      end: 'bottom bottom',
      onEnter: () => {
        gsap.to(btn, { xPercent: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' });
        setIsVisible(true);
      },
      onLeaveBack: () => {
        gsap.to(btn, { xPercent: 200, opacity: 0, scale: 0, duration: 0.5, ease: 'power2.in' });
        setIsVisible(false);
      },
      toggleActions: 'play none none reverse',
      // markers: true, // Uncomment for debugging
    });

    // Refresh to ensure ScrollTrigger calculation is correct
    ScrollTrigger.refresh();

    return () => {
      if (scrollTriggerInstance.current) {
        scrollTriggerInstance.current.kill();
        scrollTriggerInstance.current = null;
      }
    };
  }, [pathname]);

  return (
    <div
      ref={buttonRef}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-hidden={!isVisible}
      role="button"
      tabIndex={isVisible ? 0 : -1}
      className="fixed bottom-5 right-5 h-15 w-15 rounded-full bg-[#0f1929] shadow-xl shadow-black/20 z-50 cursor-none cursor-hover flex justify-center items-center hover:bg-[#13233d] duration-200"
      style={{
        pointerEvents: isVisible ? 'auto' : 'none',
        transformOrigin: 'center center',
      }}
      title="Scroll to top"
    >
      <i className="ri-arrow-up-s-line text-3xl text-gray-500"></i>
    </div>
  );
};

export default ScrollToTop;
