"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6", className)}
    >
      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
};

const CheckFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6", className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

type LoadingState = {
  text: string;
};

const LoaderCore = ({
  loadingStates,
  value = 0,
}: {
  loadingStates: LoadingState[];
  value?: number;
}) => {
  // Reverse the array for display - this will show newest items at the bottom
  const displayStates = [...loadingStates].reverse();
  
  return (
    <div className="flex relative justify-center mx-auto flex-col w-full">
      <AnimatePresence mode="wait">
        {displayStates.map((loadingState, index) => {
          // Convert the reversed index back to the original index for value comparison
          const originalIndex = loadingStates.length - 1 - index;
          
          // Check if this is an Aptos-related step
          const isAptosStep = loadingState.text.includes("Aptos");
          
          // Different opacity levels based on status
          const isCurrentStep = originalIndex === value;
          const isCompletedStep = originalIndex < value;
          const isUpcomingStep = originalIndex > value;
          
          return (
            <motion.div
              key={originalIndex}
              className={cn(
                "text-left flex gap-2 sm:gap-3 mb-2 sm:mb-3 px-2 sm:px-4",
                isCompletedStep && "opacity-60"
              )}
              initial={{ opacity: 0, x: -10, y: 10 }}
              animate={{ 
                opacity: isCurrentStep ? 1 : isCompletedStep ? 0.6 : 0.3, 
                x: 0,
                y: isCurrentStep ? -3 : 0,
                scale: isCurrentStep ? 1.02 : 1
              }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.05,
                y: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <div className="flex-shrink-0">
                {isUpcomingStep && (
                  <motion.div
                    initial={{ rotate: -10, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckIcon className="text-white opacity-50 w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                )}
                {!isUpcomingStep && (
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }}
                  >
                    <CheckFilled
                      className={cn(
                        "text-white opacity-75 w-4 h-4 sm:w-5 sm:h-5",
                        isCurrentStep && 
                          (isAptosStep ? "text-[#38E8C6] opacity-100" : "text-[#8B5CF6] opacity-100")
                      )}
                    />
                  </motion.div>
                )}
              </div>
              <motion.span
                className={cn(
                  "text-white truncate max-w-full text-xs sm:text-sm",
                  isCompletedStep && "opacity-75",
                  isCurrentStep && 
                    (isAptosStep 
                      ? "text-[#38E8C6] opacity-100 font-medium" 
                      : "text-[#8B5CF6] opacity-100 font-medium")
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: isCurrentStep ? 1 : isCompletedStep ? 0.75 : 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
              >
                {loadingState.text}
              </motion.span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
  loop = true,
}: {
  loadingStates: LoadingState[];
  loading?: boolean;
  duration?: number;
  loop?: boolean;
}) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      return;
    }
    const timeout = setTimeout(() => {
      setCurrentState((prevState) =>
        loop
          ? prevState === loadingStates.length - 1
            ? 0
            : prevState + 1
          : Math.min(prevState + 1, loadingStates.length - 1)
      );
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentState, loading, loop, loadingStates.length, duration]);
  
  if (!loading) return null;
  
  return (
    <div className="h-full w-full flex items-center justify-center">
      <motion.div 
        className="w-full overflow-x-hidden py-1 sm:py-2 px-2 sm:px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <LoaderCore value={currentState} loadingStates={loadingStates} />
      </motion.div>
    </div>
  );
}; 