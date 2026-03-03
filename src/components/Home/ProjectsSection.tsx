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

  // --- SỬA ĐỔI 1: Logic mở Viewer ---
  const handleOpenProject = (project: Project) => {
    // Ưu tiên mở file Word nếu có, nếu không thì thôi (hoặc mở link ngoài tùy logic của bạn)
    if (project.url_word) {
      setSelectedProject(project);
      setIsViewerOpen(true);
    } else if (project.path) {
        // Nếu không có file word mà có path (link web), mở tab mới
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
          {/* ... (Giữ nguyên phần Header) ... */}
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
                  className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {project.image && (
                     <div 
                        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{ backgroundImage: `url(${project.image})` }}
                     />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                        {project.services?.title || "Dự án"}
                      </span>
                      {/* --- SỬA ĐỔI 2: Icon hiển thị logic đúng --- */}
                      {/* Nếu có file Word -> Hiển thị icon FileText, nếu có Link -> ExternalLink */}
                      
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-primary/80 mb-3 font-medium">
                        {project.client || "Khách hàng doanh nghiệp"}
                    </p>
                    
                    <p className="text-muted-foreground line-clamp-3 text-justify">
                        {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls (Giữ nguyên) */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-12">
                 {/* ... (Giữ nguyên code phân trang) ... */}
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

      {/* --- SỬA ĐỔI 3: Truyền đúng url_word vào Viewer --- */}
      <ProjectDocViewer 
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        fileUrl={selectedProject?.url_word || null} 
        title={selectedProject?.title || "Chi tiết dự án"}
      />
    </section>
  );
};