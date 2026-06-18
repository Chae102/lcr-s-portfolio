export type SkillItem = {
  name: string;
  featured?: boolean;
};

export type SkillGroup = {
  category: string;
  description: string;
  skills: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    description: "사용자 경험을 최우선으로 생각하는 UI/UX 개발",
    skills: [
      { name: "React", featured: true },
      { name: "TypeScript", featured: true },
      { name: "Tailwind CSS", featured: true },
      { name: "HTML5", featured: true },
      { name: "CSS3", featured: true },
      { name: "JavaScript", featured: true },
      { name: "Vite" },
      { name: "React Router" },
    ],
  },
  {
    category: "Backend",
    description: "안정적인 데이터 처리와 서버 구조에 대한 기초 이해",
    skills: [
      { name: "Java", featured: true },
      { name: "MySQL", featured: true },
      { name: "Spring", featured: true },
    ],
  },
  {
    category: "Collaboration",
    description: "효율적인 협업을 위한 도구와 커뮤니케이션",
    skills: [
      { name: "Git", featured: true },
      { name: "GitHub", featured: true },
      { name: "Discord", featured: true },
      { name: "Notion" },
    ],
  },
];
