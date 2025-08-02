import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const blobRef = useRef(null);
  const progressRef = useRef(null);
  const countRef = useRef(null);
  const [particles] = useState(() => Array(20).fill(0));

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "expo.out" }
    });

    // Particle animation
    gsap.utils.toArray(".particle").forEach((particle, i) => {
      gsap.fromTo(particle,
        { opacity: 0, scale: 0 },
        {
          opacity: 0.4,
          scale: 1,
          duration: 1,
          delay: i * 0.05,
          ease: "back.out(1.7)"
        }
      );
      
      gsap.to(particle, {
        x: gsap.utils.random(-50, 50),
        y: gsap.utils.random(-50, 50),
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        yoyo: true,
        delay: i * 0.1,
        ease: "sine.inOut"
      });
    });

    // Text reveal with character animation
    tl.fromTo(textRef.current.querySelectorAll("span span"), 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "back.out(1.7)"
      }
    );

    // Enhanced blob animation
    tl.fromTo(blobRef.current,
      { scale: 0.8, opacity: 0, filter: "blur(20px)" },
      {
        scale: 1,
        opacity: 0.9,
        filter: "blur(40px)",
        duration: 2,
        ease: "elastic.out(1, 0.5)"
      },
      "-=0.5"
    );

    // Morphing blob effect
    gsap.to(blobRef.current, {
      keyframes: [
        { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", duration: 8 },
        { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%", duration: 8 }
      ],
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Pulse effect with color shift
    gsap.to(blobRef.current, {
      keyframes: [
        { 
          background: "radial-gradient(circle, #FF66C4 0%, #00C2FF 50%, #8EFFC1 100%)",
          duration: 4
        },
        { 
          background: "radial-gradient(circle, #00C2FF 0%, #8EFFC1 50%, #FF66C4 100%)",
          duration: 4
        }
      ],
      repeat: -1,
      yoyo: true
    });

    // Progress animation with enhanced effects
    tl.to(progressRef.current, {
      width: "100%",
      duration: 6,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) {
          const progress = Math.floor(gsap.getProperty(progressRef.current, "width"));
          countRef.current.textContent = `${progress}%`;
          
          // Add micro-interactions at milestones
          if ([25, 50, 75].includes(progress)) {
            gsap.to(countRef.current, {
              scale: 1.2,
              duration: 0.3,
              yoyo: true,
              repeat: 1,
              ease: "power2.out"
            });
          }
        }
      },
      onComplete: () => {
        // Exit animation sequence
        gsap.to(".particle", {
          opacity: 0,
          scale: 0,
          duration: 0.6,
          stagger: 0.02
        });
        
        gsap.to(blobRef.current, {
          scale: 1.5,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out"
        });
        
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }
    }, 0);

    return () => {
      tl.kill();
      gsap.killTweensOf([blobRef.current, ".particle", progressRef.current]);
    };
  }, [onComplete]);

  // Split text for character animation
  const nameText = "Alok Vishwakarma".split("").map((char, i) => (
    <span key={i} style={{ display: "inline-block" }}>{char}</span>
  ));

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm overflow-hidden"
    >
      {/* Floating particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="particle absolute rounded-full"
          style={{
            width: `${5 + Math.random() * 10}px`,
            height: `${5 + Math.random() * 10}px`,
            backgroundColor: ['#FF66C4', '#00C2FF', '#8EFFC1'][Math.floor(Math.random() * 3)],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
      
      {/* Animated blob/orb */}
      <div 
        ref={blobRef}
        className="absolute w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-90"
        style={{
          background: 'radial-gradient(circle, #FF66C4 0%, #00C2FF 50%, #8EFFC1 100%)'
        }}
      />
      
      {/* Text reveal */}
      <motion.div 
        ref={textRef}
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF66C4] to-[#00C2FF]"
            style={{ fontFamily: "'flawless', sans-serif" }}
          >
            {nameText}
          </span>
        </h1>
        <motion.p 
          className="text-lg text-gray-600 font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Crafting digital excellence
        </motion.p>
        <motion.div 
          ref={countRef} 
          className="text-2xl font-bold text-[#FF66C4] mb-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          0%
        </motion.div>
      </motion.div>

      {/* Progress bar with shine effect */}
      <div className="w-64 md:w-80 h-2 bg-gray-200 rounded-full overflow-hidden relative z-10">
        <div 
          ref={progressRef}
          className="h-full rounded-full relative overflow-hidden"
          style={{ 
            width: "0%",
            background: "linear-gradient(90deg, #FF66C4, #00C2FF, #8EFFC1)"
          }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse" 
            style={{ 
              mask: "linear-gradient(90deg, transparent, white, transparent)",
              animation: "shine 2s infinite"
            }} 
          />
        </div>
      </div>

      {/* Enhanced gradient bars */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
        {['#FF66C4', '#00C2FF', '#FDB0FF', '#8EFFC1'].map((color, i) => (
          <motion.div
            key={i}
            className="h-full flex-1"
            initial={{ scaleY: 0, transformOrigin: 'bottom' }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{ 
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skew(-15deg); }
          100% { transform: translateX(100%) skew(-15deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;