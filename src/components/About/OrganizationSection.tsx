import { useSectionInView } from "@/hooks/useSectionInView";

const orgStructure = {
  ceo: { title: "CEO/CTO" },
  hcmOffice: { title: "Văn phòng tại TP HCM" },
  departments: [
    { title: "PM", children: ["Phòng phát triển phần mềm", "Phòng kiểm thử chất lượng", "Phòng triển khai", "Phòng bảo hành"] },
    { title: "KINH DOANH", children: ["Phòng kinh doanh", "Phòng tài chính/kế toán"] },
  ],
};

export const OrganizationSection = () => {
  const { ref, isVisible } = useSectionInView();
  const lineColor = "border-slate-400";
  const nodeShadow = "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]";

  return (
    <section ref={ref} className="py-24 overflow-x-auto">
      <div className="container mx-auto px-4 min-w-[1000px]">
        <div className="text-center mb-16 sticky left-0 right-0">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Cơ cấu tổ chức</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Quá trình <span className="gradient-text">hình thành và phát triển</span>
          </h2>
        </div>

        <div className={`flex flex-col items-center transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          {/* LEVEL 1: CEO & Văn phòng HCM */}
          <div className="relative flex justify-center items-center mb-4">
            {/* CEO BOX */}
            <div className={`relative z-10 w-64 py-6 px-4 bg-gradient-to-b from-[#2A70A5] to-[#10324E] text-white font-bold text-xl text-center uppercase border border-slate-500 rounded-md ${nodeShadow}`}>{orgStructure.ceo.title}</div>

            {/* Connection to HCM Office (Dashed Arrow) */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 flex items-center">
              <div className="w-16 h-[2px] border-t-2 border-dashed border-slate-400"></div>
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-slate-400"></div>
              <div className={`ml-2 w-48 py-4 px-2 bg-gradient-to-b from-[#2A70A5] to-[#10324E] text-white font-bold text-center border border-slate-500 rounded-md ${nodeShadow}`}>{orgStructure.hcmOffice.title}</div>
            </div>
          </div>

          {/* Line from CEO down */}
          <div className={`h-8 w-[2px] bg-slate-400`}></div>

          {/* LEVEL 2: Branching Line (Horizontal) */}
          <div className="flex justify-between w-[60%] bg-slate-400">
            <div className={`w-full border-t-2 ${lineColor} rounded-tl-lg`}></div>
            <div className={`w-full border-t-2 ${lineColor} rounded-tr-lg`}></div>
          </div>

          {/* LEVEL 2: Nodes (PM & KINH DOANH) */}
          <div className="flex justify-around w-full items-start px-4">
            {orgStructure.departments.map((dept) => (
              <div key={dept.title} className="flex flex-col items-center w-1/2">
                <div className={`h-8 w-[2px] bg-slate-400 -mt-[2px]`}></div>
                <div className={`w-56 py-4 bg-gradient-to-b from-[#7EBDEF] to-[#2A70A5] text-white font-bold text-lg text-center uppercase border border-gray-400 rounded-md mb-6 ${nodeShadow}`}>{dept.title}</div>
                <div className={`h-6 w-[2px] bg-slate-400 -mt-6`}></div>
                <div className={`w-[90%] border-t-2  bg-slate-400 ${lineColor}`}></div>

                {/* LEVEL 3: Children Nodes */}
                <div className="flex justify-center w-full pt-0">
                  {dept.children.map((child) => (
                    <div key={child} className="flex flex-col items-center px-2 flex-1">
                      <div className={`h-6 w-[2px] bg-slate-400`}></div>
                      <div className={`w-full h-full min-h-[80px] flex items-center justify-center p-2 bg-gradient-to-b from-[#D0EFFF] to-[#7EBDEF] text-white font-semibold text-sm text-center  border border-slate-500 rounded-sm hover:-translate-y-1 transition-transform duration-300 ${nodeShadow}`}>
                        {child}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};