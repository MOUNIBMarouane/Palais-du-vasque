import Link from "next/link";
import NewsletterInput from "@/app/components/NewsletterInput";
import { StaggerContainer, StaggerItem } from "@/app/components/StaggerInView";

const companyLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Bespoke Services", href: "#" },
  { label: "Legal", href: "#" },
  { label: "Sustainability", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f4f4ef] w-full border-t border-[#D4AF37]/10">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-24 max-w-[1920px] mx-auto">
        {/* Brand */}
        <StaggerItem className="space-y-6">
          <span className="text-lg font-serif italic text-[#1a1c19]">
            Palais Du Vasque
          </span>
          <p className="text-xs font-body font-light tracking-wide text-[#1a1c19]/50 leading-relaxed">
            Exporters of architectural poetry. Crafting sanctuary in the modern
            home since 1992.
          </p>
        </StaggerItem>

        {/* Company */}
        <StaggerItem className="space-y-6">
          <h4 className="text-[11px] font-label uppercase tracking-[0.2rem] text-[#735c00]">
            Company
          </h4>
          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs font-body font-light text-[#1a1c19]/50 hover:text-[#735c00] hover:tracking-widest transition-all duration-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </StaggerItem>

        {/* Social */}
        <StaggerItem className="space-y-6">
          <h4 className="text-[11px] font-label uppercase tracking-[0.2rem] text-[#735c00]">
            Connect
          </h4>
          <ul className="space-y-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs font-body font-light text-[#1a1c19]/50 hover:text-[#735c00] transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </StaggerItem>

        {/* Newsletter */}
        <StaggerItem className="space-y-6">
          <h4 className="text-[11px] font-label uppercase tracking-[0.2rem] text-[#735c00]">
            Newsletter
          </h4>
          <p className="text-xs font-body font-light text-[#1a1c19]/50">
            Receive curated updates on our latest atelier collections.
          </p>
          <NewsletterInput />
        </StaggerItem>
      </StaggerContainer>

      {/* Copyright */}
      <div className="px-12 py-8 border-t border-[#D4AF37]/5 text-center">
        <p className="text-[10px] font-label uppercase tracking-[0.2rem] text-[#1a1c19]/30">
          &copy; {year} PALAIS DU VASQUE. ARCHITECTURAL POETRY.
        </p>
      </div>
    </footer>
  );
}
