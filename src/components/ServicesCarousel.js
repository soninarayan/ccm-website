// src/components/ServicesCarousel.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/ServicesCarousel.css';

const SERVICES = [
  {
    title: 'Remote Patient Monitoring',
    img: '/images/rpm.jpg',
    desc: 'Access RPM services which are designed to track, monitor, and help provide treatment for your patients, enhancing care in the comfort of their homes.',
    link: '#rpm'
  },
  {
    title: 'Chronic Care Management',
    img: '/images/ccm.jpg',
    desc: 'Our CCM program enhances your practice with EHR-integrated technology and dedicated professionals, providing exceptional patient care.',
    link: '#ccm'
  },
  {
    title: 'Behavioral Health',
    img: '/images/behavioral.jpg',
    desc: 'Tailored care, support, and therapeutic solutions to assist patients in managing mental health challenges, alleviating stress, and reaching their wellness goals.',
    link: '#bh'
  },
  {
    title: 'Case Management',
    img: '/images/case.jpg',
    desc: 'Medical Case Management services coordinate and optimize patient care, collaborating with patients, families, and providers to create personalized plans.',
    link: '#case'
  }
];

const AUTO_PLAY_INTERVAL = 3000;
const SCROLL_COOLDOWN = 800; // Increased cooldown time
const SCROLL_THRESHOLD = 50; // Minimum scroll amount to trigger slide change

export default function ServicesCarousel() {
  const [idx, setIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const cooldown = useRef(false);
  const autoPlayRef = useRef(null);
  const carouselRef = useRef(null);
  const lastScrollTime = useRef(0);
  const accumulatedDelta = useRef(0);

  // Reset auto-play timer whenever idx changes
  useEffect(() => {
    if (isPlaying) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(next, AUTO_PLAY_INTERVAL);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [idx, isPlaying, next]);

  const prev = useCallback(() => {
    setIdx(i => (i - 1 + SERVICES.length) % SERVICES.length);
    // Don't stop auto-play on manual navigation
  }, []);

  const next = useCallback(() => {
    setIdx(i => (i + 1) % SERVICES.length);
    // Don't stop auto-play on manual navigation
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        next();
      }
    };
    
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('keydown', handleKeyDown);
      return () => carousel.removeEventListener('keydown', handleKeyDown);
    }
  }, [prev, next]);

  // Handle mouse wheel with improved scroll handling
  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      
      const now = Date.now();
      
      // Reset accumulated delta if enough time has passed
      if (now - lastScrollTime.current > SCROLL_COOLDOWN) {
        accumulatedDelta.current = 0;
      }
      
      // Update last scroll time
      lastScrollTime.current = now;
      
      // Add to accumulated delta
      accumulatedDelta.current += e.deltaY;
      
      // If cooldown is active, ignore the scroll
      if (cooldown.current) return;
      
      // Check if accumulated scroll passes threshold
      if (Math.abs(accumulatedDelta.current) >= SCROLL_THRESHOLD) {
        cooldown.current = true;
        
        // Determine direction and trigger slide change
        if (accumulatedDelta.current > 0) {
          next();
        } else {
          prev();
        }
        
        // Reset accumulated delta
        accumulatedDelta.current = 0;
        
        // Set cooldown timer
        setTimeout(() => {
          cooldown.current = false;
        }, SCROLL_COOLDOWN);
      }
    };
    
    const wrap = carouselRef.current;
    if (wrap) {
      wrap.addEventListener('wheel', onWheel, { passive: false });
      return () => wrap.removeEventListener('wheel', onWheel);
    }
  }, [prev, next]);

  // Handle touch events
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.touches[0].clientY;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > SCROLL_THRESHOLD) {
      diff > 0 ? next() : prev();
      setTouchStart(null);
    }
  };

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = SERVICES.map(service => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = service.img;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      
      try {
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };
    
    preloadImages();
  }, []);

  const prevIdx = (idx - 1 + SERVICES.length) % SERVICES.length;
  const nextIdx = (idx + 1) % SERVICES.length;

  return (
    <section className="services-carousel" aria-label="Our Services">
      <div className="services-carousel-pattern"></div>
      <h2 className="svc-title">Our Services</h2>
      <p className="svc-sub">
        Our programs are led by a licensed team of clinicians, ensuring professional delivery and support.
      </p>

      <div className="svc-body">
        <div 
          ref={carouselRef}
          className={`svc-carousel__slides ${isLoading ? 'loading' : ''}`}
          role="region"
          aria-roledescription="carousel"
          aria-label="Services showcase"
          tabIndex="0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onFocus={() => setIsPlaying(false)}
          onBlur={() => setIsPlaying(true)}
        >
          <div className="svc-slide prev" aria-hidden="true">
            <img src={SERVICES[prevIdx].img} alt="" />
          </div>
          <div 
            className="svc-slide active"
            role="group"
            aria-roledescription="slide"
            aria-label={SERVICES[idx].title}
          >
            <img 
              src={SERVICES[idx].img} 
              alt={`Illustration for ${SERVICES[idx].title}`} 
            />
          </div>
          <div className="svc-slide next" aria-hidden="true">
            <img src={SERVICES[nextIdx].img} alt="" />
          </div>
        </div>

        <button 
          className="svc-arrow up" 
          onClick={prev}
          aria-label="Previous service"
        >
          <span aria-hidden="true">▲</span>
        </button>
        <button 
          className="svc-arrow down" 
          onClick={next}
          aria-label="Next service"
        >
          <span aria-hidden="true">▼</span>
        </button>

        <div className="svc-info" aria-live="polite">
          <h3>{SERVICES[idx].title}</h3>
          <p>{SERVICES[idx].desc}</p>
          <a href={SERVICES[idx].link}>Learn More</a>
        </div>

        <div className="svc-indicators" role="tablist" aria-label="Select a service">
          {SERVICES.map((service, i) => (
            <button
              key={i}
              className={`svc-indicator ${i === idx ? 'active' : ''}`}
              role="tab"
              aria-selected={i === idx}
              aria-label={`View ${service.title}`}
              onClick={() => {
                setIdx(i);
                setIsPlaying(false);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}