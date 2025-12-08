
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BrainCircuit, Dumbbell, Mail, MapPin, Phone, ShieldCheck, Target, Trophy, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";


const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-1');
const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));
const teamMembers = [
  {
    id: 1,
    name: "Alexandru Popescu",
    role: "Antrenor Principal",
    imageId: "team-member-1",
  },
  {
    id: 2,
    name: "Mihai Ionescu",
    role: "Antrenor Coordonator Juniori",
    imageId: "team-member-3",
  },
  {
    id: 3,
    name: "Elena Vasilescu",
    role: "Manager Proiect",
    imageId: "team-member-2",
  },
  {
    id: 4,
    name: "Andreea Diaconu",
    role: "Mentor & Psiholog Sportiv",
    imageId: "team-member-4",
  }
];
const programs = [
  {
    icon: <Dumbbell className="w-12 h-12 text-primary mb-4" />,
    title: "Program de Antrenament Individual",
    description: "Sesiuni personalizate pentru a dezvolta abilitățile tehnice, tactice și fizice ale fiecărui jucător, sub îndrumarea antrenorilor noștri specializați.",
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-primary mb-4" />,
    title: "Dezvoltare Juvenilă",
    description: "Un program complex destinat grupelor de copii și juniori, axat pe însușirea corectă a elementelor de bază ale jocului de fotbal într-un mediu distractiv.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary mb-4" />,
    title: "Workshop-uri și Seminarii",
    description: "Evenimente periodice cu specialiști din domeniul sportiv (nutriționiști, psihologi sportivi) pentru o dezvoltare completă a sportivilor.",
  },
];


export default function Home() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // remove #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="acasa" className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-tight">
            Asociația Tinerilor Fotbaliști din România
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Investim în talent, modelăm caractere, construim viitorul fotbalului românesc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#programe" onClick={(e) => handleNavClick(e, '#programe')}>Programele Noastre</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary">
              <Link href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contactează-ne</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="despre-noi" className="py-16 md:py-24 bg-background">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Despre Noi</h2>
                <p className="text-lg text-muted-foreground">
                    Construim o comunitate puternică prin pasiune, disciplină și excelență în fotbal.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center my-16">
              {aboutImage && (
                <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <h3 className="text-3xl font-bold font-headline mb-4 text-foreground">Istoria Noastră</h3>
                <p>
                  Fondată în 2024, Asociația Tinerilor Fotbaliști din România s-a născut din dorința de a revitaliza fotbalul juvenil românesc. Am început ca un grup mic de antrenori și voluntari pasionați, uniți de o viziune comună: crearea unei platforme unde talentul pur este cultivat cu profesionalism și integritate.
                </p>
                <p>
                  De-a lungul anilor, am crescut, am dezvoltat programe de excelență și am construit parteneriate durabile, devenind un nume de referință în peisajul sportiv juvenil.
                </p>
              </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Target className="w-10 h-10 text-primary" />
                  <CardTitle>Misiune</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Să identificăm, să dezvoltăm și să promovăm tinerii fotbaliști talentați, oferindu-le un cadru sportiv și educațional la cele mai înalte standarde.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Users className="w-10 h-10 text-primary" />
                  <CardTitle>Valori</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Credem în disciplină, respect, muncă în echipă, fair-play și dedicare totală. Aceste valori stau la baza fiecărei activități.</p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-1 hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Trophy className="w-10 h-10 text-primary" />
                  <CardTitle>Viziune</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Să devenim principalul pilon în formarea viitoarelor generații de fotbaliști de performanță din România, recunoscuți național și internațional.</p>
                </CardContent>
              </Card>
            </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section id="programe" className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Programele Noastre</h2>
            <p className="text-lg text-muted-foreground">
              Oferim o gamă variată de programe concepute pentru a satisface nevoile fiecărui tânăr sportiv, indiferent de nivelul de pregătire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
            {programs.map((program, index) => (
              <Card key={index} className="flex flex-col text-center items-center p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {program.icon}
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription>{program.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Galerie Foto</h2>
            <p className="text-lg text-muted-foreground">
              Momente surprinse din antrenamente, meciuri și evenimente speciale.
            </p>
          </div>
          {/* Grid for desktop */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description || 'Gallery image'}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
           {/* Carousel for mobile */}
          <div className="sm:hidden my-16">
            <Carousel 
              className="w-full max-w-xs mx-auto"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {galleryImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <Card className="overflow-hidden group shadow-md">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={image.imageUrl}
                            alt={image.description || 'Gallery image'}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="echipa" className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Echipa Noastră</h2>
            <p className="text-lg text-muted-foreground">
              Profesioniști dedicați care contribuie la succesul tinerilor noștri sportivi.
            </p>
          </div>
          {/* Grid for desktop */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
            {teamMembers.map((member) => {
              const image = PlaceHolderImages.find(img => img.id === member.imageId);
              return (
                <Card key={member.id} className="text-center overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    {image && (
                      <div className="relative aspect-square w-full">
                        <Image
                          src={image.imageUrl}
                          alt={member.name}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          {/* Carousel for mobile */}
          <div className="sm:hidden my-16">
            <Carousel 
              className="w-full max-w-xs mx-auto"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {teamMembers.map((member) => {
                  const image = PlaceHolderImages.find(img => img.id === member.imageId);
                  return (
                    <CarouselItem key={member.id}>
                      <Card className="text-center overflow-hidden group shadow-md">
                        <CardContent className="p-0">
                          {image && (
                            <div className="relative aspect-square w-full">
                              <Image
                                src={image.imageUrl}
                                alt={member.name}
                                data-ai-hint={image.imageHint}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                        </CardContent>
                        <CardHeader>
                          <CardTitle>{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
                        </CardHeader>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="parteneri" className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl font-bold font-headline mb-2">Partenerii Noștri</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">Suntem recunoscători pentru sprijinul partenerilor noștri care cred în misiunea noastră și contribuie la dezvoltarea tinerelor talente.</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <div key={partner.id} className="relative h-12 w-32" title="Partner Logo">
                 <Image
                  src={partner.imageUrl}
                  alt={partner.description || 'Partner logo'}
                  data-ai-hint={partner.imageHint}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contact</h2>
            <p className="text-lg text-muted-foreground">
              Aveți o întrebare sau doriți să colaborați? Lăsați-ne un mesaj și vă vom răspunde în cel mai scurt timp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 my-16">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h3>
              <ContactForm />
            </Card>
            <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6">Informații de contact</h3>
                <div className="space-y-6 text-lg">
                    <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Email</h4>
                          <a href="mailto:contact@atfr.ro" className="text-muted-foreground hover:text-primary">contact@atfr.ro</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Telefon</h4>
                          <a href="tel:+40123456789" className="text-muted-foreground hover:text-primary">+40 123 456 789</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Adresă</h4>
                          <p className="text-muted-foreground">Str. Viitorului Nr. 1, București, România</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
