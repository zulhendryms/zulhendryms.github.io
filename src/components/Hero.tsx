import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import heroIllustration from "@/assets/Hello_Minions.gif";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Zulhendry</span> —<br />
              Software Engineer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              I design, build, and optimize web applications that empower businesses through
              scalable technology and clean code.
            </p>
            <Button
              onClick={scrollToWork}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img
              src={heroIllustration}
              alt="Software Engineering Illustration"
              className="relative rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
