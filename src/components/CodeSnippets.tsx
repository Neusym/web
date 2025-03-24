import React from 'react';

interface CodeRendererProps {
  code: string;
}

export const CodeRenderer: React.FC<CodeRendererProps> = ({ code }) => {
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: code }}
      className="overflow-hidden"
    />
  );
};

export const A2CodeSnippet: React.FC = () => {
  const a2Code = `<span class="text-[#8B5CF6]">const</span> <span class="text-[#8B5CF6]">agent</span> = <span class="text-[#8B5CF6]">sdk</span>.<span class="text-[#8B5CF6]">createAgent</span>({
  <span class="text-[#8B5CF6]">name</span>: <span class="text-[#8B5CF6]">'Code Assistant'</span>,
  <span class="text-[#8B5CF6]">instructions</span>: <span class="text-[#8B5CF6]">'You are a coding assistant that helps with TypeScript.'</span>,
  <span class="text-[#8B5CF6]">model</span>: <span class="text-[#8B5CF6]">'gpt-4'</span>, <span class="text-[#8B5CF6]">// Optional if set in SDK config</span>
  <span class="text-[#8B5CF6]">provider</span>: <span class="text-[#8B5CF6]">'openai'</span>, <span class="text-[#8B5CF6]">// Optional if set in SDK config</span>
  <span class="text-[#8B5CF6]">apiKey</span>: <span class="text-[#8B5CF6]">'your-api-key'</span>, <span class="text-[#8B5CF6]">// Optional if set in SDK config</span>
  <span class="text-[#8B5CF6]">tools</span>: {
    <span class="text-[#8B5CF6]">// Custom tools the agent can use</span>
    <span class="text-[#8B5CF6]">searchDocs</span>: <span class="text-[#8B5CF6]">async</span> (<span class="text-[#8B5CF6]">query</span>: <span class="text-[#8B5CF6]">string</span>) => {
      <span class="text-[#8B5CF6]">/* ... */</span>
    },
  },
  <span class="text-[#8B5CF6]">memory</span>: <span class="text-[#8B5CF6]">customMemory</span>, <span class="text-[#8B5CF6]">// Optional custom memory implementation</span>
  <span class="text-[#8B5CF6]">metadata</span>: {
    <span class="text-[#8B5CF6]">// Optional metadata</span>
    <span class="text-[#8B5CF6]">expertise</span>: [<span class="text-[#8B5CF6]">'typescript'</span>, <span class="text-[#8B5CF6]">'react'</span>, <span class="text-[#8B5CF6]">'node'</span>],
  },
});`;

  return <CodeRenderer code={a2Code} />;
};

export const A3CodeSnippet: React.FC = () => {
  const a3Code = `<span class="text-[#EC4899]">const</span> <span class="text-[#EC4899]">process</span> = <span class="text-[#EC4899]">await</span> <span class="text-[#EC4899]">client</span>.<span class="text-[#EC4899]">process</span>.<span class="text-[#EC4899]">registerProcess</span>(
  <span class="text-[#EC4899]">'AI Image Generator'</span>,
  <span class="text-[#EC4899]">'Generate AI images based on text prompts'</span>,
  [<span class="text-[#EC4899]">'ai'</span>, <span class="text-[#EC4899]">'image'</span>, <span class="text-[#EC4899]">'generation'</span>],
  {
    <span class="text-[#EC4899]">name</span>: <span class="text-[#EC4899]">'CreativeAI Studio'</span>,
    <span class="text-[#EC4899]">description</span>: <span class="text-[#EC4899]">'AI-powered creative tools'</span>,
    <span class="text-[#EC4899]">walletAddress</span>: <span class="text-[#EC4899]">'0xabcdef1234567890'</span>,
    <span class="text-[#EC4899]">website</span>: <span class="text-[#EC4899]">'https://creativeai.studio'</span>,
    <span class="text-[#EC4899]">social</span>: {
      <span class="text-[#EC4899]">twitter</span>: <span class="text-[#EC4899]">'@creativeai_studio'</span>,
      <span class="text-[#EC4899]">discord</span>: <span class="text-[#EC4899]">'https://discord.gg/creativeai'</span>,
    },
  },
  {
    <span class="text-[#EC4899]">taskPrice</span>: <span class="text-[#EC4899]">'0.5'</span>,
    <span class="text-[#EC4899]">currency</span>: <span class="text-[#EC4899]">'APT'</span>,
    <span class="text-[#EC4899]">requiresPrepayment</span>: <span class="text-[#EC4899]">true</span>,
  }
);`;

  return <CodeRenderer code={a3Code} />;
};

export const AgentbusCodeSnippet: React.FC = () => {
  const agentbusCode = `<span class="text-[#F59E0B]">const</span> <span class="text-[#F59E0B]">router</span> = <span class="text-[#F59E0B]">new</span> <span class="text-[#F59E0B]">AgentRouter</span>({
  <span class="text-[#F59E0B]">routes</span>: [
    {
      <span class="text-[#F59E0B]">name</span>: <span class="text-[#F59E0B]">'customer-support'</span>,
      <span class="text-[#F59E0B]">pattern</span>: <span class="text-[#F59E0B]">/support|help|issue/i</span>,
      <span class="text-[#F59E0B]">agent</span>: <span class="text-[#F59E0B]">supportAgent</span>,
      <span class="text-[#F59E0B]">priority</span>: <span class="text-[#F59E0B]">10</span>
    },
    {
      <span class="text-[#F59E0B]">name</span>: <span class="text-[#F59E0B]">'content-creation'</span>,
      <span class="text-[#F59E0B]">pattern</span>: <span class="text-[#F59E0B]">/create|generate|write/i</span>,
      <span class="text-[#F59E0B]">agent</span>: <span class="text-[#F59E0B]">creativeAgent</span>,
      <span class="text-[#F59E0B]">priority</span>: <span class="text-[#F59E0B]">20</span>
    }
  ],
  <span class="text-[#F59E0B]">fallbackAgent</span>: <span class="text-[#F59E0B]">generalAgent</span>,
  <span class="text-[#F59E0B]">threadManager</span>: <span class="text-[#F59E0B]">new</span> <span class="text-[#F59E0B]">ThreadManager</span>(),
  <span class="text-[#F59E0B]">memoryProvider</span>: <span class="text-[#F59E0B]">new</span> <span class="text-[#F59E0B]">PersistentMemory</span>()
});`;

  return <CodeRenderer code={agentbusCode} />;
};

 