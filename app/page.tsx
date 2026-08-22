import ScrollEffects from "./ScrollEffects";

const projects = [
  { slug: "cdn", number: "01", title: "西顿照明", en: "CDN LIGHTING", category: "品牌视觉设计", cover: "/projects/cdn/01.webp", summary: "定义光的价值，成就空间的未来。" },
  { slug: "guihe", number: "02", title: "归和", en: "GUIHE", category: "品牌全案设计", cover: "/projects/guihe/01.webp", summary: "顺时而养，自然而生。" },
  { slug: "type", number: "03", title: "字成一面", en: "TYPE & LOGO", category: "字体 / 标志设计", cover: "/projects/type/01.webp", summary: "让字形成为品牌最直接的性格。" },
  { slug: "poster", number: "04", title: "视觉表达", en: "POSTER DESIGN", category: "海报设计", cover: "/projects/poster/01.webp", summary: "在信息之外，建立画面的情绪张力。" },
  { slug: "xiaoxiao", number: "05", title: "骁骁", en: "XIAOXIAO IP", category: "IP 全案设计", cover: "/projects/xiaoxiao/01.webp", summary: "健康自律的养成日记。" },
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <ScrollEffects />
      <section className="home-hero stack-panel" id="top">
        <div className="hero-media" aria-hidden="true" />
        <header className="site-nav">
          <a className="wordmark" href="#top" aria-label="返回首页">
            <strong>WZJ</strong><span>王振江<br />BRAND DESIGNER</span>
          </a>
          <nav aria-label="主要导航">
            <a href="#work">作品</a><a href="#motion">动态</a><a href="#about">关于</a>
          </nav>
          <a className="nav-contact" href="mailto:2898870015@qq.com">联系我 <Arrow /></a>
        </header>

        <div className="hero-layout">
          <a className="hero-feature" href="#work" aria-label="浏览精选项目">
            <div className="hero-rings" aria-hidden="true" />
            <div className="hero-feature-copy">
              <small>SELECTED PORTFOLIO</small>
              <strong className="hero-focus"><span>AI VISUAL</span><i>×</i><span>BRAND DESIGN</span></strong>
              <p>视觉 · 品牌 · 动态</p>
            </div>
            <span className="hero-action">查看全部作品 <Arrow /></span>
          </a>

          <div className="hero-menu">
            <a className="menu-card menu-about" href="#about">
              <small>01 / PROFILE</small><h1>关于王振江</h1><span>品牌设计师 · 河北邯郸</span><Arrow />
            </a>
            <a className="menu-card menu-philosophy" href="#philosophy">
              <small>02 / APPROACH</small><h2>设计理念</h2><span>连接品牌与人</span><Arrow />
            </a>
            <a className="menu-card menu-work" href="#work">
              <small>03 / PROJECTS</small><h2>精选项目</h2><span>5 个完整案例</span><Arrow />
            </a>
            <a className="menu-card menu-motion" href="#motion">
              <small>04 / MOTION LAB</small><h2>动态作品</h2><span>预留视频展映空间</span><Arrow />
            </a>
          </div>
        </div>
        <div className="hero-foot"><span>PORTFOLIO © 2026</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro stack-panel" id="about">
        <span className="about-watermark" aria-hidden="true">ABOUT / 01</span>
        <header className="about-head">
          <div className="eyebrow"><b>01</b> ABOUT</div>
          <span className="about-status"><i /> OPEN TO WORK · 随时到岗</span>
        </header>

        <div className="about-core">
          <figure className="about-portrait">
            <img src="/assets/about.webp" alt="王振江个人形象" loading="lazy" />
            <figcaption><span>WZJ</span><small>AI VISUAL / BRAND DESIGN</small></figcaption>
          </figure>

          <div className="intro-title">
            <small>VISUAL × AI × BRAND</small>
            <h2>让想法被看见，<br />让品牌被记住。</h2>
            <div className="about-roles"><span>AI 视觉设计师</span><span>品牌视觉设计师</span></div>
          </div>

          <div className="intro-copy">
            <p>我是王振江，拥有 2 年 10 个月品牌与 AI 视觉设计经验。擅长从品牌定位出发，搭建统一的视觉体系，并将 ComfyUI、Stable Diffusion、Seedance / Seedream 融入创意探索与商业视觉输出。</p>
            <div className="about-facts">
              <span><small>EXPERIENCE</small><strong>02Y 10M</strong></span>
              <span><small>FOCUS</small><strong>AI × BRAND</strong></span>
              <span><small>LOCATION</small><strong>河北 · 邯郸</strong></span>
            </div>
          </div>
        </div>

        <div className="about-foot">
          <article><small>WORK EXPERIENCE</small><strong>北京舍贝智能科技有限公司</strong><p>AI 品牌视觉设计师 · 2023.07—2026.05</p></article>
          <article><small>EDUCATION</small><strong>河北工业职业技术学院</strong><p>机械设计与制造（3D 打印）· 2020—2023</p></article>
          <article><small>TOOLKIT</small><div><span>ComfyUI / SD</span><span>PS / AI</span><span>AE / PR</span><span>GPT</span></div></article>
          <aside className="about-qr">
            <span className="about-qr-code" role="img" aria-label="王振江微信二维码" />
            <div><small>WECHAT</small><strong>扫码联系我</strong></div>
          </aside>
        </div>
      </section>

      <section className="philosophy stack-panel" id="philosophy">
        <div className="eyebrow"><b>02</b> DESIGN APPROACH</div>
        <blockquote>“好的设计应建立人与品牌之间的情感连接，让用户在看到设计时，理解其背后的故事和理念。”</blockquote>
        <div className="philosophy-steps"><span><b>01</b>洞察</span><span><b>02</b>策略</span><span><b>03</b>视觉</span><span><b>04</b>体验</span></div>
      </section>

      <section className="selected stack-panel" id="work">
        <header className="selected-head">
          <div className="eyebrow"><b>03</b> SELECTED WORK</div>
          <h2>从视觉识别到<br />完整品牌体验。</h2>
          <p>点击项目进入详情页</p>
        </header>
        <div className="project-index">
          {projects.map((project, index) => (
            <a className="project-row" href={`/work/${project.slug}`} key={project.slug}>
              <div className="project-thumb"><img src={project.cover} alt="" loading={index > 1 ? "lazy" : "eager"} /></div>
              <span className="project-number">{project.number}</span>
              <div className="project-name"><small>{project.category}</small><h3>{project.title}</h3><span>{project.en}</span></div>
              <p>{project.summary}</p>
              <div className="project-open">查看案例 <Arrow /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="motion-preview stack-panel" id="motion">
        <header className="motion-screen-head">
          <div className="eyebrow"><b>04</b> MOTION LAB</div>
          <h2>AIGC 短片<br /><em>三部展映。</em></h2>
          <p>从轻喜剧、情感叙事到暗黑幻想，三部完整短片与生成工作流集中展映。</p>
        </header>
        <div className="motion-screen-stage">
          <a className="motion-main-slot" href="/motion#bee" aria-label="查看小蜜蜂短片">
            <img className="motion-slot-poster" src="/motion/bee-poster.jpg" alt="" />
            <div className="motion-main-play">▶</div>
            <span>FEATURED / AIGC SILENT COMEDY</span>
            <strong>《小蜜蜂》</strong>
            <small>完整影片 04:15</small>
          </a>
          <div className="motion-side-slots">
            <a href="/motion#grandpa"><img className="motion-slot-poster" src="/motion/grandpa-poster.jpg" alt="" /><span>02</span><div><small>EMOTIONAL STORY</small><strong>《爷爷的愿望》</strong></div><Arrow /></a>
            <a href="/motion#shuhua"><img className="motion-slot-poster" src="/motion/shuhua-poster.jpg" alt="" /><span>03</span><div><small>DARK FANTASY</small><strong>《我叫舒画》</strong></div><Arrow /></a>
          </div>
        </div>
        <a className="motion-all" href="/motion">查看完整影片与创作过程 <Arrow /></a>
      </section>

      <section className="home-contact stack-panel" id="contact">
        <small>AVAILABLE FOR NEW PROJECTS</small>
        <h2>有想法，<br /><em>一起把它做出来。</em></h2>
        <a href="mailto:2898870015@qq.com">2898870015@qq.com <Arrow /></a>
        <footer><span>王振江 / BRAND DESIGNER</span><span>河北 · 邯郸</span><span>© 2026</span></footer>
      </section>
    </main>
  );
}
