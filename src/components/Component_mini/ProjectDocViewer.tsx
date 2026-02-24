// components/ProjectDocViewer.tsx
import { useState, useEffect } from "react";
import mammoth from "mammoth";
import { X, FileText, AlertCircle, Info } from "lucide-react";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";

interface ProjectDocViewerProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string | null;
  title: string;
}

export const ProjectDocViewer = ({ isOpen, onClose, fileUrl, title }: ProjectDocViewerProps) => {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset state
  useEffect(() => {
    if (isOpen && fileUrl) {
      loadDocument(fileUrl);
    } else {
      const timer = setTimeout(() => {
        setContent("");
        setError(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, fileUrl]);

  const loadDocument = async (url: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Không thể kết nối đến file.");
      
      const arrayBuffer = await response.arrayBuffer();
      
      // Cấu hình Mammoth để giữ lại định dạng tốt hơn
      const result = await mammoth.convertToHtml({ 
          arrayBuffer,
       
      });
      
      if (!result.value) {
          throw new Error("Tài liệu trống hoặc định dạng không hỗ trợ.");
      }
      await new Promise(r => setTimeout(r, 600)); 
      setContent(result.value);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Lỗi khi xử lý tài liệu.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl h-[98vh] p-0 border-0 bg-transparent shadow-2xl overflow-hidden flex flex-col gap-2 focus:outline-none">
        
        <style>{`
          .glass-panel {
            background: linear-gradient(145deg, hsla(222, 47%, 10%, 0.95) 0%, hsla(222, 47%, 8%, 0.98) 100%);
            backdrop-filter: blur(16px);
          }
          .gradient-text {
            background: linear-gradient(135deg, hsl(205 90% 45%) 0%, hsl(195 90% 60%) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .custom-scrollbar::-webkit-scrollbar { width: 8px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: hsl(222, 47%, 6%); }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: hsl(222, 47%, 18%); border-radius: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: hsl(199, 89%, 48%); }

          /* --- CSS QUAN TRỌNG ĐỂ TĂNG GAP VÀ GIỮ DÒNG TRỐNG --- */
          
          /* 1. Hiển thị các đoạn văn rỗng (khi người dùng Enter nhiều lần) */
          .prose p:empty {
            display: block;
            min-height: 1.5em; /* Chiều cao tối thiểu cho dòng trống */
            margin-bottom: 1.5em;
          
          }

          /* 2. Tăng khoảng cách thụt đầu dòng cho list */
          .prose ul, .prose ol {
             padding-left: 2rem !important; 
             font-size: 1.2rem;
          }
          .prose p {
    margin-top: 1.5em;      /* Cách đoạn trên */
    margin-bottom: 1.5em;   /* Cách đoạn dưới */
    line-height: 1.8;       /* Giãn dòng (1.5 - 2.0 là chuẩn Word) */
    text-align: justify;    /* Căn lề 2 bên (Justify) giống văn bản in */
      font-size: 1.25rem;
  }

  

  /* 3. Xử lý các dòng Enter thừa (Empty Paragraphs) */
  /* Mammoth thường sinh ra thẻ <p></p> rỗng khi user ấn Enter nhiều lần */
  .prose p:empty {
    display: block;
    min-height: 1.5em; /* Giữ chỗ trống */
  }

  /* 4. Định dạng List (Danh sách) */
  .prose ul, .prose ol {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .prose li {
    margin-bottom: 0.5em;
    padding-left: 0.5em;
  }
  
  /* 5. Định dạng Heading (Tiêu đề) */
  .prose h1, .prose h2, .prose h3 {
    color: hsl(210, 40%, 98%); /* Màu sáng */
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3;}
    .prose h1 { font-size: 2.5rem; margin-top: 1.5em; margin-bottom: 1em; line-height: 1.2; }
  .prose h2 { font-size: 2rem; margin-top: 2em; margin-bottom: 1em; border-bottom: 1px solid #334155; padding-bottom: 0.5rem; }
  .prose h3 { font-size: 1.75rem; margin-top: 1.5em; margin-bottom: 0.5em; }
        `}</style>

        {/* === MAIN CONTAINER === */}
        <div className="glass-panel w-full h-full flex flex-col rounded-xl border border-[hsl(222,47%,18%)] relative overflow-hidden text-[hsl(210,40%,98%)] shadow-[0_0_60px_hsla(199,89%,48%,0.1)]">
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(199,89%,48%)]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[hsl(222,47%,20%)]/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

            {/* === HEADER === */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[hsl(222,47%,18%)]/50 bg-[#0a1120]/50 z-20 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-[hsl(199,89%,48%)]/10 border border-[hsl(199,89%,48%)]/20 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                        <FileText className="w-5 h-5 text-[hsl(199,89%,48%)]" />
                    </div>
                    <div>
                        <DialogTitle className="text-xl font-bold tracking-tight gradient-text">
                            {title || "Tài liệu dự án"}
                        </DialogTitle>
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-light mt-0.5">
                            <span className="flex items-center gap-1"><Info className="w-3 h-3" /> AI Vision Doc Viewer</span>
                            <span className="w-1 h-1 rounded-full bg-slate-600" />
                            <span className="text-[hsl(199,89%,48%)]/80">Read-only mode</span>
                        </div>
                    </div>
                </div>
                <DialogClose className="group p-2 rounded-full hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                    <X className="w-6 h-6 text-slate-400 group-hover:text-white transition-transform group-hover:rotate-90" />
                </DialogClose>
            </div>

            {/* === CONTENT BODY === */}
            <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 p-6 md:p-10">
                {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a1120]/60 backdrop-blur-sm z-30 animate-in fade-in duration-300">
                         <div className="relative">
                            <div className="w-16 h-16 rounded-full border-2 border-[hsl(199,89%,48%)]/20 border-t-[hsl(199,89%,48%)] animate-spin" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-[hsl(199,89%,48%)]/10 animate-pulse" />
                            </div>
                        </div>
                        <span className="mt-4 text-[hsl(199,89%,48%)] font-medium tracking-wide animate-pulse">Đang phân tích dữ liệu AI...</span>
                    </div>
                )}

                {!isLoading && error && (
                    <div className="h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
                        <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20 mb-4 shadow-[0_0_30px_rgba(239,68,68,0.1)]"><AlertCircle className="w-12 h-12 text-red-400" /></div>
                        <h3 className="text-lg font-semibold text-red-200 mb-2">Không thể tải tài liệu</h3>
                        <p className="text-slate-400 max-w-sm text-center text-sm">{error}</p>
                    </div>
                )}

                {!isLoading && !error && !content && (
                      <div className="h-full flex flex-col items-center justify-center text-slate-500">
                        <div className="bg-slate-800/50 p-6 rounded-full border border-slate-700/50 mb-6 animate-float shadow-2xl"><FileText className="w-16 h-16 text-slate-600" strokeWidth={1} /></div>
                        <h3 className="text-xl font-medium text-slate-300 mb-2">Chờ hiển thị</h3>
                        <p className="text-sm opacity-50">Dữ liệu đang được chuẩn bị...</p>
                      </div>
                )}

                {!isLoading && !error && content && (
                    <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <article 
                            className="prose prose-invert prose-lg max-w-none relative z-20
                            prose-p:my-10 
                            prose-p:indent-10
                            prose-p:leading-loose
                            prose-headings:font-bold prose-headings:text-transparent prose-headings:bg-clip-text prose-headings:bg-gradient-to-br prose-headings:from-[#1e90ff] prose-headings:to-[#00bfff]
                            prose-headings:tracking-tight prose-h1:text-3xl 
                            prose-h2:text-2xl prose-h2:border-b prose-h2:border-[hsl(222,47%,18%)] prose-h2:pb-2 prose-h2:mt-12 prose-h2:mb-6
                            prose-p:text-[hsl(210,40%,98%)] prose-p:font-light
                            prose-a:text-[hsl(199,89%,48%)] prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-white prose-strong:font-semibold
                            prose-li:text-[hsl(210,40%,98%)] prose-ul:list-disc prose-ol:list-decimal
                            prose-img:rounded-xl prose-img:shadow-2xl prose-img:border prose-img:border-[hsl(222,47%,18%)]
                            prose-code:text-[hsl(199,89%,48%)] prose-code:bg-[hsl(222,47%,10%)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
                            "
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </div>
                )}
            </div>

            <div className="px-6 py-3 border-t border-[hsl(222,47%,18%)]/50 bg-[#0a1120]/30 text-center shrink-0">
               <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                   Powered by Mammoth.js • AI Vision Theme
               </p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};