import { TrendingUp, Briefcase, Users2, Trophy } from "lucide-react";
import { StatsSection } from "../Component_mini/StatsSection";
const stats = [
  {
    icon: TrendingUp,
    value: 20,
    suffix: "+",
    label: "Năm kinh nghiệm",
    description: "Tư vấn và triển khai các giải pháp chuyển đổi số đa lĩnh vực, kết hợp trí tuệ nhân tạo vạn vật ứng dụng (AIoT).",
  },
  {
    icon: Briefcase,
    value: 150,
    suffix: "+",
    label: "Dự án triển khai",
    description: "Có kinh nghiệm triển khai thành công các dự án chuyển đổi số toàn diện cho Tập đoàn Than - Khoáng sản Việt Nam và nhiều doanh nghiệp lớn.",
  },
  {
    icon: Users2,
    value: 50,
    suffix: "+",
    label: "Chuyên gia",
    description: <>Đội ngũ kỹ sư, cử nhân có chuyên môn cao, giàu kinh nghiệm triển khai <br/> thực tế.</>,
  },
  {
    icon: Trophy,
    value: 4,
    suffix: "+",
    label: "Giải thưởng",
    description: "Khẳng định uy tín thông qua việc được công nhận về chất lượng và đổi mới sáng tạo trong các giải pháp cung cấp.",
  },
];

export default function Home_StatsSection()  {
  return (
    <StatsSection
      data = {stats}
     /> 
  );
}