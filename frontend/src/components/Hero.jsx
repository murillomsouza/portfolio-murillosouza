  import React from 'react';
  import { Mail, Terminal, Code2, Cpu, Database , Braces, FilePenLine} from 'lucide-react';
  import { Typewriter } from 'react-simple-typewriter';
  import perfilImg from '../assets/perfil.jpeg';

  export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-slate-950 text-slate-200">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda: Textos e Apresentação */}
          <div className="flex flex-col space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-emerald-500 font-mono text-lg flex items-center gap-2">
                <Terminal size={18} />
                <span>Olá, mundo! Meu nome é</span>
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Murillo Souza.
              </h1>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-400 h-10">
                <span className="text-emerald-400">{'> '}</span>
                <Typewriter
                  words={[
                    'Desenvolvedor Júnior',
                    'Focado em Backend e Arquitetura',
                    'Estudante na Fatec',
                    'Entusiasta de Sistemas Embarcados'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h3>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Sou apaixonado por resolver problemas complexos através de código. Tenho facilidade em transitar entre o desenvolvimento de APIs modernas e a programação de baixo nível.
            </p>

            {/* Badges de Stack Tecnológico */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-sm font-mono text-slate-300 flex items-center gap-2">
                <Braces size={14} className="text-blue-400" /> Java / Spring
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-sm font-mono text-slate-300 flex items-center gap-2">
                <Code2 size={14} className="text-yellow-400" /> JavaScript / React
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-sm font-mono text-slate-300 flex items-center gap-2">
                <Terminal size={14} className="text-yellow-400" /> Python / Flask
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-sm font-mono text-slate-300 flex items-center gap-2">
                <Cpu size={14} className="text-emerald-400" /> Arduino / ESP32
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-sm font-mono text-slate-300 flex items-center gap-2">
                <Database size={14} className="text-purple-400" /> MongoDB / MySQL
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-sm font-mono text-slate-300 flex items-center gap-2">
                <FilePenLine size={14} className="text-purple-400" /> UML & Arquitetura
              </span>
            </div>

            {/* Call to Action (Touch me) */}
            <div className="flex items-center gap-4 pt-6">
              <a href="murillosouza997@gmail.com" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-emerald-900/20">
                <Mail size={18} />
                Entrar em contato
              </a>
              
              <a href="https://github.com/murillomsouza" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
                </svg>
              </a>
              
              <a href="https://linkedin.com/in/murillo-de-souza" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Imagem de Perfil */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Efeito de brilho/fundo atrás da foto */}
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Container da Imagem */}
              <div className="relative w-full h-full rounded-full border-2 border-emerald-500/30 overflow-hidden bg-slate-800 shadow-2xl flex items-center justify-center">
                <img 
                  src={perfilImg}
                  alt="Murillo Souza" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }