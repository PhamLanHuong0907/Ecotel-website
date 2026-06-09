import React, { useState, useEffect } from 'react';
import { mockCultureGallery } from '@/data';
import CircuitOverlay from './CircuitOverlay';
import CountdownTimer from './CountdownTimer';
import { Briefcase, Send, Building2, Cpu, TrendingUp, Filter, MapPin, Calendar, Clock, Image, ArrowRight, CheckCircle2, UploadCloud, AlertCircle, Users, Award } from 'lucide-react';
import { Job } from '@/integration/types';
import background from "@/assets/background-home7.webp";

interface LandingPageProps {
  jobs: Job[];
  onSelectJobId: (jobId: string) => void;
  onSubmitApplication: (fullName: string, email: string, phone: string, jobId: string, cvName: string) => void;
  onShowSuccess: (info: { name: string; email: string; jobTitle: string }) => void;
}

export default function LandingPage({ jobs, onSelectJobId, onSubmitApplication, onShowSuccess }: LandingPageProps) {
  // Filter States
  const [selectedDepts, setSelectedDepts] = useState<string[]>([]);
  const [selectedLocs, setSelectedLocs] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]); // Thêm state quản lý cấp bậc

  // Bottom Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [phone, setPhone] = useState('');

  const [isDragActive, setIsDragActive] = useState(false);
  const [formError, setFormError] = useState('');
  
  // Set default selected job when listings load
  useEffect(() => {
    if (jobs && jobs.length > 0 && !selectedJob) {
      setSelectedJob(jobs[0].id);
    }
  }, [jobs, selectedJob]);

  // Active Lightbox for gallery
  const [lightboxImg, setLightboxImg] = useState<{ url: string; title: string } | null>(null);

  // Department checkboxes logic
  const handleDeptChange = (dept: string) => {
    setSelectedDepts(prev =>
      prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept]
    );
  };

  // Location checkboxes logic
  const handleLocChange = (loc: string) => {
    setSelectedLocs(prev =>
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  // Level checkboxes logic
  const handleLevelChange = (level: string) => {
    setSelectedLevels(prev =>
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
  };

  // Filter computation
  const filteredJobs = jobs.filter(job => {
    const deptMatch = selectedDepts.length === 0 || selectedDepts.includes(job.department);
    const locMatch = selectedLocs.length === 0 || selectedLocs.includes(job.location);
    // Lấy level từ job, nếu chưa có trong DB thì mặc định là Senior để không bị lỗi
    const jobLevel = (job as any).level || 'Senior';
    const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(jobLevel);
    
    return deptMatch && locMatch && levelMatch;
  });
  const JOBS_PER_PAGE = 3;
const [currentPage, setCurrentPage] = useState(0);

// Tính toán các trang dựa trên filteredJobs
const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
const paginatedJobs = filteredJobs.slice(
  currentPage * JOBS_PER_PAGE, 
  (currentPage + 1) * JOBS_PER_PAGE
);

// Reset trang về 0 mỗi khi bộ lọc thay đổi
useEffect(() => {
  setCurrentPage(0);
}, [selectedDepts, selectedLocs, selectedLevels]);
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

 


  // Submission handler for bottom quick apply
  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setFormError('Vui lòng điền đầy đủ các thông tin bắt buộc (*)');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError('Email không đúng định dạng');
      return;
    }

    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!phoneRegex.test(phone)) {
      setFormError('Số điện thoại không đúng định dạng Việt Nam');
      return;
    }

  

    const jobApplied = jobs.find(j => j.id === selectedJob);
    if (!jobApplied) return;

    // Send application up


    // Call success notification
    onShowSuccess({
      name: fullName,
      email: email,
      jobTitle: jobApplied.title
    });

    // Reset fields
    setFullName('');
    setEmail('');
    setPhone('');

  };

  return (
    <div className="bg-[#070c16] text-white min-h-screen flex flex-col font-sans">
      
      {/* 1. HERO HOME SECT */}
      <section 
        className="relative overflow-hidden pt-20 pb-16 border-b border-slate-900 bg-cover bg-center bg-no-repeat min-h-[45vh] flex flex-col justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 w-full">
          <div id="hero-careers-title" className="-mt-4 pb-6 mb-4 text-foreground font-bold animate-fade-up-delay-1 pt-3 [.light_&]:text-white">
            <span className="block mb-4 text-3xl md:text-4xl lg:text-5xl leading-relaxed">
              Gia nhập đội ngũ <span className="gradient-text ml-2">ECOTEL</span>
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl leading-relaxed">
              Tiên phong chuyển đổi số
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 animate-fade-up-delay-2 font-medium leading-relaxed">
            Cùng nhau hợp lực xây dựng tương lai công nghệ cao tại Việt Nam, mang đến giải pháp quản trị số tiên phong vượt tầm biên giới.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 animate-fade-up-delay-3">
           
             <button
              onClick={() => document.getElementById('careers-positions-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6] text-white font-semibold hover-lift shadow-lg shadow-primary/20"
            >
              Xem danh sách vị trí
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
             <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-foreground font-semibold hover:bg-secondary/80 transition-all"
            >
              Tìm hiểu thêm 
            </a>
          </div>
        </div>

        {/* Floating background grids */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-t from-primary/5 to-transparent"></div>
      </section>

      {/* 2. WHY ECOTEL SECTION */}
      <section id="why-ecotel-section" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 id="why-us-title" className="text-3xl md:text-4xl font-heading font-bold text-white ">
            Tại sao chọn <span className="text-primary">ECOTEL</span>
          </h2>
          <p className="mt-4 text-white text-sm">
            Môi trường kiến thức đỉnh cao thúc đẩy chuyển động không ngừng, chắp cánh cho tiềm năng vĩ đại của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="glass-card group relative h-full flex flex-col overflow-hidden rounded-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 border-primary/40 border-[2px] shadow-[0_8px_30px_-5px_rgba(34,211,238,0.3)] [.light_&]:bg-neutral-100 bg-[#0b1322]/80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-500 opacity-100 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary border transition-all duration-500 bg-primary/30 border-primary shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-110">
                  <Building2 className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-white [.light_&]:text-gray-800 leading-tight">
                  Môi trường chuyên nghiệp
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-medium transition-colors duration-300 drop-shadow-sm [.light_&]:text-gray-600">
                Cơ sở vật chất hiện đại, văn hóa chia sẻ bình đẳng. Dự án đa diện, thách thức chất lượng giúp toàn bộ lập trình viên, nhân sự nâng cao năng lực vượt bậc.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card group relative h-full flex flex-col overflow-hidden rounded-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 border-primary/40 border-[2px] shadow-[0_8px_30px_-5px_rgba(34,211,238,0.3)] [.light_&]:bg-neutral-100 bg-[#0b1322]/80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-500 opacity-100 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary border transition-all duration-500 bg-primary/30 border-primary shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-110">
                  <TrendingUp className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-white [.light_&]:text-gray-800 leading-tight">
                  Phát triển sự nghiệp
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-medium transition-colors duration-300 drop-shadow-sm [.light_&]:text-gray-600">
                Lộ trình thăng tiến rõ rệt được review đánh giá 2 lần/năm. Hỗ trợ kinh phí đào tạo chuyên sâu và cơ hội dẫn dắt các dự án quy mô tập đoàn lớn kỹ thuật cao.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card group relative h-full flex flex-col overflow-hidden rounded-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 border-primary/40 border-[2px] shadow-[0_8px_30px_-5px_rgba(34,211,238,0.3)] [.light_&]:bg-neutral-100 bg-[#0b1322]/80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-500 opacity-100 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary border transition-all duration-500 bg-primary/30 border-primary shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-110">
                  <Cpu className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-white [.light_&]:text-gray-800 leading-tight">
                  Công nghệ tiên tiến
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-medium transition-colors duration-300 drop-shadow-sm [.light_&]:text-gray-600">
                Tiếp cận trực tiếp các học thuyết hệ thống phức tạp, xây dựng Web/SaaS bằng Cloud Native, microservices, AI tích hợp sâu, kiến trúc OOP quy chuẩn nhất.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OPEN POSITIONS SECTION */}
      <section id="careers-positions-section" className="py-20 bg-[#060a12] border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 id="open-positions-title" className="text-3xl md:text-4xl font-heading font-bold text-white ">
              Vị trí <span className="gradient-text">đang tuyển</span>
            </h2>
            <p className="mt-3 text-white text-lg">
              Chọn điểm xuất phát bứt phá sự nghiệp công nghiệp của bạn ngay tại đây.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* LEFT FILTER BOX */}
            <div className="lg:col-span-1 bg-[#090f1b] border border-slate-800 rounded-2xl p-6 self-start">
              <div className="flex items-center space-x-2 pb-4 border-b border-slate-800 mb-6">
                <Filter className="w-4 h-4 text-[#00f2fe]" />
                <span className="text-sm font-bold uppercase tracking-wider text-slate-200">Bộ lọc vị trí</span>
              </div>

              {/* Filter by Department */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Bộ phận</h4>
                <div className="space-y-2.5">
                  {[
                    { id: 'Kỹ thuật', label: 'Kỹ thuật' },
                    { id: 'Kinh doanh', label: 'Kinh doanh' },
                    { id: 'Hành chính', label: 'Hành chính' }
                  ].map(dept => (
                    <label key={dept.id} className="flex items-center space-x-3 text-sm text-slate-300 cursor-pointer hover:text-white transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedDepts.includes(dept.id)}
                        onChange={() => handleDeptChange(dept.id)}
                        className="w-4 h-4 rounded text-[#00f2fe] bg-[#070b15] border-slate-800 focus:ring-offset-[#070c16] focus:ring-[#00f2fe] focus:ring-1"
                      />
                      <span>{dept.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter by Location */}
              

              {/* Filter by Level */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Cấp bậc</h4>
                <div className="space-y-2.5">
                  {[
                    { id: 'Thực tập sinh', label: 'Thực tập sinh' },
                    { id: 'Junior', label: 'Junior' },
                    { id: 'Middle', label: 'Middle' },
                    { id: 'Senior', label: 'Senior' },
                    { id: 'Lead', label: 'Lead' }
                  ].map(level => (
                    <label key={level.id} className="flex items-center space-x-3 text-sm text-slate-300 cursor-pointer hover:text-white transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedLevels.includes(level.id)}
                        onChange={() => handleLevelChange(level.id)}
                        className="w-4 h-4 rounded text-[#00f2fe] bg-[#070b15] border-slate-800 focus:ring-offset-[#070c16] focus:ring-[#00f2fe] focus:ring-1"
                      />
                      <span>{level.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {(selectedDepts.length > 0 || selectedLocs.length > 0 || selectedLevels.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedDepts([]);
                    setSelectedLocs([]);
                    setSelectedLevels([]);
                  }}
                  className="w-full mt-6 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-[#00f2fe] rounded-lg transition-all cursor-pointer"
                >
                  Xóa tất cả bộ lọc
                </button>
              )}
            </div>

            {/* RIGHT JOBS LIST */}
            {/* RIGHT JOBS LIST */}
<div id="jobs-listing-container" className="lg:col-span-3 space-y-4">
  {filteredJobs.length === 0 ? (
    <div className="bg-[#090f1b] border border-dashed border-slate-800 rounded-2xl p-12 text-center">
      <Briefcase className="w-10 h-10 text-slate-600 mx-auto mb-4" />
      <p className="text-slate-400 text-sm">Không tìm thấy vị trí tuyển dụng phù hợp với bộ lọc đã chọn.</p>
      <button
        onClick={() => {
          setSelectedDepts([]);
          setSelectedLocs([]);
          setSelectedLevels([]);
          setCurrentPage(0); // Reset trang
        }}
        className="mt-4 px-4 py-2 bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20 text-xs font-bold rounded-lg hover:bg-[#00f2fe]/20 transition-all cursor-pointer"
      >
        Đăng ký xem tất cả
      </button>
    </div>
  ) : (
    <>
      <div className="space-y-4">
        {paginatedJobs.map(job => (
          <div
            key={job.id}
            className="bg-[#090f1b] border border-slate-800/80 hover:border-[#00f2fe]/30 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 group shadow-md hover:shadow-[0_0_15px_rgba(0,242,254,0.05)]"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-[#00f2fe] uppercase tracking-wider">
                  {job.department}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#00f2fe]/10 text-[10px] font-bold text-slate-300">
                  {job.type}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 text-[10px] font-bold text-indigo-400 flex items-center space-x-1 border border-indigo-500/10">
                  <Award className="w-3 h-3" />
                  <span>{(job as any).level || 'Senior'}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#10b981]/10 text-[10px] font-bold text-[#10b981] flex items-center space-x-1 border border-[#10b981]/10">
                  <Users className="w-3 h-3" />
                  <span>Chỉ tiêu: {job.vacancies}</span>
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mt-2 group-hover:text-[#00f2fe] transition-colors">{job.title}</h3>
              
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-500">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{job.location}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-emerald-400 font-medium">Lương: {job.salary}</span>
                </span>
                <div className="sm:hidden block w-full"></div>
                <CountdownTimer targetDateString={job.deadline} compact={true} className="mt-1 sm:mt-0" />
              </div>
            </div>

            <button
              onClick={() => onSelectJobId(job.id)}
              className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6] shadow-[0_0_10px_rgba(3,242,254,0.1)] hover:scale-105 active:scale-95 transition-all text-center shrink-0 cursor-pointer"
            >
              Chi tiết & Ứng tuyển
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="p-3 rounded-full bg-slate-800 text-white disabled:opacity-20 hover:bg-[#00f2fe]/20 transition-all cursor-pointer shadow-lg"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          
          <span className="text-sm font-bold text-slate-400">
            Trang {currentPage + 1} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages - 1}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="p-3 rounded-full bg-slate-800 text-white disabled:opacity-20 hover:bg-[#00f2fe]/20 transition-all cursor-pointer shadow-lg"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  )}
</div>

          </div>

        </div>
      </section>

      {/* 4. COMPANY CULTURE GALLERY */}
      <section id="culture-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="open-positions-title" className="text-3xl md:text-4xl font-heading font-bold text-white ">
            Văn hóa <span className="gradient-text">ECOTEL</span>
          </h2>
          <p className="mt-3 text-white text-lg">
            Chúng tôi tin vào sự gắn kết bền vững và nỗ lực hết mình để hướng tới <br/> sự cân bằng hoàn hảo giữa công việc & cuộc sống.
          </p>
        </div>

        <div id="company-gallery-grid" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {mockCultureGallery.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightboxImg({ url: img.url, title: img.title })}
              className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 group cursor-pointer border border-slate-800/80 shadow-md transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={`${img.url}?w=500&h=300`}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-semibold text-[#00f2fe] flex items-center space-x-1.5 mb-1">
                  <Image className="w-3.5 h-3.5" />
                  <span>ECOTEL Life</span>
                </span>
                <p className="text-[11px] md:text-xs text-white leading-snug font-medium line-clamp-1">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. QUICK APPLY QUICK FORM AT BOTTOM */}
      <section id="landing-quick-apply" className="py-20 bg-[#060a12] border-t border-slate-900 relative">
  <div className="max-w-5xl mx-auto px-4 z-10 relative"> {/* Tăng max-w-5xl để form rộng hơn */}
    
    <div className="bg-[#09101c] border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f2fe]/5 blur-2xl rounded-full"></div>
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 id="apply-now-form-title" className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-foreground">Ứng tuyển </span>
          <span className="gradient-text">ngay</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Hãy gửi hồ sơ ban đầu của bạn. Đội ngũ nhân sự sẽ trực tiếp xem xét và liên hệ trong vòng 48 giờ làm việc.
        </p>
      </div>

      <form onSubmit={handleQuickSubmit} className="glass-card rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] space-y-6">
        {/* Sử dụng grid-cols-1 md:grid-cols-2 để luôn có 2 cột trên màn hình desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground mb-2">Họ tên *</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Nguyễn Văn A"
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nguyenvana@gmail.com"
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground mb-2">Số điện thoại *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0912 345 678"
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground mb-2">Vị trí ứng tuyển *</label>
            <select
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground cursor-pointer"
            >
              {jobs.map(job => (
                <option key={job.id} value={job.id} className="bg-background text-foreground">
                  {job.title} ({job.location})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Thông tin hỗ trợ nằm riêng một hàng nếu cần */}
        <p className="text-xs text-muted-foreground text-center">Đội ngũ ECOTEL HR sẽ bảo mật tuyệt đối thông tin của bạn.</p>

        {formError && (
          <div className="flex items-center space-x-3 p-4 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-xl">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>{formError}</p>
          </div>
        )}

        <div className="pt-4 text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-12 py-4 rounded-xl bg-gradient-to-r from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6] text-primary-foreground font-semibold hover-lift transition-all shadow-[0_10px_20px_-5px_rgba(30,92,139,0.3)]"
          >
            Gửi hồ sơ ứng tuyển
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

      {/* LIGHTBOX MODAL FOR GALLERY PREVIEW */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 flex flex-col">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2.5 hover:bg-slate-800 transition-colors z-10 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="overflow-hidden flex-1 flex items-center justify-center min-h-0 bg-black">
              <img
                src={lightboxImg.url}
                alt={lightboxImg.title}
                className="max-w-full max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 border-t border-slate-900 bg-slate-950 text-center">
              <span className="text-xs font-semibold text-[#00f2fe] uppercase tracking-wider">ECOTEL Culture Gallery</span>
              <h4 className="text-sm text-white font-bold mt-1">{lightboxImg.title}</h4>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 cursor-pointer" onClick={() => setLightboxImg(null)}></div>
        </div>
      )}

    </div>
  );
}