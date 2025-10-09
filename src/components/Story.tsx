import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Story = () => {
  const timeline = [
    {
      year: "2017",
      role: "IT Support Assistant",
      company: "Angkasa Pura I",
      description: "Started my career providing technical support and maintaining IT infrastructure."
    },
    {
      year: "2019 – Present",
      role: "Senior Software Engineer",
      company: "PT EZB Wisata Indonesia",
      description: "Building scalable systems for travel, finance, and hospitality industries."
    }
  ];

  return (
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Journey</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From IT support to senior engineering — a story of continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a <span className="text-primary font-semibold">Bachelor of Informatics Engineering</span> with over{" "}
                  <span className="text-primary font-semibold">5 years of experience</span> developing and maintaining web
                  applications. Currently, I work as a Senior Laravel Developer at PT EZB Wisata Indonesia, where I build
                  scalable systems for travel, finance, and hospitality industries.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-center mb-8"
            >
              Career Timeline
            </motion.h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary rounded-full p-2">
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="ml-6">
                  <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{item.role}</h4>
                  <div className="text-muted-foreground font-medium mb-2">{item.company}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-secondary/50 border-primary/20">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-xl italic text-foreground">
                  "I love solving complex problems with simple, elegant code."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
