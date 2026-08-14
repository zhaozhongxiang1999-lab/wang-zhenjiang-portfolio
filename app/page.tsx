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
      <section className="home-hero" id="top">
        <div className="hero-media" aria-hidden="true" />
        <header className="site-nav">
          <a className="wordmark" href="#top" aria-label="返回首页">
            <strong>WZJ</strong><span>王振江<br />BRAND DESIGNER</span>
          </a>
          <nav aria-label="主要导航">
            <a href="#work">作品</a><a href="/motion">动态</a><a href="#about">关于</a>
          </nav>
          <a className="nav-contact" href="mailto:2898870015@qq.com">联系我 <Arrow /></a>
        </header>

        <div className="hero-layout">
          <a className="hero-feature" href="#work" aria-label="浏览五个精选项目">
            <div className="hero-rings" aria-hidden="true" />
            <div className="hero-feature-copy">
              <small>SELECTED PORTFOLIO</small>
              <strong>05</strong>
              <p>五类设计实践</p>
            </div>
            <span className="hero-action">查看全部作品 <Arrow /></span>
          </a>

          <div className="hero-menu">
            <a className="menu-card menu-about" href="#about">
              <small>01 / PROFILE</small><h1>关于王振江</h1><span>品牌设计师 · 河北邯郸</span><Arrow />
            </a>
            <a className="menu-card menu-work" href="#work">
              <small>02 / PROJECTS</small><h2>精选项目</h2><span>5 个完整案例</span><Arrow />
            </a>
            <a className="menu-card menu-philosophy" href="#philosophy">
              <small>03 / APPROACH</small><h2>设计理念</h2><span>连接品牌与人</span><Arrow />
            </a>
            <a className="menu-card menu-motion" href="/motion">
              <small>04 / MOTION LAB</small><h2>动态作品</h2><span>预留视频展映空间</span><Arrow />
            </a>
          </div>
        </div>
        <div className="hero-foot"><span>PORTFOLIO © 2026</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro" id="about">
        <div className="eyebrow"><b>01</b> ABOUT</div>
        <div className="intro-title"><small>设计，是建立连接。</small><h2>让想法被看见，<br />让品牌被记住。</h2></div>
        <div className="intro-copy">
          <p>我是王振江，拥有 3 年品牌设计经验，专注品牌视觉、全案设计、字体标志与 IP 塑造。擅长从品牌定位出发，建立清晰、一致且具有情绪感染力的视觉系统。</p>
          <div><span>品牌视觉</span><span>品牌全案</span><span>字体 LOGO</span><span>IP 设计</span></div>
        </div>
      </section>

      <section className="selected" id="work">
        <header className="selected-head">
          <div className="eyebrow"><b>02</b> SELECTED WORK</div>
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

      <section className="philosophy" id="philosophy">
        <div className="eyebrow"><b>03</b> DESIGN APPROACH</div>
        <blockquote>“好的设计应建立人与品牌之间的情感连接，让用户在看到设计时，理解其背后的故事和理念。”</blockquote>
        <div className="philosophy-steps"><span><b>01</b>洞察</span><span><b>02</b>策略</span><span><b>03</b>视觉</span><span><b>04</b>体验</span></div>
      </section>

      <section className="motion-preview">
        <div className="motion-preview-image" />
        <div className="motion-preview-copy">
          <div className="eyebrow"><b>04</b> MOTION LAB</div>
          <h2>让作品<br />动起来。</h2>
          <p>为品牌动态、视频包装、三维演绎和过程展示预留的独立展映空间，可持续加入后续动态作品。</p>
          <a href="/motion">进入动态作品区 <Arrow /></a>
        </div>
      </section>

      <section className="home-contact" id="contact">
        <small>AVAILABLE FOR NEW PROJECTS</small>
        <h2>有想法，<br /><em>一起把它做出来。</em></h2>
        <a href="mailto:2898870015@qq.com">2898870015@qq.com <Arrow /></a>
        <footer><span>王振江 / BRAND DESIGNER</span><span>河北 · 邯郸</span><span>© 2026</span></footer>
      </section>
    </main>
  );
}
