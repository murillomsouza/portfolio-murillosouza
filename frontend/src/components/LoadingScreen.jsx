import React, { useState, useEffect } from 'react';
import { Coffee, Terminal, Box, Cpu, CheckCircle } from 'lucide-react';

const loadingSteps = [
  { text: "Tomando um cafézinho...", Icon: Coffee },
  { text: "Abrindo o VS Code...", Icon: Terminal },
  { text: "docker compose up -d --build ...", Icon: Box },
  { text: "Aquecendo a JVM do Spring Boot...", Icon: Cpu },
  { text: "Tudo pronto! Inicializando interface gráfica...", Icon: CheckCircle }
];

export default function LoadingScreen({ onFinished }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setFade(false); 
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === loadingSteps.length - 1) {
            clearInterval(phraseInterval);
            setTimeout(onFinished, 800); 
            return prevIndex;
          }
          return prevIndex + 1;
        });
        setFade(true); 
      }, 200); 

    }, 1200);

    return () => clearInterval(phraseInterval);
  }, [onFinished]);

  const progressPercentage = ((currentIndex + 1) / loadingSteps.length) * 100;
  
  const CurrentIcon = loadingSteps[currentIndex].Icon;

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center font-mono p-4 z-50">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-lg shadow-2xl p-6 relative overflow-hidden">
        
        {/* Barra superior de terminal */}
        <div className="flex items-center space-x-2 pb-4 mb-4 border-b border-slate-800">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-xs text-slate-400 pl-2">bash - inicializando_portfolio.sh</span>
        </div>

        {/* Console Output */}
        <div className="h-16 flex items-center justify-start">
          <div className={`flex items-center gap-3 transition-opacity duration-200 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <CurrentIcon className="w-5 h-5 text-emerald-500" strokeWidth={2} />
            <p className="text-emerald-400 text-sm md:text-base">
              <span className="text-slate-500 font-bold hidden md:inline">murillosouza@dev-os:~$ </span> 
              {loadingSteps[currentIndex].text}
            </p>
          </div>
        </div>

        {/* Barra de Progresso animada */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-6">
          <div 
            className="bg-emerald-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
      </div>
    </div>
  );
}