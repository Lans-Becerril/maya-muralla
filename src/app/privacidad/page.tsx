import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto py-24 px-6 lg:px-8">
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-dark-navy)] mb-8">
            Aviso de Privacidad Integral
          </h1>
          
          <p className="font-body text-gray-600 mb-6 leading-relaxed">
            En <strong>Maya Muralla</strong>, valoramos y respetamos tu privacidad. El presente Aviso de Privacidad se emite en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de los Estados Unidos Mexicanos y tiene como objetivo informarte sobre cómo recabamos, utilizamos, protegemos y, en su caso, compartimos tu información personal.
          </p>

          <h2 className="font-headline text-xl md:text-2xl font-bold text-[var(--color-dark-navy)] mt-12 mb-6 flex items-center">
            <span className="text-[var(--color-copper)] mr-3 font-semibold text-2xl md:text-3xl">1.</span> Identidad y Domicilio del Responsable
          </h2>
          <p className="font-body text-gray-600 mb-6 leading-relaxed">
            Maya Muralla, con operaciones en Playa del Carmen, Quintana Roo, México, es el responsable del tratamiento de los datos personales que nos proporciones a través de nuestro sitio web (mayamuralla.com), formularios de contacto, WhatsApp o cualquier otro medio digital o físico.
          </p>

          <h2 className="font-headline text-xl md:text-2xl font-bold text-[var(--color-dark-navy)] mt-12 mb-6 flex items-center">
            <span className="text-[var(--color-copper)] mr-3 font-semibold text-2xl md:text-3xl">2.</span> Datos Personales que Recabamos
          </h2>
          <p className="font-body text-gray-600 mb-4 leading-relaxed">
            Para llevar a cabo las finalidades descritas en el presente aviso, recabaremos los siguientes datos personales:
          </p>
          <ul className="font-body text-gray-600 list-disc list-outside pl-5 mb-6 space-y-2 leading-relaxed marker:text-[var(--color-copper)]">
            <li>Nombre completo.</li>
            <li>Información de contacto (correo electrónico y número de teléfono/WhatsApp).</li>
            <li>Datos patrimoniales o financieros limitados estrictamente a tu presupuesto de inversión o capacidad de crédito, con el único fin de perfilar las mejores oportunidades inmobiliarias para ti.</li>
            <li>Historial de navegación en nuestro sitio web (a través de cookies).</li>
          </ul>
          <p className="font-body text-gray-600 italic mb-6 leading-relaxed bg-gray-50 p-4 border-l-4 border-[var(--color-copper)] rounded-r-lg">
            *Maya Muralla no recaba datos personales sensibles (como origen racial, estado de salud, creencias religiosas o afiliación política).*
          </p>

          <h2 className="font-headline text-xl md:text-2xl font-bold text-[var(--color-dark-navy)] mt-12 mb-6 flex items-center">
            <span className="text-[var(--color-copper)] mr-3 font-semibold text-2xl md:text-3xl">3.</span> Finalidades del Tratamiento de Datos
          </h2>
          <p className="font-body text-gray-600 mb-4 leading-relaxed">
            Tus datos personales serán utilizados para las siguientes finalidades <strong>principales</strong>, que son necesarias para el servicio que solicitas:
          </p>
          <ul className="font-body text-gray-600 list-disc list-outside pl-5 mb-6 space-y-2 leading-relaxed marker:text-[var(--color-copper)]">
            <li>Agendar y gestionar llamadas de asesoría inmobiliaria personalizada.</li>
            <li>Enviarte información, catálogos y reportes de mercado sobre propiedades (terrenos, departamentos, casas) en la Riviera Maya.</li>
            <li>Dar seguimiento a tu proceso de inversión, desde el análisis matemático hasta el cierre legal.</li>
            <li>Facilitar la comunicación para nuestros servicios de administración de propiedades (co-hosting).</li>
          </ul>
          <p className="font-body text-gray-600 mb-4 leading-relaxed">
            De manera <strong>secundaria</strong>, utilizaremos tu información para:
          </p>
          <ul className="font-body text-gray-600 list-disc list-outside pl-5 mb-6 space-y-2 leading-relaxed marker:text-[var(--color-copper)]">
            <li>Enviarte boletines informativos (newsletters) con actualizaciones del mercado inmobiliario y nuevas oportunidades de inversión.</li>
            <li>Fines estadísticos y de marketing digital para mejorar la experiencia de usuario en nuestra plataforma.</li>
          </ul>
          <p className="font-body text-gray-600 italic mb-6 leading-relaxed bg-gray-50 p-4 border-l-4 border-[var(--color-copper)] rounded-r-lg">
            *Si no deseas que tus datos sean tratados para las finalidades secundarias, puedes comunicarlo enviando un correo a <a href="mailto:contacto@mayamuralla.com" className="text-[var(--color-copper)] hover:underline transition-colors font-medium">contacto@mayamuralla.com</a>*
          </p>

          <h2 className="font-headline text-xl md:text-2xl font-bold text-[var(--color-dark-navy)] mt-12 mb-6 flex items-center">
            <span className="text-[var(--color-copper)] mr-3 font-semibold text-2xl md:text-3xl">4.</span> Transferencia de Datos
          </h2>
          <p className="font-body text-gray-600 mb-4 leading-relaxed">
            Para poder brindarte un servicio integral en la adquisición de bienes raíces, Maya Muralla podrá transferir tus datos personales a terceros, única y exclusivamente bajo las siguientes circunstancias:
          </p>
          <ul className="font-body text-gray-600 list-disc list-outside pl-5 mb-6 space-y-2 leading-relaxed marker:text-[var(--color-copper)]">
            <li><strong>Desarrolladores Inmobiliarios:</strong> Para registrarte como cliente potencial o apartar una unidad a tu nombre.</li>
            <li><strong>Despachos Jurídicos y Notarías Públicas:</strong> Para llevar a cabo el due diligence, blindaje jurídico y escrituración de tu propiedad.</li>
            <li><strong>Autoridades Competentes:</strong> Cuando sea requerido por mandato legal.</li>
          </ul>
          <p className="font-body text-gray-600 italic mb-6 leading-relaxed bg-gray-50 p-4 border-l-4 border-[var(--color-copper)] rounded-r-lg">
            *Estas transferencias están protegidas por acuerdos de confidencialidad y solo se realizan si decides avanzar con un proceso de inversión.*
          </p>

          <h2 className="font-headline text-xl md:text-2xl font-bold text-[var(--color-dark-navy)] mt-12 mb-6 flex items-center">
            <span className="text-[var(--color-copper)] mr-3 font-semibold text-2xl md:text-3xl">5.</span> Derechos ARCO y Revocación del Consentimiento
          </h2>
          <p className="font-body text-gray-600 mb-6 leading-relaxed">
            Tienes derecho a conocer qué datos personales tenemos de ti (Acceso); solicitar la corrección de tu información si está desactualizada, inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros (Cancelación); así como oponerte al uso de tus datos para fines específicos (Oposición). Estos se conocen como derechos ARCO.
          </p>
          <p className="font-body text-gray-600 mb-4 leading-relaxed">
            Para ejercer tus derechos ARCO o revocar tu consentimiento, deberás enviar una solicitud al correo electrónico <a href="mailto:contacto@mayamuralla.com" className="text-[var(--color-copper)] hover:underline transition-colors font-medium">contacto@mayamuralla.com</a> que contenga:
          </p>
          <ol className="font-body text-gray-600 list-decimal list-outside pl-5 mb-6 space-y-2 leading-relaxed marker:text-[var(--color-copper)] marker:font-bold">
            <li>Tu nombre completo y correo electrónico para comunicarte la respuesta.</li>
            <li>Copia de una identificación oficial para acreditar tu identidad.</li>
            <li>La descripción clara y precisa de los datos personales respecto de los cuales buscas ejercer alguno de los derechos ARCO.</li>
          </ol>
          <p className="font-body text-gray-600 mb-6 leading-relaxed">
            Responderemos a tu solicitud en un plazo máximo de 20 días hábiles.
          </p>

          <h2 className="font-headline text-xl md:text-2xl font-bold text-[var(--color-dark-navy)] mt-12 mb-6 flex items-center">
            <span className="text-[var(--color-copper)] mr-3 font-semibold text-2xl md:text-3xl">6.</span> Uso de Tecnologías de Rastreo (Cookies)
          </h2>
          <p className="font-body text-gray-600 mb-6 leading-relaxed">
            Te informamos que en nuestra página de internet utilizamos cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear tu comportamiento como usuario de internet, así como brindarte un mejor servicio y experiencia al navegar en nuestra página. Puedes deshabilitar estas tecnologías ajustando la configuración de tu navegador.
          </p>

          <h2 className="font-headline text-xl md:text-2xl font-bold text-[var(--color-dark-navy)] mt-12 mb-6 flex items-center">
            <span className="text-[var(--color-copper)] mr-3 font-semibold text-2xl md:text-3xl">7.</span> Cambios al Aviso de Privacidad
          </h2>
          <p className="font-body text-gray-600 mb-6 leading-relaxed">
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los servicios que ofrecemos; de nuestras prácticas de privacidad o cambios en nuestro modelo de negocio. Te mantendremos informado sobre los cambios que pueda sufrir el presente aviso a través de nuestra página web: mayamuralla.com/privacidad.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="font-body text-sm text-gray-500 italic">
              *Última actualización: Abril de 2026.*
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
