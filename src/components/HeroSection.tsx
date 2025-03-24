import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MultiStepLoaderDemo from "@/components/ui/multi-step-loader-demo";

export default function HeroSection() {
  const characterAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center pt-8 md:pt-16"
    >
      <motion.div 
        variants={slideInLeft}
        className="space-y-6 sm:space-y-8 z-10 mx-auto text-center lg:text-left"
      >
        <motion.h1 
          variants={characterAnimation}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter"
        >
          Decentralized<br />Agent<br />Economy
        </motion.h1>
        <motion.p 
          variants={characterAnimation}
          className="text-base sm:text-lg md:text-xl opacity-90 max-w-lg"
        >
          decentralized agent to agent platform
        </motion.p>
        <motion.p 
          variants={characterAnimation}
          className="text-base sm:text-lg md:text-xl opacity-90 max-w-lg"
        >
          Build, test, and deploy AI agents with our comprehensive toolkit designed for enterprises and developers.
        </motion.p>
        <motion.div
          variants={characterAnimation}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Button variant="default" className="w-full md:w-auto bg-white text-black hover:bg-gray-200 py-2 sm:py-3 px-6 sm:px-8 rounded-none transition-all duration-100">
            Get Started
          </Button>
          <Button variant="outline" className="border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-none">
            Learn More
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div
        variants={fadeIn}
        className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:max-w-none"
      >
        <MultiStepLoaderDemo />
      </motion.div>
    </motion.section>
  );
} 