export type ProjectVisualType = "rewind" | "robot" | "seogaro" | "rarepick" | "dashboard" | "house";

export type ProjectMedia = {
  type: "video" | "image" | "youtube";
  src: string;
  poster?: string;
  alt?: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  englishTitle?: string;
  koreanTitle?: string;
  subtitle: string;
  type: string;
  period: string;
  members: string;
  role?: string;
  roleDescription?: string;
  roles?: string[];
  status?: string;
  tags: string[];
  cardTags?: string[];
  summary: string;
  description: string;
  features: string[];
  highlights: string[];
  showHighlights?: boolean;
  developmentGoal?: string[];
  whyThisProject?: string[];
  hardware?: string[];
  hardwareDescription?: string[];
  software?: string[];
  stateSystem?: string[];
  problems?: {
    title: string;
    problem: string;
    cause?: string;
    solution: string;
    result?: string;
  }[];
  pageStructure?: string[];
  userFlow?: string[];
  limitations?: string[];
  futureImprovements?: string[];
  codeKeywords?: string[];
  learnings: string[];
  award?: string;
  awardDate?: string;
  media?: ProjectMedia[];
  videoSrc?: string;
  videoPoster?: string;
  videoGallery?: string[];
  visualType: ProjectVisualType;
  githubUrl?: string;
  deployUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "rewind",
    title: "REWIND",
    subtitle: "시대별 명작 영화와 OTT 정보를 탐색하는 영화 아카이브",
    type: "개인 프로젝트",
    period: "2026.06",
    members: "개인",
    role: "Frontend 개발",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "TMDB API", "localStorage"],
    summary:
      "TMDB API를 활용해 1970년대부터 2020년대까지 시대별 명작 영화를 탐색하고, 영화 상세 정보와 시청 가능한 OTT 정보를 확인할 수 있도록 만든 영화 아카이브 웹 서비스입니다.",
    description:
      "시대별 영화 큐레이션, 상세 정보, OTT 필터, MY LIST 저장 흐름을 중심으로 실제 API 데이터를 다루는 프론트엔드 프로젝트입니다.",
    features: [
      "1970s~2020s 시대별 영화 탐색",
      "시대별 TOP 10 영화 출력",
      "영화 상세 페이지",
      "OTT 제공 정보 확인",
      "OTT 필터",
      "MY LIST 저장 기능",
      "localStorage를 활용한 저장 목록 유지",
      "로딩 UI와 에러 상태 처리",
    ],
    highlights: [
      "TMDB API를 활용한 실제 API 기반 프로젝트",
      "useState와 useEffect를 활용한 데이터 요청 및 상태 관리",
      "useContext를 활용한 MY LIST 전역 상태 관리",
      "localStorage를 활용한 데이터 유지",
      "TypeScript 타입 정의 경험",
      "Tailwind CSS 기반 반응형 UI 구현",
    ],
    learnings: [
      "API 요청은 항상 성공하지 않기 때문에 로딩과 에러 처리가 중요하다는 점을 배웠습니다.",
      "여러 컴포넌트에서 공유하는 상태는 Context로 관리하면 편하다는 것을 이해했습니다.",
      "화면 구성에서는 기능만큼 사용자 흐름과 정보 배치가 중요하다는 점을 느꼈습니다.",
    ],
    media: [
      {
        type: "youtube",
        src: "https://youtu.be/ORr9f2Nok90",
        alt: "REWIND preview video 1",
      },
      {
        type: "youtube",
        src: "https://youtu.be/LdeaN4KBwPA",
        alt: "REWIND preview video 2",
      },
    ],
    visualType: "rewind",
  },
  {
    slug: "rescue-robot",
    title: "A.R.I.",
    englishTitle: "Autonomous Rescue Intelligence",
    koreanTitle: "스마트 자율주행 재난대응 로봇",
    subtitle: "다중 센서를 활용해 장애물과 위험 상황을 감지하는 스마트 자율주행 재난대응 로봇",
    type: "IoT / Embedded Project",
    period: "입력 예정",
    members: "개인",
    role: "기획 · 하드웨어 구성 · 센서 제어 · 주행 알고리즘 구현",
    roleDescription:
      "본 프로젝트에서 저는 전체 주제 기획부터 하드웨어 구성, 센서 제어 코드 작성, 장애물 회피 알고리즘 구현, 위험 상황 판단 로직 구성까지 전반적인 개발 과정을 담당했습니다. 특히 여러 센서가 동시에 동작하는 환경에서 로봇이 안정적으로 주행할 수 있도록 센서 데이터 처리와 모터 제어 흐름을 조정하는 데 집중했습니다.",
    roles: [
      "프로젝트 주제 기획",
      "하드웨어 부품 선정 및 배치",
      "Arduino 기반 센서 제어 코드 작성",
      "초음파 센서 기반 장애물 회피 알고리즘 구현",
      "DHT11, 불꽃 감지 센서, 조도 센서, MPU6050 센서 연동",
      "LCD와 부저를 활용한 상태 출력 및 경고 기능 구현",
      "로봇 균형 문제 해결을 위한 부품 위치 조정",
      "전원 문제 해결을 위한 배터리 상태 점검 및 배선 수정",
      "최종 테스트 및 기능 보완",
    ],
    tags: [
      "Arduino Uno R3",
      "C/C++",
      "HC-SR04",
      "MPU6050",
      "DHT11",
      "Flame Sensor",
      "Light Sensor",
      "Servo Motor",
      "DC Motor",
      "I2C LCD",
      "Buzzer",
      "LED",
      "Median Filter",
      "millis()",
      "Non-blocking Control",
    ],
    cardTags: ["Arduino", "C/C++", "HC-SR04", "MPU6050", "DHT11", "Median Filter"],
    summary:
      "A.R.I.는 Autonomous Rescue Intelligence의 약자로, 화재, 지진, 건물 붕괴와 같이 사람이 직접 접근하기 어려운 재난 환경에서 위험 지역을 탐색하기 위해 제작한 스마트 자율주행 재난대응 로봇입니다.",
    description:
      "본 프로젝트는 초음파 센서를 활용해 장애물을 감지하고 회피하며 이동하고, 온습도 센서, 불꽃 감지 센서, 조도 센서, 자이로 센서 등을 활용해 화재, 고온, 어두운 공간, 전복 위험과 같은 다양한 상황을 감지하도록 구현했습니다. 단순한 장애물 회피 로봇이 아니라, 여러 센서 데이터를 기반으로 주변 환경을 판단하고, 위험 상황이 발생하면 LCD와 부저를 통해 사용자에게 현재 상태를 알려주는 것을 목표로 했습니다.",
    developmentGoal: [
      "본 프로젝트는 재난 현장에서 구조대원이 직접 진입하기 어려운 위험 지역을 대신 탐색할 수 있는 로봇을 제작하는 것을 목표로 진행되었습니다.",
      "로봇은 장애물을 피하며 이동하고, 화재나 온도 상승, 어두운 환경, 전복 위험 등을 감지하여 사용자에게 현재 상태를 알려줄 수 있도록 설계했습니다.",
      "여러 위험 상황이 동시에 발생할 경우 우선순위에 따라 더 위험한 상황을 먼저 처리하도록 구성했습니다.",
    ],
    whyThisProject: [
      "기존 교육용 자율주행 로봇은 주로 장애물 감지와 회피 기능에 집중되어 있습니다. 하지만 실제 재난 현장에서는 장애물뿐만 아니라 화재, 고온, 어두운 공간, 전복 위험 등 다양한 위험 요소가 함께 존재합니다.",
      "따라서 본 프로젝트에서는 단순한 주행 기능을 넘어 여러 센서를 활용해 주변 환경을 종합적으로 판단하고, 위험 상황을 사용자에게 알릴 수 있는 로봇을 구현하고자 했습니다.",
      "또한 아두이노 기반 센서 제어, 모터 제어, 데이터 처리, 예외 처리 등 임베디드 시스템 개발 흐름을 직접 경험하는 데 의미를 두었습니다.",
    ],
    hardware: [
      "Arduino Uno R3",
      "HC-SR04 초음파 센서",
      "MPU6050 자이로 센서",
      "DHT11 온습도 센서",
      "불꽃 감지 센서",
      "조도 센서",
      "DC 모터 2개",
      "모터 드라이버",
      "SG90 서보모터",
      "I2C LCD",
      "패시브 부저",
      "LED",
      "18650 리튬이온 배터리",
    ],
    hardwareDescription: [
      "로봇 전면에 초음파 센서를 서보모터 위에 장착하여 좌우 방향을 탐색할 수 있도록 구성했습니다.",
      "장애물이 감지되면 좌우 거리를 비교해 더 넓은 공간으로 이동하도록 설계했습니다.",
      "불꽃 감지 센서, 조도 센서, 온습도 센서를 전면에 배치하여 주변 환경 변화를 빠르게 감지하도록 했습니다.",
      "LED를 장착해 어두운 환경에서 시야 확보를 보조했습니다.",
      "로봇 중앙에는 Arduino, 모터 드라이버, 자이로 센서, 배터리를 배치하고, LCD는 상단에 배치하여 현재 상태와 센서 정보를 확인할 수 있도록 구성했습니다.",
      "후면에는 부저를 배치하여 화재나 전복 위험 발생 시 경고음을 출력하도록 했습니다.",
    ],
    software: [
      "A.R.I.의 소프트웨어는 센서 데이터 수집, 위험 상황 판단, 모터 제어, LCD 출력, 부저 경고 기능으로 구성했습니다.",
      "주행 중 초음파 센서를 통해 전방 장애물을 감지하고, 일정 거리 이내에 장애물이 발견되면 서보모터로 좌우 방향을 탐색한 뒤 더 넓은 공간으로 이동하도록 구현했습니다.",
      "초음파 센서 값이 순간적으로 튀는 문제가 있었기 때문에 거리 값을 3번 측정한 후 중간값을 사용하는 Median Filter를 적용했습니다. 이를 통해 장애물 감지 성능을 더 안정적으로 만들었습니다.",
      "DHT11 온습도 센서는 측정 시간이 오래 걸리기 때문에 millis()를 활용해 일정 시간마다 데이터를 읽도록 구현했습니다. 이를 통해 센서 측정 중에도 모터와 다른 센서 동작이 멈추지 않도록 구성했습니다.",
      "화재가 감지되거나 로봇이 심하게 기울어진 경우에는 즉시 모터를 정지시키고 부저를 울려 사용자에게 위험 상황을 알리도록 설계했습니다.",
    ],
    codeKeywords: [
      "decideState()",
      "updateSensors()",
      "updateDrive()",
      "avoidObstacle()",
      "getFilteredDistance()",
      "millis()",
      "Median Filter",
      "MPU6050",
      "DHT11",
    ],
    features: [
      "초음파 센서를 활용한 전방 장애물 감지",
      "서보모터 기반 좌우 거리 탐색",
      "좌우 거리 비교를 통한 자율 회피 주행",
      "DHT11 온습도 센서를 활용한 고온 환경 감지",
      "불꽃 감지 센서를 활용한 화재 감지",
      "조도 센서를 활용한 어두운 공간 감지",
      "MPU6050 자이로 센서를 활용한 전복 위험 감지",
      "LCD를 통한 현재 상태 및 센서 정보 출력",
      "부저를 활용한 위험 상황 경고",
      "LED를 활용한 어두운 환경 보조 조명",
      "위험 상황 우선순위 기반 상태 처리",
    ],
    highlights: [
      "Median Filter를 적용해 초음파 센서의 순간적인 오차를 줄임",
      "millis() 기반 센서 측정 구조로 주행 중에도 센서와 모터가 함께 동작하도록 구현",
      "여러 위험 상황이 동시에 발생할 경우 우선순위를 설정해 더 위험한 상태를 먼저 처리",
      "화재 감지 또는 전복 위험 발생 시 즉시 모터를 정지하는 안전 로직 구현",
      "LCD와 부저를 활용해 로봇의 현재 상태와 위험 상황을 사용자에게 전달",
      "서보모터를 활용해 초음파 센서를 좌우로 회전시키고 더 넓은 경로를 선택",
      "하드웨어 무게 중심 문제를 해결하기 위해 부품 배치와 모터 속도를 조정",
    ],
    showHighlights: true,
    stateSystem: [
      "정상 상태: 장애물 회피 주행",
      "어두운 공간 감지: LED 점등",
      "고온 또는 고습 감지: LCD와 부저로 경고",
      "화재 감지: 모터 정지 및 부저 경고",
      "전복 위험 감지: 자이로 센서 값을 기준으로 위험 판단 후 모터 정지",
      "코드에서는 decideState() 함수를 통해 현재 센서 값을 기반으로 로봇의 상태를 판단했습니다.",
      "여러 위험 상황이 동시에 발생할 수 있기 때문에 전복 위험과 화재 감지를 더 높은 우선순위로 처리하고, 일반적인 환경 경고보다 먼저 대응하도록 구성했습니다.",
    ],
    problems: [
      {
        title: "문제 1. 초음파 센서 값이 자주 튀는 문제",
        problem: "초음파 센서 값이 순간적으로 튀면서 로봇이 불안정하게 움직이는 문제가 발생했습니다.",
        solution: "거리 값을 3번 측정한 후 중간값만 사용하는 Median Filter를 적용했습니다.",
        result: "장애물 감지 성능이 더 안정적으로 개선되었습니다.",
      },
      {
        title: "문제 2. 2륜구동 구조의 균형 문제",
        problem: "센서, 배터리, Arduino 보드 등을 장착하면서 무게 중심이 한쪽으로 쏠려 직진 중 방향이 틀어지는 문제가 발생했습니다.",
        solution: "부품 위치를 여러 번 수정하고, 모터 속도를 조절하며 균형을 맞췄습니다.",
        result: "로봇이 더 안정적으로 주행할 수 있도록 개선했습니다.",
      },
      {
        title: "문제 3. 배터리 구동 시 LCD가 꺼지거나 로봇이 멈추는 문제",
        problem: "배터리로 구동할 때 LCD가 꺼지거나 로봇이 멈추는 현상이 발생했습니다.",
        cause: "모터가 동작할 때 순간적으로 전압이 떨어지는 것이 원인이었습니다.",
        solution: "배터리 상태를 점검하고 전원 배선을 수정했습니다.",
        result: "전원 공급 문제를 개선하고 로봇 동작을 안정화했습니다.",
      },
      {
        title: "문제 4. 하드웨어 제약으로 인한 기능 제외",
        problem: "IR 통신 기능과 RGB LED 상태 표시 기능을 추가하고 싶었지만, 핀 수와 부품 상태 문제로 최종 버전에는 적용하지 못했습니다.",
        solution: "RGB LED 대신 일반 LED와 LCD를 활용해 상태를 표시하도록 변경했습니다.",
      },
    ],
    limitations: [
      "하드웨어 핀 수 제약으로 IR 통신 기능을 최종 버전에 적용하지 못함",
      "RGB LED의 일부 색상이 정상 동작하지 않아 일반 LED와 LCD로 상태 표시 방식을 변경함",
      "2륜구동 구조 특성상 무게 중심과 직진 안정성 조정이 필요했음",
      "배터리 전압 강하로 인해 전원 공급 안정성 문제가 발생했음",
      "현재는 위험 감지와 상태 출력 중심이며, 무선 통신 기반 실시간 모니터링 기능은 구현되지 않음",
    ],
    learnings: [
      "여러 센서와 모터를 동시에 제어하는 임베디드 시스템 구현이 생각보다 복잡하다는 것을 경험했습니다.",
      "초음파 센서처럼 값이 불안정한 센서는 필터링 로직이 필요하다는 것을 배웠습니다.",
      "millis()를 활용하면 센서 측정 중에도 다른 동작이 멈추지 않도록 구성할 수 있다는 점을 이해했습니다.",
      "하드웨어 프로젝트에서는 코드뿐만 아니라 부품 배치, 무게 중심, 전원 공급도 매우 중요하다는 것을 느꼈습니다.",
      "예상하지 못한 하드웨어 문제를 해결하는 과정에서 원인 분석과 반복 테스트의 중요성을 배웠습니다.",
      "최종적으로 로봇이 스스로 장애물을 피하고 위험 상황을 감지하는 모습을 보며 큰 성취감을 느꼈습니다.",
    ],
    futureImprovements: [
      "Bluetooth 또는 Wi-Fi 모듈을 추가하여 스마트폰에서 실시간 상태 확인",
      "자이로 센서를 활용한 PID 제어 적용으로 더 정확한 직진 주행 구현",
      "모터와 제어 회로의 전원 공급을 분리하여 전원 안정성 개선",
      "위험 지역 정보를 무선으로 전송하는 기능 추가",
      "원격 제어 기능을 추가하여 실제 재난 대응 시스템에 가까운 형태로 확장",
    ],
    media: [
      {
        type: "youtube",
        src: "https://youtu.be/Y4N6PdhFPIQ",
        alt: "A.R.I. 재난대응 로봇 시연 영상 1",
        caption: "A.R.I. 시연 1",
      },
      {
        type: "youtube",
        src: "https://youtube.com/shorts/EzCVKfs1x_o?feature=share",
        alt: "A.R.I. 재난대응 로봇 시연 영상 2",
        caption: "A.R.I. 시연 2",
      },
      {
        type: "youtube",
        src: "https://youtube.com/shorts/FF0AEknFq-Q",
        alt: "A.R.I. 재난대응 로봇 시연 영상 3",
        caption: "A.R.I. 시연 3",
      },
    ],
    videoSrc: "/videos/ari_1.mp4",
    videoGallery: ["/videos/ari_1.mp4", "/videos/ari_2.mp4", "/videos/ari_3.mp4"],
    visualType: "robot",
  },
  {
    slug: "seogaro",
    title: "서가로",
    subtitle: "주변 도서관의 대출 가능 여부를 연결하는 O2O 독서 플랫폼",
    type: "개인 프로젝트",
    period: "2026.06",
    members: "개인",
    role: "서비스 기획 및 Frontend 개발",
    status: "프로젝트 기획중",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    summary:
      "사용자가 책을 검색하면 주변 도서관의 대출 가능 여부를 확인하고, 실제 도서관 방문으로 이어지도록 돕는 O2O 독서 플랫폼입니다.",
    description:
      "온라인 도서 검색 경험을 오프라인 도서관 방문으로 연결하는 흐름과 Reading Passport 스탬프 시스템을 중심으로 기획한 서비스입니다.",
    features: [
      "도서 검색",
      "주변 도서관 정보 확인",
      "실시간 도서관 재고 확인",
      "Reading Passport 스탬프 시스템",
      "독서 경험 기반 서비스 흐름 설계",
    ],
    highlights: [
      "온라인 추천을 오프라인 방문으로 연결하는 O2O 서비스 기획",
      "도서관 방문 경험을 게임화하는 Reading Passport 아이디어",
      "React와 TypeScript 기반 웹앱 구조 설계",
    ],
    learnings: [
      "서비스 기획 단계에서 사용자가 실제로 행동하게 만드는 흐름이 중요하다는 점을 배웠습니다.",
      "기능보다 서비스의 목적과 사용자 경험이 먼저 정리되어야 한다는 점을 느꼈습니다.",
    ],
    media: [
      {
        type: "image",
        src: "/images/seogaro.png",
        alt: "서가로 프로젝트 미리보기 이미지",
      },
    ],
    visualType: "seogaro",
  },
  {
    slug: "rarepick",
    title: "레어픽",
    englishTitle: "RarePick",
    subtitle: "특수동물 보호자를 위한 AI 진단 및 지도 기반 병원 추천 서비스",
    type: "팀 프로젝트 / 아이디어톤 수상작",
    period: "2026.05",
    members: "팀 프로젝트",
    role: "서비스 기획 및 UX Flow 설계",
    award: "솜커톤 우수상",
    awardDate: "2026.05.14",
    tags: ["Gemini API", "Kakao Maps API", "Service Planning", "UX Flow"],
    summary:
      "특수동물 보호자가 응급 상황이나 이상 증상을 빠르게 판단하고, 주변 특수동물 진료 가능 병원을 찾을 수 있도록 기획한 아이디어톤 수상 프로젝트입니다.",
    description:
      "실제 완성 코드가 있는 개발 프로젝트가 아니라, 특수동물 보호자의 정보 부족 문제를 정의하고 AI 진단과 지도 기반 병원 추천 흐름을 기획한 아이디어톤 수상작입니다.",
    features: [
      "특수동물 이상 증상 입력",
      "AI 진단 결과 제공",
      "Kakao Maps API 기반 병원 추천",
      "특수동물 보호자 대상 서비스 흐름 설계",
    ],
    highlights: [
      "솜커톤 우수상 수상",
      "Gemini API 기반 AI 진단 아이디어",
      "지도 기반 병원 추천 기능 기획",
      "실제 사용자 문제 해결 중심의 서비스 기획",
    ],
    learnings: [
      "기술 자체보다 어떤 문제를 해결할지 명확히 하는 것이 중요하다는 점을 배웠습니다.",
      "아이디어톤에서는 기능 구현뿐 아니라 문제 정의와 전달력이 중요하다는 것을 느꼈습니다.",
    ],
    media: [
      {
        type: "youtube",
        src: "https://youtu.be/pntru3ntlzw",
        alt: "RarePick 프로젝트 시연 영상",
        caption: "RarePick 시연 영상",
      },
    ],
    videoSrc: "/videos/rarepick.mp4",
    videoGallery: ["/videos/rarepick.mp4"],
    visualType: "rarepick",
  },
  {
    slug: "google-dashboard",
    title: "맞춤형 구글 대시보드",
    subtitle: "위치 기반 데이터를 보여주는 개인 맞춤형 대시보드",
    type: "개인 프로젝트",
    period: "2026.06",
    members: "개인",
    role: "Frontend 개발",
    tags: ["React", "TypeScript", "Geolocation API", "Fetch API", "CSS"],
    summary: "사용자의 위치 정보를 기반으로 필요한 데이터를 보여주는 맞춤형 대시보드 프로젝트입니다.",
    description:
      "브라우저 내장 위치 API와 외부 데이터 요청 흐름을 활용해 사용자에게 필요한 정보를 카드형 UI로 보여주는 프로젝트입니다.",
    features: [
      "Geolocation API를 활용한 위치 정보 확인",
      "Fetch API 기반 외부 데이터 요청",
      "대시보드형 UI 구성",
      "위치 기반 정보 출력",
    ],
    highlights: ["브라우저 내장 API 활용 경험", "위치 기반 데이터 연동 경험", "대시보드 UI 구성 경험"],
    learnings: [
      "외부 API를 사용할 때 요청 흐름과 응답 데이터 구조를 이해하는 것이 중요하다는 점을 배웠습니다.",
      "대시보드는 정보의 우선순위와 카드 배치가 중요하다는 점을 느꼈습니다.",
    ],
    media: [
      {
        type: "youtube",
        src: "https://youtu.be/twroPzUPP3o",
        alt: "맞춤형 구글 대시보드 시연 영상 1",
        caption: "대시보드 시연 1",
      },
      {
        type: "youtube",
        src: "https://youtu.be/T_Kn-veXzvI",
        alt: "맞춤형 구글 대시보드 시연 영상 2",
        caption: "대시보드 시연 2",
      },
    ],
    videoSrc: "/videos/google_1.mp4",
    videoGallery: ["/videos/google_1.mp4", "/videos/google_2.mp4"],
    visualType: "dashboard",
  },
  {
    slug: "comma-house",
    title: "쉼표하우스",
    englishTitle: "Comma House",
    subtitle: "숙소 예약 웹사이트",
    type: "팀 프로젝트",
    period: "2025.05 ~ 2025.06",
    members: "5명",
    role: "팀장 / 프론트엔드 개발",
    roleDescription:
      "본 프로젝트에서 팀장으로 참여하여 전체 프로젝트 흐름을 관리하고 팀원들의 역할을 분담했습니다. 또한 프론트엔드 구현을 중심으로 주요 페이지 제작과 수정 작업을 담당했습니다. 특히 메인 페이지, 숙소 상세 페이지, 예약 및 결제 흐름, 마이페이지 일부 기능, 페이지 간 이동 구조를 구현하며 웹사이트의 전체 사용 흐름을 완성하는 데 집중했습니다.",
    roles: [
      "팀장으로서 전체 프로젝트 관리",
      "팀원 역할 분담 및 진행 상황 조율",
      "메인 페이지 설계 및 구현",
      "숙소 상세 페이지 최종 수정 및 완성",
      "예약 · 결제 페이지 수정 및 기능 보완 참여",
      "마이페이지의 쿠폰 / 예약내역 기능 구현",
      "전체 페이지 간 태그 연결 및 이동 구조 설계",
      "전체 페이지 흐름 점검 및 수정",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    summary:
      "쉼표하우스는 지친 일상 속 쉼표를 제공하는 숙소 예약 웹사이트입니다.",
    description:
      "사용자가 숙소를 검색하고, 숙소 상세 정보를 확인한 뒤 예약 및 결제 흐름까지 이동할 수 있도록 구성했습니다. HTML, CSS, JavaScript를 중심으로 웹사이트의 주요 화면을 직접 구현했으며, 숙소 예약 서비스의 기본적인 사용자 흐름을 경험할 수 있었던 팀 프로젝트입니다.",
    features: [
      "로그인 및 회원가입 페이지 제공",
      "숙소 검색 및 리스트 확인 기능",
      "숙소 상세 정보 확인",
      "예약 및 결제 페이지 구현",
      "마이페이지 기능 구현",
      "쿠폰 및 예약내역 확인 기능",
      "이벤트 페이지 제공",
      "Q&A 페이지 제공",
      "회사 소개 페이지 제공",
      "인기 여행지 및 패키지 여행 페이지 접근",
    ],
    highlights: [
      "HTML, CSS, JavaScript 중심 구현",
      "숙소 예약 서비스의 기본 사용자 흐름 설계",
      "여러 페이지 간 이동 구조 구현",
      "팀장 역할을 맡아 프로젝트 진행 관리",
    ],
    pageStructure: [
      "메인 페이지",
      "로그인 / 회원가입 페이지",
      "숙소 검색 페이지",
      "숙소 상세 페이지",
      "예약 / 결제 페이지",
      "마이페이지",
      "이벤트 페이지",
      "Q&A 페이지",
      "회사 소개 페이지",
      "인기 여행지 페이지",
      "패키지 여행 페이지",
    ],
    userFlow: [
      "main1.html 실행",
      "상단 메뉴 또는 마이페이지로 이동",
      "로그인 진행",
      "숙소 검색",
      "검색 시 제주 지역으로 이동하도록 구현",
      "숙소 선택 후 상세 페이지 확인",
      "예약 및 결제 페이지로 이동 가능",
      "메인 페이지에서 회사 소개, Q&A, 마이페이지 접근 가능",
      "인기 여행지 및 패키지 여행 페이지 접근 가능",
    ],
    limitations: [
      "프로젝트 진행 당시 백엔드와의 연동이 이루어지지 않아 실제 데이터 저장이나 예약 처리 기능에는 한계가 있었습니다.",
      "따라서 일부 기능은 실제 동작보다는 UI와 페이지 이동 흐름 중심으로 구현되었습니다.",
      "또한 검색 기능은 다양한 지역 검색이 아닌 제주 지역으로 이동하는 방식으로 제한되어 있었습니다.",
      "예약 및 결제 흐름은 실제 결제 처리 없이 화면 흐름 중심으로 구현되었습니다.",
    ],
    learnings: [
      "이번 프로젝트를 통해 HTML과 CSS를 활용한 UI 구성 능력을 향상시킬 수 있었습니다.",
      "또한 여러 페이지를 연결하며 웹사이트의 전체 흐름을 설계하는 경험을 할 수 있었습니다.",
      "숙소 예약 서비스의 사용자 흐름을 직접 설계하고 구현해볼 수 있었습니다.",
      "팀장으로 프로젝트를 진행하면서 역할 분담과 일정 조율의 중요성을 느꼈습니다.",
      "백엔드 연동이 없는 경우 실제 데이터 처리와 기능 구현에 한계가 있다는 점도 알게 되었습니다.",
      "이후 프로젝트에서는 프론트엔드와 백엔드 연동의 필요성을 더 크게 느끼게 되었습니다.",
    ],
    media: [
      {
        type: "youtube",
        src: "https://youtu.be/rp_jlRk9t2I",
        alt: "쉼표하우스 숙소 예약 웹사이트 시연 영상 1",
        caption: "쉼표하우스 시연 1",
      },
      {
        type: "youtube",
        src: "https://youtu.be/aR-elTYz-sc",
        alt: "쉼표하우스 숙소 예약 웹사이트 시연 영상 2",
        caption: "쉼표하우스 시연 2",
      },
      {
        type: "youtube",
        src: "https://youtu.be/d2GmzGZYtpM",
        alt: "쉼표하우스 숙소 예약 웹사이트 시연 영상 3",
        caption: "쉼표하우스 시연 3",
      },
    ],
    videoSrc: "/videos/comma_1.mp4",
    videoGallery: ["/videos/comma_1.mp4", "/videos/comma_2.mp4", "/videos/comma_3.mp4"],
    visualType: "house",
  },
];
