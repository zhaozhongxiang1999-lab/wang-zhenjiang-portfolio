"use client";

import { useEffect, useState } from "react";

const Arrow = ({ direction = "right" }: { direction?: "right" | "down" }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
    {direction === "right" ? (
      <path d="M5 12h14m-6-6 6 6-6 6" />
    ) : (
      <path d="m6 9 6 6 6-6" />
    )}
  </svg>
);

const projects = [
  {
    number: "01",
    title: "西顿照明",
    en: "CDN LIGHTING",
    category: "品牌视觉设计",
    image: "/assets/cdn.webp",
    description: "以光的秩序建立品牌识别，从标志系统延展至空间、包装与商业场景。",
  },
  {
    number: "02",
    title: "归和",
    en: "GUIHE",
    category: "品牌全案设计",
    image: "/assets/guihe.webp",
    description: "围绕东方香韵与自然疗愈，完成定位、视觉、包装和 IP 的完整品牌叙事。",
  },
  {
    number: "03",
    title: "字成一面",
    en: "TYPE & LOGO",
    category: "字体 / 标志设计",
    image: "/assets/type.webp",
    description: "从字形气质出发，把名称、行业特征与品牌性格收束为清晰的视觉符号。",
  },
  {
    number: "04",
    title: "视觉表达",
    en: "POSTER DESIGN",
    category: "海报设计",
    image: "/assets/poster.webp",
    description: "探索书写、材质与空间语境，让画面在信息之外拥有更直接的情绪张力。",
  },
  {
    number: "05",
    title: "骁骁",
    en: "XIAOXIAO IP",
    category: "IP 全案设计",
    image: "/assets/xiaoxiao.webp",
    description: "为健康自律主题构建角色世界观，覆盖角色设定、衍生场景与品牌应用。",
  },
];

function CountUp() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - started) / 1300, 1);
      setValue(Math.round((1 - Math.pow(1 - progress, 4)) * 5));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <span>{String(value).padStart(2, "0")}</span>;
}

function Ticker() {
  const ticks = Array.from({ length: 62 });
  return (
    <div className="ruler" aria-hidden="true">
      <div className="ruler-track">
        {[...ticks, ...ticks].map((_, index) => (
          <i key={index} className={index % 10 === 0 ? "major" : index % 5 === 0 ? "mid" : ""} />
        ))}
      </div>
      <b />
    </div>
  );
}

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-bg" />
        <div className="noise" />
        <nav className="nav" aria-label="主要导航">
          <a className="brand" href="#top" aria-label="王振江作品集首页">
            <span>WZJ</span>
            <small>PORTFOLIO ©2026</small>
          </a>
          <a className="nav-index" href="#work" aria-label="浏览作品">05</a>
          <div className="identity">
            <div><strong>王振江</strong><span>品牌设计师</span></div>
            <img src="/assets/about.webp" alt="王振江" />
          </div>
        </nav>

        <div className="hero-content">
          <div className="feature-wrap reveal-one">
            <a href="#work" className="feature-card" aria-label="查看五类精选作品">
              <div className="orb" />
              <div className="feature-copy">
                <p>精选作品类别</p>
                <h1><CountUp /></h1>
                <span>SELECTED DISCIPLINES</span>
              </div>
            </a>
            <div className="badge">3 年品牌设计经验</div>
            <Ticker />
          </div>

          <div className="quick-grid">
            <a href="#about" className="quick-card dark reveal-two">
              <span className="quick-no">01</span><h2>关于我</h2>
              <div><small>ABOUT ME</small><i><Arrow /></i></div>
            </a>
            <a href="#work" className="quick-card image-card work-card reveal-three">
              <span className="quick-no">02</span><h2>精选项目</h2>
              <div><small>5 PROJECTS</small><i><Arrow /></i></div>
            </a>
            <button
              className={`quick-card insight reveal-four ${aboutOpen ? "open" : ""}`}
              onClick={() => setAboutOpen((value) => !value)}
              aria-expanded={aboutOpen}
            >
              <span className="quick-no">03</span><h2>设计理念</h2>
              <p>好的设计应建立人与品牌之间的情感连接，通过视觉语言传递品牌价值，让用户在看到设计时，理解其背后的故事和理念。</p>
              <div><small>{aboutOpen ? "收起" : "展开阅读"}</small><i><Arrow direction={aboutOpen ? "down" : "right"} /></i></div>
            </button>
            <a href="#contact" className="quick-card image-card contact-card reveal-five">
              <span className="quick-no">04</span><h2>联系合作</h2>
              <div><small>AVAILABLE NOW</small><i><Arrow /></i></div>
            </a>
          </div>
        </div>
        <a href="#work" className="scroll-cue"><span />向下探索</a>
      </section>

      <section className="about-section" id="about">
        <div className="section-label"><span>01</span> ABOUT ME</div>
        <div className="about-copy">
          <p>设计是一种连接</p>
          <h2>让想法被看见，<br />让品牌被记住。</h2>
        </div>
        <div className="about-meta">
          <p>我是王振江，来自河北邯郸。专注品牌视觉与全案设计，擅长从策略概念出发，构建具有一致性与情绪感染力的视觉系统。</p>
          <ul><li>品牌视觉</li><li>包装设计</li><li>字体 LOGO</li><li>IP 全案</li></ul>
        </div>
      </section>

      <section className="work-section" id="work">
        <header className="work-header">
          <div className="section-label"><span>02</span> SELECTED WORK</div>
          <h2>把每一次设计，<br />做成品牌的记忆点。</h2>
          <p>精选 2026 作品</p>
        </header>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project" key={project.number}>
              <div className="project-image">
                <img src={project.image} alt={`${project.title} - ${project.category}`} loading={index > 1 ? "lazy" : "eager"} />
                <span>{project.number}</span>
              </div>
              <div className="project-info">
                <div><small>{project.category}</small><h3>{project.title}</h3><b>{project.en}</b></div>
                <p>{project.description}</p>
                <span className="project-arrow"><Arrow /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <div className="section-label"><span>03</span> CONTACT</div>
        <p>有新的想法或合作计划？</p>
        <h2>一起做点<br /><em>有记忆的设计。</em></h2>
        <a href="mailto:2898870015@qq.com">2898870015@qq.com <Arrow /></a>
        <footer><span>WANG ZHENJIANG</span><span>河北 · 邯郸</span><span>PORTFOLIO ©2026</span></footer>
      </section>
    </main>
  );
}
