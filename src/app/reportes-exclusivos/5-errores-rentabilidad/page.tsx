"use client";
import AnimatedTitle from "@/components/AnimatedTitle";
import Link from "next/link";

export default function DossierPage() {
  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body selection:bg-[#e4c0a0] selection:text-[#422c15] min-h-screen relative z-50">
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      {/* TopAppBar */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0d141d] text-[#e4c0a0] font-headline tracking-tight flex justify-between items-center w-full px-8 py-6 max-w-none border-b border-[#242a34]/50">
        <div className="text-xl font-light tracking-[0.2em] uppercase text-[#dce3f0]">Maya Muralla</div>
        <div className="hidden md:block text-sm font-medium tracking-widest text-[#dce3f0]/60 uppercase">Dossier Privado - 2026</div>
        <div className="md:hidden">
          <span 
            className="material-symbols-outlined text-[#e4c0a0]"
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
          >
            menu
          </span>
        </div>
      </header>

      <main className="pt-40">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-7xl mx-auto">
          <div className="space-y-8 max-w-5xl">
            <span className="inline-block px-4 py-1 border border-[#45474b]/30 text-[#e4c0a0] text-xs tracking-[0.3em] uppercase font-medium">Reporte Institucional</span>
            <AnimatedTitle
              as="h1"
              text="Los 5 Errores que Destruyen tu Rentabilidad en la Riviera Maya."
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-[#dce3f0]"
            />
            <p className="font-body text-xl md:text-2xl text-[#c5c6cc]/80 max-w-3xl leading-relaxed">
              Información confidencial para inversionistas de alto valor. Lo que los desarrolladores prefieren ocultar sobre el mercado inmobiliario actual.
            </p>
            <div className="pt-8 flex items-center gap-4 text-[#8f9096]">
              <div className="h-[1px] w-12 bg-[#45474b]/50"></div>
              <span className="text-xs tracking-widest uppercase">Lectura estimada: 12 minutos</span>
            </div>
          </div>
        </section>

        {/* Editorial Content Blocks */}
        <section className="space-y-40 mb-40">
          {/* Error 01 */}
          <article className="relative px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="absolute -top-24 left-10 md:left-24 font-headline text-[12rem] font-black text-[#45474b]/10 select-none z-0">01</div>
            <div className="md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 relative z-10 bg-[#2e353f]/40 backdrop-blur-xl p-8 md:p-16 rounded-lg border border-[#45474b]/10">
              <AnimatedTitle as="h2" text="Error 01: La Falacia de la &quot;Primera Línea&quot; de Mar" className="font-headline text-3xl md:text-4xl font-bold mb-8 text-[#e4c0a0]" />
              <div className="space-y-6 text-[#c5c6cc] leading-loose text-lg">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
            </div>
          </article>
          
          {/* Error 02 */}
          <article className="relative px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="absolute -top-24 right-10 md:right-24 font-headline text-[12rem] font-black text-[#45474b]/10 select-none z-0">02</div>
            <div className="md:col-start-1 md:col-span-10 lg:col-start-2 lg:col-span-8 relative z-10 bg-[#151c26] p-8 md:p-16 rounded-lg">
              <AnimatedTitle as="h2" text="Error 02: Rendimientos Garantizados por Contrato" className="font-headline text-3xl md:text-4xl font-bold mb-8 text-[#e4c0a0]" />
              <div className="space-y-6 text-[#c5c6cc] leading-loose text-lg">
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
              </div>
            </div>
          </article>

          {/* Error 03 */}
          <article className="relative px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 font-headline text-[12rem] font-black text-[#45474b]/10 select-none z-0">03</div>
            <div className="md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 relative z-10 bg-[#2e353f]/40 backdrop-blur-xl p-8 md:p-16 rounded-lg border border-[#45474b]/10">
              <AnimatedTitle as="h2" text="Error 03: Ignorar el Costo de Mantenimiento Tropical" className="font-headline text-3xl md:text-4xl font-bold mb-8 text-[#e4c0a0]" />
              <div className="space-y-6 text-[#c5c6cc] leading-loose text-lg">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
              </div>
            </div>
          </article>

          {/* Error 04 */}
          <article className="relative px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="absolute -top-24 right-10 md:right-24 font-headline text-[12rem] font-black text-[#45474b]/10 select-none z-0">04</div>
            <div className="md:col-start-3 md:col-span-10 lg:col-start-4 lg:col-span-8 relative z-10 bg-[#151c26] p-8 md:p-16 rounded-lg">
              <AnimatedTitle as="h2" text="Error 04: Confiar en el &quot;Boom&quot; sin Infraestructura" className="font-headline text-3xl md:text-4xl font-bold mb-8 text-[#e4c0a0]" />
              <div className="space-y-6 text-[#c5c6cc] leading-loose text-lg">
                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
              </div>
            </div>
          </article>

          {/* Error 05 */}
          <article className="relative px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="absolute -top-24 left-10 md:left-24 font-headline text-[12rem] font-black text-[#45474b]/10 select-none z-0">05</div>
            <div className="md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 relative z-10 bg-[#2e353f]/40 backdrop-blur-xl p-8 md:p-16 rounded-lg border border-[#45474b]/10">
              <AnimatedTitle as="h2" text="Error 05: Falta de Estructura Legal Institucional" className="font-headline text-3xl md:text-4xl font-bold mb-8 text-[#e4c0a0]" />
              <div className="space-y-6 text-[#c5c6cc] leading-loose text-lg">
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, malesuada id ipsum sit amet, pretium fringilla risus. Cras feugiat sed ante ut tempor.</p>
                <p>Mauris sollicitudin interdum sapien id pharetra. Antes de invertir, asegúrese de que el marco legal proteja sus activos contra la volatilidad del mercado local. La certeza jurídica es el pilar de cualquier portafolio inmobiliario resiliente en el tiempo.</p>
              </div>
            </div>
          </article>
        </section>

        {/* Footer CTA */}
        <section className="bg-[var(--color-dark-navy)] px-8 py-20 md:py-24 text-center border-t border-white/5 relative z-20">
          <div className="max-w-3xl mx-auto space-y-8 flex flex-col items-center">
            <h2 className="font-headline text-3xl md:text-5xl text-white tracking-tight">
              ¿Listo para estructurar tu portafolio?
            </h2>
            <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Evita la especulación. Agenda una consultoría privada para analizar el mercado y tus objetivos patrimoniales.
            </p>
            <div className="pt-6">
              <Link 
                href="/#contacto" 
                className="inline-block bg-[var(--color-copper)] text-white px-10 py-5 rounded-sm font-body font-medium hover:bg-[#8C4F10] transition-colors tracking-wide text-[15px]"
              >
                Agendar Análisis Sin Costo
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#151c26] text-[#e4c0a0] font-body leading-relaxed flex flex-col items-center w-full px-12 py-20 gap-8 border-t border-[#242a34]/15 relative z-20">
        <div className="text-lg font-bold text-[#dce3f0]">Maya Muralla</div>
        <nav className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest">
          <Link className="text-[#dce3f0]/50 hover:text-[#e4c0a0] transition-all" href="/#contacto">Agendar Sesión Estratégica</Link>
          <Link className="text-[#dce3f0]/50 hover:text-[#e4c0a0] transition-all" href="/privacidad">Aviso de Privacidad</Link>
          <Link className="text-[#dce3f0]/50 hover:text-[#e4c0a0] transition-all" href="#">Términos y Condiciones</Link>
        </nav>
        <div className="text-xs text-[#dce3f0]/30 mt-4">
          © 2026 Maya Muralla. Institutional Real Estate Investment.
        </div>
      </footer>
    </div>
  );
}
