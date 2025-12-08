import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

export default function GaleriePage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Galerie Foto</h1>
          <p className="text-lg text-muted-foreground">
            Momente surprinse din antrenamente, meciuri și evenimente speciale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
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
      </div>
    </div>
  );
}
