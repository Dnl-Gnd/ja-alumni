"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, MapPin, Clock, Mail, User, Phone,
  MessageSquare, Send, X, ChevronDown, CheckCircle2
} from "lucide-react";
import { chatbotKnowledge, defaultResponse } from "@/data/chatbotKnowledge";

export default function ContactoPage() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", text: "¡Hola! Bienvenido a Junior Achievement El Salvador. ¿En qué te puedo ayudar hoy?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showFAQ, setShowFAQ] = useState(true);

  const handleFAQClick = (question, answer) => {
    setChatMessages(prev => [...prev, { type: "user", text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [...prev, { type: "bot", text: answer }]);
    }, 1000);
  };

  const handleOpenEndedSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue("");
    setChatMessages(prev => [...prev, { type: "user", text: userText }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      const normalizedQuery = userText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let bestMatch = null;
      let maxScore = 0;

      chatbotKnowledge.forEach(knowledge => {
        let score = 0;
        knowledge.keywords.forEach(keyword => {
          if (normalizedQuery.includes(keyword)) score++;
        });
        if (score > maxScore) {
          maxScore = score;
          bestMatch = knowledge;
        }
      });

      const reply = maxScore > 0 ? bestMatch.response : defaultResponse;
      setChatMessages(prev => [...prev, { type: "bot", text: reply }]);
    }, 1200);
  };

  const staffDirectory = [
    { area: "Dirección General", name: "Ricardo Monterroza", role: "Director Ejecutivo", email: "rmonterroza@jaelsalvador.org" },
    { area: "Administración y Finanzas", name: "María Elena Zarpate", role: "Jefe Administrativo Contable", email: "mezarpate@jaelsalvador.org" },
    { area: "JA Educación (Programas Escolares)", name: "Dina Guadalupe González", role: "Gerente de Proyectos", email: "lgonzalez@jaelsalvador.org" },
    { area: "JA Labs (Empleabilidad y Tecnología)", name: "Reina del Carmen Chávez", role: "Coordinadora de JA LABS", email: "rchavez@jaelsalvador.org" },
    { area: "Relaciones Públicas y Prensa", name: "Alba María Castro", role: "Gerente de Comunicaciones", email: "acastro@jaelsalvador.org" },
    { area: "Comunidad Alumni", name: "Diego Ayala", role: "Coordinador de Comunidad Alumni JA", email: "dayala@jaelsalvador.org" }
  ];

  const faqOptions = [
    { q: "Quiero aplicar a una beca (JA Labs).", a: "¡Excelente decisión! JA Labs es nuestro hub de empleabilidad tecnológica para jóvenes de 20 a 29 años. Para conocer los requisitos o postularte, por favor escribe a Reina Chávez a rchavez@jaelsalvador.org o visita nuestra sección 'Campus JA'." },
    { q: "Soy Alumni y quiero reconectar.", a: "¡Qué alegría tenerte de vuelta! Eres parte de nuestra familia de 1 millón de salvadoreños. Puedes actualizar tus datos en nuestra sección 'Comunidad JA' o escribirle a Diego Ayala a dayala@jaelsalvador.org para enterarte de eventos y networking." },
    { q: "Quiero ser aliado o donante.", a: "¡Gracias por tu interés en invertir en el talento salvadoreño! Tenemos esquemas de patrocinio de becas, donaciones corporativas y mentorías. Por favor, déjanos tu correo para que nuestro Director Ejecutivo se ponga en contacto contigo, o visita la sección 'Donación'." },
    { q: "Horarios y ubicación.", a: "Te esperamos en nuestro Campus Santa Tecla de lunes a viernes de 8:00 a.m. a 5:30 p.m. sin cerrar al mediodía. ¿Te gustaría ver nuestra ubicación en el mapa?" }
  ];

  return (
    <main className="overflow-x-hidden relative">

      {/* ── SECCIÓN 1: HERO BANNER / INTRODUCCIÓN ── */}
      <section className="relative min-h-[85vh] flex items-center pt-32 md:pt-48 pb-20 overflow-hidden bg-black" id="hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80"
            alt="Campus JA El Salvador"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="container-max relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ja-blue/20 border border-ja-blue/40 text-blue-200 text-xs font-bold uppercase tracking-[0.3em] mb-8 shadow-lg">
              <MessageSquare size={16} /> Contacto Directo
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
              Estamos aquí para escucharte.<br className="hidden md:block" /> <span className="text-ja-gold">Hablemos del futuro.</span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 leading-relaxed md:leading-loose mb-12 max-w-3xl mx-auto font-light">
              Ya sea que quieras formar parte de nuestros programas, sumarte como aliado estratégico, realizar una donación o simplemente reconectar con tu generación Alumni, nuestro equipo está listo para atenderte.
            </p>

            <button
              onClick={() => document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-black px-10 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg transition-all shadow-2xl hover:-translate-y-1"
            >
              Escríbenos ahora <ArrowRight size={22} className="text-ja-blue" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 2: CAMPUS SANTA TECLA Y HORARIOS ── */}
      <section className="section-padding-xl bg-gray-50" id="campus">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: Text and Hours */}
            <div className="px-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                Nuestra Sede Principal
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-loose mb-12">
                Te esperamos en nuestro Campus Santa Tecla, un ecosistema de innovación valorado en 5 millones de dólares. Contamos con un auditorio para 400 personas, aulas dinámicas para 300 estudiantes y un edificio de laboratorios tecnológicos de primer nivel.
              </p>

              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-ja-gold/10 text-ja-gold rounded-xl">
                    <Clock size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Horarios de Atención</h3>
                </div>
                <p className="text-gray-600 mb-6">Trabajamos en horario continuo para tu comodidad:</p>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <div className="mt-1 text-ja-blue">
                    <CheckCircle2 size={24} className="fill-current text-white" />
                  </div>
                  <p className="text-lg font-bold text-gray-800 leading-relaxed">
                    Lunes a viernes de 8:00 a.m. a 5:30 p.m.<br />
                    <span className="text-sm text-gray-500 font-normal">(Sin cerrar al mediodía)</span>
                  </p>
                </div>
              </div>

              <Link href="/contactanos/campus" className="inline-flex items-center gap-3 text-ja-blue hover:text-blue-800 font-bold text-lg transition-colors group">
                <MapPin size={24} /> Ver indicaciones en el mapa
                <span className="block h-px w-0 bg-ja-blue group-hover:w-full transition-all absolute bottom-0"></span>
              </Link>
            </div>

            {/* Right: Map & Component */}
            <div className="px-4 space-y-8">
              <div className="aspect-video lg:aspect-square w-full bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.125270335075!2d-89.2395705!3d13.7108619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63301a2cb4ef59%3A0xee056fcc96d337af!2sJunior%20Achievement%20El%20Salvador%20El%20Salvador!5e0!3m2!1ses-419!2ssv!4v1774318047693!5m2!1ses-419!2ssv"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación JA El Salvador"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: DIRECTORIO ESTRATÉGICO DE STAFF ── */}
      <section className="section-padding-xl bg-white" id="directorio">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              Directorio por Áreas
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-loose max-w-3xl mx-auto">
              Comunícate directamente con el responsable del área de tu interés para una atención rápida y personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {staffDirectory.map((staff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="bg-white px-4 py-2 rounded-full inline-block text-xs font-bold tracking-wider text-ja-blue uppercase mb-6 shadow-sm border border-gray-100">
                  {staff.area}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-1">{staff.name}</h3>
                <p className="text-gray-500 text-sm font-medium mb-8">{staff.role}</p>

                <a href={`mailto:${staff.email}`} className="flex items-center gap-3 text-gray-600 hover:text-ja-blue transition-colors w-full bg-white p-4 rounded-xl border border-gray-200 group-hover:border-ja-blue/30 overflow-hidden">
                  <Mail size={18} className="flex-shrink-0" />
                  <span className="text-sm font-medium truncate">{staff.email}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: FORMULARIO DE CONTACTO DIRECTO ── */}
      <section className="section-padding-xl bg-gray-900 text-white relative overflow-hidden" id="formulario">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-ja-gold/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-ja-blue/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 px-4">

            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
                Envíanos un mensaje
              </h2>
              <p className="text-base md:text-xl text-gray-400 leading-loose mb-12 font-light">
                Utiliza el siguiente formulario para redirigir tu mensaje al departamento correspondiente de manera inmediata.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Ubicación</h4>
                    <p className="text-gray-400 mt-1">Campus Santa Tecla, El Salvador</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Llámanos</h4>
                    <p className="text-gray-400 mt-1">PBX: (503) 2222-2222</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                <form className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Nombre completo</label>
                      <div className="relative">
                        <User align="left" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 pl-12 focus:ring-2 focus:ring-ja-blue focus:border-transparent transition-all outline-none" placeholder="Tu nombre" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Correo electrónico</label>
                      <div className="relative">
                        <Mail align="left" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="email" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 pl-12 focus:ring-2 focus:ring-ja-blue focus:border-transparent transition-all outline-none" placeholder="tucorreo@ejemplo.com" />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Teléfono / WhatsApp</label>
                      <div className="relative">
                        <Phone align="left" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="tel" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 pl-12 focus:ring-2 focus:ring-ja-blue focus:border-transparent transition-all outline-none" placeholder="+503 0000-0000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">¿Cuál es tu interés principal?</label>
                      <div className="relative">
                        <ChevronDown align="right" size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <select className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 appearance-none focus:ring-2 focus:ring-ja-blue focus:border-transparent transition-all outline-none">
                          <option value="" disabled selected>Selecciona una opción</option>
                          <option value="educacion">Información JA Educación</option>
                          <option value="becas">Becas JA Labs</option>
                          <option value="alumni">Soy Alumni</option>
                          <option value="aliado">Quiero Donar o ser Aliado</option>
                          <option value="voluntariado">Voluntariado y Mentoría</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Mensaje</label>
                    <textarea rows="5" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 focus:ring-2 focus:ring-ja-blue focus:border-transparent transition-all outline-none resize-none" placeholder="Escribe tu mensaje detallado aquí..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-ja-blue hover:bg-blue-800 text-white font-black py-5 rounded-xl text-lg transition-colors flex items-center justify-center gap-3 shadow-lg shadow-ja-blue/30">
                    Enviar Mensaje <Send size={20} />
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: CHATBOT DE PREGUNTAS FRECUENTES (FAQ) ── */}
      {/* Botón flotante para abrir el chat */}
      <AnimatePresence>
        {!isChatbotOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsChatbotOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-ja-gold text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-yellow-500 hover:scale-110 transition-all border border-ja-gold/20"
          >
            <MessageSquare size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ventana de Chatbot */}
      <AnimatePresence>
        {isChatbotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 md:right-10 z-50 w-[90vw] md:w-[400px] bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.2)] border border-gray-200 overflow-hidden flex flex-col"
            style={{ maxHeight: '80vh' }}
          >
            {/* Chatbot Header */}
            <div className="bg-ja-blue p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Image src="/logo.svg" alt="JA Logo" width={20} height={20} className="w-auto h-4 brightness-0 invert" unoptimized />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">JA Ayuda</h4>
                  <p className="text-xs text-blue-200">Asistente Virtual</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatbotOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chatbot Messages */}
            <div className="flex-1 p-5 overflow-y-auto bg-gray-50 flex flex-col gap-4 max-h-[400px]">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl ${msg.type === 'user'
                      ? 'bg-ja-gold text-black font-medium rounded-tr-sm'
                      : 'bg-white border border-gray-200 text-gray-700 rounded-tl-sm shadow-sm'
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
            </div>

            {/* Chatbot Options (Quick Replies) */}
            <div className="p-4 bg-white flex flex-col gap-2 relative z-10 w-full">
              <button
                type="button"
                onClick={() => setShowFAQ(!showFAQ)}
                className="flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 hover:text-gray-600 transition-colors w-full text-left focus:outline-none"
              >
                <span>Preguntas Frecuentes</span>
                <ChevronDown size={14} className={`transform transition-transform ${showFAQ ? "" : "rotate-180"}`} />
              </button>

              <AnimatePresence>
                {showFAQ && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
                    className="flex flex-col gap-2 overflow-hidden"
                  >
                    {faqOptions.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleFAQClick(opt.q, opt.a)}
                        disabled={isTyping}
                        className="text-left w-full p-2.5 rounded-xl border border-gray-200 hover:border-ja-gold hover:bg-ja-gold/5 text-sm font-medium text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {opt.q}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Chatbot Text Input */}
            <form onSubmit={handleOpenEndedSubmit} className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu pregunta..."
                disabled={isTyping}
                className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ja-gold focus:border-transparent transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className="w-10 h-10 rounded-full bg-ja-blue hover:bg-blue-800 text-white flex items-center justify-center transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send size={16} className="-ml-0.5 mt-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
