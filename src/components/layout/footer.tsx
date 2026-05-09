import { navItems } from "@/lib/site-data";
import { companyAddress, companyContacts } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-[#f7f3ea] px-6 py-10 text-navy">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold">PRANIL Group of Companies</p>
          <p className="mt-2 max-w-xl text-sm text-navy/55">
            Education, recruitment, and travel consulting for people building confident global futures.
          </p>
          <p className="mt-3 max-w-xl text-sm font-medium text-navy/65">{companyAddress}</p>
          <p className="mt-2 text-sm font-bold text-royal">
            {companyContacts.map((company) => `${company.short}: ${company.phone}`).join("  |  ")}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-navy/55">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-royal">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
