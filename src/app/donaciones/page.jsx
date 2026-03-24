"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Play, Heart, ShieldCheck,
  GraduationCap, Laptop, CheckCircle2,
  Users, Briefcase, Building2, ExternalLink
} from "lucide-react";

export default function DonacionesPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ── SECCIÓN 1: HERO BANNER / INTRODUCCIÓN ── */}
      <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-48 pb-20 overflow-hidden bg-black" id="hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Inversión Social JA El Salvador"
            fill
            className="object-cover opacity-60"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        </div>

        <div className="container-max relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ja-gold/20 border border-ja-gold/40 text-ja-gold text-xs font-bold uppercase tracking-[0.3em] mb-8 shadow-lg">
              <Heart size={16} /> Inversión de Impacto
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
              Invierte en el talento que moverá a El Salvador.
            </h1>

            <p className="text-base md:text-xl text-gray-300 leading-relaxed md:leading-loose mb-12 max-w-2xl font-light">
              En Junior Achievement <span className="text-ja-gold font-medium">no pedimos caridad; proponemos inversión social estratégica.</span> Apoyar a JA es invertir directamente en la transición de un joven hacia el éxito económico real. Tu aporte se transforma en competencias tecnológicas, pensamiento crítico y, finalmente, en empleabilidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donaciones/como-donar" className="inline-flex items-center justify-center gap-3 bg-ja-gold hover:bg-yellow-500 text-black font-black px-10 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg transition-all shadow-2xl shadow-ja-gold/30 hover:-translate-y-1 text-center">
                Haz tu donativo hoy <ArrowRight size={22} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECCIÓN 2: THIS IS JA (BLOQUE DE VIDEO) ── */}
      <section className="section-padding-xl bg-gray-900 text-white relative overflow-hidden" id="video">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-ja-blue/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-ja-gold/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-max relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
              This is JA: Conoce nuestro impacto
            </h2>
            <p className="text-base md:text-xl text-gray-400 leading-loose max-w-3xl mx-auto font-light">
              Detrás de cada cifra, hay un rostro, una familia y un futuro transformado. Descubre en este video cómo tu inversión cobra vida en nuestros campus y en el mercado laboral.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/AcRP6VZswhs?si=Zi_AvanKSXZyFnCn"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: ¿A QUIÉNES SE DIRIGEN LOS FONDOS? ── */}
      {/* Nota dev: Tarjetas de perfil o un gráfico de distribución simple. */}
      <section className="section-padding-xl bg-gray-50 border-b border-gray-100" id="destino-fondos">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              ¿A dónde va tu inversión?
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-loose max-w-3xl mx-auto">
              Cada dólar donado se ejecuta de manera estructurada para maximizar el alcance en nuestras dos grandes vías de impacto:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 px-4 max-w-6xl mx-auto">

            {/* Vía 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 group-hover:scale-110">
                <GraduationCap size={160} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                  Jóvenes en JA Educación<br /><span className="text-ja-blue text-xl font-bold">(9 a 18 años)</span>
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-loose">
                  Fondos destinados a llevar programas de emprendimiento y educación financiera a centros escolares, alejando a la niñez de contextos de riesgo a través del pensamiento crítico.
                </p>
              </div>
            </motion.div>

            {/* Vía 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 group-hover:scale-110">
                <Laptop size={160} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-ja-gold/10 flex items-center justify-center text-ja-gold mb-8 group-hover:bg-ja-gold group-hover:text-white transition-colors duration-500">
                  <Laptop size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                  Jóvenes en JA Labs<br /><span className="text-ja-gold text-xl font-bold">(20 a 29 años)</span>
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-loose">
                  Becas completas para certificar a jóvenes en tecnologías emergentes, inteligencia artificial, ciberseguridad e inglés, preparándolos para ser contratados por la empresa privada.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: DESARROLLO DE COMPETENCIAS ── */}
      {/* Nota dev: Listado con íconos [Checkmarks] que destaquen las habilidades. */}
      <section className="section-padding-xl bg-white" id="competencias">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">

            <div className="px-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                Lo que financiamos:<br /><span className="text-ja-blue">Desarrollo de Competencias</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 leading-loose mb-12">
                Tu donación no solo compra materiales; financia un cambio de mentalidad <strong>("mindset")</strong>. Al donar, estás patrocinando:
              </p>

              <ul className="space-y-8">
                {[
                  "Diagnósticos psicoemocionales y acompañamiento psicológico continuo.",
                  "Formación técnica a la medida de lo que demandan gigantes como Google, Microsoft y Oracle.",
                  "Creación del perfil \"Job Engineer\": resiliencia, razonamiento lógico y manejo de finanzas personales."
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-5 p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                  >
                    <div className="mt-1 bg-ja-gold/20 p-2 rounded-full text-ja-gold flex-shrink-0">
                      <CheckCircle2 size={24} className="fill-current text-white" />
                    </div>
                    <span className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative px-4 display-none lg:block">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 relative">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                  alt="Desarrollo de competencias"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white font-bold text-2xl">
                  Mindset Training
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: ESQUEMAS DE DONACIÓN ── */}
      {/* Nota dev: Diseño de "Pricing Tables" o columnas comparativas. */}
      <section className="section-padding-xl bg-gray-50 relative overflow-hidden" id="esquemas">
        <div className="container-max relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              Formas de sumarte a nuestra misión
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-loose mx-auto max-w-3xl">
              Hemos estructurado diferentes modalidades para que tanto individuos como corporaciones puedan ser parte de esta transformación.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-10 px-4">

            {/* Plan 1 */}
            <div className="bg-white rounded-[2.5rem] p-10 flex flex-col border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
              <div className="w-16 h-16 rounded-2xl bg-ja-blue/10 flex items-center justify-center text-ja-blue mb-8 group-hover:bg-ja-blue group-hover:text-white transition-colors">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Patrocinar un Joven (Becas)</h3>
              <p className="text-gray-600 leading-loose mb-10 flex-grow text-lg">
                Adopta una beca y cambia una vida. A través de donaciones recurrentes (mensuales o trimestrales) bajo los niveles Bronce, Plata u Oro, garantizas la formación completa de un talento en JA Labs.
              </p>
              <Link href="/donaciones/patrocinar-un-joven" className="w-full text-center py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-lg transition-colors">
                Patrocinar un talento
              </Link>
            </div>

            {/* Plan 2 - Featured */}
            <div className="bg-ja-blue text-white rounded-[2.5rem] p-10 flex flex-col shadow-2xl shadow-ja-blue/30 scale-100 lg:scale-105 z-10 border border-ja-blue relative group">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Users size={120} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-ja-gold mb-8 relative z-10 border border-white/20 group-hover:bg-ja-gold group-hover:text-black transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-6 relative z-10">Fondo Colectivo Alumni</h3>
              <p className="text-blue-100 leading-loose mb-10 flex-grow text-lg relative z-10">
                El poder de nuestra red. Si 80 Alumni donan $1,000 anuales, generamos $80,000 para financiar las carreras tecnológicas de decenas de jóvenes brillantes de escasos recursos.
              </p>
              <Link href="/donaciones/como-donar" className="w-full text-center py-4 rounded-xl bg-ja-gold hover:bg-yellow-500 text-black font-black text-lg transition-colors shadow-lg relative z-10">
                Unirme al Fondo Alumni
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-[2.5rem] p-10 flex flex-col border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-700 mb-8 group-hover:bg-gray-200 transition-colors">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Donación en Especie y Tiempo</h3>
              <p className="text-gray-600 leading-loose mb-10 flex-grow text-lg">
                No todo es dinero. Tu empresa puede donar equipos tecnológicos, servicios profesionales, espacios publicitarios o tu tiempo valioso como mentor y jurado.
              </p>
              <Link href="/donaciones/como-donar" className="w-full text-center py-4 rounded-xl border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold text-lg transition-colors">
                Donar en especie / tiempo
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECCIÓN 6: IMPACTO, ALCANCE Y TRANSPARENCIA ── */}
      {/* Nota dev: Bloque sobrio destacando la seriedad institucional y los datos bancarios. */}
      <section className="section-padding-xl bg-gray-900 text-white" id="transparencia">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">

            <div className="px-4">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-white/20">
                <ShieldCheck size={16} className="text-ja-gold" /> Rigor Financiero
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
                Transparencia que genera confianza
              </h2>
              <p className="text-base md:text-xl text-gray-300 leading-loose mb-10 font-light">
                Llevamos más de 50 años administrando fondos con total rigor. En nuestra nueva etapa, cada sponsor y aliado recibe un sistema de rendición de cuentas directo: un informe de impacto con resultados concretos y métricas de inserción laboral por cada inversión realizada.
              </p>

              <Link href="/donaciones/transparencia" className="inline-flex items-center gap-3 text-ja-gold hover:text-white font-bold text-lg transition-colors group">
                <ExternalLink size={20} /> Ver información bancaria y políticas de transparencia
                <span className="block h-px w-0 bg-ja-gold group-hover:w-full transition-all absolute bottom-0"></span>
              </Link>
            </div>

            <div className="px-4">
              <div className="bg-black/50 p-10 md:p-14 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-red-600 rounded-2xl">
                    <Building2 size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white">Canales Oficiales:</h3>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-bold mt-1">Cuenta Institucional</div>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-300 leading-loose mb-10">
                  Realiza tu donativo de forma segura a través de nuestra cuenta oficial en Banco de América Central (BAC).
                </p>

                <Link href="/donaciones/como-donar" className="block w-full text-center bg-white hover:bg-gray-100 text-black font-black py-4 md:py-5 rounded-xl text-lg transition-colors">
                  Contactar para Depósito Directo
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
