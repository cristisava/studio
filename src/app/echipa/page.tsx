import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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

export default function EchipaPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Echipa Noastră</h1>
          <p className="text-lg text-muted-foreground">
            Profesioniști dedicați care contribuie la succesul tinerilor noștri sportivi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
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
      </div>
    </div>
  );
}
