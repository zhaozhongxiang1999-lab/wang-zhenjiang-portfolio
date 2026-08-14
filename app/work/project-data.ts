export type Project = {
  slug: string;
  number: string;
  title: string;
  en: string;
  category: string;
  year: string;
  cover: string;
  summary: string;
  intro: string;
  services: string[];
  images: string[];
  imageAspects: number[];
};

const imageList = (slug: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/projects/${slug}/${String(index + 1).padStart(2, "0")}.webp`);

export const projects: Project[] = [
  {
    slug: "cdn", number: "01", title: "西顿照明", en: "CDN LIGHTING", category: "品牌视觉设计", year: "2026",
    cover: "/projects/cdn/01.webp", summary: "定义光的价值，成就空间的未来。",
    intro: "以建筑光影与专业秩序为视觉原点，重塑西顿照明的品牌识别。项目从标志系统延展至空间、礼赠与商业触点，让科技感和高端质感形成统一表达。",
    services: ["品牌识别", "视觉系统", "空间应用", "礼赠设计"], images: imageList("cdn", 10),
    imageAspects: Array(10).fill(16 / 9),
  },
  {
    slug: "guihe", number: "02", title: "归和", en: "GUIHE", category: "品牌全案设计", year: "2026",
    cover: "/projects/guihe/01.webp", summary: "顺时而养，自然而生。",
    intro: "围绕东方香韵、自然疗愈与当代生活方式，完成从行业洞察、品牌定位到标志、色彩、包装、空间和 IP 的完整系统，以温润克制的视觉语言传达回归身心平衡的品牌主张。",
    services: ["品牌策略", "视觉识别", "包装系统", "IP 形象"], images: imageList("guihe", 12),
    imageAspects: [...Array(4).fill(3 / 2), ...Array(8).fill(16 / 9)],
  },
  {
    slug: "type", number: "03", title: "字成一面", en: "TYPE & LOGO", category: "字体 / 标志设计", year: "2026",
    cover: "/projects/type/01.webp", summary: "让字形成为品牌最直接的性格。",
    intro: "一组跨越餐饮、文化与商业场景的字体标志探索。通过书写节奏、结构重组和行业意象，让名称不只是被阅读，也能在第一眼传达品牌气质。",
    services: ["字体设计", "标志设计", "字形研究", "场景应用"], images: imageList("type", 11),
    imageAspects: [1371 / 1147, 3 / 2, 1672 / 941, 2 / 3, 3 / 2, 3 / 2, 1, 1, 1, 1309 / 1202, 1402 / 1122],
  },
  {
    slug: "poster", number: "04", title: "视觉表达", en: "POSTER DESIGN", category: "海报设计", year: "2026",
    cover: "/projects/poster/01.webp", summary: "在信息之外，建立画面的情绪张力。",
    intro: "以字体、影像和材质实验为核心的海报与封面创作。画面在承载信息的同时，也探索叙事氛围、文化语境和更具冲击力的视觉表达。",
    services: ["海报设计", "书籍封面", "视觉实验", "字体编排"], images: imageList("poster", 10),
    imageAspects: [16 / 9, 3 / 2, 2 / 3, 3 / 2, 3 / 2, 2 / 3, 1375 / 1144, 2, 1672 / 941, 16 / 9],
  },
  {
    slug: "xiaoxiao", number: "05", title: "骁骁", en: "XIAOXIAO IP", category: "IP 全案设计", year: "2026",
    cover: "/projects/xiaoxiao/01.webp", summary: "健康自律的养成日记。",
    intro: "为健康自律主题构建温暖、陪伴感强的 IP 角色。项目覆盖世界观、三视图、表情动作、职业延展、生活场景、衍生产品和海报应用，形成可持续扩展的角色资产。",
    services: ["IP 策略", "角色设计", "场景延展", "衍生应用"], images: imageList("xiaoxiao", 19),
    imageAspects: [1537 / 1023, 1537 / 1023, 1851 / 1440, 1672 / 941, 1402 / 1122, 1402 / 1122, 1528 / 1029, ...Array(4).fill(3 / 2), 1402 / 1122, 1375 / 1144, 1637 / 960, ...Array(4).fill(3 / 2), 2],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)!;
