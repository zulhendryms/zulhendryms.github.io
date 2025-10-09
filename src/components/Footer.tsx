const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Zulhendry Muhammad Salman. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("story")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Story
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
