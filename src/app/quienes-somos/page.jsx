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
  { text: "Reconocimiento 'Gold Leadership Award' otorgado por Junior Achievement International | Década de los 90´s.", icon: Trophy },
  { text: "Primer Lugar del premio 'Ayudando a quienes Ayudan' de la Fundación Gloria de Kriete | 2008.", icon: Award },
  { text: "Primer Lugar en la competencia regional del Innovation Camp, compitiendo con 15 países de América Latina y El Caribe | 2017.", icon: Star },
  { text: "Aval del World Economic Forum sobre el programa 'La Compañía' como herramienta efectiva para erradicar la pobreza juvenil | 2017.", icon: CheckCircle2 },
  { text: "Nominación por 4 años consecutivos al Premio Nobel de la Paz (JA Worldwide).", icon: Globe },
  { text: "Reconocimiento mundial de la UNESCO.", icon: Award },
];

const historicalLogos = ["MINED", "INSAFORP", "ANEP", "FEPADE", "FUSADES"];
const strategicLogos = [
  "Google", "Oracle", "Cisco", "Microsoft", "Manpower",
  "Catorce Service", "Plan Internacional", "AMCHAM",
  "Cámara Alemana", "Software El Salvador", "CASATIC",
  "Conexión", "Kodigo"
];

export default function QuienesSomosPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ── SECTION 1: HERO / HISTORIA ── */}
      <section className="relative min-h-[85vh] flex items-center pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-black">
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ja-gold/20 border border-ja-gold/40 text-ja-gold text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 animate-fade-in shadow-lg">
              <History size={16} /> Nuestra Trayectoria
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tight animate-fade-in-up">
              Forjando Excelencia. <br />
              <span className="text-gradient">Transformando el Futuro.</span>
            </h1>
            <div className="space-y-4 md:space-y-5 text-base md:text-lg text-white/90 leading-relaxed font-light max-w-3xl animate-fade-in-up delay-100 mb-8 md:mb-10 px-2 md:px-0">
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
            <div className="animate-fade-in-up delay-200">
              <Link href="/quienes-somos/historia" className="btn-primary inline-flex items-center gap-3 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 hover:scale-105 transition-transform">
                Conoce nuestro modelo de impacto <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EQUIPO DIRECTIVO ── */}
      <section className="section-padding-xl bg-white" id="equipo">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 px-4">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Equipo Directivo
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Un liderazgo con visión y compromiso social. Detrás de cada joven que transforma su vida,
              hay un equipo dedicado a construir puentes entre el talento y las oportunidades reales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {directivos.map((member) => (
              <div key={member.name} className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-3">
                <div className="aspect-[4/5] relative bg-gray-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-200 transition-transform duration-700 group-hover:scale-110">
                    <Users size={120} strokeWidth={0.5} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 md:p-8 text-center bg-white relative z-10 border-t border-gray-50">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-ja-blue font-black tracking-widest text-xs md:text-sm uppercase">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-16">
            <Link href="/quienes-somos/equipo-directivo" className="btn-dark inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl rounded-2xl shadow-xl hover:shadow-ja-blue/20">
              Contáctanos <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CONSEJO REGIONAL ── */}
      <section className="section-padding-xl bg-gray-50 border-y border-gray-100 overflow-hidden" id="consejo">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="px-4">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ja-blue/10 text-ja-blue text-xs font-bold uppercase tracking-[0.3em] mb-8 shadow-sm">
                <MapPin size={18} /> Presencia Nacional
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
                Consejo Regional
              </h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                Nuestra presencia se extiende de manera estratégica a lo largo del territorio nacional,
                garantizando la gobernanza institucional y llegando a las comunidades donde más se necesita.
              </p>
              <Link href="/quienes-somos/consejo-regional" className="btn-outline border-ja-blue text-ja-blue hover:bg-ja-blue hover:text-white inline-flex items-center gap-3 px-8 py-4 text-base md:text-lg font-bold rounded-2xl">
                Ver zonas de incidencia <ArrowRight size={22} />
              </Link>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] bg-white">
              <div className="aspect-square md:aspect-video lg:aspect-square xl:aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.125270335075!2d-89.2395705!3d13.7108619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63301a2cb4ef59%3A0xee056fcc96d337af!2sJunior%20Achievement%20El%20Salvador%20El%20Salvador!5e0!3m2!1ses-419!2ssv!4v1774318047693!5m2!1ses-419!2ssv"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: NUESTROS PIONEROS ── */}
      <section className="section-padding-xl bg-[#030d1a] text-white relative overflow-hidden" id="pioneros">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-ja-gold to-transparent opacity-30" />
        <div className="absolute -right-40 -bottom-40 w-[500px] h-[500px] bg-ja-gold/5 rounded-full blur-[150px]" />

        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="mb-8 inline-block">
              <Quote size={56} className="text-ja-gold opacity-30 mx-auto" strokeWidth={0.5} />
            </div>
            <h2 className="text-xl md:text-4xl lg:text-5xl font-serif italic mb-8 text-ja-gold leading-tight">
              "La excelencia no es un acto, sino un hábito de generaciones."
            </h2>
            <div className="h-px w-28 bg-ja-gold/30 mx-auto mb-10" />
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
              Nuestros Pioneros
            </h3>
            <p className="text-base md:text-xl text-white/70 leading-relaxed mb-12 font-light max-w-3xl mx-auto">
              Rendimos tributo a la generación fundadora de los años 70. Hombres y mujeres que, con escasos recursos tecnológicos pero una inmensa voluntad ética, sentaron las bases de nuestra institución. Su legado de rigor intelectual y compromiso social sigue siendo la brújula que guía a nuestras 5 generaciones de Alumni.
            </p>
            <Link href="/quienes-somos/pioneros" className="btn-primary bg-ja-gold hover:bg-yellow-500 text-black font-black px-10 py-4 text-lg md:text-xl inline-flex items-center gap-3 shadow-2xl shadow-ja-gold/20">
              Escucha sus historias <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ALIADOS Y RECONOCIMIENTOS ── */}
      <section className="section-padding-xl bg-white overflow-hidden" id="aliados">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 px-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Aliados y Reconocimientos
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Nuestra trayectoria nos otorga una red de alianzas que respaldan nuestra credibilidad institucional.
              En Junior Achievement no competimos con otras organizaciones; funcionamos como un
              <span className="text-ja-blue font-bold"> integrador que eleva el talento juvenil.</span>
            </p>
          </div>

          {/* 5.1: Trayectoria y Experiencia */}
          <div className="mb-24 md:mb-32">
            <div className="flex flex-col md:flex-row items-start gap-10 mb-14 px-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-3xl font-black text-gray-800 mb-6">Nuestra Historia Compartida</h3>
                <p className="text-base md:text-lg text-gray-600 leading-loose">
                  Un homenaje a las empresas e instituciones que nos acompañaron en nuestros primeros 50 años.
                  Gracias al Ministerio de Educación e INSAFORP, con quienes mantuvimos un convenio de 20 años
                  que nos permitió impactar a 70,000 jóvenes anualmente.
                </p>
              </div>
              <div className="w-24 h-px bg-gray-200 hidden md:block" />
              <div className="flex gap-4 shrink-0">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                  <span className="text-3xl md:text-4xl font-black text-ja-gold">20</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-gray-400 leading-tight">Años de <br />Convenio</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="flex overflow-hidden gap-10 md:gap-20 py-8 px-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 items-center justify-center flex-wrap">
                {historicalLogos.map(name => (
                  <div key={name} className="h-10 md:h-14 flex items-center justify-center font-black text-xl md:text-3xl text-gray-400 hover:text-ja-blue transition-colors cursor-default whitespace-nowrap">
                    {name}
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </div>
          </div>

          {/* 5.2: Aliados Estratégicos */}
          <div className="mb-24 md:mb-32">
            <div className="text-center mb-12 px-4">
              <h3 className="text-xl md:text-3xl font-black text-gray-800 mb-6">Impulsando el Presente y el Futuro</h3>
              <p className="text-base md:text-lg text-gray-600 leading-loose max-w-3xl mx-auto">
                Trabajamos de la mano con los líderes tecnológicos y gremiales del mundo para certificar a nuestro talento y conectarlo con empleos de alto valor.
              </p>
            </div>

            <div className="relative">
              <div className="flex overflow-hidden relative py-8 bg-gray-50/50 rounded-[2rem] border border-gray-100">
                <div className="flex gap-10 md:gap-16 animate-marquee whitespace-nowrap px-8 items-center">
                  {[...strategicLogos, ...strategicLogos].map((name, i) => (
                    <div key={`${name}-${i}`} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-ja-blue group-hover:bg-ja-blue group-hover:text-white transition-all">
                        <Globe size={18} />
                      </div>
                      <span className="text-base md:text-xl font-bold text-gray-700 group-hover:text-ja-blue transition-colors">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5.3: Reconocimientos Globales */}
          <div className="px-4">
            <div className="text-center mb-14 md:mb-20">
              <h3 className="text-xl md:text-3xl font-black text-gray-800 mb-6">Certificaciones que avalan nuestra gestión</h3>
              <div className="w-20 h-1 bg-ja-gold mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {reconocimientos.map((item, i) => (
                <div key={i} className="group relative p-10 md:p-12 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-ja-blue/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-150 transition-all duration-700 rotate-12">
                    <item.icon size={100} />
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-ja-gold/10 flex items-center justify-center text-ja-gold mb-8 group-hover:bg-ja-gold group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                      <item.icon size={26} />
                    </div>
                    <p className="text-base md:text-lg text-gray-700 font-medium leading-loose group-hover:text-gray-900 transition-colors">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}