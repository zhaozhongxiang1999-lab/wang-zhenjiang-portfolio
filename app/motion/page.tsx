const films = [
  {
    id: "bee",
    no: "01",
    eyebrow: "AIGC ANIMATION / SILENT COMEDY",
    title: "小蜜蜂",
    subtitle: "《默剧》· 无对白动画短片",
    duration: "完整影片 04:15",
    preview: "/motion/bee-full.mp4",
    poster: "/motion/bee-poster.jpg",
    captions: "/motion/bee-captions.vtt",
    workflow: "/motion/bee-workflow.jpg",
    process: "/motion/bee-editing.jpg",
    summary: "一只贪吃的熊与守护蜂蜜的蜜蜂展开无对白追逐。用体型、速度与表演反差建立喜剧节奏，并以结尾反转完成叙事闭环。",
    role: "故事与分镜、角色与场景资产、关键帧控制、AIGC 生成、后期剪辑",
    tags: ["无对白叙事", "角色一致性", "喜剧节奏", "剪辑合成"],
  },
  {
    id: "grandpa",
    no: "02",
    eyebrow: "AIGC FILM / EMOTIONAL STORY",
    title: "爷爷的愿望",
    subtitle: "情感叙事短片",
    duration: "完整影片 03:01",
    preview: "/motion/grandpa-full.mp4",
    poster: "/motion/grandpa-poster.jpg",
    captions: "/motion/grandpa-captions.vtt",
    workflow: "/motion/grandpa-workflow.jpg",
    process: null,
    summary: "以祖孙关系和“愿望”为线索，通过暖色乡村记忆与成长后的疏离形成对照，在生活化片段中推进情绪，完成克制的亲情表达。",
    role: "脚本梳理、镜头设计、角色资产、场景一致性、AIGC 生成、声音与后期节奏",
    tags: ["情绪叙事", "光色对照", "镜头节奏", "声音设计"],
  },
  {
    id: "shuhua",
    no: "03",
    eyebrow: "AIGC FILM / DARK FANTASY",
    title: "我叫舒画",
    subtitle: "《十日终焉》角色短篇",
    duration: "完整影片 01:17",
    preview: "/motion/shuhua-full.mp4",
    poster: "/motion/shuhua-poster.jpg",
    captions: "/motion/shuhua-captions.vtt",
    workflow: "/motion/shuhua-workflow.jpg",
    process: null,
    summary: "取材于《十日终焉》的角色片段，以写实暗调、动物面具与宴席空间建立压迫感，通过冷暖转换与近景切换强化人物进入陌生世界的紧张感。",
    role: "文本改编、角色设定、场景搭建、关键帧控制、AIGC 生成、后期剪辑",
    tags: ["写实暗调", "角色系统", "氛围营造", "后期剪辑"],
  },
];

export default function MotionPage() {
  return (
    <main className="motion-page" id="motion-top">
      <header className="detail-nav">
        <a href="/" className="wordmark"><strong>WZJ</strong><span>王振江<br />AI VISUAL DESIGNER</span></a>
        <a href="/">← 返回首页</a>
      </header>

      <section className="motion-head">
        <small>MOTION LAB / 2026</small>
        <h1>AIGC 短片<br /><em>叙事与剪辑</em></h1>
        <p>从轻喜剧、亲情叙事到暗黑幻想，三部短片均以完整版本呈现。每个项目同时保留生成工作流，让成片之外的创作方法也被看见。</p>
      </section>

      <nav className="film-index" aria-label="短片目录">
        {films.map((film) => <a key={film.id} href={`#${film.id}`}><b>{film.no}</b><span>{film.title}</span><small>{film.eyebrow}</small></a>)}
      </nav>

      <section className="film-list">
        {films.map((film) => (
          <article className="film-case" id={film.id} key={film.id}>
            <header className="film-case-head">
              <div><small>{film.no} / {film.eyebrow}</small><h2>《{film.title}》</h2><p>{film.subtitle}</p></div>
              <span>{film.duration}</span>
            </header>

            <figure className="film-player">
              <video controls playsInline preload="metadata" poster={film.poster}>
                <source src={film.preview} type="video/mp4" />
                <track kind="captions" src={film.captions} srcLang="zh" label="中文字幕" />
                你的浏览器暂不支持视频播放。
              </video>
              <figcaption><span>FULL FILM</span><small>点击播放完整影片 · 建议开启声音</small></figcaption>
            </figure>

            <div className="film-story">
              <div><small>STORY / 故事</small><p>{film.summary}</p></div>
              <div><small>ROLE / 负责内容</small><p>{film.role}</p><ul>{film.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
            </div>

            <div className={`film-process ${film.process ? "has-editing" : ""}`}>
              <figure><img src={film.workflow} alt={`${film.title} AIGC 生成工作流`} loading="lazy" /><figcaption><b>01</b><span>生成工作流</span><small>角色、场景、关键帧与视频节点</small></figcaption></figure>
              {film.process ? <figure><img src={film.process} alt={`${film.title} 剪辑工程时间线`} loading="lazy" /><figcaption><b>02</b><span>剪辑流程</span><small>镜头筛选、声音与节奏控制</small></figcaption></figure> : null}
            </div>

          </article>
        ))}
      </section>

      <section className="motion-note"><span>展示方式</span><p>三部短片均提供网页优化后的完整版本，在保留完整叙事的同时控制加载体积。后续新增动态作品时，也可以继续按“完整影片 + 创作过程”的结构扩展。</p></section>
      <nav className="motion-bottom-nav" aria-label="动态作品页面导航">
        <a href="/">退出动态页 · 返回首页</a>
        <a href="/#work">返回作品目录</a>
        <a href="#motion-top">回到顶部 ↑</a>
      </nav>
      <a className="next-project motion-back" href="/#work"><small>BACK TO PROJECTS</small><span>继续浏览</span><h2>平面作品</h2><b>→</b></a>
    </main>
  );
}
