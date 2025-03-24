import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-black border-t border-white/10 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section with logo and brief description */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0 max-w-md">
            <div className="text-2xl font-bold mb-4">neusym</div>
            <p className="text-white/70 text-sm leading-relaxed">
              A decentralized ecosystem where agents interact seamlessly, orchestrating complex workflows 
              through secure, scalable infrastructure designed for enterprise applications.
            </p>
          </div>
          
          {/* Navigation sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-[#60A5FA] font-medium mb-4 text-sm">Platform</h3>
              <ul className="space-y-2">
                {['d.ag', 'Features', 'Security', 'Enterprise'].map(item => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                      whileHover={{ x: 3 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#8B5CF6] font-medium mb-4 text-sm">Frameworks</h3>
              <ul className="space-y-2">
                {['a2', 'a3', 'agentbus', 'SDK'].map(item => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                      whileHover={{ x: 3 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#EC4899] font-medium mb-4 text-sm">Resources</h3>
              <ul className="space-y-2">
                {['Documentation', 'GitHub', 'Tutorials', 'Blog'].map(item => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                      whileHover={{ x: 3 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#F59E0B] font-medium mb-4 text-sm">Company</h3>
              <ul className="space-y-2">
                {['About', 'Careers', 'Contact', 'Legal'].map(item => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                      whileHover={{ x: 3 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Social links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8 border-t border-white/10 pt-8">
          {["Twitter", "GitHub", "Discord", "LinkedIn"].map((item, i) => (
            <motion.a 
              key={item}
              href="#" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="text-white/70 hover:text-white text-sm flex items-center gap-1.5 transition-all duration-200"
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        {/* Bottom section with copyright and additional links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-white/50 text-xs mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Neusym, Inc. All rights reserved.
          </motion.div>
          
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, i) => (
              <motion.a 
                key={item}
                href="#" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                viewport={{ once: true }}
                className="text-white/50 hover:text-white text-xs transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
} 