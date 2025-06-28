import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Rocket, Server, Smartphone, Layers } from 'lucide-react';

const skills = {
  'Frontend': [
    { name: 'React', icon: <Code className="h-5 w-5 text-accent" /> },
    { name: 'Next.js', icon: <Code className="h-5 w-5 text-accent" /> },
    { name: 'TypeScript', icon: <Code className="h-5 w-5 text-accent" /> },
    { name: 'Tailwind CSS', icon: <Layers className="h-5 w-5 text-accent" /> },
    { name: 'HTML5 & CSS3', icon: <Code className="h-5 w-5 text-accent" /> },
  ],
  'Backend': [
    { name: 'Node.js', icon: <Server className="h-5 w-5 text-accent" /> },
    { name: 'Express', icon: <Server className="h-5 w-5 text-accent" /> },
    { name: 'Firebase', icon: <Database className="h-5 w-5 text-accent" /> },
    { name: 'PostgreSQL', icon: <Database className="h-5 w-5 text-accent" /> },
  ],
  'Tools & Others': [
    { name: 'Git & GitHub', icon: <Rocket className="h-5 w-5 text-accent" /> },
    { name: 'Docker', icon: <Rocket className="h-5 w-5 text-accent" /> },
    { name: 'Figma', icon: <Smartphone className="h-5 w-5 text-accent" /> },
    { name: 'Jest', icon: <Rocket className="h-5 w-5 text-accent" /> },
  ]
};

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate developer with a knack for creating elegant solutions in the least amount of time. I have a strong background in both front-end and back-end development, with extensive experience in building scalable and maintainable applications. My journey in web development started with a deep curiosity for how things work, and it has evolved into a career where I can blend technical skills with creative problem-solving.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillList.map(skill => (
                    <Badge key={skill.name} variant="outline" className="flex items-center gap-2 px-3 py-1 text-base border-accent text-accent-foreground bg-accent/10 hover:bg-accent/20 transition-colors">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
