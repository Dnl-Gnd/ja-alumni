"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Users, 
  MapPin, 
  Quote, 
  History, 
  Award, 
  Globe, 
  CheckCircle2,
  Trophy,
  Medal,
  Star
} from "lucide-react";

/* ───── Data ───── */
const directivos = [
  { name: "Ricardo Monterroza", role: "Director Ejecutivo", image: "/team/placeholder.png" },
  { name: "María Elena Zarpate", role: "Jefe Administrativo Contable", image: "/team/placeholder.png" },
  { name: "Dina Guadalupe González", role: "Gerente de Proyectos", image: "/team/placeholder.png" },
  { name: "Reina del Carmen Chávez", role: "Coordinadora de JA LABS", image: "/team/placeholder.png" },
  { name: "Alba María Castro", role: "Gerente de Comunicaciones", image: "/team/placeholder.png" },
  { name: "Diego Ayala", role: "Coordinador de Comunidad Alumni JA", image: "/team/placeholder.png" },
];

const reconocimientos = [
  { text: "Premio Laurel de Oro y Premio Talento Creativo | Década de los 80´s.", icon: Medal },
  { text: "Reconocimiento “Gold Leadership Award” otorgado por Junior Achievement International | Década de los 90´s.", icon: Trophy },
  { text: "Primer Lugar del premio “Ayudando a quienes Ayudan” de la Fundación Gloria de Kriete | 2008.", icon: Award },
  { text: "Primer Lugar en la competencia regional del Innovation Camp, compitiendo con 15 países de América Latina y El Caribe | 2017.", icon: Star },
  { text: "Aval del World Economic Forum sobre el programa 'La Compañía' como herramienta efectiva para erradicar la pobreza juvenil | 2017.", icon: CheckCircle2 },
  { text: "Nominación por 4 años consecutivos al Premio Nobel de la Paz (JA Worldwide).", icon: Globe },
  { text: "Reconocimiento mundial de la UNESCO.", icon: Award },
];

export default function QuienesSomosPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ── SECTION 1: HERO / HISTORIA ── */}
      <section className="relative min-h-[90vh] flex items-center pt-hero pb-20 overflow-hidden bg-black">
        <Image
          src="/quienes_somos_hero.png"
          alt="Historia JA El Salvador"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
        
        <div className="container-max relative z-10 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-ja-gold/20 border border-ja-gold/40 text-ja-gold text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.3em] mb-12 animate-fade-in shadow-lg">
              <History size={16} /> Nuestra Trayectoria
            </div>
            {/* Letra del hero aún más pequeña según solicitado */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-12 leading-[1.1] tracking-tight animate-fade-in-up">
              Forjando Excelencia. <br />
              <span className="text-gradient">Transformando el Futuro.</span>
            </h1>
            <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-3xl animate-fade-in-up delay-100 mb-16 px-2 md:px-0">
              <p>
                Junior Achievement es parte de una red mundial presente en más de 100 países y 6 continentes, 
                que cada año capacita a <span className="text-ja-gold font-bold underline decoration-ja-gold/30">23 millones</span> de jóvenes.
              </p>
              <p>
                En El Salvador, nuestra historia comenzó hace más de 50 años. Nacimos en la década de los 70 impulsados por la empresa privada (ANEP), 
                con la firme convicción de empoderar a la juventud.
              </p>
              <p>
                Hoy, medio siglo después, nuestra esencia sigue siendo la misma: evolucionamos de ser proveedores 
                de capacitación a ser el puente sistémico entre la educación y el empleo real.
              </p>
            </div>
            <div className="mt-16 animate-fade-in-up delay-200">
              <Link href="/quienes-somos/historia" className="btn-primary inline-flex items-center gap-4 text-lg px-8 py-4 hover:scale-105 transition-transform">
                Conoce nuestro modelo de impacto <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EQUIPO DIRECTIVO ── */}
      <section className="py-24 md:py-40 bg-white" id="equipo">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32 px-4">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
              Equipo Directivo
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Un liderazgo con visión y compromiso social. Detrás de cada joven que transforma su vida, 
              hay un equipo dedicado a construir puentes entre el talento y las oportunidades reales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {directivos.map((member, i) => (
              <div key={member.name} className="group relative bg-white rounded-[3rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-4">
                <div className="aspect-[4/5] relative bg-gray-50 overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-200 transition-transform duration-700 group-hover:scale-110">
                     <Users size={140} strokeWidth={0.5} />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-10 text-center bg-white relative z-10 border-t border-gray-50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.name}</h3>
                  <p className="text-ja-blue font-black tracking-widest text-sm uppercase">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 md:mt-32">
            <Link href="/quienes-somos/equipo-directivo" className="btn-dark inline-flex items-center gap-4 px-12 py-5 text-xl rounded-2xl shadow-xl hover:shadow-ja-blue/20">
              Contáctanos <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CONSEJO REGIONAL ── */}
      <section className="py-24 md:py-40 bg-gray-50 border-y border-gray-100 overflow-hidden" id="consejo">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div className="px-4">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-ja-blue/10 text-ja-blue text-xs font-bold uppercase tracking-[0.3em] mb-10 shadow-sm">
                <MapPin size={18} /> Presencia Nacional
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-10 tracking-tight">
                Consejo Regional
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-xl">
                Nuestra presencia se extiende de manera estratégica a lo largo del territorio nacional, 
                garantizando la gobernanza institucional y llegando a las comunidades donde más se necesita.
              </p>
              <Link href="/quienes-somos/consejo-regional" className="btn-outline border-ja-blue text-ja-blue hover:bg-ja-blue hover:text-white inline-flex items-center gap-4 px-10 py-5 text-lg font-bold rounded-2xl">
                Ver zonas de incidencia <ArrowRight size={22} />
              </Link>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)] bg-white transform transition-transform duration-700">
               <div className="aspect-square md:aspect-video lg:aspect-square xl:aspect-video w-full">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.125270335075!2d-89.2395705!3d13.7108619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63301a2cb4ef59%3A0xee056fcc96d337af!2sJunior%20Achievement%20El%20Salvador%20El%20Salvador!5e0!3m2!1ses-419!2ssv!4v1774318047693!5m2!1ses-419!2ssv" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen="" 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: NUESTROS PIONEROS ── */}
      <section className="py-24 md:py-64 bg-[#030d1a] text-white relative overflow-hidden" id="pioneros">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-ja-gold to-transparent opacity-30" />
        <div className="absolute -right-40 -bottom-40 w-[600px] h-[600px] bg-ja-gold/5 rounded-full blur-[150px]" />
        
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="mb-12 inline-block">
              <Quote size={64} className="text-ja-gold opacity-30 mx-auto" strokeWidth={0.5} />
            </div>
            <h2 className="text-2xl md:text-5xl font-serif italic mb-12 text-ja-gold leading-tight">
              "La excelencia no es un acto, sino un hábito de generaciones."
            </h2>
            <div className="h-px w-32 bg-ja-gold/30 mx-auto mb-16" />
            <h3 className="text-4xl md:text-7xl font-black mb-10 tracking-tight">
              Nuestros Pioneros
            </h3>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-16 font-light max-w-3xl mx-auto">
              Rendimos tributo a la generación fundadora de los años 70. Hombres y mujeres que sentaron las bases de nuestra institución. Su legado es nuestra brújula.
            </p>
            <Link href="/quienes-somos/pioneros" className="btn-primary bg-ja-gold hover:bg-yellow-500 text-black font-black px-12 py-5 text-xl inline-flex items-center gap-4 shadow-2xl shadow-ja-gold/20">
              Escucha sus historias <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ALIADOS Y RECONOCIMIENTOS ── */}
      <section className="py-24 md:py-40 bg-white" id="aliados">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32 px-4">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-10 tracking-tight">
              Aliados y Reconocimientos
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Nuestra trayectoria nos otorga una red de alianzas que respaldan nuestra credibilidad institucional.
            </p>
          </div>

          {/* 5.1: Trayectoria */}
          <div className="mb-24 md:mb-32 px-4">
            <div className="bg-gray-50/50 p-10 md:p-20 rounded-[3rem] border border-gray-100">
               <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-30 grayscale hover:opacity-100 transition-opacity">
                 {['MINED', 'INSAFORP', 'ANEP', 'FEPADE', 'FUSADES'].map(name => (
                   <div key={name} className="h-10 flex items-center font-black text-2xl text-gray-500">{name}</div>
                 ))}
               </div>
            </div>
          </div>

          <div className="px-4">
            <div className="bg-ja-blue/[0.02] rounded-[3.5rem] p-10 md:p-20 border border-ja-blue/5 shadow-2xl shadow-ja-blue/5">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {reconocimientos.map((item, i) => (
                  <div key={i} className="flex flex-col gap-6 p-8 bg-white rounded-[2rem] border border-gray-50 shadow-sm transition-all hover:-translate-y-2 group">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-ja-gold/10 flex items-center justify-center text-ja-gold group-hover:bg-ja-gold group-hover:text-white transition-colors">
                      <item.icon size={28} />
                    </div>
                    <p className="text-base text-gray-700 font-medium">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
