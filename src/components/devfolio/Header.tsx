import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">DevFolio Pro</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
