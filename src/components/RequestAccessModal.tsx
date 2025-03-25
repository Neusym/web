import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestAccessModal = ({ isOpen, onClose }: RequestAccessModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Close modal with Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
      document.body.dataset.scrollPosition = scrollY.toString();
      
      // Ensure the modal is visible on mobile by scrolling to top
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      // Restore scroll position
      const scrollY = parseInt(document.body.dataset.scrollPosition || "0", 10);
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      const scrollY = parseInt(document.body.dataset.scrollPosition || "0", 10);
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setError("");
    setIsSubmitting(true);
    
    try {
      // In a real app, you would send this to your API
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      // Reset form after successful submission
      setEmail("");
      
      // Close modal after showing success message
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            style={{ 
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 49,
              touchAction: "none"
            }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ 
              scale: 1, 
              opacity: 1
            }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 400, 
              mass: 0.8
            }}
            className="fixed w-[95%] max-w-md bg-black border border-white/20 shadow-[0_0_25px_rgba(139,92,246,0.15)] z-50 rounded-lg overflow-hidden"
            style={{ 
              touchAction: "none",
              maxHeight: "min(90vh, 700px)",
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#8B5CF6 transparent",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Request Access</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] rounded-full"></div>
                <p className="text-white/70 mt-4">
                  Join the waitlist to get early access to Neusym's agent ecosystem.
                </p>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-black/50 border border-white/30 focus:border-[#8B5CF6] text-white rounded-md px-4 py-3 outline-none transition-all duration-200 shadow-inner shadow-black/50"
                        required
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-md" style={{ 
                        boxShadow: email ? "0 0 0 1px rgba(139,92,246,0.3), inset 0 1px 2px rgba(0,0,0,0.2)" : "inset 0 1px 2px rgba(0,0,0,0.2)" 
                      }}></div>
                    </div>
                    {error && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1 flex items-center"
                      >
                        <span className="mr-1">⚠️</span> {error}
                      </motion.p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(139,92,246,0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                      isSubmitting 
                        ? "bg-gray-600" 
                        : "bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:opacity-90"
                    } transition-all duration-200 shadow-lg shadow-purple-900/20`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <span className="mr-2">✨</span> Request Access
                      </span>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center py-6"
                >
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring", 
                      damping: 15, 
                      delay: 0.2 
                    }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 mb-6 border border-green-500/30"
                  >
                    <motion.svg 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-10 w-10 text-green-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <motion.path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      />
                    </motion.svg>
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl font-semibold text-white mb-2"
                  >
                    Thank You!
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-white/70"
                  >
                    We've received your request. We'll be in touch soon.
                  </motion.p>
                </motion.div>
              )}
              
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/50 text-center">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RequestAccessModal; 