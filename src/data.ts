import { Job } from '@/integration/types';

export const mockJobs: Job[] = [
  {
    id: 'ky-su-phan-mem-senior',
    title: 'Kỹ sư Phần mềm Senior',
    department: 'Kỹ thuật',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    salary: 'Cạnh tranh',
    description: [
      'Nghiên cứu, phát triển và tối ưu hóa hệ thống phần mềm hiệu suất cao của ECOTEL.',
      'Định hình kiến trúc hệ thống, lựa chọn các giải pháp công nghệ hiện đại đảm bảo độ ổn định và khả năng mở rộng.',
      'Hợp tác chặt chẽ với các bộ phận Product, DevOps, và QA để xây dựng quy trình triển khai CI/CD mượt mà.',
      'Đánh giá chất lượng mã nguồn (code review) và trực tiếp hướng dẫn, hỗ trợ nâng cao chuyên môn cho các lập trình viên Junior.',
      'Giải quyết các sự cố hệ thống, tối ưu hóa câu lệnh truy vấn cơ sở dữ liệu và giám sát hiệu năng định kỳ.'
    ],
    requirements: [
      'Tốt nghiệp đại học chuyên ngành Công nghệ thông tin, Khoa học máy tính hoặc các ngành liên quan.',
      'Có từ 3-5+ năm kinh nghiệm trong lĩnh vực phát triển phần mềm, am hiểu sâu sắc về OOP, Design Patterns.',
      'Sử dụng thành thạo ít nhất một trong các ngôn ngữ/framework: Node.js (NestJS/Express), React, Go, Java hoặc Python.',
      'Kinh nghiệm thực chiến với thiết kế hệ thống lớn (High-performance), quản lý các cơ sở dữ liệu như PostgreSQL, MongoDB, Redis.',
      'Kỹ năng tư duy logic tốt, khả năng làm việc nhóm hiệu quả, tinh thần sẵn sàng học hỏi công nghệ mới.'
    ],
    benefits: [
      'Môi trường làm việc trẻ trung, sáng tạo, tiên phong trong công cuộc chuyển đổi số.',
      'Mức thu nhập cạnh tranh toàn thị trường, thỏa thuận theo năng lực thực tế.',
      'Chế độ thưởng dự án cực kỳ hấp dẫn theo kết quả kinh doanh và hiệu quả công việc.',
      'Đóng bảo hiểm đầy đủ (BHXH, BHYT) theo quy định của nhà nước và gói bảo hiểm sức khỏe cao cấp.',
      'Du lịch teambuilding định kỳ, tham gia các buổi chia sẻ kỹ thuật nội bộ cùng cơ hội thăng tiến rộng mở.'
    ],
    vacancies: 5,
    deadline: '2026-06-30T18:00:00'
  },
  {
    id: 'chuyen-vien-kinh-doanh',
    title: 'Chuyên viên Kinh doanh',
    department: 'Kinh doanh',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    salary: 'Thỏa thuận + Hoa hồng',
    description: [
      'Nghiên cứu thị trường và tìm kiếm các đối tác tiềm năng có nhu cầu chuyển đổi số hoặc sử dụng dịch vụ của ECOTEL.',
      'Gặp gỡ khách hàng doanh nghiệp, giới thiệu các giải pháp công nghệ, hệ thống quản trị thông minh.',
      'Đàm phán thương lượng, chuẩn bị hợp đồng và phối hợp với phòng kỹ thuật để bàn giao dự án hoàn thiện.',
      'Chăm sóc và duy trì mối quan hệ bền chặt với các khách hàng hiện tại để đề xuất nâng cấp dịch vụ.'
    ],
    requirements: [
      'Tốt nghiệp Cao đẳng/Đại học chuyên ngành Quản trị kinh doanh, Marketing, CNTT hoặc các ngành liên quan.',
      'Có tối thiểu 1-2 năm kinh nghiệm làm nhân viên kinh doanh, ưu tiên mảng Phần mềm/CNTT/SaaS.',
      'Kỹ năng giao tiếp xuất sắc, tự tin thuyết trình trước đám đông và khả năng đàm phán thuyết phục.',
      'Năng động, có tinh thần trách nhiệm cao và chịu được áp lực doanh số.'
    ],
    benefits: [
      'Lương cơ bản cạnh tranh cùng mức chiết khấu hoa hồng thuộc top đầu trong ngành.',
      'Cơ hội học tập và đào tạo kỹ năng bán hàng sản phẩm công nghệ cao từ các chuyên gia lão luyện.',
      'Cung cấp đầy đủ công cụ làm việc hiện đại, điện thoại liên lạc, phụ cấp tiếp khách.',
      'Chế độ phúc lợi phong phú: Quà sinh nhật, thưởng ngày lễ Tết, đóng bảo hiểm đầy đủ.'
    ],
    vacancies: 3,
    deadline: '2026-06-25T18:00:00'
  },
  {
    id: 'ke-toan-truong',
    title: 'Kế toán trưởng',
    department: 'Hành chính',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    salary: 'Cạnh tranh',
    description: [
      'Chịu trách nhiệm quản lý, điều hành toàn bộ hoạt động của bộ phận Kế toán - Tài chính tại chi nhánh Hà Nội.',
      'Kiểm soát, rà soát tính hợp pháp, hợp lệ của chứng từ kế toán, sổ sách và các báo cáo thuế định kỳ.',
      'Lập báo cáo tài chính, báo cáo quản trị định kỳ gửi Ban Giám đốc và tham mưu các giải pháp tối ưu hóa chi phí doanh nghiệp.',
      'Làm việc trực tiếp với các cơ quan thuế, ngân hàng, kiểm toán, cơ quan chức năng khi có yêu cầu.'
    ],
    requirements: [
      'Có bằng Đại học trở lên ngành Kế toán - Kiểm toán, Tài chính doanh nghiệp.',
      'Có chứng chỉ Kế toán trưởng hợp lệ và tối thiểu 3 năm kinh nghiệm ở vị trí tương đương.',
      'Am hiểu sâu sắc về Luật Kế toán, Luật Thuế Việt Nam và các chuẩn mực kế toán hiện hành.',
      'Sử dụng thành thạo phần mềm kế toán (MISA, FAST, v.v.) và bộ công cụ Office, đặc biệt là Excel.'
    ],
    benefits: [
      'Mức lương thu nhập hấp dẫn, thỏa thuận xứng đáng theo tầm vóc chuyên môn.',
      'Gói khám sức khỏe định kỳ hàng năm và đầy đủ phúc lợi BHXH, BHYT, nghỉ phép năm.',
      'Làm việc trong môi trường văn phòng chuyên nghiệp, nhân sự hòa đồng, hỗ trợ lẫn nhau.',
      'Thưởng cuối năm lương tháng 13, 14 tùy thuộc hiệu quả kinh doanh của tập đoàn.'
    ],
    vacancies: 1,
    deadline: '2026-06-18T18:00:00'
  }
];

export const mockCultureGallery = [
  {
    id: 'c1',
    url: 'https://picsum.photos/seed/ecotel-team1/800/600',
    title: 'Đại gia đình ECOTEL ra quân bùng nổ'
  },
  {
    id: 'c2',
    url: 'https://picsum.photos/seed/ecotel-meeting/800/600',
    title: 'Họp chiến lược định hướng quý mới'
  },
  {
    id: 'c3',
    url: 'https://picsum.photos/seed/ecotel-workshop/800/600',
    title: 'Hội thảo chia sẻ chuyển đổi số'
  },
  {
    id: 'c4',
    url: 'https://picsum.photos/seed/ecotel-collab/800/600',
    title: 'Trao đổi kỹ thuật đầy nhiệt huyết'
  },
  {
    id: 'c5',
    url: 'https://picsum.photos/seed/ecotel-techtalk/800/600',
    title: 'Phát biểu ý tưởng sáng tạo đột phá'
  },
  {
    id: 'c6',
    url: 'https://picsum.photos/seed/ecotel-office/800/600',
    title: 'Ban điều hành và lập trình viên'
  },
  {
    id: 'c7',
    url: 'https://picsum.photos/seed/ecotel-workspace2/800/600',
    title: 'Không gian teambuilding gắn kết'
  },
  {
    id: 'c8',
    url: 'https://picsum.photos/seed/ecotel-event/800/600',
    title: 'Sinh nhật kết nối tình đồng nghiệp'
  }
];