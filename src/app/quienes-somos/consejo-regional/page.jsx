"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Globe, Users } from "lucide-react";

export default function ConsejoRegionalPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-hero pb-20">
      <div className="container-max px-4">
        <Link href="/quienes-somos" className="inline-flex items-center gap-2 text-ja-blue font-bold mb-12 hover:underline">
          <ArrowLeft size={20} /> Volver a Quiénes Somos
        </Link>
        
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-gray-100">
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-ja-blue/10 text-ja-blue text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin size={16} /> Nuestra Sede y Alcance
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              Consejo Regional
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Junior Achievement El Salvador opera desde su sede central, coordinando esfuerzos con 
              aliados estratégicos en todo el país para llevar programas de educación financiera, 
              preparación para el trabajo y emprendimiento a miles de jóvenes salvadoreños.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <div className="aspect-video w-full bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.125270335075!2d-89.2395705!3d13.7108619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63301a2cb4ef59%3A0xee056fcc96d337af!2sJunior%20Achievement%20El%20Salvador%20El%20Salvador!5e0!3m2!1ses-419!2ssv!4v1774318047693!5m2!1ses-419!2ssv" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "450px" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 bg-ja-blue text-white rounded-[2rem] shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Globe size={24} /> Información de Sede
                </h3>
                <p className="opacity-80 leading-relaxed mb-6">
                  Ubicados estratégicamente para coordinar el impacto nacional de JA.
                </p>
                <div className="space-y-4 text-sm">
                  <p><strong>Dirección:</strong> San Salvador, El Salvador.</p>
                  <p><strong>Teléfono:</strong> +503 22xx-xxxx</p>
                  <p><strong>Email:</strong> info@jaelsalvador.org</p>
                </div>
              </div>

              <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                  <Users size={24} className="text-ja-gold" /> Impacto Regional
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Contamos con representación en los 14 departamentos a través de nuestra red de voluntarios y centros escolares aliados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
