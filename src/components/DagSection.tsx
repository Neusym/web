import { motion } from "framer-motion";
import { Server } from "lucide-react";
 

export default function DagSection() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            duration: 0.8,
            ease: "easeOut"
          }
        }
      }}
      className="p-4 sm:p-8 bg-black relative overflow-hidden mt-32"
      id="d-ag"
    >
      <div className="flex flex-col md:flex-row md:items-start">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4 md:mb-0 md:mr-6 md:mt-2"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-none border border-[#60A5FA]">
            <Server className="w-8 h-8 sm:w-10 sm:h-10 text-[#60A5FA]" />
          </div>
        </motion.div>
        <div className="mb-6 sm:mb-12 relative z-10 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-2 flex-1 text-[#60A5FA]"
            >
              <span>d.ag</span>
            </motion.h2>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative group"
            >
              <motion.a 
                href="https://neusym.com/docs" 
                className="flex items-center justify-center px-3 py-2 bg-[#60A5FA] text-black text-sm font-medium rounded-none hover:bg-[#80b5fa] transition-all duration-200"
              >
                Documentation →
              </motion.a>
            </motion.div>
          </div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-medium mb-4 text-[#60A5FA]"
          >
            Decentralized Agent Platform
          </motion.h3>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 sm:h-2 bg-[#60A5FA] mb-4 sm:mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed mb-6 sm:mb-10"
          >
            A decentralized ecosystem where agents interact seamlessly, orchestrating complex workflows 
            through secure, scalable infrastructure designed for enterprise applications.
          </motion.p>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="ml-0 md:ml-[80px] border-2 border-[#60A5FA]/30 p-4 sm:p-8 mb-6 sm:mb-10 relative h-[200px] sm:h-[300px] hidden md:block"
      >
        <div className="w-full h-full relative">
          <svg width="100%" height="100%" viewBox="0 0 900 300" preserveAspectRatio="xMidYMid meet">
            {/* Definitions */}
            <defs>
              {/* Background grid pattern */}
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#60A5FA" strokeWidth="0.2" opacity="0.3" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#60A5FA" strokeWidth="0.5" opacity="0.5" />
              </pattern>
              
              {/* Glows and effects */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
                <feFlood floodColor="#60A5FA" floodOpacity="0.5" result="flood" />
                <feComposite in="flood" in2="SourceGraphic" operator="in" result="mask" />
                <feGaussianBlur in="mask" stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              {/* Gradients */}
              <linearGradient id="clientGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
              </linearGradient>
              
              <linearGradient id="processingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
              </linearGradient>
              
              <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
              </linearGradient>
              
              {/* Packet animation */}
              <linearGradient id="dataPacketGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Background */}
            <rect width="100%" height="100%" fill="url(#grid)" opacity="0.1" />
            
            {/* Main connection line */}
            <path d="M 150 160 L 450 160 L 750 160" 
                  stroke="#60A5FA" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeDasharray="1 3" />
            
            {/* Connection points */}
            <circle cx="150" cy="160" r="4" fill="#60A5FA" />
            <circle cx="450" cy="160" r="4" fill="#60A5FA" />
            <circle cx="750" cy="160" r="4" fill="#60A5FA" />
            
            {/* Client Agent Node - Modern laptop design */}
            <g transform="translate(150, 85)">
              {/* Agent platform with shadow */}
              <rect x="-55" y="-50" width="110" height="30" rx="2" ry="2" fill="#111" stroke="#60A5FA" strokeWidth="1" />
              <rect x="-50" y="-45" width="100" height="20" rx="1" ry="1" fill="#222" stroke="#60A5FA" strokeWidth="0.5" opacity="0.7" />
              
              {/* Laptop base */}
              <motion.g
                animate={{
                  y: [0, -2, 0],
                  transition: { duration: 4, repeat: Infinity }
                }}
              >
                <rect x="-40" y="-30" width="80" height="10" rx="2" ry="2" fill="url(#clientGradient)" stroke="#60A5FA" strokeWidth="1" />
                
                {/* Laptop screen */}
                <rect x="-35" y="-70" width="70" height="45" rx="2" ry="2" fill="#111" stroke="#60A5FA" strokeWidth="1" />
                <rect x="-32" y="-67" width="64" height="39" rx="1" ry="1" fill="#060c18" stroke="#60A5FA" strokeWidth="0.5" />
                
                {/* Screen content - code-like pattern */}
                <motion.g
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                >
                  <line x1="-27" y1="-62" x2="20" y2="-62" stroke="#60A5FA" strokeWidth="0.5" opacity="0.8" />
                  <line x1="-27" y1="-57" x2="10" y2="-57" stroke="#60A5FA" strokeWidth="0.5" opacity="0.6" />
                  <line x1="-27" y1="-52" x2="25" y2="-52" stroke="#60A5FA" strokeWidth="0.5" opacity="0.8" />
                  <line x1="-27" y1="-47" x2="15" y2="-47" stroke="#60A5FA" strokeWidth="0.5" opacity="0.7" />
                  <line x1="-27" y1="-42" x2="22" y2="-42" stroke="#60A5FA" strokeWidth="0.5" opacity="0.6" />
                  <line x1="-27" y1="-37" x2="5" y2="-37" stroke="#60A5FA" strokeWidth="0.5" opacity="0.8" />
                </motion.g>
              </motion.g>
              
              {/* Agency indicator */}
              <motion.circle
                cx="25" cy="-60" r="3"
                fill="#60A5FA"
                animate={{
                  opacity: [0.6, 1, 0.6],
                  r: [3, 4, 3],
                  transition: { duration: 2, repeat: Infinity }
                }}
              />
              
              <text x="0" y="15" fill="#60A5FA" textAnchor="middle" fontSize="14" fontWeight="500">Requesting Agent</text>
            </g>
            
            {/* Processing Node - Modern server/processing unit */}
            <g transform="translate(450, 85)">
              {/* Node platform with shadow */}
              <rect x="-55" y="-50" width="110" height="30" rx="2" ry="2" fill="#111" stroke="#60A5FA" strokeWidth="1" />
              <rect x="-50" y="-45" width="100" height="20" rx="1" ry="1" fill="#222" stroke="#60A5FA" strokeWidth="0.5" opacity="0.7" />
              
              {/* Processing node body */}
              <motion.g
                animate={{
                  y: [0, -2, 0],
                  transition: { duration: 4, repeat: Infinity, delay: 0.5 }
                }}
              >
                <rect x="-35" y="-70" width="70" height="50" rx="2" ry="2" fill="#111" stroke="#60A5FA" strokeWidth="1" />
                
                {/* CPU design */}
                <rect x="-25" y="-60" width="50" height="30" rx="1" ry="1" fill="url(#processingGradient)" stroke="#60A5FA" strokeWidth="1" />
                
                {/* CPU internals */}
                <motion.g
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  <line x1="-15" y1="-55" x2="15" y2="-55" stroke="#60A5FA" strokeWidth="0.5" />
                  <line x1="-15" y1="-50" x2="15" y2="-50" stroke="#60A5FA" strokeWidth="0.5" />
                  <line x1="-15" y1="-45" x2="15" y2="-45" stroke="#60A5FA" strokeWidth="0.5" />
                  <line x1="-15" y1="-40" x2="15" y2="-40" stroke="#60A5FA" strokeWidth="0.5" />
                  
                  <line x1="-15" y1="-55" x2="-15" y2="-40" stroke="#60A5FA" strokeWidth="0.5" />
                  <line x1="-5" y1="-55" x2="-5" y2="-40" stroke="#60A5FA" strokeWidth="0.5" />
                  <line x1="5" y1="-55" x2="5" y2="-40" stroke="#60A5FA" strokeWidth="0.5" />
                  <line x1="15" y1="-55" x2="15" y2="-40" stroke="#60A5FA" strokeWidth="0.5" />
                </motion.g>
                
                {/* Processing indicators */}
                <motion.circle
                  cx="-20" cy="-65" r="2"
                  fill="#60A5FA"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    transition: { duration: 1, repeat: Infinity, repeatDelay: 0.5 }
                  }}
                />
                <motion.circle
                  cx="20" cy="-65" r="2"
                  fill="#60A5FA"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    transition: { duration: 1, repeat: Infinity, repeatDelay: 0.8 }
                  }}
                />
              </motion.g>
            </g>
            
            {/* Router Agent - Central hub */}
            <g transform="translate(450, 85)">
              {/* Node platform with shadow */}
              <rect x="-60" y="-50" width="120" height="30" rx="2" ry="2" fill="#111" stroke="#60A5FA" strokeWidth="1" />
              <rect x="-55" y="-45" width="110" height="20" rx="1" ry="1" fill="#222" stroke="#60A5FA" strokeWidth="0.5" opacity="0.7" />
              
              {/* Router node body */}
              <motion.g
                animate={{
                  y: [0, -2, 0],
                  transition: { duration: 4, repeat: Infinity, delay: 0.5 }
                }}
              >
                <rect x="-40" y="-70" width="80" height="50" rx="2" ry="2" fill="#111" stroke="#60A5FA" strokeWidth="1" />
                
                {/* Router design - enhanced with more connection points */}
                <rect x="-30" y="-60" width="60" height="35" rx="1" ry="1" fill="url(#processingGradient)" stroke="#60A5FA" strokeWidth="1" />
                
                {/* Router internals - modified to show routing paths */}
                <motion.g
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  <circle cx="0" cy="-42" r="8" fill="transparent" stroke="#60A5FA" strokeWidth="0.5" />
                  <circle cx="0" cy="-42" r="4" fill="#60A5FA" opacity="0.3" />
                  
                  <line x1="-25" y1="-55" x2="-5" y2="-45" stroke="#60A5FA" strokeWidth="0.5" />
                  <line x1="-25" y1="-35" x2="-5" y2="-45" stroke="#60A5FA" strokeWidth="0.5" />
                  <line x1="25" y1="-55" x2="5" y2="-45" stroke="#60A5FA" strokeWidth="0.5" />
                  <line x1="25" y1="-35" x2="5" y2="-45" stroke="#60A5FA" strokeWidth="0.5" />
                  
                  <line x1="-5" y1="-45" x2="5" y2="-45" stroke="#60A5FA" strokeWidth="0.5" />
                  <line x1="0" y1="-42" x2="-30" y2="-42" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="1 2" />
                  <line x1="0" y1="-42" x2="30" y2="-42" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="1 2" />
                </motion.g>
                
                {/* Processing indicators - enhanced to show more activity */}
                <motion.circle
                  cx="-25" cy="-55" r="2"
                  fill="#60A5FA"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    transition: { duration: 1, repeat: Infinity, repeatDelay: 0.5 }
                  }}
                />
                <motion.circle
                  cx="25" cy="-55" r="2"
                  fill="#60A5FA"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    transition: { duration: 1, repeat: Infinity, repeatDelay: 0.3 }
                  }}
                />
                <motion.circle
                  cx="-25" cy="-35" r="2"
                  fill="#60A5FA"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    transition: { duration: 1, repeat: Infinity, repeatDelay: 0.7 }
                  }}
                />
                <motion.circle
                  cx="25" cy="-35" r="2"
                  fill="#60A5FA"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    transition: { duration: 1, repeat: Infinity, repeatDelay: 0.9 }
                  }}
                />
              </motion.g>
              
              <text x="0" y="15" fill="#60A5FA" textAnchor="middle" fontSize="14" fontWeight="500">Router Agent</text>
            </g>
            
            {/* Worker Agent - Task execution node */}
            <g transform="translate(750, 85)">
              {/* Agent platform with shadow */}
              <rect x="-55" y="-50" width="110" height="30" rx="2" ry="2" fill="#111" stroke="#60A5FA" strokeWidth="1" />
              <rect x="-50" y="-45" width="100" height="20" rx="1" ry="1" fill="#222" stroke="#60A5FA" strokeWidth="0.5" opacity="0.7" />
              
              {/* Phone body */}
              <motion.g
                animate={{
                  y: [0, -2, 0],
                  transition: { duration: 4, repeat: Infinity, delay: 1 }
                }}
              >
                <rect x="-20" y="-75" width="40" height="65" rx="5" ry="5" fill="#111" stroke="#60A5FA" strokeWidth="1" />
                <rect x="-17" y="-72" width="34" height="57" rx="3" ry="3" fill="#060c18" stroke="#60A5FA" strokeWidth="0.5" />
                
                {/* Phone UI elements */}
                <motion.g
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                >
                  <rect x="-12" y="-67" width="24" height="5" rx="1" ry="1" fill="#60A5FA" opacity="0.8" />
                  <rect x="-12" y="-60" width="14" height="3" rx="1" ry="1" fill="#60A5FA" opacity="0.6" />
                  <rect x="-12" y="-55" width="24" height="3" rx="1" ry="1" fill="#60A5FA" opacity="0.6" />
                  <rect x="-12" y="-50" width="18" height="3" rx="1" ry="1" fill="#60A5FA" opacity="0.6" />
                  <rect x="-12" y="-45" width="24" height="3" rx="1" ry="1" fill="#60A5FA" opacity="0.6" />
                  <rect x="-12" y="-40" width="24" height="10" rx="1" ry="1" fill="#60A5FA" opacity="0.4" />
                  <rect x="-12" y="-25" width="24" height="5" rx="1" ry="1" fill="#60A5FA" opacity="0.8" />
                </motion.g>
                
                {/* Home button/indicator */}
                <circle cx="0" cy="-17" r="2" fill="#60A5FA" opacity="0.9" />
              </motion.g>
              
              <text x="0" y="15" fill="#60A5FA" textAnchor="middle" fontSize="14" fontWeight="500">Worker Agent</text>
            </g>
            
            {/* Vertical connections to main line */}
            <line x1="150" y1="85" x2="150" y2="160" stroke="#60A5FA" strokeWidth="1" strokeDasharray="5 2" />
            <line x1="450" y1="85" x2="450" y2="160" stroke="#60A5FA" strokeWidth="1" strokeDasharray="5 2" />
            <line x1="750" y1="85" x2="750" y2="160" stroke="#60A5FA" strokeWidth="1" strokeDasharray="5 2" />
            
            {/* Data packets - horizontal client to processing */}
            <motion.g
              animate={{
                x: [0, 300, 0],
                opacity: [0, 1, 0],
                transition: { duration: 4, repeat: Infinity, ease: "linear" }
              }}
            >
              <rect x="150" y="158" width="15" height="4" rx="2" ry="2" fill="url(#dataPacketGradient)" filter="url(#glow)" />
            </motion.g>
            
            {/* Data packets - horizontal processing to mobile */}
            <motion.g
              animate={{
                x: [0, 300, 0],
                opacity: [0, 1, 0],
                transition: { duration: 3.5, repeat: Infinity, ease: "linear", delay: 1 }
              }}
            >
              <rect x="450" y="158" width="15" height="4" rx="2" ry="2" fill="url(#dataPacketGradient)" filter="url(#glow)" />
            </motion.g>
            
            {/* Data packets - horizontal mobile to processing (reverse) */}
            <motion.g
              animate={{
                x: [0, -300, 0],
                opacity: [0, 1, 0],
                transition: { duration: 5, repeat: Infinity, ease: "linear", delay: 2 }
              }}
            >
              <rect x="750" y="158" width="15" height="4" rx="2" ry="2" fill="url(#dataPacketGradient)" filter="url(#glow)" />
            </motion.g>
            
            {/* Vertical data packets - upward from main line to each agent */}
            <motion.g
              animate={{
                y: [0, -75, 0],
                opacity: [0, 1, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }
              }}
            >
              <rect x="148" y="160" width="4" height="10" rx="2" ry="2" fill="url(#dataPacketGradient)" filter="url(#glow)" />
            </motion.g>
            
            <motion.g
              animate={{
                y: [0, -75, 0],
                opacity: [0, 1, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.5 }
              }}
            >
              <rect x="448" y="160" width="4" height="10" rx="2" ry="2" fill="url(#dataPacketGradient)" filter="url(#glow)" />
            </motion.g>
            
            <motion.g
              animate={{
                y: [0, -75, 0],
                opacity: [0, 1, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeOut", delay: 2.5 }
              }}
            >
              <rect x="748" y="160" width="4" height="10" rx="2" ry="2" fill="url(#dataPacketGradient)" filter="url(#glow)" />
            </motion.g>
            
            {/* Connection pulse effects */}
            <motion.circle 
              cx="150" cy="160" 
              r="4" 
              fill="transparent"
              stroke="#60A5FA"
              strokeWidth="1"
              animate={{
                r: [4, 15, 4],
                opacity: [0.9, 0, 0.9],
                transition: { duration: 3, repeat: Infinity }
              }}
            />
            
            <motion.circle 
              cx="450" cy="160" 
              r="4" 
              fill="transparent"
              stroke="#60A5FA"
              strokeWidth="1"
              animate={{
                r: [4, 15, 4],
                opacity: [0.9, 0, 0.9],
                transition: { duration: 3, repeat: Infinity, delay: 1 }
              }}
            />
            
            <motion.circle 
              cx="750" cy="160" 
              r="4" 
              fill="transparent"
              stroke="#60A5FA"
              strokeWidth="1"
              animate={{
                r: [4, 15, 4],
                opacity: [0.9, 0, 0.9],
                transition: { duration: 3, repeat: Infinity, delay: 2 }
              }}
            />
          </svg>
          
          {/* Mobile fallback */}
          <div className="md:hidden grid grid-cols-3 gap-4 w-full h-full">
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 border border-[#60A5FA] flex items-center justify-center mb-2">
                <span className="text-[#60A5FA] text-2xl">💻</span>
              </div>
              <p className="text-[#60A5FA] text-sm">Agent</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 border border-[#60A5FA] flex items-center justify-center mb-2">
                <span className="text-[#60A5FA] text-2xl">🔄</span>
              </div>
              <p className="text-[#60A5FA] text-sm">Router Agent</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 border border-[#60A5FA] flex items-center justify-center mb-2">
                <span className="text-[#60A5FA] text-2xl">📱</span>
              </div>
              <p className="text-[#60A5FA] text-sm">Worker Agent</p>
            </div>
          </div>
        </div>
      </motion.div>
 
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-0 md:ml-[80px]"
      >
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-3 sm:p-4"
        >
          <h4 className="text-[#60A5FA] text-base sm:text-lg font-medium mb-2">Interconnected</h4>
          <p className="text-white opacity-80 text-sm sm:text-base">Agents communicate and collaborate across domains</p>
        </motion.div>
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-3 sm:p-4"
        >
          <h4 className="text-[#60A5FA] text-base sm:text-lg font-medium mb-2">Resilient</h4>
          <p className="text-white opacity-80 text-sm sm:text-base">System maintains functionality through disruptions</p>
        </motion.div>
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-3 sm:p-4"
        >
          <h4 className="text-[#60A5FA] text-base sm:text-lg font-medium mb-2">Extensible</h4>
          <p className="text-white opacity-80 text-sm sm:text-base">Add capabilities without modifying core architecture</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 