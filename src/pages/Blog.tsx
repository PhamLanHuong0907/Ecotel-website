import { useState, useEffect } from "react";
import { ExternalLink, FileText, Loader2, Clock, User } from "lucide-react"; 
import { useBlogs, Blog } from "@/hooks/useBlogs"; 
import { ProjectDocViewer } from "@/components/Component_mini/ProjectDocViewer"; 

// Hàm hỗ trợ format ngày tháng sang định dạng Việt Nam
const formatDate = (dateString: string | null) => {
  if (!dateString) return "Mới đây";
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });
};

export const BlogsSection = () => {
  const { data: blogs, isLoading } = useBlogs();
  
  const [currentPage, setCurrentPage] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // LỌC DỮ LIỆU: Chỉ lấy những bài viết có trạng thái published === true
  const publishedBlogs = blogs?.filter(blog => blog.published) || [];

  // Pagination: 6 items mỗi trang (2 Card bên phải + 4 Card nhỏ bên dưới)
  const ITEMS_PER_PAGE = 6; 
  const AUTO_PLAY_DELAY = 5000;
  
  // Dùng publishedBlogs thay cho blogs
  const totalItems = publishedBlogs.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const currentBlogs = publishedBlogs.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (isPaused || totalItems === 0) return;
    const timer = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % totalItems);
    }, AUTO_PLAY_DELAY);
    return () => clearInterval(timer);
  }, [isPaused, totalItems]);

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  const handleOpenBlog = (blog: Blog) => {
    if (blog.url_word) {
      setSelectedBlog(blog);
      setIsViewerOpen(true);
    } 
  };

  if (isLoading) {
    return (
      <section className="py-24 flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </section>
    );
  }

  // Nếu không có bài viết nào được xuất bản thì ẩn section
  if (publishedBlogs.length === 0) return null;

  const featuredBlog = publishedBlogs[featuredIndex];

  return (
    <section id="Blogs" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#1e5c8b]/10 text-[#4eb9e6] dark:bg-amber-900/30 dark:text-amber-400 mb-4">
              Tin tức & Sự kiện
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6]">Tin tức nổi bật</span>
          </h2>
        </div>

        <div 
          className="w-full"
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* === KHỐI 1: ẢNH ĐỘNG TO (Bên trái) === */}
              <div
                onClick={() => handleOpenBlog(featuredBlog)}
                className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-xl cursor-pointer isolate shadow-md hover:shadow-xl transition-all min-h-[300px] lg:h-[464px]"
              >
                {featuredBlog?.image ? (
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${featuredBlog.image})` }}
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 transition-transform duration-1000 group-hover:scale-105" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                   <span className="px-3 py-1 rounded bg-red-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      Tin Nổi Bật
                   </span>
                   
                   <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#338bcf] transition-all">
                      {featuredBlog?.url_word ? <FileText size={16} /> : <ExternalLink size={16} />}
                   </div>
                </div>

                <div className="absolute bottom-8 left-6 right-6 z-10">
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug group-hover:text-[#4eb9e6] transition-colors line-clamp-3">
                      {featuredBlog?.title}
                   </h3>
                   <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1.5 font-medium text-white">
                          <User size={14} className="text-[#4eb9e6]" />
                          {featuredBlog?.author || "Admin"}
                      </span>
                      <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {formatDate(featuredBlog?.created_at)}
                      </span>
                   </div>
                </div>

                {totalItems <= 10 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {/* Dùng publishedBlogs.map thay vì blogs.map */}
                    {publishedBlogs.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setFeaturedIndex(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          featuredIndex === idx ? "w-6 bg-[#4eb9e6]" : "w-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* === KHỐI 2: LƯỚI BÀI VIẾT === */}
              {currentBlogs.map((blog, index) => {
                const isSideCard = index === 0 || index === 1;
                const gridClass = isSideCard ? "md:col-span-1 lg:col-span-2 lg:row-span-1" : "col-span-1";
                const paddingClass = isSideCard ? "p-4 lg:p-5" : "p-0"; 
                const heightClass = isSideCard ? "lg:h-[220px]" : "lg:h-[348px]";

                return (
                  <div
                    key={blog.id}
                    onClick={() => handleOpenBlog(blog)}
                    className={`flex flex-col glass-card rounded-xl cursor-pointer group hover:border-[#338bcf]/50 transition-all hover-lift bg-card overflow-hidden ${gridClass} ${heightClass} ${paddingClass}`}
                  >
                    {isSideCard ? (
                      <>
                        <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-[#338bcf] transition-colors leading-snug text-lg">
                          {blog.title}
                        </h3>

                        <div className="flex gap-4 mb-3 flex-1">
                          {blog.image ? (
                            <img 
                              src={blog.image} 
                              alt={blog.title} 
                              className="w-[100px] h-[75px] object-cover rounded-md border border-border/50 flex-shrink-0" 
                            />
                          ) : (
                            <div className="w-[100px] h-[75px] bg-muted rounded-md flex-shrink-0 flex items-center justify-center border border-border/50">
                              <FileText className="w-6 h-6 text-muted-foreground/50" />
                            </div>
                          )}

                          <p 
                            className="text-[13.5px] text-muted-foreground line-clamp-3 leading-relaxed overflow-hidden text-ellipsis"
                            title={blog.excerpt || ""}
                          >
                            {blog.excerpt || "Đang cập nhật nội dung chi tiết..."}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-3 border-t-2  text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1 font-medium text-foreground/80">
                              <User size={12} className="text-[#338bcf]" />
                              {blog.author || "Admin"}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {formatDate(blog.created_at)}
                            </span>
                          </div>
                          <div className="w-7 h-7 rounded flex items-center justify-center bg-muted group-hover:bg-[#338bcf] group-hover:text-white transition-colors">
                            {blog.url_word ? <FileText size={14} /> : <ExternalLink size={14} />}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-full h-[200px] relative bg-muted shrink-0 border-b border-border/50">
                          {blog.image ? (
                            <img 
                              src={blog.image} 
                              alt={blog.title} 
                              className="w-full h-full object-cover" 
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FileText className="w-8 h-8 text-muted-foreground/50" />
                            </div>
                          )}
                        </div>
                        
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-[#338bcf] transition-colors leading-snug text-base">
                            {blog.title}
                          </h3>

                          <div className="flex items-center justify-between mt-auto pt-3 border-t-2  text-xs text-muted-foreground">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1 font-medium text-foreground/80">
                                <User size={12} className="text-[#338bcf]" />
                                {blog.author || "Admin"}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {formatDate(blog.created_at)}
                              </span>
                            </div>
                            <div className="w-6 h-6 rounded flex items-center justify-center bg-muted group-hover:bg-[#338bcf] group-hover:text-white transition-colors">
                              {blog.url_word ? <FileText size={12} /> : <ExternalLink size={12} />}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                 {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index)}
                    className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
                      currentPage === index
                        ? "w-8 bg-[#338bcf]"
                        : "w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700"
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
        fileUrl={selectedBlog?.url_word || null} 
        title={selectedBlog?.title || "Chi tiết bài viết"}
      />
    </section>
  );
};