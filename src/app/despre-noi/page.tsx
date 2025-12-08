import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Trophy } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-1');

export default function DespreNoiPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Despre Noi</h1>
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
            <h2 className="text-3xl font-bold font-headline mb-4 text-foreground">Istoria Noastră</h2>
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
    </div>
  );
}
