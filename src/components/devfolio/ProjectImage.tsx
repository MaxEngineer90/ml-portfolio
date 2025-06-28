import Image from 'next/image';
import { generateProjectImage } from '@/ai/flows/generate-project-image';

interface Project {
  name: string;
  description: string | null;
  topics: string[];
  language: string | null;
}

export async function ProjectImage({ project }: { project: Project }) {
  // Use a fallback description if the project description is null or too short
  const description = (project.description && project.description.length > 10) 
    ? project.description 
    : `A software project named ${project.name}.`;

  const { imageDataUri } = await generateProjectImage({ 
    name: project.name,
    description: description,
  });

  const isPlaceholder = imageDataUri.includes('placehold.co');
  const hintKeywords = [project.language, ...project.topics].filter(Boolean) as string[];
  const hint = hintKeywords.slice(0, 2).join(' ').toLowerCase() || 'software code';

  return (
    <Image
      src={imageDataUri}
      alt={project.name}
      width={600}
      height={400}
      className="w-full h-auto object-cover aspect-video"
      {...(isPlaceholder && { 'data-ai-hint': hint })}
    />
  );
}
