"use client";

import { useState, useEffect, useMemo } from "react";
import { GitMerge, Database, Bot } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DagSection from "@/components/DagSection";
import FrameworkSection from "@/components/FrameworkSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { A2CodeSnippet, A3CodeSnippet, AgentbusCodeSnippet } from "@/components/CodeSnippets";

export default function Home() {
  const [a2Command, setA2Command] = useState("workflow.executing()");
  const [a3Command, setA3Command] = useState("context.syncing()");
  const [agentbusCommand, setAgentbusCommand] = useState("payment.received()");
  
  // Terminal command arrays wrapped in useMemo
  const aboutCommands = useMemo(() => ["system.initialize()", "neusym.start()", "service.connect()", "ai.ready()"], []);
  const a2Commands = useMemo(() => ["workflow.executing()", "state.persist()", "graph.optimize()", "tracing.active()"], []);
  const a3Commands = useMemo(() => ["context.syncing()", "knowledge.index()", "vector.store()", "embedding.complete()"], []);
  const agentbusCommands = useMemo(() => ["payment.received()", "agent.execute()", "memory.store()", "thread.continue()"], []);

  // Navigation items - Updated with framework sections
  const navItems = [
    { name: "d.ag", href: "#d-ag" },
    { name: "a2", href: "#a2" },
    { name: "a3", href: "#a3" },
    { name: "agentbus", href: "#agentbus" },
    { name: "About", href: "#about" },
    { name: "Docs", href: "#" }
  ];

  useEffect(() => {
    // Command rotation for each section
    let aboutIndex = 0;
    let a2Index = 0;
    let a3Index = 0;
    let agentbusIndex = 0;
    
    const intervalId = setInterval(() => {
      aboutIndex = (aboutIndex + 1) % aboutCommands.length;
      a2Index = (a2Index + 1) % a2Commands.length;
      a3Index = (a3Index + 1) % a3Commands.length;
      agentbusIndex = (agentbusIndex + 1) % agentbusCommands.length;
      
      setA2Command(a2Commands[a2Index]);
      setA3Command(a3Commands[a3Index]);
      setAgentbusCommand(agentbusCommands[agentbusIndex]);
    }, 3000);
    
    // Add smoother and slower scroll behavior
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            // Highlight the active link
            document.querySelectorAll('a').forEach(link => {
              if (link.getAttribute('href') === href) {
                link.classList.add('active-link');
              } else {
                link.classList.remove('active-link');
              }
            });
            
            // Scroll more slowly for a smoother experience
            const yOffset = -90; // Slightly adjusted offset
            const targetPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1200; // Increased duration for slower scroll
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
                behavior: 'auto' // Using our custom animation instead
              });
              
              if (progress < duration) {
                window.requestAnimationFrame(step);
              }
            }
            
            window.requestAnimationFrame(step);
          }
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('click', handleNavClick);
    };
  }, [a2Commands, a3Commands, aboutCommands, agentbusCommands]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style jsx global>{`
        .active-link {
          font-weight: 600;
          transform: scale(1.05);
        }
        
        .active-link[href="#d-ag"] {
          color: #60A5FA !important;
        }
        
        .active-link[href="#a2"] {
          color: #8B5CF6 !important;
        }
        
        .active-link[href="#a3"] {
          color: #EC4899 !important;
        }
        
        .active-link[href="#agentbus"] {
          color: #F59E0B !important;
        }
        
        .active-link[href="#about"] {
          color: white !important;
        }
        
        .nav-link:focus {
          outline: none;
        }
      `}</style>
    
      {/* Header/Navigation */}
      <Header navItems={navItems} />

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto space-y-32 sm:space-y-48">
        {/* Hero Section */}
        <HeroSection />

        {/* d.ag Section */}
        <DagSection />

        {/* A2 Framework Section */}
        <FrameworkSection
          id="a2"
          title="a2"
          subtitle="Agent to Agent"
          description="The A2 Framework is the foundational toolkit that empowers developers to design and build AI agents with advanced capabilities. It's akin to a development environment tailored specifically for AI agent creation."
          color="#8B5CF6"
          icon={<GitMerge className="w-8 h-8 sm:w-10 sm:h-10 text-[#8B5CF6]" />}
          command={a2Command}
          documentationLink="https://neusym.com/docs/a2/introduction/"
          githubLinks={[
            { label: "Framework", url: "https://github.com/Neusym/a2/tree/main/packages/a2" },
            { label: "SDK", url: "https://github.com/Neusym/a2/tree/main/packages/a2-sdk" }
          ]}
        >
          <A2CodeSnippet />
        </FrameworkSection>

        {/* A3 Framework Section */}
        <FrameworkSection
          id="a3"
          title="a3"
          subtitle="Aptos Agent to Agent"
          description="The A3 Platform is the heart of the a3 ecosystem: a decentralized marketplace built on the Aptos blockchain where agents are registered, discovered, and tasked."
          color="#EC4899"
          icon={<Database className="w-8 h-8 sm:w-10 sm:h-10 text-[#EC4899]" />}
          command={a3Command}
          documentationLink="https://neusym.com/docs/a3/introduction/"
          githubLinks={[
            { label: "SDK", url: "https://github.com/Neusym/a2/tree/main/packages/a3-sdk" },
            { label: "Framework", url: "https://github.com/Neusym/a2/tree/main/packages/a3" }
          ]}
        >
          <A3CodeSnippet />
        </FrameworkSection>

        {/* AgentBus Section */}
        <FrameworkSection
          id="agentbus"
          title="agentbus"
          subtitle="Universal Agent Router"
          description="The Agent Bus is the communication and coordination layer that manages task requests, agent selection, and task execution within the a3 system."
          color="#F59E0B"
          icon={<Bot className="w-8 h-8 sm:w-10 sm:h-10 text-[#F59E0B]" />}
          command={agentbusCommand}
          documentationLink="https://neusym.com/docs/agent-bus/introduction/"
          githubLinks={[
            { label: "Framework", url: "https://github.com/Neusym/a2/tree/main/packages/agent-bus" }
          ]}
        >
          <AgentbusCodeSnippet />
        </FrameworkSection>

        {/* About Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 