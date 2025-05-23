import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu";
import RequestAccessModal from "@/components/RequestAccessModal";
import Image from "next/image";

interface HeaderProps {
  navItems: {
    name: string;
    href: string;
  }[];
}

export default function Header({ navItems }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-[99999] backdrop-blur-md bg-black/70 flex items-center justify-between p-5 sm:p-7 border-b border-white/10 shadow-lg shadow-black/20"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mr-4"
        >
          <Image
            src="/logoneu.png"
            alt="Neusym Logo"
            width={96}
            height={96}
            quality={100}
            priority
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden sm:block h-8 w-px bg-white/20 mx-6"
        />
      </motion.div>
      
      <nav className="hidden lg:flex items-center space-x-8">
        {navItems.map((item, i) => (
          <motion.a 
            key={item.name} 
            href={item.href === "#" ? "https://docs.neusym.com" : item.href} 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
            whileHover={{ 
              scale: 1.05, 
              color: item.name === "d.ag" ? "#60A5FA" : 
                     item.name === "a2" ? "#8B5CF6" : 
                     item.name === "a3" ? "#EC4899" : 
                     item.name === "agentbus" ? "#F59E0B" : "white",
              transition: { duration: 0.15 } // Faster color transition
            }}
            className={`relative text-white transition-colors duration-150 text-base sm:text-lg font-medium tracking-wide py-2 ${
              item.name === "d.ag" ? "hover:text-[#60A5FA]" : 
              item.name === "a2" ? "hover:text-[#8B5CF6]" : 
              item.name === "a3" ? "hover:text-[#EC4899]" : 
              item.name === "agentbus" ? "hover:text-[#F59E0B]" : ""
            } nav-link`}
          >
            {item.name}
            <motion.div 
              className="absolute -bottom-1 left-0 h-[2px] w-0 bg-current transition-all duration-150"
              whileHover={{ width: "100%" }}
            />
          </motion.a>
        ))}
      </nav>
      
      <div className="flex items-center space-x-4">
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsModalOpen(true)}
          className="hidden sm:flex items-center justify-center px-5 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-md text-white font-medium hover:opacity-90 transition-all duration-200 shadow-lg shadow-purple-900/20"
        >
          <span className="mr-1">✨</span> Request Access
        </motion.button>
        
        <MobileMenu 
          items={navItems}
          onRequestAccessClick={() => setIsModalOpen(true)}
          closeModal={() => setIsModalOpen(false)}
          isModalOpen={isModalOpen}
        />
      </div>
      
      {/* Request Access Modal */}
      <RequestAccessModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.header>
  );
} 