"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import RequestAccessModal from "./RequestAccessModal";
import { createPortal } from "react-dom";

interface NavItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  items: NavItem[];
  onRequestAccessClick?: () => void;
  closeModal?: () => void;
  isModalOpen?: boolean;
}

export default function MobileMenu({ 
  items, 
  onRequestAccessClick,
  closeModal,
  isModalOpen = false
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localModalOpen, setLocalModalOpen] = useState(false);

  // Use either the prop or local state
  const effectiveModalOpen = isModalOpen || localModalOpen;
  
  // Close modal when menu is opened
  useEffect(() => {
    if (isOpen && effectiveModalOpen) {
      if (closeModal) {
        closeModal();
      }
      setLocalModalOpen(false);
    }
  }, [isOpen, effectiveModalOpen, closeModal]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // If modal is open, close it when opening menu
    if (effectiveModalOpen) {
      if (closeModal) {
        closeModal();
      }
      setLocalModalOpen(false);
    }
  };
  
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
  
  // Handle smooth scrolling with custom animation or navigate for external links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.href.startsWith("http")) {
      // For external links, let the browser handle navigation
      // No need to preventDefault or toggleMenu if it's an external link that opens in a new tab.
      // If you want it to open in the same tab and then close menu:
      // toggleMenu();
      // window.location.href = item.href;
      // However, typically external links open in a new tab, which is handled by target="_blank"
      return; 
    }

    e.preventDefault();
    const element = document.querySelector(item.href); // Use item.href directly
    
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

  const handleRequestAccess = () => {
    toggleMenu(); // Close the menu
    // Small delay to let the menu close animation finish
    setTimeout(() => {
      if (onRequestAccessClick) {
        onRequestAccessClick(); // Use the prop if available
      } else {
        setLocalModalOpen(true); // Otherwise use local state
      }
    }, 300);
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
      
      {isOpen && typeof window !== 'undefined' && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999]"
          style={{ backgroundColor: 'black' }}
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
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  style={{ color: getItemColor(item.name) }}
                  className="text-2xl font-medium hover:opacity-80 py-4 border-b border-white/10 flex items-center justify-between transition-colors duration-150"
                  onClick={(e) => handleNavClick(e, item)}
                  whileHover={{ 
                    scale: 1.03, 
                    transition: { duration: 0.15 }
                  }}
                >
                  {item.name}
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
                <button 
                  onClick={handleRequestAccess}
                  className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white hover:opacity-90 transition-all duration-200 py-4 px-8 rounded-md text-lg font-medium flex items-center justify-center"
                >
                  <span className="mr-2">✨</span> Request Access
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
        </motion.div>,
        document.body
      )}
      
      {/* Only show local modal if we're not using the prop */}
      {!onRequestAccessClick && (
        <RequestAccessModal 
          isOpen={localModalOpen}
          onClose={() => setLocalModalOpen(false)}
        />
      )}
    </div>
  );
} 