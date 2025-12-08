import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only prevent default and scroll for hash links
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="#acasa" className="inline-block mb-4" onClick={(e) => handleNavClick(e, '#acasa')}>
                <Logo />
            </Link>
            <p className="text-muted-foreground max-w-sm">
                Asociația Tinerilor Fotbaliști din România - Modelăm viitorul fotbalului românesc.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Linkuri Utile</h4>
            <ul className="space-y-2">
              <li><Link href="#despre-noi" onClick={(e) => handleNavClick(e, '#despre-noi')} className="text-muted-foreground hover:text-primary">Despre Noi</Link></li>
              <li><Link href="#programe" onClick={(e) => handleNavClick(e, '#programe')} className="text-muted-foreground hover:text-primary">Programe</Link></li>
              <li><Link href="#echipa" onClick={(e) => handleNavClick(e, '#echipa')} className="text-muted-foreground hover:text-primary">Echipă</Link></li>
              <li><Link href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Social Media</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Asociația Tinerilor Fotbaliști din România. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
