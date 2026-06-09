import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Component_mini/Header';
import { Footer } from '@/components/Component_mini/Footer';
import { ContactSection } from '@/components/Home/ContactSection';
import LandingPage from '@/components/Component_mini/LandingPage'; 
import JobDetail from '@/components/Component_mini/JobDetail';     
import { Job, ActiveTab } from '@/integration/types'; 
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { supabase } from "@/integration/client"; 

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [activeView, setActiveView] = useState<ActiveTab | 'success'>('home');
  const [selectedJobId, setSelectedJobId] = useState<string>('');
  const [successInfo, setSuccessInfo] = useState<{name: string, email: string, jobTitle: string} | null>(null);

  useEffect(() => {
    const fetchJobsData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('jobs')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        const formattedJobs: Job[] = (data || []).map((item) => ({
          id: item.id,
          title: item.title,
          department: item.department as 'Kỹ thuật' | 'Kinh doanh' | 'Hành chính',
          location: item.location as 'Hà Nội' | 'TP. Hồ Chí Minh',
          type: item.type,
          level: item.level,
          salary: item.salary,
          vacancies: item.vacancies,
          deadline: item.deadline,
          description: (Array.isArray(item.description) ? item.description : []) as string[],
          requirements: (Array.isArray(item.requirements) ? item.requirements : []) as string[],
          benefits: (Array.isArray(item.benefits) ? item.benefits : []) as string[]
        }));

        setJobs(formattedJobs);
      } catch (error) {
        console.error("Lỗi tải dữ liệu tuyển dụng từ Supabase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobsData();
  }, []);

  const handleSelectJobId = (jobId: string) => {
    setSelectedJobId(jobId);
    setActiveView('job-detail');
  };

  const handleBackToHome = () => {
    setSelectedJobId('');
    setActiveView('home');
  };

  const handleShowSuccess = (info: { name: string; email: string; jobTitle: string }) => {
    setSuccessInfo(info);
    setActiveView('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // CẬP NHẬT: Ghi data lên Database và kích hoạt mở hộp Mail
  // CẬP NHẬT: Ghi data lên Database và kích hoạt mở thẳng web Gmail
  const handleSubmitApplication = async (
    fullName: string, 
    email: string, 
    phone: string, 
    jobId: string, 
    cvName: string
  ) => {
    const currentJob = jobs.find(j => j.id === jobId);
    const jobTitle = currentJob?.title || 'Không xác định';
    
    // 1. Lưu hồ sơ lên Supabase (Đảm bảo AdminPortal vẫn theo dõi được số lượng)
    try {
      const { error } = await supabase.from('applications').insert([
        { 
          full_name: fullName, 
          email: email, 
          phone: phone, 
          job_id: jobId, 
          job_title: jobTitle,
          cv_name: cvName,
          status: 'Mới nhận' 
        }
      ]);
      
      if (error) throw error;
    } catch (error) {
      console.error("Lỗi khi lưu hồ sơ lên hệ thống:", error);
    }

    // 2. Tự động mở tab Web Gmail với nội dung điền sẵn
    const companyEmail = "huongnguyendusctn@gmail.com"; 
    const subject = encodeURIComponent(`Ứng tuyển vị trí: ${jobTitle} - ${fullName}`);
    const body = encodeURIComponent(
      `Kính gửi Bộ phận Nhân sự,\n\n` +
      `Tôi viết email này để ứng tuyển cho vị trí ${jobTitle} mà quý công ty đang đăng tuyển.\n\n` +
      `[THÔNG TIN CÁ NHÂN]\n` +
      `- Họ và tên: ${fullName}\n` +
      `- Số điện thoại: ${phone}\n` +
      `- Email liên hệ: ${email}\n\n` +
      `*** LƯU Ý CHO ỨNG VIÊN: Vui lòng đính kèm file CV (${cvName}) của bạn vào email này trước khi nhấn nút Gửi nhé! ***\n\n` +
      `Trân trọng,\n` +
      `${fullName}`
    );

    // Kích hoạt link Web Gmail trực tiếp và mở ở Tab mới
    const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`;
    window.open(webGmailUrl, '_blank');
  };

  const renderSuccessScreen = () => (
    <div className="bg-[#070c16] min-h-[70vh] flex items-center justify-center p-4 py-20">
      <div className="max-w-md w-full bg-[#0b1322] border border-emerald-500/30 rounded-3xl p-8 text-center shadow-[0_0_40px_rgba(16,185,129,0.1)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full"></div>
        
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20 relative z-10">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2 relative z-10">Ghi nhận thông tin!</h2>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed relative z-10">
          Cảm ơn <span className="text-emerald-400 font-semibold">{successInfo?.name}</span> đã quan tâm đến vị trí <span className="text-white font-semibold">{successInfo?.jobTitle}</span>.
        </p>
        
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-8 text-left relative z-10">
          <p className="text-xs text-amber-400 mb-2 font-bold uppercase">Lưu ý quan trọng:</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Hệ thống vừa mở trình soạn thảo email của bạn. Vui lòng kiểm tra lại thông tin, <strong className="text-white">nhớ đính kèm file CV</strong> và ấn gửi email để hoàn tất quá trình ứng tuyển.
          </p>
        </div>

        <button
          onClick={() => {
            setActiveView('home');
            setSuccessInfo(null);
          }}
          className="flex items-center justify-center w-full space-x-2 py-3.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-all relative z-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại trang Tuyển dụng</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow pt-16">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-12 h-12 border-4 border-[#00f2fe]/20 border-t-[#00f2fe] rounded-full animate-spin mb-4"></div>
            <p className="text-slate-400 text-sm font-mono tracking-widest uppercase animate-pulse">Đang tải dữ liệu vị trí...</p>
          </div>
        ) : (
          <>
            {activeView === 'home' && (
              <LandingPage 
                jobs={jobs}
                onSelectJobId={handleSelectJobId}
                onSubmitApplication={handleSubmitApplication}
                onShowSuccess={handleShowSuccess}
              />
            )}

            {activeView === 'job-detail' && (
              <JobDetail 
                jobId={selectedJobId}
                jobs={jobs}
                onBack={handleBackToHome}
                onSubmitApplication={handleSubmitApplication}
                onShowSuccess={handleShowSuccess}
              />
            )}

            {activeView === 'success' && renderSuccessScreen()}
          </>
        )}
      </main>

      {activeView !== 'success' && <ContactSection />}
      
      <Footer />
    </div>
  );
}