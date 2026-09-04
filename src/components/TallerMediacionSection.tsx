import React from 'react';
import { Sprout, MapPinned } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const SESIONES = [
  {
    numero: 1,
    titulo: 'Encuentro, Sensibilización y Cartografía Territorial',
    descripcion:
      'Presentación del grupo y de la técnica de pintura con aguja. Selección individual de una imagen de patrimonio natural o arquitectura patrimonial de la comuna para reinterpretar en bordado.',
  },
  {
    numero: 2,
    titulo: 'Transferencia, Colorimetría y Primeras Puntadas',
    descripcion:
      'Contextualización del valor patrimonial del lugar elegido. Transferencia del dibujo al soporte textil, selección de paletas cromáticas y trazado de las primeras puntadas metodológicas de guía.',
  },
  {
    numero: 3,
    titulo: 'Profundización Técnica y Resolución de Complejidades',
    descripcion:
      'Revisión del avance autónomo. Inserción de nuevas variaciones de puntada, precisión técnica y ajuste de tensiones y matices según las dudas emergentes del proceso.',
  },
  {
    numero: 4,
    titulo: 'Detalles, Texturas y Realce de la Obra',
    descripcion:
      'Identificación de elementos clave en primer plano. Aplicación de detalles finos, matices cromáticos y texturas de superficie para dar realce y volumen al paisaje o edificación bordada.',
  },
];

export const TallerMediacionSection: React.FC = () => {
  return (
    <section id="taller" className="py-16 lg:py-24 bg-panel border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-14">

        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
              <MapPinned className="w-3.5 h-3.5" />
              Dispositivo de Mediación y Taller
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light">
              Taller de Bordado con Técnica Needle Painting y Mediación Patrimonial
            </h2>
            <p className="font-serif italic text-sm sm:text-base text-muted">
              Un ciclo de talleres donde aprender a bordar en pintura con aguja va de la mano de conocer, en profundidad, el propio territorio.
            </p>
          </div>
        </ScrollReveal>

        {/* Resumen de la propuesta */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="font-sans text-sm sm:text-base text-body leading-relaxed font-normal">
              El taller es dictado por una artesana con formación en <strong className="text-charcoal font-medium">arteterapia y patrimonio material e inmaterial</strong>, con más de tres años de trabajo en needle painting y un cuerpo de obra propio de más de 25 piezas. Antes de que cada participante comience a bordar, se entrega contexto etnográfico, social, ecosistémico y arquitectónico sobre el paisaje elegido: el taller no se queda solo en la técnica, se convierte en una instancia de <strong className="text-charcoal font-medium">mediación patrimonial situada</strong>.
            </p>
            <p className="font-sans text-sm sm:text-base text-body leading-relaxed font-normal">
              El needle painting está escasamente presente en la cartelera cultural de la región, por lo que este taller amplía genuinamente la diversidad de la oferta artístico-cultural disponible para la comunidad. El proceso y las piezas finales quedan documentados en un catálogo con doble función: material de difusión pública y respaldo de registro del proceso realizado. Cada participante se queda con su pieza y con el conocimiento técnico adquirido, con la posibilidad de sumarse a un espacio de acompañamiento posterior para seguir profundizando en la técnica.
            </p>
          </div>
        </ScrollReveal>

        {/* Ejercicio de apertura */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-canvas border border-border-subtle flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-10 h-10 shrink-0 rounded-full bg-charcoal text-canvas flex items-center justify-center">
              <Sprout className="w-4.5 h-4.5 text-accent-muted" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-accent-muted">
                Ejercicio de Apertura
              </span>
              <h3 className="font-serif text-xl text-charcoal font-light">
                Mapeo Patrimonial Textil
              </h3>
              <p className="text-sm text-body font-sans leading-relaxed">
                Cada participante selecciona una imagen de patrimonio natural (flora autóctona, ecosistemas locales) o de arquitectura patrimonial de su comuna, como punto de partida para su pieza bordada.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Stepper de 4 sesiones */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="space-y-6">
            <h3 className="text-center font-serif text-xl text-charcoal font-light">
              Estructura en 4 Sesiones de Pintura con Aguja
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SESIONES.map((s) => (
                <div key={s.numero} className="p-5 bg-canvas border border-border-subtle space-y-3 h-full flex flex-col">
                  <div className="w-7 h-7 rounded-full bg-charcoal text-canvas text-[11px] font-bold flex items-center justify-center font-sans shrink-0">
                    {s.numero}
                  </div>
                  <h4 className="font-serif italic text-base text-charcoal font-light leading-snug">
                    {s.titulo}
                  </h4>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {s.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
