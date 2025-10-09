import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  details: string;
  role: string;
}

const projects: Project[] = [
  {
    title: "Hotel Booking Website",
    description: "A complete booking platform with integrated payment gateways.",
    tech: ["Laravel", "Vue.js", "MySQL", "Payment Gateway"],
    details: "Built a full-featured hotel booking system with real-time availability, dynamic pricing, secure payment processing, and comprehensive admin dashboard for property management.",
    role: "Full-Stack Developer"
  },
  {
    title: "POS System",
    description: "Point-of-Sale system with cancellation tracking and reporting.",
    tech: [".NET", "MySQL", "Reports", "Analytics"],
    details: "Developed a robust POS system with inventory management, sales tracking, cancellation management, and detailed analytics dashboard for business insights.",
    role: "Backend Developer"
  },
  {
    title: "Warehouse Management System",
    description: "Barcode-based inventory tracking and analytics.",
    tech: ["Laravel", "API Integration", "Barcode", "Analytics"],
    details: "Created a comprehensive warehouse management solution with barcode scanning, real-time inventory updates, automated reordering, and detailed reporting capabilities.",
    role: "Senior Developer"
  },
  {
    title: "Travel Marketplace & Whitelabel Platform",
    description: "Multi-brand booking platform with dynamic markup control.",
    tech: ["Laravel", "API", "Multi-tenant", "Payment"],
    details: "Architected a scalable whitelabel travel platform supporting multiple brands, dynamic pricing markup, API integrations with travel providers, and custom branding for each tenant.",
    role: "Lead Developer"
  }
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Latest Projects</h2>
          <p className="text-muted-foreground text-lg">
            Building scalable solutions for real-world business challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 border-border bg-secondary/50 h-full"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                    <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-muted text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl text-foreground">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Project Details</h4>
              <p className="text-muted-foreground">{selectedProject?.details}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Role</h4>
              <p className="text-muted-foreground">{selectedProject?.role}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((tech, i) => (
                  <Badge key={i} className="bg-primary text-primary-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Work;
