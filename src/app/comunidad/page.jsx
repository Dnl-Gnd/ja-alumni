"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Globe, Users, Terminal, Wrench, PackageCheck, Landmark, 
  MapPin, Video, HeartHandshake, Lightbulb, Play
} from "lucide-react";

export default function ComunidadPage() {
  const soyJaStories = [
    {
      title: "El salto tecnológico",
      desc: "La historia de superación de nuestra colaboradora que pasó de realizar labores de limpieza a formarse en tecnología, convirtiéndose hoy en una programadora destacada con ingresos de $3,000 en el sector privado.",
      icon: Terminal,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Emprendimiento desde la niñez",
      desc: "Ítalo López comenzó en nuestros programas a los 11 años. Hoy, es el fundador y dueño de su propia empresa de reparación de equipos tecnológicos.",
      icon: Wrench,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Exportando talento",
      desc: 'De crear una empresa escolar en el programa "La Compañía" a exportar sus propios productos a Estados Unidos con un emprendimiento real.',
      icon: PackageCheck,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Liderazgo Gremial",
      desc: "El impacto JA llega a las altas esferas: conoce la historia de la actual Presidenta de la Cámara de Comercio Alemana, orgullosa Alumni de JA El Salvador.",
      icon: Landmark,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <main className="overflow-x-hidden">

      {/* ── SECCIÓN 1: HERO BANNER / INTRODUCCIÓN ALUMNI ── */}
      {/* Nota: Fotografía de impacto emocional. Grupo de exalumnos usando el pin de JA, o evento de networking. */}
      <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-48 pb-20 overflow-hidden bg-black" id="hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=1600&q=80"
            alt="Comunidad Alumni JA El Salvador"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="container-max relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ja-gold/20 border border-ja-gold/40 text-ja-gold text-xs font-bold uppercase tracking-[0.3em] mb-8 shadow-lg">
              <Users size={16} /> Red Oficial
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
              El activo más valioso de nuestra historia eres tú.
            </h1>
            
            <p className="text-base md:text-xl text-gray-300 leading-relaxed md:leading-loose mb-12 max-w-2xl font-light">
              A lo largo de cinco décadas, hemos visto pasar por nuestras aulas a la generación que hoy lidera El Salvador. Somos <span className="text-ja-gold font-bold">1 millón de egresados</span>. Si pasaste por Junior Achievement en los años 70, 80, 90, o en la última década, el mensaje es claro: Nunca nos fuimos. Siempre estuvimos aquí. Mira hacia dónde vamos. ¿Quieres venir?
            </p>
            
            <Link href="/auth/register" className="inline-flex items-center gap-3 bg-ja-gold hover:bg-yellow-500 text-black font-black px-10 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg transition-all shadow-2xl shadow-ja-gold/30 hover:-translate-y-1">
              Regístrate en la Red Alumni <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 2: RED ALUMNI (EL DIRECTORIO DE TALENTO) ── */}
      {/* Nota: Bloque limpio, enfocado en el registro y la reconexión. */}
      <section className="section-padding-xl bg-white" id="directorio">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative">
               <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80"
                  alt="Networking Alumni JA"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
              {/* Floating element */}
              <div className="absolute -bottom-10 -right-10 bg-ja-blue text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl max-w-xs animate-fade-in-up delay-300 hidden sm:block">
                <Users size={32} className="text-ja-gold mb-4" />
                <div className="text-3xl font-black mb-1">+1,000,000</div>
                <div className="text-sm text-white/80 uppercase tracking-widest font-bold">Egresados en El Salvador</div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:pl-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                Red Alumni:<br/>
                <span className="text-ja-blue">El punto de reencuentro</span>
              </h2>
              
              <div className="space-y-6 text-base md:text-xl text-gray-600 leading-loose mb-12">
                <p>
                  Nuestra nueva etapa tiene un público prioritario: <strong>tú</strong>. Queremos que esta plataforma funcione como tu principal red de networking y reconexión. Al unirte a la Red Alumni, accedes a un ecosistema de profesionales de alto nivel, oportunidades de negocios y la posibilidad de integrar nuestra Junta Directiva.
                </p>
                <p className="font-medium text-gray-800 border-l-4 border-ja-gold pl-6 py-2">
                  No importa de qué generación seas; tu experiencia es el pilar de nuestro futuro.
                </p>
              </div>
              
              <Link href="/auth/register" className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 group">
                Actualizar mis datos en el directorio 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: CAMPAÑA "SOY JA" Y TESTIMONIALES ── */}
      {/* Nota: Diseño en formato "Grid" o Carrusel de tarjetas. Elemento visual clave: El Pin Institucional. */}
      <section className="section-padding-xl bg-gray-50 border-y border-gray-100" id="soy-ja">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20 px-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-ja-gold mb-8 shadow-xl shadow-ja-gold/30">
              {/* Representing the Pin Institucional functionally with an emblem feel */}
              <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-2xl font-black text-white">JA</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              Soy JA: El orgullo de nuestra identidad
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-loose max-w-3xl mx-auto">
              Portar el pin institucional es un símbolo de resiliencia, pensamiento crítico y mentalidad emprendedora. Conoce las historias reales de quienes pasaron por nuestros programas y hoy están transformando el mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
            {soyJaStories.map((story, idx) => (
              <motion.div 
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${story.bg} flex items-center justify-center ${story.color} mb-8 group-hover:scale-110 transition-transform`}>
                  <story.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-5">{story.title}</h3>
                <p className="text-gray-600 leading-loose text-base md:text-lg">
                  {story.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/comunidad/soy-ja" className="inline-flex items-center gap-3 border-2 border-ja-blue text-ja-blue hover:bg-ja-blue hover:text-white font-black px-12 py-5 rounded-full text-lg transition-all shadow-xl shadow-transparent hover:shadow-ja-blue/20">
              <Video size={22} /> Graba y comparte tu historia "Soy JA"
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: VOLUNTARIADO Y MENTORES ── */}
      {/* Nota: Dos columnas en paralelo. Voluntariado (campo) y Mentores (estratégico). */}
      <section className="section-padding-xl bg-white" id="participacion">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              Devuelve lo aprendido a la nueva generación
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-loose max-w-3xl mx-auto">
              Existen muchas formas de seguir siendo parte activa de la comunidad. Tu tiempo y experiencia en el mercado laboral real no tienen precio para los jóvenes que apenas comienzan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-12">
            {/* Columna 1: Voluntariado */}
            <div className="bg-ja-blue rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110 transform-gpu">
                <HeartHandshake size={180} />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-10 border border-white/20">
                  <HeartHandshake size={40} className="text-ja-gold" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6">En el territorio</h3>
                <p className="text-lg md:text-xl text-white/80 leading-loose mb-14 min-h-[140px]">
                  Acompaña la ejecución de nuestros programas en escuelas y comunidades. Sé la inspiración directa para un joven, comparte tu energía y conviértete en el rostro de la esperanza.
                </p>
                <Link href="/comunidad/voluntariado" className="inline-flex items-center gap-3 bg-white text-ja-blue font-black px-10 py-4 rounded-full text-lg hover:bg-gray-50 transition-colors">
                  Quiero ser Voluntario <ArrowRight size={22} />
                </Link>
              </div>
            </div>

            {/* Columna 2: Mentores */}
            <div className="bg-[#030d1a] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110 transform-gpu">
                <Lightbulb size={180} />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-10 border border-white/20">
                  <Lightbulb size={40} className="text-blue-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6">Guía estratégica</h3>
                <p className="text-lg md:text-xl text-white/80 leading-loose mb-14 min-h-[140px]">
                  Involúcrate en JA Labs. Sé juez en nuestros concursos de emprendimiento, brinda mentoría uno a uno a futuros "Job Engineers", o abre las puertas de tu empresa para otorgar pasantías a jóvenes en formación.
                </p>
                <Link href="/comunidad/mentores" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-4 rounded-full text-lg transition-colors">
                  Postularme como Mentor <ArrowRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: PLATAFORMAS DE CONEXIÓN (GATHER) ── */}
      {/* Nota: Diseño con un mapa mundial de fondo o elementos que denoten globalización. */}
      <section className="section-padding-xl bg-gray-50 relative overflow-hidden border-t border-gray-200" id="gather">
        {/* Abstract global mesh background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -right-60 top-1/2 -translate-y-1/2 text-gray-200/50 z-0 hidden lg:block">
          <Globe size={800} strokeWidth={0.5} />
        </div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
            
            <div className="lg:col-span-6">
               <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ja-blue/10 text-ja-blue text-xs font-bold uppercase tracking-[0.3em] mb-8 shadow-sm border border-ja-blue/10">
                <Globe size={16} /> Red Mundial
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                Únete a Gather:<br/>
                <span className="text-ja-blue">Tu pasaporte al mundo</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-loose mb-12 font-light">
                Ser Alumni en El Salvador te hace ciudadano del mundo. Gather es la red global oficial exclusiva de Junior Achievement (con fuerte presencia en sedes como Uruguay y conexión en los 6 continentes).
              </p>

              <ul className="space-y-6 mb-14">
                {[
                  "Conecta con cientos de miles de líderes globales.",
                  "Accede a foros exclusivos, becas e intercambios.",
                  "Encuentra oportunidades laborales a nivel internacional."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-ja-gold/20 flex items-center justify-center flex-shrink-0 text-ja-gold">
                      <div className="w-2 h-2 bg-ja-gold rounded-full" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/comunidad/gather" className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white font-black px-12 py-5 rounded-2xl text-lg transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] group">
                Ingresa a la plataforma Gather <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-6">
               <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl bg-black border-[8px] border-white"
              >
                <Image
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1000&q=80"
                  alt="JA Worldwide Gather Platform"
                  fill
                  className="object-cover opacity-80"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ja-blue/50 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin size={24} className="text-ja-gold" />
                    <span className="text-xl font-bold tracking-widest uppercase">Global Network</span>
                  </div>
                  <p className="text-white/80 leading-relaxed font-light">100+ países en constante conexión e innovación.</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
