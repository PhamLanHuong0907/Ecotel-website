import { Building2, Globe, Award } from "lucide-react";
import { StatsSection } from "../Component_mini/StatsSection";
const stats = [
  { icon: Building2, value: 150, suffix: "+", label: "Khách hàng doanh nghiệp" },
  { icon: Globe, value: 20, suffix: "+", label: "Tỉnh/Thành phố" },
  { icon: Award, value: 20, suffix: "+", label: "Năm đồng hành" },
];
export default function Customer_StatsSection()  {
  return (
    <StatsSection
      data = {stats}
     /> 
  );
}
