import { motion } from "framer-motion";
import { ReactNode, useCallback } from "react";

interface FrameworkSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  color: string;
  command: string;
  children?: ReactNode;
  documentationLink: string;
  githubLinks?: {
    label: string;
    url: string;
  }[];
}

export default function FrameworkSection({
  id,
  title,
  subtitle,
  description,
  icon,
  color,
  command,
  children,
  documentationLink,
  githubLinks = []
}: FrameworkSectionProps) {
  const simpleFadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Code block glow effect with more intensity
  const codeGlow = {
    boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 0px rgba(255,255,255,0)", "0 0 0px rgba(255,255,255,0)"],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  };

  // Enhanced code typing animation
  const enhancedTypeAnimation = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
        delay: 0.2
      }
    }
  };

  // Typewriter cursor blinking effect
  const cursorBlink = {
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  };

  // Centralized function to scroll section to center
  const centerSection = useCallback(() => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      // Calculate center positioning
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionElement.getBoundingClientRect().height;
      const centerOffset = (windowHeight - sectionHeight) / 2;
      
      // Get the section's position from the top of the page
      const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;
      
      // Calculate position to scroll to (accounting for centering)
      const targetPosition = sectionTop - Math.max(0, centerOffset);
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Smooth scroll duration
      
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
          behavior: 'auto' // Using custom animation
        });
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
      
      window.requestAnimationFrame(step);
      return true;
    }
    return false;
  }, [id]);
  
  // Scroll to center of section function with external link support
  const scrollToCenter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent the event from bubbling up to the section
    const href = e.currentTarget.getAttribute('href');
    
    const centered = centerSection();
    
    if (href && href.startsWith('http')) {
      // After the scroll animation completes, open the external link
      setTimeout(() => {
        window.open(href, '_blank');
      }, centered ? 1000 : 0); // Open immediately if no centering occurred
    }
  }, [centerSection]);

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={simpleFadeIn}
      className="pixel-border p-4 sm:p-8 bg-black relative overflow-hidden cursor-pointer"
      id={id}
      onClick={centerSection}
    >
      <div className="flex flex-col md:flex-row md:items-start">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4 md:mb-0 md:mr-6 md:mt-2"
        >
          <div className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-none border border-[${color}]`}>
            {icon}
          </div>
        </motion.div>
        <div className="mb-6 sm:mb-12 relative z-10 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-2 flex-1 text-[${color}] cursor-pointer hover:opacity-80 transition-opacity duration-200`}
              onClick={centerSection}
            >
              <span>{title}</span>
            </motion.h2>
            <div className="flex flex-wrap gap-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer relative group"
              >
                <motion.a 
                  href={documentationLink} 
                  className="flex items-center justify-center px-3 py-2 text-black text-sm font-medium rounded-none hover:bg-opacity-90 transition-all duration-200"
                  style={{ backgroundColor: color }}
                  onClick={scrollToCenter}
                >
                  Documentation →
                </motion.a>
              </motion.div>
              {githubLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer relative group"
                >
                  <motion.a 
                    href={link.url} 
                    className="flex items-center justify-center px-3 py-2 border text-sm font-medium rounded-none hover:bg-opacity-10 transition-all duration-200"
                    style={{ borderColor: color, color: color }}
                    whileHover={{ backgroundColor: `${color}20` }}
                    onClick={scrollToCenter}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-4 h-4 mr-1"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    {link.label}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className={`text-xl sm:text-2xl font-medium mb-4 text-[${color}]`}
          >
            {subtitle}
          </motion.h3>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className={`h-1 sm:h-2 bg-[${color}] mb-4 sm:mb-6`}
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed mb-6 sm:mb-10"
          >
            {description}
          </motion.p>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className={`ml-0 md:ml-[80px] bg-black text-[${color}] p-4 sm:p-6 font-mono font-['IBM_Plex_Mono',monospace] text-xs sm:text-sm relative border-2 border-[${color}]/30 overflow-hidden rounded-none`}
        animate={codeGlow}
      >
        <div className={`flex items-center mb-4 text-[${color}] text-xs border-b border-[${color}]/30 pb-2`}>
          <div className={`w-2 h-2 sm:w-3 sm:h-3 border border-[${color}] mr-1 sm:mr-2 bg-black rounded-none`}></div>
          <div className={`w-2 h-2 sm:w-3 sm:h-3 border border-[${color}] mr-1 sm:mr-2 bg-black rounded-none`}></div>
          <div className={`w-2 h-2 sm:w-3 sm:h-3 border border-[${color}] mr-1 sm:mr-2 bg-black rounded-none`}></div>
          <span className={`ml-2 font-mono font-['IBM_Plex_Mono',monospace] text-[${color}]`}>{`${id}.ts`}</span>
          <motion.div 
            animate={cursorBlink}
            className={`ml-auto bg-[${color}] h-2 w-2 rounded-none`}
          ></motion.div>
        </div>
        <pre className={`text-[${color}] whitespace-pre overflow-hidden max-w-full relative pt-4 text-xs sm:text-sm md:text-base`}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={enhancedTypeAnimation}
            className="overflow-hidden relative z-10 leading-5 sm:leading-6 pl-2 sm:pl-4 font-mono font-['IBM_Plex_Mono',monospace]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {children}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                transition: { 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              className={`text-right mt-4 pr-2 text-[${color}] font-mono font-['IBM_Plex_Mono',monospace] text-xs`}
            >
              <motion.span>
                &gt; {command}
              </motion.span>
            </motion.div>
          </motion.div>
        </pre>
      </motion.div>
    </motion.section>
  );
} 