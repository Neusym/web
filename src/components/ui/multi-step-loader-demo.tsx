"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { motion } from "framer-motion";

const loadingStates = [
  {
    text: "Agent 001 » Initializing secure workflow engine",
  },
  {
    text: "Aptos » Validating transaction parameters",
  },
  {
    text: "Agent 002 » Processing payment request",
  },
  {
    text: "Aptos » Payment transaction confirmed",
  },
  {
    text: "Network » Establishing encrypted agent channel",
  },
  {
    text: "Retrieval » Synchronizing knowledge vectors",
  },
  {
    text: "Memory » Optimizing context for relevance",
  },
  {
    text: "Aptos » Registering transaction in ledger",
  },
  {
    text: "A2 Core » Building graph-based execution plan",
  },
  {
    text: "Bus » Routing agent communication packets",
  },
  {
    text: "Aptos » Transaction successfully finalized",
  },
  {
    text: "System » Decentralized execution sequence ready",
  },
];

export default function MultiStepLoaderDemo() {
  const [loading] = useState(true);

  return (
    <motion.div 
      className="w-full h-full flex items-center justify-center bg-black/25 mx-auto lg:ml-8 xl:ml-24 rounded-md overflow-hidden p-2 sm:p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-teal-500/5 opacity-20 rounded-lg" />
        <Loader loadingStates={loadingStates} loading={loading} duration={1800} />
      </div>
    </motion.div>
  );
} 