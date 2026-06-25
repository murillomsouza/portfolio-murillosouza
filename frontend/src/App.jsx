import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero'; // Importamos o novo componente

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-slate-950 min-h-screen">
      {isLoading ? (
        <LoadingScreen onFinished={() => setIsLoading(false)} />
      ) : (
        <main className="animate-fade-in">
          <Hero />
          {/* As próximas seções (Projetos, Contato) entrarão aqui depois */}
        </main>
      )}
    </div>
  );
}