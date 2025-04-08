import { getAllProjects } from "@/lib/projects";
import PortfolioClientPage from "./_components/PortfolioClientPage";

export const metadata = {
  title: "Portfolio | Ecoscape Design and Construction",
  description:
    "Explore our portfolio of interior design and construction projects",
};

export default async function PortfolioPage() {
  const projects = await getAllProjects();

  return <PortfolioClientPage projects={projects} />;
}
