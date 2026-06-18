export type Activity = {
  title: string;
  period: string;
  role: string;
  description: string[];
  keywords: string[];
};

export const activities: Activity[] = [
  {
    title: "UMC 웹 파트 Challenger",
    period: "2026.03 ~ 현재",
    role: "대학생 개발 연합 동아리 활동",
    description: [
      "대학생 개발 연합 동아리 UMC에서 웹 파트 Challenger로 활동하며 React, TypeScript, Tailwind CSS 등 프론트엔드 기술을 학습하고 있습니다.",
      "Git/GitHub, Discord, Swagger 기반 협업 경험을 쌓고 있으며, 매주 미션을 통해 실무에 가까운 개발 흐름을 익히고 있습니다.",
    ],
    keywords: ["React", "TypeScript", "Tailwind CSS", "Git/GitHub", "Swagger", "Discord"],
  },
];
