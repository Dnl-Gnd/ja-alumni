"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lightbulb, DollarSign, Smile, ArrowLeft, Download, GraduationCap, Globe, BookOpen } from "lucide-react";

export default function JAEducacionPage() {
  const pillars = [
    {
      title: "Emprendimiento",
      desc: "Los estudiantes fundan y operan empresas reales con 'La Compañía'. Aprenden gestión de riesgos y mentalidad de negocios.",
      icon: <Lightbulb size={32} className="text-ja-gold" />,
      color: "bg-ja-gold/10"
    },
    {
      title: "Educación Financiera",
      desc: "Enseñamos ahorro, presupuesto y decisiones inteligentes desde edades tempranas con 'Cuentas Contigo'.",
      icon: <DollarSign size={32} className="text-ja-green-500" />,
      color: "bg-ja-green-500/10"
    },
    {
      title: "Habilidades para la Vida",
      desc: "Desarrollamos resiliencia, liderazgo y resolución de conflictos. Competencias que los libros no enseñan.",
      icon: <Smile size={32} className="text-ja-blue" />,
      color: "bg-ja-blue/10"
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      <div className="container-max">
        <Link href="/campus" className="inline-flex items-center gap-2 text-ja-blue font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Volver a Campus
        </Link>

        <section className="mb-24 px-4 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-ja-blue/10 text-ja-blue text-xs font-black uppercase tracking-[0.3em] mb-8">
            <GraduationCap size={18} /> Programas de 9 a 18 años
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
            JA Educación: <br />
            <span className="text-ja-blue">Formación Global</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            No implementamos programas locales; traemos la misma currícula que reciben estudiantes en Estados Unidos, Alemania e Inglaterra. Con el aval del Foro Económico Mundial, combatimos la pobreza juvenil desde la raíz.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {pillars.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{item.desc}</p>
              <div className="h-px bg-gray-100 w-full mb-8" />
              <button className="text-ja-blue font-bold text-sm tracking-widest uppercase flex items-center gap-2 group">
                Ver currícula <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        <section className="bg-gray-50 rounded-[3rem] p-12 md:p-24 border border-gray-100 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
              Recursos para Educadores e Instituciones
            </h2>
            <p className="text-lg text-gray-600 mb-10 font-light">
              Descarga los manuales de marca y currículas oficiales provistos por JA Américas para implementar en tu centro educativo.
            </p>
            <button className="btn-primary px-10 py-5 bg-ja-blue text-white flex items-center gap-3 font-black text-lg shadow-xl shadow-ja-blue/20">
              <Download size={24} /> Descargar Catálogo
            </button>
          </div>
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image src="/C:/Users/danie/.gemini/antigravity/brain/aa8a8f65-5505-4d5c-ac20-ce6704969702/ja_educacion_students_1774325409986.png" alt="Edu" fill className="object-cover" />
          </div>
        </section>
      </div>
    </main>
  );
}
