import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, ShieldCheck, Dumbbell } from "lucide-react";

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

export default function ProgramePage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Programele Noastre</h1>
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
    </div>
  );
}
