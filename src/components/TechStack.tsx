import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Server, Zap, CreditCard, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    {
      name: "PHP (Laravel)",
      icon: Code2,
      description: "Expert-level Laravel development for robust backends"
    },
    {
      name: "Vue.js",
      icon: Zap,
      description: "Building reactive and performant user interfaces"
    },
    {
      name: "MySQL / SQL",
      icon: Database,
      description: "Database design, optimization, and management"
    },
    {
      name: "C# / ASP.NET Core",
      icon: Server,
      description: "Enterprise-grade .NET applications"
    },
    {
      name: "Payment Gateways",
      icon: CreditCard,
      description: "Integration with Stripe, PayPal, and local providers"
    },
    {
      name: "API Integrations",
      icon: Cloud,
      description: "RESTful APIs, Redis, and third-party services"
    }
  ];

  return (
    <section id="tech" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I use to build exceptional software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-border bg-secondary/50 h-full">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Also experienced with: <span className="text-primary">Python, Redis, Docker, Git, Agile</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
