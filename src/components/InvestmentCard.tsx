import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";

interface InvestmentCardProps {
  image: string;
  title: string;
  location: string;
  ticket: string;
  roi: string;
  profile: string;
  alt: string;
}

export default function InvestmentCard({
  image,
  title,
  location,
  ticket,
  roi,
  profile,
  alt,
}: InvestmentCardProps) {
  return (
    <div className="card-estate group cursor-pointer">
      {/* Image — occupies 60%+ of card */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover card-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
        />
        {/* Subtle gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,28,50,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* ROI Badge */}
        <div className="absolute top-4 right-4 bg-[rgba(13,28,50,0.85)] backdrop-blur-md px-3 py-1.5 rounded-sm">
          <p className="text-label text-[var(--color-copper-light)] text-[0.65rem]">
            ROI Proyectado
          </p>
          <p className="font-headline text-lg font-bold text-white leading-none mt-0.5">
            {roi}
          </p>
        </div>
      </div>

      {/* Content — no dividers, spacing only */}
      <div className="p-6 lg:p-7">
        {/* Location label */}
        <p className="text-label text-[var(--color-copper)] text-[0.65rem] mb-2">
          {location}
        </p>

        {/* Title */}
        <AnimatedTitle
          as="h3"
          text={title}
          className="font-headline text-lg font-semibold text-[var(--color-on-surface)] mb-5"
        />

        {/* Stats row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-label text-[var(--color-outline)] text-[0.6rem] mb-1">
              Ticket Promedio
            </p>
            <p className="font-headline text-base font-bold text-[var(--color-on-surface)]">
              {ticket}
            </p>
          </div>
          <div className="text-right">
            <p className="text-label text-[var(--color-outline)] text-[0.6rem] mb-1">
              Perfil Huésped
            </p>
            <p className="font-body text-sm text-[var(--color-on-surface-variant)]">
              {profile}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
