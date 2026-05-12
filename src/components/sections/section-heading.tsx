import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  logoUrl?: string;
}) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl px-2 sm:mb-14">
      {logoUrl ? (
        <img src={logoUrl} alt={eyebrow || "Logo"} className="mb-6 h-20 sm:h-24 w-auto object-contain drop-shadow-sm" />
      ) : eyebrow ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#d42a36] sm:text-sm">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-2xl font-extrabold leading-tight text-[#1a1a6e] sm:text-3xl lg:text-[2.5rem]">
        {title.split(/(\b[A-Z-]+\b)/).map((part, i) =>
          /^[A-Z-]{4,}$/.test(part)
            ? <span key={i} className="underline decoration-[#d42a36] decoration-2 underline-offset-4">{part}</span>
            : <span key={i}>{part}</span>
        )}
      </h2>
      {copy && <p className="mt-3 text-sm text-gray-500 leading-6 sm:text-base sm:leading-7">{copy}</p>}
    </Reveal>
  );
}
