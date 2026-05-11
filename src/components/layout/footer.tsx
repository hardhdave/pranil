import { navItems, companyContacts, companyAddress } from "@/lib/site-data";

const serviceLinks = [
  "Study Abroad",
  "Student Visa",
  "Canada PR",
  "IELTS / PTE Coaching",
  "Recruitment",
  "Tours & Travels"
];

export function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#f0f4fa] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand + contact */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#1a1a6e] text-sm font-black text-white">PG</span>
                <span className="leading-tight">
                  <span className="block font-display text-xl font-extrabold text-[#1a1a6e]">PRANIL</span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-gray-400 font-semibold">Group of Companies</span>
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Call : <a href="tel:+917383997679" className="font-semibold text-[#d42a36] hover:underline">+91 73839 97679</a></p>
                <p>Chat : <a href="tel:+917383299556" className="font-semibold text-[#d42a36] hover:underline">+91 73832 99556</a></p>
                <p>Email : <span className="font-semibold text-gray-700">hr@pranilrecruitment.com</span></p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-base font-bold text-[#d42a36] mb-4">Navigation</h4>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm text-gray-600 hover:text-[#1a1a6e] transition">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base font-bold text-[#d42a36] mb-4">Services</h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((label) => (
                  <li key={label}>
                    <a href="#services" className="text-sm text-gray-600 hover:text-[#1a1a6e] transition">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office */}
            <div>
              <h4 className="text-base font-bold text-[#d42a36] mb-4">Office</h4>
              <p className="text-sm text-gray-600 leading-6">{companyAddress}</p>
              <div className="mt-4 space-y-2">
                {companyContacts.map((c) => (
                  <div key={c.label}>
                    <p className="text-sm font-semibold text-[#1a1a6e]">{c.label}</p>
                    <p className="text-sm text-[#d42a36] font-semibold">{c.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#1a1a6e] py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 sm:flex-row">
          <p className="text-xs text-white/70">© Copyright PRANIL Group of Companies {new Date().getFullYear()}. All rights reserved.</p>
          <a href="#" className="text-xs text-white/70 hover:text-white transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
