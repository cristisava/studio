"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere."),
  email: z.string().email("Adresă de email invalidă."),
  message: z.string().min(10, "Mesajul trebuie să aibă cel puțin 10 caractere.").max(500),
});

export default function ContactPage() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Mesaj trimis cu succes!",
            description: "Vă mulțumim pentru mesaj. Vă vom contacta în cel mai scurt timp.",
        });
        form.reset();
    }
  
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground">
            Aveți o întrebare sau doriți să colaborați? Lăsați-ne un mesaj și vă vom răspunde în cel mai scurt timp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 my-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nume</FormLabel>
                                <FormControl>
                                    <Input placeholder="Numele dvs." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email@exemplu.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mesaj</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Scrieți mesajul aici..." rows={6} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">Trimite Mesajul</Button>
                </form>
            </Form>
          </Card>
          <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">Informații de contact</h2>
              <div className="space-y-6 text-lg">
                  <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a href="mailto:contact@atfr.ro" className="text-muted-foreground hover:text-primary">contact@atfr.ro</a>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Telefon</h3>
                        <a href="tel:+40123456789" className="text-muted-foreground hover:text-primary">+40 123 456 789</a>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Adresă</h3>
                        <p className="text-muted-foreground">Str. Viitorului Nr. 1, București, România</p>
                      </div>
                  </div>
              </div>
               <Card className="mt-8">
                  <CardContent className="p-2">
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground">
                          Placeholder pentru hartă interactivă
                      </div>
                  </CardContent>
               </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
