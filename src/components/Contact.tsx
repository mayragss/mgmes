import { Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Email deve ter menos de 255 caracteres" }),
  message: z.string().trim().min(1, { message: "Mensagem é obrigatória" }).max(1000, { message: "Mensagem deve ter menos de 1000 caracteres" })
});

export const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    const subject = encodeURIComponent(`Mensagem de ${values.name}`);
    const body = encodeURIComponent(`Nome: ${values.name}\nEmail: ${values.email}\n\nMensagem:\n${values.message}`);
    window.location.href = `mailto:hello@maygomes.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Mensagem preparada!",
      description: "Seu cliente de email irá abrir com a mensagem preenchida.",
    });
    
    form.reset();
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mb-12">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Nome</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Seu nome" 
                      {...field}
                      className="bg-background border-border focus:border-accent transition-colors"
                    />
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
                  <FormLabel className="text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="seu@email.com" 
                      {...field}
                      className="bg-background border-border focus:border-accent transition-colors"
                    />
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
                  <FormLabel className="text-foreground">Mensagem</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Sua mensagem..." 
                      className="min-h-[150px] bg-background border-border focus:border-accent transition-colors resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <Send className="mr-2 h-5 w-5" />
              Enviar Mensagem
            </Button>
          </form>
        </Form>
        
        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/mayra-gomes-9658b3115"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-border hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-accent/10"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          
          <a
            href="https://github.com/maygomes"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-border hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-accent/10"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
