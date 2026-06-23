// ============================================================
// ProfileMe - Personal Data Configuration
// แก้ไขข้อมูลทั้งหมดได้ที่ไฟล์นี้ไฟล์เดียว
// ============================================================

// --- Type Definitions ---

export interface PersonalInfo {
  name: string;
  nameEn: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  avatarUrl: string;
  resumeUrl: string;
  socials: Social[];
  stats: Stat[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// --- Mock Data ---

export const personalInfo: PersonalInfo = {
  name: "อดิศร วงษ์ทิพย์",
  nameEn: "Adisorn Wongtip",
  title: "Full Stack Developer",
  subtitle: "Passionate about building modern web applications",
  email: "adisornwongtip@gmail.com",
  phone: "+66 65-968-3538",
  location: "Bangkok, Thailand",
  bio: "Full Stack Developer ประสบการณ์กว่า 3+ ปี มีความเชี่ยวชาญด้านการพัฒนา Web Application ชอบเรียนรู้เทคโนโลยีใหม่ๆ และแก้ปัญหาที่ซับซ้อน เน้นการเขียนโค้ดที่สะอาด มีประสิทธิภาพ และ maintainable พร้อมทำงานร่วมกับทีมเพื่อสร้างสรรค์ผลิตภัณฑ์ที่มีคุณภาพ และมีประสบการณ์ด้าน IT support ทั้งหมด 5 ปี",
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/resume.pdf",
  socials: [
    { name: "GitHub", url: "https://github.com/adisornwongtip", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/adisornwongtip/", icon: "linkedin" },
    { name: "Email", url: "mailto:adisornwongtip@gmail.com", icon: "email" },
  ],
  stats: [
    { label: "ปีประสบการณ์", value: "3+" },
    { label: "โปรเจคสำเร็จ", value: "7+" },
    { label: "เทคโนโลยี", value: "10+" },
    { label: "ลูกค้า/องค์กร", value: "6+" },
  ],
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Caninnovation Co., Ltd.",
    role: "Full Stack Developer",
    period: "ม.ค. 2569 - ปัจจุบัน",
    location: "Bangkok, Thailand",
    description:
      "รับผิดชอบการพัฒนาและดูแลระบบ E-Commerce Platform ขนาดใหญ่ที่รองรับผู้ใช้งานกว่า 100,000 คน \n" +
      "ทำงานร่วมกับทีม 8 คน ในรูปแบบ Agile/Scrum",
    achievements: [
      "ออกแบบและพัฒนาระบบ Microservices ที่ลดเวลา response time 40%",
      "นำทีมในการ Migrate ระบบจาก monolith เป็น microservices",
      "สร้าง CI/CD pipeline ที่ลดเวลา deployment จาก 2 ชม. เหลือ 15 นาที",
      "Mentor junior developers 3 คน ในทีม",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: 2,
    company: "40 Hours Recruitment (Thailand) Co., Ltd.",
    role: "Full Stack Developer",
    period: "ส.ค. 2567 - ม.ค. 2569",
    location: "Bangkok, Thailand",
    description:
      "พัฒนาระบบบริหารจัดการภายในองค์กร (ERP) และ Web Applications สำหรับลูกค้าหลากหลายอุตสาหกรรม",
    achievements: [
      "พัฒนาระบบบันทึกเวลาทํางานของฝายทรัพยากรบุคคล พร้อมระบบนําเข้าข้อมูลไปยัง Excel โดยอัตโนมัติ เพือการจัดการข้อมูลแบบรวมศูนย์",
      "ออกแบบและใช้งานระบบแบ็กเอนด์สําหรับการประมวลผลและจัดเก็บข้อมูลพนักงาน",
      "พัฒนาระบบจัดการคลังสินค้า (WMS) สําหรับการติดตามและจัดการสินค้าคงคลัง",
      "สร้างระบบติดตามตําแหน่งสินค้าแบบเรียลไทม์ภายในคลังสินค้า",
      "ใช้งานฟเจอร์สําหรับการจัดการเอกสารการรับและส่งสินค้า (ขาเข้า/ขาออก)",
    ],
    techStack: ["React", "Express.js", "MongoDB", "Redis", "Docker"],
  },
  {
    id: 3,
    company: "บริษัท สโตนเฮ้นจ์ อินเตอร์ จำกัด (มหาชน)",
    role: "Junior Full Stack Developer",
    period: "ก.พ. 2566 - ส.ค. 2567",
    location: "Bangkok, Thailand",
    description:
      "พัฒนาระบบภายในองค์กรและออกแบบเว็บไซต์ตามที่ได้รับมอบหมาย",
    achievements: [
      "พัฒนาระบบบันทึกเวลาทำงานของฝ่ายทรัพยากรบุคคล พร้อมระบบนำเข้าข้อมูลไปยัง Excel โดยอัตโนมัติ เพื่อการจัดการข้อมูลแบบรวมศูนย์",
      "Optimization ระบบ E-Procurement ทำให้การ",
      "พัฒนาระบบสื่อออนไลน์สำหรับบริษัท และเว็บไซต์ E-Commerce ของบริษัท",
    ],
    techStack: ["HTML/CSS", "JavaScript", "Bootstrap 4", "PHP", "MySQL"],
  },
  {
    id: 4,
    company: "Cyber Elite co. ltd",
    role: "(SOC)Security Operations Center",
    period: "ต.ค. 2565 - ม.ค. 2566",
    location: "Bangkok, Thailand",
    description:
      "ตรวจสอบและวิเคราะห์ข้อมูลและกิจกรรมบนระบบเครือข่ายและระบบคอมพิวเตอร์เพื่อตรวจจับการละเมิดความปลอดภัยการจัดทํารายงาน และแจ้งเหตุต่างๆใน ระบบ",
    achievements: [
      "พัฒนา Landing pages ที่เพิ่ม conversion rate 25%",
      "สร้างระบบ Quiz และ Assessment online",
      "ร่วมพัฒนาระบบ Video streaming สำหรับคอร์สเรียน",
    ],
    techStack: ["HTML/CSS", "JavaScript", "Vue.js", "PHP", "MySQL"],
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    degree: "วิทยาศาสตรบัณฑิต (วท.บ.)",
    field: "วิทยาการคอมพิวเตอร์",
    period: "2558 - 2561",
    gpa: "3.45",
    achievements: [
      "Dean's List 2 ภาคการศึกษา",
      "โปรเจคจบ: ระบบ AI Chatbot สำหรับตอบคำถามนักศึกษา",
      "สมาชิกชมรม Computer Science Club",
    ],
  },
  {
    id: 2,
    institution: "โรงเรียนสวนกุหลาบวิทยาลัย",
    degree: "มัธยมศึกษาตอนปลาย",
    field: "วิทย์-คณิต",
    period: "2555 - 2557",
    gpa: "3.78",
    achievements: ["เหรียญทองแข่งขันคอมพิวเตอร์โอลิมปิกระดับภาค"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Ajax", level: 80 },
      { name: "jQuery", level: 80 },
      { name: "React", level: 75 },
      { name: "TypeScript", level: 78 }
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "C#", level: 88 },
      { name: "PHP", level: 82 },
      { name: "Python", level: 72 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    category: "Framework",
    icon: "🧩",
    skills: [
      { name: ".NET 8", level: 76 },
      { name: ".NET 10++", level: 80 },
      { name: "Next.js", level: 78 },
      { name: "CI3", level: 80 },
      { name: "CI4", level: 80 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "Docker", level: 78 },
      { name: "AWS (EC2)", level: 70 },
      { name: "Git / GitHub", level: 80 },
      { name: "GitLab", level: 85 },
      { name: "CI/CD", level: 75 },
      { name: "Linux", level: 72 },
      { name: "Ubuntu", level: 72 },
      { name: "VSCode", level: 80 },
      { name: "Visual Studio", level: 88 },
      { name: "SQL Server", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "Postman", level: 88 },
      { name: "Kali Linux", level: 75 },
    ],
  },
  {
    category: "Libraries & Package",
    icon: "📚",
    skills: [
      { name: "Bootstrap", level: 88 },
      { name: "TailwindCSS", level: 85 },
      { name: "mPDF", level: 85 },
      { name: "DataTables", level: 85 },
      { name: "PhpSpreadsheet", level: 85 },
      { name: "OCR Typhoon", level: 85 },
      { name: "OCR Tesseract", level: 85 },
      { name: "Ollama", level: 85 },
      { name: "AI Gemini", level: 85 },
      { name: "AI ChatGPT", level: 85 },
      { name: "AI OpenAI", level: 85 },
      { name: "Codex", level: 85 },
      { name: "Claude Code", level: 85 },
      { name: "n8n", level: 75 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "แพลตฟอร์ม E-Commerce ครบวงจร รองรับ Multi-vendor, Payment gateway, Real-time inventory tracking",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adisorn/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "แอปจัดการ Task แบบ Kanban Board พร้อมระบบ Real-time collaboration, Drag & Drop, และ Notifications",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/adisorn/taskmanager",
    featured: true,
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description:
      "Chatbot อัจฉริยะที่ใช้ AI ตอบคำถามเกี่ยวกับผลิตภัณฑ์และบริการ รองรับภาษาไทยและอังกฤษ",
    techStack: ["Python", "FastAPI", "OpenAI", "React"],
    githubUrl: "https://github.com/adisorn/ai-chat",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "เว็บไซต์แสดงผลงานส่วนตัว สร้างด้วย Next.js + TailwindCSS พร้อม Dark Mode และ Smooth Animations",
    techStack: ["Next.js", "TailwindCSS", "TypeScript"],
    githubUrl: "https://github.com/adisorn/portfolio",
  },
];

export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
