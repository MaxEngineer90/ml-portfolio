export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} DevFolio Pro. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
