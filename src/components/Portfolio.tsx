import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Jane Doe</a>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="hover:text-primary transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#projects" className="hover:text-primary transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#about" className="hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
              <a href="#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Jane Doe</h1>
          <p className="text-xl md:text-2xl mb-8">A passionate full-stack developer crafting beautiful web experiences</p>
          <Button size="lg" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={`https://source.unsplash.com/random/800x600?technology&sig=${project}`} 
                  alt={`Project ${project}`} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-muted-foreground mb-4">A brief description of the project and its main features.</p>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-primary hover:underline flex items-center">
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                    <a href="#" className="text-primary hover:underline flex items-center">
                      <Github className="mr-1 h-5 w-5" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://source.unsplash.com/random/400x400?portrait" 
                alt="Jane Doe" 
                className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" 
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="mb-4">
                I'm a full-stack developer with a passion for creating elegant, efficient, and user-friendly web applications. With expertise in React, Node.js, and cloud technologies, I bring ideas to life through code.
              </p>
              <p className="mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software architecture.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <form className="max-w-md mx-auto space-y-6">
            <div>
              <Input type="text" placeholder="Your Name" required className="bg-background" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" required className="bg-background" />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                rows={4} 
                required 
                className="bg-background resize-none"
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}