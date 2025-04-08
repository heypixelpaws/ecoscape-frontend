import { getAllProjectSlugs } from "@/lib/projects";
import ProjectClientPage from "./_components/ProjectClientPage";

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectClientPage params={params} />;
}
