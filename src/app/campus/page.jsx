"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users2,
  Microscope,
  Rocket,
  ArrowRight,
  Play,
  Trophy,
  GraduationCap,
  Lightbulb,
  DollarSign,
  Smile,
  Download,
  Terminal,
  Cpu,
  Handshake,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function CampusPage() {
  const [activeTab, setActiveTab] = useState("emprendimiento");

  const infrastructure = [
    {
      title: "Auditorio Principal",
      desc: "Capacidad para 400 personas, ideal para conferencias y graduaciones.",
      icon: <Users2 size={28} />,
    },
    {
      title: "Aulas Dinámicas",
      desc: "Espacios formativos simultáneos para más de 300 estudiantes.",
      icon: <GraduationCap size={28} />,
    },
    {
      title: "Edificio de Laboratorios",
      desc: "Equipamiento tecnológico propio para garantizar el acceso a jóvenes sin recursos.",
      icon: <Microscope size={28} />,
    },
    {
      title: "Coworking Space",
      desc: "Un ecosistema abierto para que nuestros Alumni emprendedores desarrollen sus proyectos.",
      icon: <Rocket size={28} />,
    },
  ];

  const pillars = {
    emprendimiento: {
      label: "Emprendimiento",
      text: 'A través de programas insignia con más de 100 años de existencia como "La Compañía", los estudiantes fundan y operan empresas reales, aprendiendo el valor del riesgo, la innovación y la gestión de negocios.',
      icon: <Lightbulb size={40} className="text-ja-gold" />,
    },
    finanzas: {
      label: "Educación Financiera",
      text: 'Con iniciativas como "Cuentas Contigo" (para los más pequeños), enseñamos la importancia del ahorro, el presupuesto y la toma de decisiones financieras inteligentes desde edades tempranas.',
      icon: <DollarSign size={40} className="text-emerald-500" />,
    },
    habilidades: {
      label: "Habilidades para la Vida",
      text: 'Desarrollamos las competencias blandas ("soft skills") que los libros no enseñan: resiliencia, liderazgo empático y resolución de conflictos.',
      icon: <Smile size={40} className="text-ja-blue" />,
    },
  };

  const timelineSteps = [
    { step: 1, title: "Diagnóstico Inicial", desc: "Evaluación de tu perfil técnico y estado psicoemocional." },
    { step: 2, title: "Formación Base", desc: "Orientación laboral y dominio de herramientas tecnológicas." },
    { step: 3, title: "Formación a la Medida", desc: "Rutas de aprendizaje diseñadas junto a la empresa privada." },
    { step: 4, title: "Pasantía Real", desc: "Un mes de experiencia práctica en una empresa aliada durante tu formación." },
    { step: 5, title: "Acompañamiento", desc: "60 días de apoyo psicológico post-inserción para asegurar tu retención y éxito laboral." },
  ];

  const ecosistema = [
    {
      title: "Tecnologías Emergentes",
      desc: "Alianzas estratégicas con Oracle, Cisco, Google y Microsoft. Acceso a becas de certificación, programas de inglés y formación en Inteligencia Artificial y Ciberseguridad.",
      icon: <Cpu size={32} className="text-blue-400" />,
    },
    {
      title: "Empresas Aliadas",
      desc: "Nuestra red no solo dona, también contrata. Te conectamos directamente con los empleadores más grandes del país.",
      icon: <Handshake size={32} className="text-blue-400" />,
    },
    {
      title: 'Sello "Job Engineer"',
      desc: 'Más que un diploma, te gradúas con nuestra marca registrada. Ser un "Job Engineer JA" garantiza a las empresas que posees pensamiento crítico, adaptación y habilidades técnicas de alto nivel.',
      icon: <ShieldCheck size={32} className="text-blue-400" />,
    },
  ];

  return (
    <main className="overflow-x-hidden">

      {/* ── SECCIÓN 1: HERO BANNER / CAMPUS JA ── */}
      {/* Nota: Ideal para colocar de fondo un video estilo "Tour" o "Storytelling" que muestre las instalaciones reales en movimiento */}
      <section className="relative min-h-screen flex items-center pt-40 pb-40 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
            alt="Campus JA Tour"
            fill
            className="object-cover opacity-40"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="container-max relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest mb-10">
              <Play size={14} className="fill-white" /> Campus Físico · El Salvador
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
              Campus JA: El Epicentro del Talento
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-14 max-w-2xl font-light">
              No somos solo un programa virtual; somos un ecosistema real. Nuestro campus es el puente físico donde la educación de clase mundial se encuentra con las exigencias de la empresa privada. Descubre nuestras instalaciones y los dos grandes caminos que ofrecemos para transformar tu futuro.
            </p>
            <Link href="/campus/santa-tecla" className="inline-flex items-center gap-3 bg-ja-blue hover:bg-blue-600 text-white font-black px-12 py-5 rounded-full text-lg transition-all shadow-2xl shadow-ja-blue/30">
              Agenda un recorrido <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 2: CAMPUS SANTA TECLA (Infraestructura) ── */}
      {/* Nota: Diseñada con iconos y métricas destacadas junto a galería de fotos del edificio */}
      <section className="section-padding-xl bg-white" id="santa-tecla">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center mb-32">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                Campus Santa Tecla
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 font-light">
                Un activo estratégico diseñado para la innovación y la excelencia. Con una inversión en infraestructura de 5 millones de dólares, nuestro inmueble de primer nivel cuenta con los espacios idóneos para la formación híbrida, el networking y la incubación de ideas.
              </p>
              <div className="inline-flex items-center gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 w-full">
                <div className="bg-ja-blue/10 p-5 rounded-2xl flex-shrink-0">
                  <Trophy className="text-ja-blue" size={36} />
                </div>
                <div>
                  <div className="text-4xl font-black text-ja-blue">$5M+</div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-[0.25em] mt-1">Inversión en Infraestructura</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
                  alt="Infraestructura Campus Santa Tecla"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-10">
                  <Link href="/campus/santa-tecla" className="text-white font-black flex items-center gap-2 hover:underline text-sm uppercase tracking-widest">
                    Ver galería completa <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Infrastructure Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {infrastructure.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:bg-white hover:border-ja-blue/10 transition-all duration-400 group"
              >
                <div className="p-5 rounded-2xl bg-ja-blue/10 text-ja-blue w-fit mb-10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-5">{item.title}</h3>
                <p className="text-gray-500 leading-loose text-[0.9375rem]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: JA EDUCACIÓN ── */}
      {/* Nota: Fondo claro. Tabs para navegar entre los 3 pilares */}
      <section className="section-padding-xl bg-gray-50 border-y border-gray-200" id="educacion">
        <div className="container-max">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              JA Educación: Formación de Clase Mundial
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-14">
              Dirigido a jóvenes de 9 a 18 años. No implementamos programas locales; traemos a El Salvador la misma currícula que reciben estudiantes en Estados Unidos, Alemania, Inglaterra y Japón. Con el aval del Foro Económico Mundial y las Naciones Unidas, combatimos la pobreza juvenil desde la raíz.
            </p>
            {/* Quoted profile */}
            <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-14 shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-ja-blue/5 rounded-bl-full" />
              <p className="text-xl md:text-2xl text-gray-800 font-serif italic leading-relaxed relative">
                "Un joven con pensamiento crítico, razonamiento lógico, manejo de finanzas personales, capacidad de trabajo en equipo y mentalidad emprendedora."
              </p>
              <p className="mt-6 text-xs font-black text-ja-blue uppercase tracking-[0.3em]">Perfil de Egreso JA</p>
            </div>
          </div>

          {/* Sub-sección 3.1 */}
          <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-black text-gray-700 mb-12 text-center uppercase tracking-widest text-sm">Nuestros Pilares Formativos</h3>

            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {Object.entries(pillars).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 ${
                    activeTab === key
                      ? "bg-ja-blue text-white shadow-xl shadow-ja-blue/25"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {val.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="grid md:grid-cols-2 gap-16 items-center min-h-[320px] py-8"
              >
                <div className="flex justify-center items-center">
                  <div className="w-56 h-56 rounded-full bg-gray-50 border border-gray-100 shadow-inner flex items-center justify-center">
                    <div className="scale-[2]">{pillars[activeTab].icon}</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                    {pillars[activeTab].label}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {pillars[activeTab].text}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <button className="inline-flex items-center gap-3 border-2 border-ja-blue text-ja-blue hover:bg-ja-blue hover:text-white font-black px-12 py-5 rounded-full text-lg transition-all duration-300">
              <Download size={22} />
              Descargar Catálogo de Programas Escolares
            </button>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: JA LABS ── */}
      {/* Nota: Diseño corporativo/tecnológico con colores más intensos. Producto "estrella". */}
      <section className="section-padding-xl bg-[#030d1a] text-white overflow-hidden" id="labs">
        <div className="container-max">

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-32">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-10 border border-blue-500/20">
              <Terminal size={16} /> Hub de Empleabilidad · 20 a 29 años
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
              JA Labs: Empleabilidad y Emprendimiento Real
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
              El nuevo hub para jóvenes de 20 a 29 años. JA Labs es el puente definitivo entre tu formación académica y el mercado laboral real. No enseñamos teoría general; certificamos las competencias exactas que la empresa privada está demandando hoy.
            </p>
          </div>

          {/* Sub-sección 4.1: Timeline */}
          <div className="mb-32">
            <h3 className="text-2xl font-black uppercase tracking-widest text-center mb-20 text-white/80">
              El Proceso JA Labs
            </h3>
            <div className="relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
                {timelineSteps.map((item, idx) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative z-10 flex flex-col items-center text-center px-6 py-4"
                  >
                    <div className="w-24 h-24 rounded-full bg-[#030d1a] border-2 border-blue-500 flex items-center justify-center mb-10 text-3xl font-black text-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.25)] flex-shrink-0">
                      {item.step}
                    </div>
                    <h4 className="font-black text-lg mb-5 text-white">{item.title}</h4>
                    <p className="text-sm text-white/60 leading-loose">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-sección 4.2: Ecosistema Tecnológico */}
          <div className="mb-20">
            <h3 className="text-2xl font-black uppercase tracking-widest text-center mb-20 text-white/80">
              Ecosistema Tecnológico
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              {ecosistema.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-14 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-400 backdrop-blur-sm"
                >
                  <div className="mb-10">{card.icon}</div>
                  <h3 className="text-2xl font-black mb-6 text-white">{card.title}</h3>
                  <p className="text-white/70 leading-loose text-[0.9375rem]">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/campus/ja-labs" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black px-12 py-5 rounded-full text-lg transition-all shadow-2xl shadow-blue-600/20">
              Aplica a una Beca en JA Labs <ArrowRight size={22} />
            </Link>
            <Link href="/campus/ja-labs" className="inline-flex items-center gap-3 border border-white/30 hover:bg-white/5 text-white font-black px-12 py-5 rounded-full text-lg transition-all">
              Conoce a nuestros Aliados Tecnológicos
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
