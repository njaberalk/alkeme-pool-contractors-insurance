'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand" style={{ height: '100vh', minHeight: '600px', maxHeight: '900px' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
          alt="Commercial truck on highway"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.5, objectPosition: '50% 30%' }}
        />
        <div className="absolute inset-0 bg-brand" style={{ opacity: 0.45 }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
          <h1
            className="font-extrabold tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              lineHeight: '1.05',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            <span className="text-stone">Coverage Built for</span>
            <br />
            <span className="text-gold">the Road Ahead.</span>
          </h1>

          <p
            className="text-cream font-light mx-auto mb-10"
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              maxWidth: '550px',
              textShadow: '0 1px 8px rgba(0,0,0,0.2)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
            }}
          >
            Specialized trucking insurance for owner-operators, fleets, and transportation businesses — from the operation you&apos;ve built to the growth ahead.
          </p>

          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
            }}
          >
            <a
              href="https://alkemeins.com/form"
              className="inline-flex items-center justify-center border-2 border-brand bg-brand text-stone text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-gold hover:bg-gold hover:text-brand no-underline"
              style={{ padding: '0.8rem 2.5rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}
            >
              Get Your Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
