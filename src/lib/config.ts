export interface ServiceItem {
  title: string;
  titleEn?: string;
  desc: string;
  descEn?: string;
  price: string;
  priceEn?: string;
  icon: string;
}

export interface PortfolioItem {
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  desc: string;
  descEn?: string;
  imageUrl: string;
  tags: string[];
}

export interface TestimonialItem {
  author: string;
  authorEn?: string;
  role: string;
  roleEn?: string;
  company: string;
  companyEn?: string;
  content: string;
  contentEn?: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  titleEn?: string;
  desc: string;
  descEn?: string;
}

export interface SocialItem {
  platform: string;
  url: string;
}

const DEMO_SERVICES: ServiceItem[] = [
  {
    title: '브랜드 아이덴티티',
    titleEn: 'Brand Identity',
    desc: '로고부터 컬러 팔레트, 타이포그래피까지 — 브랜드의 첫인상을 완성합니다.',
    price: '₩350만 ~',
    priceEn: 'From $2,600',
    icon: 'palette',
  },
  {
    title: '패키지 디자인',
    titleEn: 'Packaging Design',
    desc: '소비자의 손에 닿는 순간 브랜드를 느꼼게 만드는 패키지 디자인.',
    descEn: 'Packaging that makes consumers feel the brand the moment they touch it.',
    price: '₩180만 ~',
    priceEn: 'From $1,300',
    icon: 'package',
  },
  {
    title: '소셜 미디어 키트',
    titleEn: 'Social Media Kit',
    desc: '인스타, 유튜브, 링크드인에 바로 쓸 수 있는 일관된 비주얼 키트.',
    descEn: 'Consistent visual kit ready to use on Instagram, YouTube, and LinkedIn.',
    price: '₩80만 ~',
    priceEn: 'From $600',
    icon: 'image',
  }
];

const DEMO_PORTFOLIO: PortfolioItem[] = [
  {
    title: '하루마 커피 리브랜딩',
    titleEn: 'Haruma Coffee Rebranding',
    category: '브랜드 아이덴티티',
    categoryEn: 'Brand Identity',
    desc: '성수 스페셜티 카페의 브랜드 전면 개편.',
    descEn: 'Complete brand overhaul for a Seongsu specialty cafe.',
    imageUrl: `${_basePath}https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600`,
    tags: ['로고', '패키지', '브랜딩'],
  },
  {
    title: 'NILE 스킨케어 패키지',
    titleEn: 'NILE Skincare Packaging',
    category: '패키지 디자인',
    categoryEn: 'Packaging Design',
    desc: '미니멀 럭셔리 컨셉의 스킨케어 라인 패키지 디자인.',
    descEn: 'Minimal-luxury skincare packaging that secured retail placement post-launch.',
    imageUrl: `${_basePath}https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600`,
    tags: ['패키지', '럭셔리', '뷰티'],
  },
  {
    title: '그린웨이 비영리 소셜 키트',
    titleEn: 'Greenway NGO Social Kit',
    category: '소셜 미디어 키트',
    categoryEn: 'Social Media Kit',
    desc: '환경 비영리 단체의 캠페인 비주얼 제작.',
    descEn: 'Campaign visuals for an environmental NGO.',
    imageUrl: `${_basePath}https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600`,
    tags: ['소셜', 'NGO', '환경'],
  }
];

const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    author: '강민준',
    authorEn: 'Minjun Kang',
    role: '대표',
    roleEn: 'CEO',
    company: '하루마 커피',
    companyEn: 'Haruma Coffee',
    content: '브랜드 방향을 제대로 잡아주셨어요. 처음 미팅부터 최종 시안까지 군더더기 없이 딱 원하는 걸 뽑아주셔서 정말 만족합니다.',
    contentEn: 'She nailed our brand direction exactly. From the first meeting to the final mockup, she delivered precisely what we wanted.',
    rating: 5,
  },
  {
    author: '이수진',
    authorEn: 'Sujin Lee',
    role: '마케팅 매니저',
    roleEn: 'Marketing Manager',
    company: 'NILE 스킨케어',
    companyEn: 'NILE Skincare',
    content: '패키지 하나로 브랜드 가치가 달라지는 걸 직접 경험했어요.',
    rating: 5,
  }
];

const DEMO_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: '킥오프 미팅',
    titleEn: 'Kickoff Meeting',
    desc: '브리프 공유, 레퍼런스 수집, 방향성 합의.',
    descEn: 'Share brief, gather references, align on direction.',
  },
  {
    number: '02',
    title: '콘셉트 제안',
    titleEn: 'Concept Proposal',
    desc: '3가지 방향의 무드보드와 초안 제시.',
    descEn: '3 moodboard directions + first draft.',
  },
  {
    number: '03',
    title: '시안 확정',
    titleEn: 'Design Finalization',
    desc: '선택된 방향으로 완성도를 높입니다.',
    descEn: 'Polish the chosen direction. Unlimited minor revisions.',
  },
  {
    number: '04',
    title: '최종 납품',
    titleEn: 'Final Delivery',
    desc: 'AI, PNG, PDF 등 필요한 모든 포맷으로 납품.',
    descEn: 'Delivery in all needed formats + brand guideline document.',
  }
];

const _basePath = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || '정하은',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Haeun Jung',
  title: process.env.NEXT_PUBLIC_TITLE || '그래픽 디자이너',
  titleEn: process.env.NEXT_PUBLIC_TITLE_EN || 'Graphic Designer',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || '브랜드의 이야기를 시각으로 풀어내는 그래픽 디자이너',
  taglineEn: process.env.NEXT_PUBLIC_TAGLINE_EN || 'Graphic designer who tells brand stories through visuals',
  avatarUrl: process.env.NEXT_PUBLIC_AVATAR_URL || null,
  services: parseJSON<ServiceItem[]>(process.env.NEXT_PUBLIC_SERVICES, DEMO_SERVICES),
  portfolio: parseJSON<PortfolioItem[]>(process.env.NEXT_PUBLIC_PORTFOLIO, DEMO_PORTFOLIO),
  testimonials: parseJSON<TestimonialItem[]>(process.env.NEXT_PUBLIC_TESTIMONIALS, DEMO_TESTIMONIALS),
  process: parseJSON<ProcessStep[]>(process.env.NEXT_PUBLIC_PROCESS, DEMO_PROCESS),
  email: process.env.NEXT_PUBLIC_EMAIL || 'haeun@jung-design.kr',
  socials: parseJSON<SocialItem[]>(process.env.NEXT_PUBLIC_SOCIALS, [
  { platform: 'instagram', url: 'https://instagram.com' },
  { platform: 'linkedin', url: 'https://linkedin.com' }
]),
  gradientFrom: '#8263bf',
  gradientTo: '#233a3e',
  fontFamily: 'Pretendard',
  portfolioColumns: '3',
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
