import React, { useState, useEffect } from 'react';
import { mockJobs } from '@/data'; // Keep in case as absolute fallback
import CircuitOverlay from '@/components/Component_mini/CircuitOverlay';
import CountdownTimer from './CountdownTimer';
import { Phone, Copy, Check, DollarSign, Award, ClipboardCheck, Clock, MapPin, AlertCircle, Users } from 'lucide-react';
import { Job } from '@/integration/types';
import background from '@/assets/background-home7.webp'
interface JobDetailProps {
  jobId: string;
  jobs: Job[];
  onBack: () => void;
  onSubmitApplication: (fullName: string, email: string, phone: string, jobId: string, cvName: string) => void;
  onShowSuccess: (info: { name: string; email: string; jobTitle: string }) => void;
}

export default function JobDetail({ jobId, jobs, onBack, onSubmitApplication, onShowSuccess }: JobDetailProps) {
  const job = jobs.find(j => j.id === jobId) || jobs[0] || mockJobs[0];

  // Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isDragActive, setIsDragActive] = useState(false);
  const [formError, setFormError] = useState('');
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  // Scroll to top when job loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [jobId]);

  // Handle Drag & Drop actions
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

 

  const handleCopyLink = () => {
    const jobLink = `${window.location.origin}/careers/job/${job.id}`;
    navigator.clipboard.writeText(jobLink).then(() => {
      setIsLinkCopied(true);
      setTimeout(() => setIsLinkCopied(false), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setFormError('Vui lòng điền đầy đủ thông tin bắt buộc (*)');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError('Email không đúng định dạng');
      return;
    }

    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!phoneRegex.test(phone)) {
      setFormError('Số điện thoại không hợp lệ (Việt Nam)');
      return;
    }

    // Call callback to show Success screen
    onShowSuccess({
      name: fullName,
      email: email,
      jobTitle: job.title
    });

    // Reset inputs
    setFullName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="bg-[#070c16] text-[#c9d1d9] min-h-screen pb-20">
      
      {/* Back Button and Navigation Path */}
      

      {/* 2. HEADER DETAILS HERO */}

      
      {/* 1. HERO HOME SECT */}
      <section 
        className="relative overflow-hidden pt-20 pb-16 border-b border-slate-900 bg-cover bg-center bg-no-repeat min-h-[45vh] flex flex-col justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-7xl mx-auto px-4  gap-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 gap-4 sm:px-6 lg:px-8 relative z-10 text-center">
  
  {/* Tăng mb-8 để tạo khoảng cách lớn hơn với hàng bên dưới */}
  <h1 id="job-detail-header-title" className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-white mb-8">
    {job.title}
  </h1>

  <div className="flex flex-wrap items-center justify-center gap-4 text-xl md:text-sm text-white">
    <span className="px-3 py-1 rounded bg-[#4eb9e6]/10 text-[#4eb9e6] border border-[#4eb9e6]/20 font-bold uppercase tracking-wider">
      Bộ phận: {job.department}
    </span>
    <span className="flex items-center space-x-3">
      <span className="px-3 py-1 rounded bg-[#4eb9e6]/10 text-[#4eb9e6] border border-[#4eb9e6]/20 font-bold uppercase tracking-wider">
      Khu vực: {job.location}
    </span>
    </span>
  </div>
</div>

          <div className="mt-8">
            <button
              onClick={() => document.getElementById('apply-sidebar-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1e5c8b] via-[#4eb9e6] to-[#4eb9e6] text-white font-semibold hover-lift shadow-lg shadow-primary/20"
            >
              Ứng tuyển ngay
             
            </button>
          </div>
        </div>
      </section>

      {/* 3. QUICK INFO TILES ROW (Thông tin nhanh) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div id="quick-info-box-container" className="bg-[#0b1322] border border-slate-800 rounded-2xl p-6 shadow-md">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 font-mono">Thông tin nhanh</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* Tile 1: Thu nhập */}
            <div className="flex items-center space-x-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Thu nhập</span>
                <span className="text-xs md:text-sm font-bold text-[#fafbfc]">{job.salary}</span>
              </div>
            </div>

            {/* Tile 2: Cấp bậc */}
            <div className="flex items-center space-x-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Cấp bậc</span>
                <span className="text-xs md:text-sm font-bold text-[#fafbfc]">{job.level}</span>
              </div>
            </div>

            {/* Tile 3: Hình thức */}
            <div className="flex items-center space-x-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Hình thức</span>
                <span className="text-xs md:text-sm font-bold text-[#fafbfc]">{job.type}</span>
              </div>
            </div>

            {/* Tile 4: Địa điểm */}
            <div className="flex items-center space-x-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Địa điểm</span>
                <span className="text-xs md:text-sm font-bold text-[#fafbfc]">{job.location}</span>
              </div>
            </div>

            {/* Tile 5: Chỉ tiêu tuyển dụng */}
            <div className="flex items-center space-x-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Chỉ tiêu</span>
                <span className="text-xs md:text-sm font-bold text-[#fafbfc]">{job.vacancies} vị trí</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DETAILS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT 2-COLUMNS: DESCRIPTION, REQUIREMENTS AND BENEFITS */}
          <div className="lg:col-span-2 bg-[#090f1b] border border-slate-800 rounded-2xl p-6 md:p-8 space-y-10 shadow-md">
            
            {/* Mô tả công việc */}
            <div id="job-desc-section">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-800 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#4eb9e6]/10 flex items-center justify-center text-[#4eb9e6]">
                  <ClipboardCheck className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-sans">Mô tả công việc</h3>
              </div>
              <ul className="space-y-3.5">
                {job.description.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300 leading-relaxed leading-normal">
                    <span className="w-5 h-5 flex items-center justify-center text-white shrink-0 text-[17px] font-bold mt-0.5">
                      -
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Yêu cầu ứng viên */}
            <div id="job-reqs-section">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-800 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#4eb9e6]/10 flex items-center justify-center text-[#4eb9e6]">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-sans">Yêu cầu ứng viên</h3>
              </div>
              <ul className="space-y-3.5">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300 leading-relaxed leading-normal">
                    <span className="w-5 h-5  flex items-center justify-center text-white  shrink-0 text-[17px] font-bold mt-0.5">
                      -
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quyền lợi được hưởng */}
            <div id="job-benefits-section">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-800 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#4eb9e6]/10 flex items-center justify-center text-[#4eb9e6]">
                  <DollarSign className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-sans">Quyền lợi được hưởng</h3>
              </div>
              <ul className="space-y-3.5">
                {job.benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300 leading-relaxed leading-normal">
                    <span className="w-5 h-5 flex items-center justify-center text-white shrink-0 text-[17px] font-bold mt-0.5">
                      -
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: APPLICATION FORM AND SHARING */}
          <div className="space-y-6">
            
            {/* Countdown timer */}
            <CountdownTimer targetDateString={job.deadline} className="w-full" />

            {/* Form card */}
            <div id="apply-sidebar-form" className="bg-[#0b1322] border border-slate-800/80 rounded-2xl p-6 shadow-lg">
              <h3 className="text-base font-bold uppercase tracking-wider text-white mb-2">Ứng tuyển ngay</h3>
              <p className="text-slate-500 text-[11px] mb-5">Vui lòng điền thông tin chính xác phục vụ phỏng vấn.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Tên */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Tên của bạn <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Tên của bạn"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#4eb9e6] focus:ring-1 focus:ring-[#4eb9e6] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#4eb9e6] focus:ring-1 focus:ring-[#4eb9e6] transition-all"
                  />
                </div>

                {/* Số điện thoại */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Số điện thoại <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Số điện thoại"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#4eb9e6] focus:ring-1 focus:ring-[#4eb9e6] transition-all"
                  />
                </div>

                {/* CV File Input Area */}
                

                {formError && (
                  <div className="flex items-center space-x-1.5 text-[10px] text-rose-400 bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full mt-2 py-3 bg-[#4eb9e6] hover:bg-[#00e1ff] text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_15px_rgba(3,242,254,0.15)] transition-all cursor-pointer text-center font-sans"
                >
                  Ứng tuyển ngay
                </button>

              </form>
            </div>

            {/* Share and Socials card */}
            <div className="bg-[#0b1322] border border-slate-800/80 rounded-2xl p-6 shadow-md space-y-4">
  <h3 className="text-xs font-bold uppercase tracking-widest text-[#4eb9e6]">Chia sẻ tin tuyển dụng</h3>
  
  {/* Phần Địa chỉ - Mới thêm */}
  <div className="space-y-1.5 pt-2 border-t border-slate-800">
    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Địa điểm làm việc</span>
    <a 
      href="https://www.google.com/maps/search/?api=1&query=Số+4-Q28,+136+Nguyễn+An+Ninh,+Tương+Mai,+Hoàng+Mai,+Hà+Nội" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-start space-x-2 text-xs text-slate-300 hover:text-[#4eb9e6] transition-colors group"
    >
      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#4eb9e6]" />
      <span>Số 4-Q28, 136 Nguyễn An Ninh, Tương Mai, Hoàng Mai, Hà Nội</span>
    </a>
    <div className="space-y-1.5">
      <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Hotline liên hệ</span>
      <a 
        href="tel:02412345678" 
        className="flex items-center space-x-2 text-xs text-slate-300 hover:text-[#338BCF] transition-colors"
      >
        <Phone className="w-4 h-4 text-[#338BCF]" />
        <span className="font-medium">024 1234 5678</span>
      </a>
    </div>
  </div>

  <div className="space-y-1.5">
    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Sao chép đường dẫn</span>
    <div className="flex">
      <input
        type="text"
        readOnly
        value={`${window.location.origin}/tuyen-dung`}
        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-l-lg text-[10px] text-slate-400 focus:outline-none focus:border-slate-800"
      />
      <button
        onClick={handleCopyLink}
        className={`px-3 py-2 text-xs font-bold rounded-r-lg transition-all border-y border-r cursor-pointer shrink-0 ${
          isLinkCopied 
            ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' 
            : 'bg-slate-800 hover:bg-slate-700 text-[#4eb9e6] border-slate-800'
        }`}
      >
        {isLinkCopied ? (
          <Check className="w-3.5 h-3.5" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>
    </div>
  </div>

  <div className="pt-2">
    <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider mb-2">Talk with us</span>
    <div className="flex items-center space-x-2">
      {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
        <button
          key={platform}
          onClick={() => alert(`Kết nối với ECOTEL qua ${platform}!`)}
          className="bg-slate-900 hover:bg-[#4eb9e6]/10 hover:text-[#4eb9e6] text-slate-400 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-slate-800 transition-all cursor-pointer"
        >
          {platform}
        </button>
      ))}
    </div>
  </div>
</div>

          </div>

        </div>
      </section>

    </div>
  );
}
