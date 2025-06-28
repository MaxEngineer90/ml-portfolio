import { AIIntroMessage } from './AIIntroMessage';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primary">
            John Doe
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-headline text-foreground">
            Creative Frontend Developer
          </p>
          <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
            I build beautiful, responsive, and performant web applications. Passionate about modern web technologies and great user experiences.
          </p>
        </div>
        <div className="mt-12">
          <AIIntroMessage />
        </div>
      </div>
    </section>
  );
}
