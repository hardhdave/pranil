import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <Reveal className="mx-auto mb-8 max-w-3xl px-2 text-center sm:mb-12 sm:px-0">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-royal sm:mb-4 sm:text-xs sm:tracking-[0.38em]">{eyebrow}</p>
      <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl md:text-6xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-navy/62 sm:mt-5 sm:text-base md:text-lg sm:leading-7">{copy}</p>
    </Reveal>
  );
}
