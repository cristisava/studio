import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
                <Logo />
            </Link>
            <p className="text-muted-foreground max-w-sm">
                Asociația Tinerilor Fotbaliști din România - Modelăm viitorul fotbalului românesc.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Linkuri Utile</h4>
            <ul className="space-y-2">
              <li><Link href="/despre-noi" className="text-muted-foreground hover:text-primary">Despre Noi</Link></li>
              <li><Link href="/programe" className="text-muted-foreground hover:text-primary">Programe</Link></li>
               <li><Link href="/echipa" className="text-muted-foreground hover:text-primary">Echipă</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
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
