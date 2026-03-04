import { useState, useEffect } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { useProjects, Project } from "@/hooks/useProjects"; 
import { ProjectDocViewer } from "../Component_mini/ProjectDocViewer"; 

export const ProjectsSection = () => {
  const { data: projects, isLoading } = useProjects();
  
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // State quản lý Viewer
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const ITEMS_PER_PAGE = 4;
  const AUTO_PLAY_DELAY = 5000;
  
  const totalItems = projects?.length || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const currentProjects = projects?.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  ) || [];

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, AUTO_PLAY_DELAY);
    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  const handleOpenProject = (project: Project) => {
    if (project.url_word) {
      setSelectedProject(project);
      setIsViewerOpen(true);
    } else if (project.path) {
        window.open(project.path, '_blank');
    }
  };

  if (isLoading) {
    return (
      <section className="py-24 flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-11 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Các </span>
            <span className="gradient-text">dự án</span>
            <span className="text-foreground"> đã triển khai</span>
          </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chúng tôi tự hào với các dự án thành công cho các doanh nghiệp lớn trong và ngoài nước
          </p>
        </div>

        <div 
          className="w-full"
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
            <div className="grid md:grid-cols-2 gap-8 min-h-[400px]">
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => handleOpenProject(project)}
                  className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer animate-fade-in relative overflow-hidden flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Đã xóa phần background image cũ ở đây */}

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                        {project.services?.title || "Dự án"}
                      </span>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* --- CẬP NHẬT: Image nằm bên trái Client --- */}
                    <div className="flex items-center gap-3 mb-4">
                        {project.image && (
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/10 bg-white/5 shrink-0">
                                <img 
                                    src={project.image} 
                                    alt={project.client || "Client Logo"} 
                                    className="w-full h-full object-contain" 
                                />
                            </div>
                        )}
                        <p className="text-[18px] text-primary/80 font-medium">
                             {project.client || "Khách hàng doanh nghiệp"}
                        </p>
                    </div>
                    
                    <p className="text-muted-foreground line-clamp-3 text-justify mt-auto">
                        {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-12">
                 {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index)}
                    className={`h-3 rounded-full transition-all duration-300 ease-in-out ${
                      currentPage === index
                        ? "w-12 bg-orange-500"
                        : "w-3 bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            )}
        </div>
      </div>

      <ProjectDocViewer 
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        fileUrl={selectedProject?.url_word || null} 
        title={selectedProject?.title || "Chi tiết dự án"}
      />
    </section>
  );
};