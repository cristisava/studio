"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import React, { useState, useEffect } from "react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#acasa", label: "Acasă" },
  { href: "#despre-noi", label: "Despre Noi" },
  { href: "#programe", label: "Programe" },
  { href: "#galerie", label: "Galerie" },
  { href: "#echipa", label: "Echipă" },
  { href: "#parteneri", label: "Parteneri" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("acasa");

  const handleScroll = () => {
    const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
    const scrollPosition = window.scrollY + 150; // Adjusted for larger header

    for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveSection(section.id);
            break;
        }
    }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // remove #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const sectionId = href.substring(1);
    const isActive = activeSection === sectionId;

    return (
      <Link
        href={href}
        onClick={(e) => handleNavClick(e, href)}
        className={cn(
          "transition-colors hover:text-primary",
          isActive ? "text-primary font-semibold" : "text-muted-foreground"
        )}
      >
        {label}
      </Link>
    );
  };
  
    const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
    const sectionId = href.substring(1);
    const isActive = activeSection === sectionId;

    return (
      <Link
        href={href}
        onClick={(e) => handleNavClick(e, href)}
        className={cn(
            "text-lg transition-colors hover:text-primary",
            isActive ? "text-primary font-semibold" : "text-muted-foreground"
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="#acasa" className="mr-6 flex items-center space-x-2" onClick={(e) => handleNavClick(e, "#acasa")}>
            <Logo />
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Deschide meniul</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader>
                <SheetTitle className="sr-only">Meniu Navigare</SheetTitle>
              </SheetHeader>
              <Link
                href="#acasa"
                className="mb-8 flex items-center"
                onClick={(e) => handleNavClick(e, "#acasa")}
              >
                <Logo />
              </Link>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <MobileNavLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Button asChild className="hidden md:flex">
             <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Devino Membru</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
