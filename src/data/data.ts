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
  note?: string;
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
  avatarUrl: "my-profile.jpg",
  resumeUrl: "CV_Adisorn_Wongtip_v2.pdf",
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
    company: "บริษัท จัดหางาน 40 อาวเออร์ส (ประเทศไทย) จำกัด",
    role: "Full Stack Developer (ปฏิบัติงานที่ SCGJWD)",
    period: "ส.ค. 2567 - ปัจจุบัน",
    location: "Bangkok, Thailand",
    description: "ปฏิบัติงานที่ SCGJWD พัฒนาระบบ ChemicalCenter และ WMS รวมถึงระบบ OCR และการเตรียมสภาพแวดล้อมระบบแบบ DevOps",
    achievements: [
      "พัฒนาระบบ ChemicalCenter เป็นระบบติดตามสินค้าและเอกสารของสินค้าสารเคมีในโรงเก็บสินค้าแบบ Realtime ที่สามารถตรวจเช็คสินค้า เข้า-ออก จากคลังได้ตลอดเวลา ช่วยอำนวยความสะดวกในการขายสินค้าให้กับลูกค้าได้อย่างรวดเร็ว",
      "พัฒนาระบบ WMS ตรวจสอบแก้ไขปัญหาและ Optimization ส่วนของฟังก์ชันต่างๆ ให้ระบบมีความทันสมัย",
      "พัฒนาระบบ Tesseract OCR เปรียบเทียบกับ Typhoon OCR ให้กับองค์กรและพัฒนาเป็น Service ให้แก่ลูกค้าได้ทดลองใช้งาน โดยรองรับการนำเอกสาร PDF มา Import เข้าระบบและนำไปใช้งานต่อได้อย่างรวดเร็ว",
      "เรียนรู้การติดตั้งทางด้าน DevOps เพื่อติดตั้งระบบ OS สำหรับการใช้งาน UAT และ PROD โดยระบบที่ติดตั้งจะเป็น OS Ubuntu 22 เป็นแบบ On Cloud บน AWS EC2",
      "เรียนรู้เทคโนโลยีใหม่ๆ และนำมาใช้งานจริง เช่น Claude Code, Codex, Antigravity, ChatGPT, Gemini",
      "ทำระบบ Ollama Model AI มาใช้งานเองในเครื่อง Local"
    ],
    techStack: ["PHP", "C#",
      "HTML", "CSS", "JavaScript", "jQuery", "Ajax",
      "SQL Server", "MySQL", "Bootstrap4,5", "TailwindCSS", "CodeIgniter3", "CodeIgniter4",
      "React", "TypeScript", "RESTful API", "Node.js", "OCR", "Ubuntu", "AWS EC2", "Docker", ".NET 8, 10",
      "Ollama AI"]
  },
  {
    id: 2,
    company: "บริษัท สโตนเฮ้นจ์ อินเตอร์ จำกัด (มหาชน)",
    role: "Junior Full Stack Developer",
    period: "ก.พ. 2566 - ส.ค. 2567",
    location: "Bangkok, Thailand",
    description: "พัฒนาระบบภายในองค์กรและออกแบบเว็บไซต์ รวมถึงระบบ E-Commerce และ RESTful API",
    achievements: [
      "พัฒนาระบบ ERP ขององค์กรในทุกมิติ เพื่อให้บุคลากรใช้งานได้สะดวกที่สุดต่อการใช้งาน",
      "พัฒนาระบบสำหรับ Import Excel เพื่อบันทึกข้อมูลลงในระบบแบบอัตโนมัติ",
      "พัฒนาระบบ E-Commerce ภายในองค์กรสำหรับเป็นบริการภายในบริษัท เช่น การเช่าซื้อสินค้า ขายสินค้า เป็นต้น เพื่อเป็นสิทธิ์ให้กับพนักงาน",
      "พัฒนาระบบ RESTful API ให้การสนับสนุนการแลกเปลี่ยนข้อมูล เพื่อการสื่อสารระหว่างซอฟต์แวร์ที่ปลอดภัย เสถียร และมีประสิทธิภาพ เพื่อนำมาใช้งานในส่วนของ App Mobile ของบริษัท"
    ],
    techStack: ["HTML/CSS", "JavaScript", "PHP", "Ajax", "jQuery", "Bootstrap4,5", "MySQL", "RESTful API", "mPDF", "Excel Import"]
  },
  {
    id: 3,
    company: "บริษัท ไซเบอร์ อีลิท จำกัด",
    role: "Security Operations Center (SOC)",
    period: "ต.ค. 2565 - ม.ค. 2566",
    location: "Bangkok, Thailand",
    description: "ตรวจสอบ วิเคราะห์ข้อมูล และกิจกรรมบนระบบเครือข่าย เพื่อเฝ้าระวังและตรวจจับการละเมิดความปลอดภัย",
    achievements: [
      "ตรวจสอบและวิเคราะห์ข้อมูลและกิจกรรมบนระบบเครือข่าย",
      "ควบคุมระบบคอมพิวเตอร์เพื่อตรวจจับการละเมิดความปลอดภัยภายในระบบ",
      "จัดทำรายงานวิเคราะห์และแจ้งเหตุต่างๆ ในระบบ"
    ],
    techStack: ["Network Security", "Cyber Security", "Log Analysis", "SOC", "SIEM"]
  },
  {
    id: 4,
    company: "บริษัท แซปบีไอทีโซลูชั่นส์ จำกัด",
    role: "บริหาร และ ดูแลด้านเทคโนโลยี",
    period: "ต.ค. 2563 - ม.ค. 2566",
    location: "Bangkok, Thailand",
    description: "บริหารจัดการด้านเทคโนโลยีและการติดตั้งอุปกรณ์อิเล็กทรอนิกส์และจอ LED ให้กับภาครัฐและเอกชน",
    achievements: [
      "ดำเนินกิจการค้า นำเข้า ส่งออก ซื้อ จำหน่าย ให้บริการติดตั้ง ซ่อมบำรุง ป้ายโฆษณาอิเล็กทรอนิกส์ โดยเน้นการซ่อมบำรุงจอ LED เป็นหลัก",
      "บริหารบุคลากร จัดสรรงบประมาณ และตรวจเช็คบัญชีของทีม",
      "ออกแบบและติดตั้งระบบ IT Support ให้กับภาครัฐและเอกชน",
      "พัฒนาเว็บไซต์และ เพจ Facebook ของบริษัทเพื่อโปรโมทสินค้าและบริการของบริษัท",
      "พัฒนาระบบคลังสินค้าภายในระบบบริษัท"
    ],
    techStack: ["LED Display", "IT Management", "Inventory Management", "Budgeting",
      "HTML", "CSS", "JavaScript", "jQuery", "Ajax", "Bootstrap4,5", "MySQL", "Facebook Page"]
  },
  {
    id: 5,
    company: "บริษัท ชอปปิ้งพีซี ดอทเน็ต จำกัด",
    role: "IT Support",
    period: "ก.พ. 2561 - ก.ย. 2563",
    location: "Bangkok, Thailand",
    description: "ให้บริการซัพพอร์ตระบบไอที ดูแลรักษาฮาร์ดแวร์ ซอฟต์แวร์ และระบบเครือข่ายสำหรับพนักงานและลูกค้า",
    achievements: [
      "ตรวจสอบอาการเสียของอุปกรณ์อิเล็กทรอนิกส์ต่างๆ เช่น Computer, Notebook, เครื่อง Server, จอ LED ขนาดใหญ่-ขนาดเล็ก, ป้าย LED ไฟวิ่ง, TV Wall และอุปกรณ์ภายในองค์กร",
      "ลง Software ต่างๆ ให้กับลูกค้า เช่น ลง Windows 7, 8, 10 32/64bit, Driver, Photoshop, Microsoft Office และอื่นๆ ตามที่ได้รับมอบหมาย",
      "แก้ไขปัญหาและดูแลอุปกรณ์ภายในองค์กร เช่น Computer, Printer, ระบบ LAN และแก้ไขระบบ Network เบื้องต้น",
      "แจ้งสั่งซื้ออุปกรณ์หรือเปลี่ยนชิ้นส่วนอุปกรณ์ที่ได้รับมอบหมาย",
      "ให้บริการลูกค้านอกสถานที่ (On-site Service) หรือช่วยเหลือระยะไกลผ่าน TeamViewer"
    ],
    techStack: ["Windows OS", "Hardware Troubleshooting", "Network Maintenance", "On-site Service", "TeamViewer"]
  },
  {
    id: 6,
    company: "บริษัท เอเธนส์ คอมมิวนิเคชั่น จำกัด",
    role: "IT Support",
    period: "ก.พ. 2559 - ม.ค. 2561",
    location: "Bangkok, Thailand",
    description: "ดูแลบำรุงรักษาคอมพิวเตอร์และระบบไอที พร้อมให้บริการซัพพอร์ตและแก้ไขปัญหาระบบเครือข่าย",
    achievements: [
      "ตรวจสอบอาการเสียของอุปกรณ์อิเล็กทรอนิกส์ต่างๆ เช่น Computer, Notebook, เครื่อง Server, TV Wall และอุปกรณ์ภายในองค์กร",
      "ลง Software ต่างๆ ให้กับลูกค้า เช่น ลง Windows 7, 8, 10 32/64bit, Driver, Photoshop, Microsoft Office และอื่นๆ ตามที่ได้รับมอบหมาย",
      "แก้ไขปัญหาและดูแลอุปกรณ์ภายในองค์กร เช่น Computer, Printer, ระบบ LAN และแก้ไขระบบ Network เบื้องต้น",
      "แจ้งสั่งซื้ออุปกรณ์หรือเปลี่ยนชิ้นส่วนอุปกรณ์ที่ได้รับมอบหมาย",
      "ให้บริการลูกค้านอกสถานที่ (On-site Service) หรือช่วยเหลือระยะไกลผ่าน TeamViewer"
    ],
    techStack: ["Windows OS", "Hardware Maintenance", "Network Troubleshooting", "On-site Service", "TeamViewer"]
  },
  {
    id: 7,
    company: "บริษัท พรีโม ฟู้ด แอนด์ เบฟเวอเรจ จำกัด",
    role: "Barista",
    period: "ม.ค. 2558 - ม.ค. 2559",
    location: "Bangkok, Thailand",
    description: "ดูแลบริการลูกค้า บริหารสต๊อกสินค้า และการสรุปยอดขายรายงานประจำวัน",
    achievements: [
      "ต้อนรับและให้บริการลูกค้าในการเตรียมเครื่องดื่มและอาหาร",
      "บริหารสินค้า, การสั่งสินค้าเข้าสต๊อกสินค้า, และการส่งคืนสินค้าที่ไม่ตรงตามมาตรฐาน",
      "ดูแลรักษาความเรียบร้อยและสะอาดเรียบร้อยภายในร้าน",
      "จัดทำเอกสารและรายงานส่งยอดขายประจำวันเข้าบริษัท",
      "จัดตารางเวลาทำงานและการแบ่งกะเวลาเข้า-ออกของพนักงาน"
    ],
    techStack: ["Customer Service", "Inventory Management", "POS Systems", "Scheduling"]
  },
  {
    id: 8,
    company: "บริษัท ดิ โอโร่ จำกัด",
    role: "Barista",
    period: "ม.ค. 2557 - ธ.ค. 2557",
    location: "Bangkok, Thailand",
    description: "ให้บริการและต้อนรับลูกค้า จัดเตรียมเครื่องดื่ม พร้อมบริหารจัดการสต๊อกและการสลับกะพนักงาน",
    achievements: [
      "ต้อนรับและให้บริการลูกค้าในการเตรียมเครื่องดื่มและอาหาร",
      "บริหารสินค้า, การสั่งสินค้าเข้าสต๊อกสินค้า, และการส่งคืนสินค้าที่ไม่ตรงตามมาตรฐาน",
      "ดูแลรักษาความเรียบร้อยและสะอาดเรียบร้อยภายในร้าน",
      "จัดทำเอกสารและรายงานส่งยอดขายประจำวันเข้าบริษัท",
      "จัดตารางเวลาทำงานและการแบ่งกะเวลาเข้า-ออกของพนักงาน"
    ],
    techStack: ["Customer Service", "Inventory Control", "POS Systems", "Daily Reporting"]
  }
];

export const education: Education[] = [
  {
    id: 1,
    institution: "มหาวิทยาลัยธุรกิจบัณฑิตย์",
    degree: "วิทยาศาสตรบัณฑิต (เทคโนโลยีสารสนเทศและวิทยาการข้อมูล)",
    field: "เทคโนโลยีสารสนเทศและวิทยาการข้อมูล",
    period: "2567",
    gpa: "2.86",
    achievements: [
      "โปรเจคจบ: ระบบ EV Plant Service สำหรับการค้นหาที่ชาร์ตแบตเตอรี่ไฟฟ้า",
      "สมาชิกชมรม บาสเก็ตบอล",
    ],
  },
  {
    id: 2,
    institution: "วิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา",
    degree: "ประกาศนียบัตรวิชาชีพชั้นสูง",
    field: "เทคโนโลยีสารสนเทศ",
    period: "2565",
    gpa: "3.71",
    achievements: ["เกียรตินิยมเหรียญเงิน"],
  },
  {
    id: 3,
    institution: "โรงเรียนมัธยมบ้านบางกะปิ",
    degree: "มัธยมศึกษาตอนปลาย",
    field: "เทคโนโลยีสารสนเทศ",
    period: "2557",
    gpa: "3.08",
    achievements: ["กิจกรรมวงโยธวาทิต", "กิจกรรมดนตรีสากล"],
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
    title: "Local AI Ollama & Open WebUI Setup",
    description:
      "การจัดสภาพแวดล้อมและติดตั้งระบบปัญญาประดิษฐ์ใช้งานเองภายในเครื่องแบบ Local (Local LLM) ด้วย Ollama โดยมีการทดสอบรันและเรียกใช้งานโมเดลยอดนิยม เช่น Qwen3.5:latest, Qwen3.5:4b และ Gemma4:12b โดยมี Open WebUI ทำหน้าที่เป็นหน้าเว็บแอปพลิเคชัน (UI) ในการอินเตอร์เฟสสนทนา ตอบคำถาม และช่วยเขียนโค้ดได้อย่างรวดเร็ว ปลอดภัย และเป็นส่วนตัว",
    image: "AI_Local.png",
    techStack: ["Ollama", "Open WebUI", "Docker", "Qwen 3.5", "Gemma 4", "Local LLM", "Windows"],
    liveUrl: "https://zus-hindu-reached-located.trycloudflare.com/",
    githubUrl: "https://github.com/adisornwongtip/AI_Local",
    featured: true,
    note: "หากใช้งานลิงก์ไม่ได้ รบกวนแจ้งเตือนเนื่องจากอาจจะหลุดจากการ Run Public โดย Cloudflare tunnel",
  },
  {
    id: 2,
    title: "Forex Multi-Agent AI Trading System",
    description:
      "ระบบ AI Trading อัจฉริยะแบบ 7 Agent ทำงานร่วมกัน วิเคราะห์ข้อมูลตลาดทางเทคนิค (Market Analysis), ตรวจสอบข่าวสารวิเคราะห์ Sentiment (News Sentiment), ส่งสัญญาณซื้อขาย (Signal), ควบคุมความเสี่ยง (Risk Management), ส่งคำสั่งซื้อขายอัตโนมัติผ่าน MetaTrader 5 (Execution) และแสดงผลสรุปรายงานกราฟต่างๆ ผ่าน Streamlit Dashboard",
    image: "Forex.png",
    techStack: ["Python", "LangGraph", "MetaTrader 5", "FinBERT", "Redis", "Streamlit", "Ollama", "OpenAI"],
    githubUrl: "https://github.com/adisornwongtip/AutoTradingEA",
    featured: true,
    note: "รบกวนแจ้งเตือน เนื่องจากระบบมีความเสี่ยงสูงที่จะเกิดการขาดทุน และแนะนำให้ทดลองใช้งานในระบบ Demo ก่อน",
  },
  {
    id: 3,
    title: "PDF Extract API",
    description:
      "แพลตฟอร์ม SaaS สำหรับสแกนและดึงข้อมูลโครงสร้างจากเอกสาร PDF (เช่น ใบเสร็จ ใบแจ้งหนี้ ใบส่งของ) ด้วย AI โดยรองรับการประมวลผลเบื้องหลังด้วย Background Queue, มีระบบ API Key สำหรับนักพัฒนาภายนอก, ระบบจัดการและจำกัดโควต้าตัดเครดิตการใช้งาน และหน้าแดชบอร์ดสรุปสถิติพร้อมข้อมูลกราฟแบบเรียลไทม์",
    techStack: ["ASP.NET Core", ".NET 10", "React 19", "TypeScript", "Vite", "SQLite", "OpenAI GPT-4o", "Google Gemini 2.5 Flash", "Docker"],
    githubUrl: "https://github.com/adisornwongtip/PDFAutoToAPI",
    featured: true,
  },
  {
    id: 4,
    title: "Room Rental System (RRS)",
    description:
      "ระบบบริหารจัดการหอพักและห้องเช่าครบวงจร สำหรับผู้ดูแลระบบในการจัดการห้องพัก บันทึกข้อมูลผู้เช่า คำนวณค่าน้ำ-ค่าไฟ ออกใบแจ้งหนี้รายเดือน พร้อมระบบส่งการแจ้งเตือนยอดชำระเงินตรงเข้าห้องแชทหรือกลุ่ม LINE ของผู้เช่าอัตโนมัติผ่าน LINE Messaging API",
    image: "RRS.png",
    techStack: ["Next.js 14", "ASP.NET Core 8", "Entity Framework", "SQL Server", "LINE Messaging API", "Tailwind CSS"],
    githubUrl: "https://github.com/adisornwongtip/roomrentalsystem",
    featured: true,
    note: "ระบบนี้อยู่ในช่วงพัฒนาต่อยอดจากตัวเดิม",
  },
  {
    id: 5,
    title: "Daily Task Management System",
    description:
      "เว็บแอปพลิเคชันสำหรับมอบหมายและติดตามงานประจำวันของทีมงาน พร้อมระบบลงชื่อเข้าใช้งาน (NextAuth) และระบบจัดการเก็บข้อมูลด้วยฐานข้อมูลผ่าน Prisma ORM",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/adisornwongtip/AutoJob",
    featured: false,
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
