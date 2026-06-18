export type ExperienceItem = {
  category: "Activity" | "Award";
  title: string;
  period: string;
  role: string;
  project?: string;
  description: string[];
  tags: string[];
};

export const experiences: ExperienceItem[] = [
  {
    category: "Activity",
    title: "UMC 웹 파트 Challenger",
    period: "2026.03 ~ 현재",
    role: "대학생 개발 연합 동아리 활동",
    description: [
      "대학생 개발 연합 동아리 UMC에서 웹 파트 Challenger로 활동하며 React, TypeScript, Tailwind CSS 등 프론트엔드 기술을 학습하고 있습니다.",
      "Git/GitHub, Discord, Swagger 기반 협업 경험을 쌓고 있으며, 매주 미션을 통해 실무에 가까운 개발 흐름을 익히고 있습니다.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Git/GitHub", "Swagger", "Discord"],
  },
  {
    category: "Award",
    title: "솜커톤 우수상 수상",
    period: "2026.05.14",
    role: "아이디어톤 수상",
    project: "레어픽(RarePick)",
    description: [
      "특수동물 보호자를 위한 AI 진단 및 위치 기반 병원 추천 아이디어로 솜커톤에서 우수상을 수상했습니다.",
      "레어픽은 아이디어톤 성격의 프로젝트이므로 실제 완성 코드나 배포 링크는 없습니다.",
    ],
    tags: ["Award", "Ideathon", "RarePick", "Gemini API", "Kakao Maps API"],
  },
];
