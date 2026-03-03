import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { ProjectsSection } from "@/components/Home/ProjectsSection";
const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
        <ProjectsSection/>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;