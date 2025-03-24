"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

interface MobileMenuProps {
  items: string[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Helper function to determine the color for menu items
  const getItemColor = (item: string) => {
    switch(item) {
      case "d.ag": return "#60A5FA";
      case "a2": return "#8B5CF6";
      case "a3": return "#EC4899";
      case "agentbus": return "#F59E0B";
      default: return "white";
    }
  };
  
  // Handle smooth scrolling with custom animation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const href = `#${item.toLowerCase()}`;
    const element = document.querySelector(href);
    
    if (element) {
      // Close menu first
      toggleMenu();
      
      // Wait a bit for the menu to close before scrolling
      setTimeout(() => {
        // Custom smooth scrolling with slower animation
        const yOffset = -90;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1200; // Slower duration
        let start: number | null = null;
        
        function step(timestamp: number) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);
          
          // Easing function for smoother motion
          const easeInOutQuad = (t: number) => {
            return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          };
          
          window.scrollTo({
            top: startPosition + distance * easeInOutQuad(percentage),
            behavior: 'auto' // Using our custom animation
          });
          
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        }
        
        window.requestAnimationFrame(step);
      }, 300); // Small delay to let menu close animation finish
    }
  };

  return (
    <div className="lg:hidden">
      <button 
        onClick={toggleMenu} 
        className="p-2 text-white focus:outline-none transition-all duration-150 hover:text-white/70"
        aria-label="Toggle menu"
      >
        <Menu className="w-7 h-7" />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <div className="text-3xl font-bold">neusym</div>
                <button 
                  onClick={toggleMenu} 
                  className="p-2 text-white focus:outline-none hover:text-white/70 transition-all duration-150"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col p-6 space-y-5">
                {items.map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    style={{ color: getItemColor(item) }}
                    className="text-2xl font-medium hover:opacity-80 py-4 border-b border-white/10 flex items-center justify-between transition-colors duration-150"
                    onClick={(e) => handleNavClick(e, item)}
                    whileHover={{ 
                      scale: 1.03, 
                      transition: { duration: 0.15 }
                    }}
                  >
                    {item}
                    <motion.span 
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 + 0.2 }}
                      className="text-lg"
                    >
                      →
                    </motion.span>
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: items.length * 0.05 + 0.2 }}
                  className="mt-10 pt-4"
                >
                  <button className="w-full border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-150 py-4 px-8 rounded-md text-lg">
                    Request Access
                  </button>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: items.length * 0.05 + 0.3 }}
                className="p-6 pt-0 flex flex-wrap gap-6"
              >
                {["Twitter", "GitHub", "Discord"].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="text-white/50 hover:text-white text-base transition-colors duration-150"
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 