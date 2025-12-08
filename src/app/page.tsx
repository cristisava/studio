import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-1');
const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center text-center text-white">
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
              <Link href="/programe">Programele Noastre</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary">
              <Link href="/contact">Contactează-ne</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Cine suntem?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Suntem o organizație non-profit dedicată descoperirii, formării și promovării tinerelor talente din fotbalul românesc. Misiunea noastră este de a oferi un mediu profesionist și educativ în care fiecare copil pasionat de fotbal își poate atinge potențialul maxim.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-base text-primary">
              <Link href="/despre-noi">Află mai multe <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
             {aboutImage && <Image src={aboutImage.imageUrl} alt={aboutImage.description} data-ai-hint={aboutImage.imageHint} fill className="object-cover" />}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
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
    </div>
  );
}
