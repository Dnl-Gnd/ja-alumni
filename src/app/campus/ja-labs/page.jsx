"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  Handshake, 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  Briefcase, 
  Globe, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function JALabsPage() {
  const process = [
    { title: "Diagnóstico", desc: "Evaluación inicial de perfil técnico y estado psicoemocional.", icon: <Zap size={20} /> },
    { title: "Formación Base", desc: "Orientación laboral y dominio de herramientas tecnológicas clave.", icon: <Cpu size={20} /> },
    { title: "Medida", desc: "Rutas de aprendizaje codiseñadas con la empresa privada.", icon: <Terminal size={20} /> },
    { title: "Pasantía", desc: "Un mes de experiencia práctica en una empresa aliada.", icon: <Briefcase size={20} /> },
    { title: "Éxito", desc: "60 días de acompañamiento post-inserción laboral.", icon: <CheckCircle2 size={20} /> }
  ];

  return (
    <main className="bg-[#030d1a] min-h-screen pt-32 pb-24 text-white overflow-hidden">
      <div className="container-max">
        <Link href="/campus" className="inline-flex items-center gap-2 text-blue-400 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Volver a Campus Hub
        </Link>

        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-8 border border-blue-500/20">
                <Terminal size={18} /> Ecosistema de Empleabilidad 20-29
              </div>
              <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                JA Labs: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Ingeniería Laboral
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 font-light max-w-xl">
                No enseñamos teoría general; certificamos las competencias exactas que la empresa privada demanda hoy. JA Labs es el puente definitivo hacia tu primer empleo de alto nivel en el sector tecnológico y empresarial.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-5 rounded-2xl text-lg flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/20">
                  Aplicar a Beca JA Labs <Zap size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="absolute inset-0 bg-blue-500/30 blur-[150px] rounded-full" />
              <div className="relative p-1 bg-gradient-to-br from-blue-500/40 via-transparent to-cyan-500/40 rounded-[3rem]">
                <div className="bg-[#030d1a] rounded-[2.9rem] p-8 md:p-12 overflow-hidden relative">
                   <div className="flex flex-col items-center text-center">
                      <ShieldCheck size={80} className="text-blue-400 mb-8" />
                      <h3 className="text-3xl font-black mb-4">Sello Job Engineer</h3>
                      <p className="text-white/60 text-sm leading-relaxed max-w-md">
                        Más que un diploma, te gradúas con nuestra marca registrada. Ser un "Job Engineer JA" garantiza a las empresas que posees pensamiento crítico, adaptación y habilidades técnicas de alto nivel.
                      </p>
                      <div className="mt-8 flex gap-2">
                        {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />)}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-3xl font-black text-center mb-20 tracking-widest uppercase">Ruta de Formación JA Labs</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((p, idx) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/40 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h4 className="font-black text-xl mb-4 text-blue-400">{p.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">{p.desc}</p>
                {idx < 4 && <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-white/10" size={24} />}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 p-12 md:p-24 rounded-[3.5rem] bg-gradient-to-br from-blue-900/40 to-black border border-white/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Alianzas Tecnológicas Estratégicas
              </h2>
              <p className="text-lg text-white/70 mb-10 font-light">
                JA Labs trabaja mano a mano con los gigantes del sector para asegurar que recibas certificaciones válidas a nivel mundial en áreas como IA, Ciberseguridad e Inglés Técnico.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-blue-400" />
                  <span className="font-bold">Oracle Academy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-blue-400" />
                  <span className="font-bold">Google Certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-blue-400" />
                  <span className="font-bold">Cisco NetAcad</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-blue-400" />
                  <span className="font-bold">Microsoft Skills</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 opacity-30">
               <div className="h-24 bg-white/5 rounded-2xl flex items-center justify-center font-black text-2xl">ORACLE</div>
               <div className="h-24 bg-white/5 rounded-2xl flex items-center justify-center font-black text-2xl">GOOGLE</div>
               <div className="h-24 bg-white/5 rounded-2xl flex items-center justify-center font-black text-2xl">CISCO</div>
               <div className="h-24 bg-white/5 rounded-2xl flex items-center justify-center font-black text-2xl">MSFT</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
