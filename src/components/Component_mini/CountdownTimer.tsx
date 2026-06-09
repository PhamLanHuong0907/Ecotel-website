import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

interface CountdownTimerProps {
  targetDateString: string;
  className?: string;
  compact?: boolean;
}

export default function CountdownTimer({ targetDateString, className = '', compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDateString) - +new Date();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
      };
    };

    // Calculate immediately
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateString]);

  if (timeLeft.isExpired) {
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold ${className}`}>
        <AlertTriangle className="w-3.5 h-3.5 mr-1" />
        Hết hạn ứng tuyển
      </span>
    );
  }

  // Format helper to pad numbers
  const padZero = (num: number) => String(num).padStart(2, '0');

  // Format date readable
  const readableDeadline = new Date(targetDateString).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  if (compact) {
    return (
      <span className={`inline-flex items-center space-x-1.5 text-xs ${className}`}>
        <Clock className="w-3.5 h-3.5 text-[#00f2fe]" />
        <span className="text-slate-400">Hạn nộp: <span className="text-slate-350 font-semibold">{readableDeadline}</span></span>
        <span className="text-[#00f2fe] font-mono font-bold bg-[#00f2fe]/5 px-1.5 py-0.5 rounded border border-[#00f2fe]/20">
          Còn {timeLeft.days > 0 ? `${timeLeft.days} ngày ` : ''}{padZero(timeLeft.hours)}:{padZero(timeLeft.minutes)}:{padZero(timeLeft.seconds)}
        </span>
      </span>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#00f2fe]">
        <Clock className="w-4 h-4 animate-pulse" />
        <span>Khung thời gian ứng tuyển & Đếm ngược</span>
      </div>

      <div className="bg-[#050912]/85 border border-[#00f2fe]/20 rounded-xl p-4 shadow-[0_0_15px_rgba(0,242,254,0.05)]">
        
        {/* Recruitment timeframe */}
        <div className="flex justify-between items-center text-xs text-slate-400 pb-3 border-b border-slate-850 mb-3.5">
          <span>Thời hạn nộp hồ sơ:</span>
          <span className="text-white font-bold bg-slate-850 px-2.5 py-1 rounded border border-slate-800">
            {readableDeadline}
          </span>
        </div>

        {/* Real Countdown Grid */}
        <div className="grid grid-cols-4 gap-2 text-center">
          
          {/* Days */}
          <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-850">
            <span className="block text-xl md:text-2xl font-mono font-extrabold text-[#fafbfc] tracking-tight">
              {padZero(timeLeft.days)}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Ngày</span>
          </div>

          {/* Hours */}
          <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-850">
            <span className="block text-xl md:text-2xl font-mono font-extrabold text-[#00f2fe] tracking-tight">
              {padZero(timeLeft.hours)}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Giờ</span>
          </div>

          {/* Minutes */}
          <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-850">
            <span className="block text-xl md:text-2xl font-mono font-extrabold text-[#00f2fe] tracking-tight">
              {padZero(timeLeft.minutes)}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Phút</span>
          </div>

          {/* Seconds */}
          <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-850 relative overflow-hidden group">
            <span className="block text-xl md:text-2xl font-mono font-extrabold text-[#00f2fe] tracking-tight animate-pulse">
              {padZero(timeLeft.seconds)}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Giây</span>
            {/* Pulsing beacon */}
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
          </div>

        </div>

      </div>
    </div>
  );
}