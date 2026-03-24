"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Users2, Microscope, Rocket, ArrowLeft, CheckCircle2, MapPin } from "lucide-react";

export default function SantaTeclaPage() {
  const features = [
    { title: "Auditorio Principal", desc: "Espacio de primer nivel para 400 personas con tecnología audiovisual de punta.", icon: <Users2 size={24} /> },
    { title: "Aulas Dinámicas", desc: "Módulos flexibles para formación híbrida y trabajo colaborativo.", icon: <Building2 size={24} /> },
    { title: "Laboratorios Tech", desc: "Equipamiento de última generación para reducir la brecha digital.", icon: <Microscope size={24} /> },
    { title: "Zona Coworking", desc: "Punto de encuentro para emprendedores Alumni y networking empresarial.", icon: <Rocket size={24} /> }
  ];

  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      <div className="container-max">
        <Link href="/campus" className="inline-flex items-center gap-2 text-ja-blue font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Volver a Campus
        </Link>

        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-ja-blue/10 text-ja-blue text-xs font-black uppercase tracking-widest mb-6">
                <MapPin size={16} /> Santa Tecla, El Salvador
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                Infraestructura de <br />
                <span className="text-ja-blue">Clase Mundial</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 font-light">
                Nuestro campus central en Santa Tecla no es solo un edificio; es una declaración de intenciones. Con una inversión de 5 millones de dólares, hemos creado el espacio físico necesario para que el talento salvadoreño compita globalmente.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="text-3xl font-black text-ja-blue">4,500m²</div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Área Construída</div>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="text-3xl font-black text-ja-blue">700+</div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Capacidad Simultánea</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image src="/C:/Users/danie/.gemini/antigravity/brain/aa8a8f65-5505-4d5c-ac20-ce6704969702/santa_tecla_building_1774325392677.png" alt="Building" fill className="object-cover" />
            </motion.div>
          </div>
        </section>

        <section className="py-24 border-t border-gray-100">
          <h2 className="text-3xl font-black text-center mb-16">Espacios Diseñados para Impactar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, idx) => (
              <motion.div 
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="bg-ja-blue/10 w-12 h-12 rounded-xl flex items-center justify-center text-ja-blue mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-ja-blue rounded-[3rem] p-12 md:p-24 text-white text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight max-w-3xl mx-auto">
            ¿Quieres conocer nuestras instalaciones en persona?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto font-light">
            Organizamos tours semanales para empresas, instituciones educativas y futuros estudiantes.
          </p>
          <button className="bg-white text-ja-blue font-black px-12 py-5 rounded-full text-xl hover:bg-gray-100 transition-all shadow-xl">
            Agendar Recorrido
          </button>
        </section>
      </div>
    </main>
  );
}
