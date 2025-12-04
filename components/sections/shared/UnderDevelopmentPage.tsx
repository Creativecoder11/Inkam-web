// pages/under-development.tsx or app/under-development/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const UnderDevelopment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gearRefs = useRef<(HTMLDivElement | null)[]>([]);
  const particlesRef = useRef<HTMLDivElement>(null);
  const codeBlocksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Title split animation
      if (titleRef.current) {
        const chars = titleRef.current.textContent?.split('') || [];
        titleRef.current.innerHTML = chars
          .map((char) => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        gsap.from('.char', {
          opacity: 0,
          y: 50,
          rotationX: -90,
          stagger: 0.05,
          duration: 1,
          ease: 'back.out(1.7)',
          delay: 0.3,
        });
      }

      // Subtitle fade-in
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.5,
        ease: 'power3.out',
      });

      // Gears rotation + floating
      gearRefs.current.forEach((gear, index) => {
        if (gear) {
          gsap.to(gear, {
            rotation: 360,
            duration: 4 + index * 2,
            repeat: -1,
            ease: 'none',
          });

          gsap.to(gear, {
            y: '+=20',
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      });

      // Code blocks animation
      codeBlocksRef.current.forEach((block, index) => {
        if (block) {
          gsap.from(block, {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            duration: 1,
            delay: 2 + index * 0.3,
            ease: 'power2.out',
          });

          gsap.to(block.querySelector('.cursor'), {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          });
        }
      });

      // Floating particles
      if (particlesRef.current) {
        for (let i = 0; i < 20; i++) {
          const p = document.createElement('div');
          p.className = 'particle';
          p.style.left = `${Math.random() * 100}%`;
          p.style.top = `${Math.random() * 100}%`;
          p.style.width = `${Math.random() * 4 + 2}px`;
          p.style.height = p.style.width;
          particlesRef.current.appendChild(p);

          gsap.to(p, {
            y: `-=${Math.random() * 300 + 100}`,
            x: `+=${Math.random() * 100 - 50}`,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            delay: Math.random() * 2,
            ease: 'power1.out',
          });
        }
      }

      // Progress bar animation
      gsap.to('.progress-bar', {
        width: '100%',
        duration: 3,
        repeat: -1,
        ease: 'power1.inOut',
        yoyo: true,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center"
    >
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

      {/* Grid backdrop */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      {/* Gear 1 */}
      <div className="absolute top-10 left-10 opacity-20">
        <div ref={(el) => { gearRefs.current[0] = el; }} className="gear">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path d="M60 10L65 30L75 25L70 45L85 45L80 60L95 65L85 75L90 90L75 85L70 100L60 95L50 100L45 85L30 90L35 75L20 65L30 60L25 45L40 45L35 25L45 30L50 10L60 10Z" fill="currentColor" className="text-purple-500" />
            <circle cx="60" cy="60" r="20" fill="currentColor" className="text-slate-900" />
          </svg>
        </div>
      </div>

      {/* Gear 2 */}
      <div className="absolute bottom-20 right-20 opacity-20">
        <div ref={(el) => { gearRefs.current[1] = el; }} className="gear">
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none">
            <path d="M60 10L65 30L75 25L70 45L85 45L80 60L95 65L85 75L90 90L75 85L70 100L60 95L50 100L45 85L30 90L35 75L20 65L30 60L25 45L40 45L35 25L45 30L50 10L60 10Z" fill="currentColor" className="text-blue-500" />
            <circle cx="60" cy="60" r="20" fill="currentColor" className="text-slate-900" />
          </svg>
        </div>
      </div>

      {/* Gear 3 */}
      <div className="absolute top-1/3 right-1/4 opacity-20">
        <div ref={(el) => { gearRefs.current[2] = el; }} className="gear">
          <svg width="60" height="60" viewBox="0 0 120 120" fill="none">
            <path d="M60 10L65 30L75 25L70 45L85 45L80 60L95 65L85 75L90 90L75 85L70 100L60 95L50 100L45 85L30 90L35 75L20 65L30 60L25 45L40 45L35 25L45 30L50 10L60 10Z" fill="currentColor" className="text-pink-500" />
            <circle cx="60" cy="60" r="20" fill="currentColor" className="text-slate-900" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Under Development
        </h1>

        <p ref={subtitleRef} className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          We're crafting something amazing. Our team is working hard to bring you an incredible experience.
        </p>

        {/* Code Blocks */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <div ref={(el) => { codeBlocksRef.current[0] = el; }} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 font-mono text-sm">
            <div className="text-green-400">$ npm run dev<span className="cursor">_</span></div>
          </div>

          <div ref={(el) => { codeBlocksRef.current[1] = el; }} className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 font-mono text-sm">
            <div className="text-blue-400">&gt; Building...<span className="cursor">_</span></div>
          </div>

          <div ref={(el) => { codeBlocksRef.current[2] = el; }} className="bg-slate-800/50 backdrop-blur-sm border border-pink-500/30 rounded-lg p-4 font-mono text-sm">
            <div className="text-pink-400">✓ Compiled<span className="cursor">_</span></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div className="progress-bar h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
          </div>
        </div>

        <div className="text-gray-400 text-sm">
          <p>Expected launch: Coming Soon</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default UnderDevelopment;
