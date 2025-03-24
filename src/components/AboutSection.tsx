import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
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
      className="p-6 sm:p-12 md:p-16 bg-black relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            About Neusym
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 sm:h-2 bg-white mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-6"
          >
            Neusym is pioneering the development of decentralized agent technology, 
            creating a cohesive ecosystem where AI agents can collaborate, communicate, 
            and execute complex tasks with reliability and transparency.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-white/70">
              To create a decentralized agent economy that empowers developers and enterprises 
              to build, deploy, and scale AI solutions with unprecedented reliability and interoperability.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Our Technology</h3>
            <p className="text-white/70">
              Specialized frameworks for agent orchestration, contextual knowledge integration, 
              and persistent agent communication, all built on a foundation of decentralized infrastructure.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Our Team</h3>
            <p className="text-white/70">
              A diverse group of engineers united by a vision of 
              creating autonomous agent systems that solve real-world problems at scale.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button 
            variant="default" 
            className="w-full md:w-auto bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-md"
          >
            Join Our Team
          </Button>
          <Button 
            variant="outline" 
            className="w-full md:w-auto border-2 border-white text-white px-8 py-3 rounded-md"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
} 