import { Star, Award, Briefcase } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";
import { StatsSection } from "../Component_mini/StatsSection";
const companyValues = [
  { icon: Star, label: "Tầm nhìn xa", description: "Định hướng phát triển bền vững" },
  { icon: Award, label: "Chuyên nghiệp", description: "Chuẩn mực quốc tế" },
  { icon: Briefcase, label: "Kinh nghiệm", description: "Hơn 20 năm trong ngành" },
];
export default function Value_StatsSection()  {
  return (
    <StatsSection
      data = {companyValues}
     /> 
  );
}
