import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

export default function ParteneriPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Parteneri și Sponsori</h1>
          <p className="text-lg text-muted-foreground">
            Succesul nostru este posibil datorită sprijinului valoros al partenerilor și sponsorilor noștri. Le mulțumim pentru încrederea și implicarea lor.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16">
          {partners.concat(partners).map((partner, index) => (
            <Card key={`${partner.id}-${index}`} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex items-center justify-center p-6 aspect-[2/1]">
                <div className="relative h-16 w-full">
                  <Image
                    src={partner.imageUrl}
                    alt={partner.description || 'Partner logo'}
                    data-ai-hint={partner.imageHint}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
