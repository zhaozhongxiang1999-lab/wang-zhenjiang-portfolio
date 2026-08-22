import type { Project } from "./project-data";
import { projects } from "./project-data";

export default function ProjectDetail({ project }: { project: Project }) {
  const galleryItems = project.images.slice(1).map((image, index) => ({ image, index: index + 1 }));
  const galleryRows: typeof galleryItems[] = [];
  for (let cursor = 0; cursor < galleryItems.length;) {
    const item = galleryItems[cursor];
    const isFullWidth = project.fullWidthFrom !== undefined && item.index >= project.fullWidthFrom;
    const rowSize = isFullWidth ? 1 : 2;
    galleryRows.push(galleryItems.slice(cursor, cursor + rowSize));
    cursor += rowSize;
  }

  return (
    <main className="detail-page" id="project-top">
      <header className="detail-nav project-detail-nav">
        <a href="/" className="wordmark"><strong>WZJ</strong><span>王振江<br />BRAND DESIGNER</span></a>
        <div className="project-nav-title"><span>{project.number}</span><strong>{project.title}</strong><small>{project.category}</small></div>
        <a href="/#work">← 返回全部项目</a>
      </header>

      <nav className="static-project-index" aria-label="静态作品目录">
        {projects.map((item) => (
          <a className={item.slug === project.slug ? "is-active" : ""} href={`/work/${item.slug}`} key={item.slug} aria-current={item.slug === project.slug ? "page" : undefined}>
            <b>{item.number}</b><span>{item.title}</span><small>{item.category}</small>
          </a>
        ))}
      </nav>

      <section className="detail-gallery" aria-label={`${project.title}完整作品展示`}>
        <div className={`detail-rows${project.fullWidthFrom !== undefined ? " complete-detail-rows" : ""}`}>
          {galleryRows.map((row, rowIndex) => (
            <div className={`detail-row${row.length === 1 ? " detail-row-single" : ""}`} key={rowIndex}>
              {row.map(({ image, index: imageIndex }) => {
                const aspect = project.imageAspects[imageIndex] ?? 16 / 9;
                return (
                <figure key={image} style={{ flexGrow: aspect, aspectRatio: String(aspect) }}>
                  <img src={image} alt={`${project.title}项目展示`} loading={rowIndex === 0 ? "eager" : "lazy"} fetchPriority={rowIndex === 0 ? "high" : "auto"} />
                </figure>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <nav className="project-bottom-nav" aria-label="静态作品页面导航">
        <a href="/">退出项目页 · 返回首页</a>
        <a href="/#work">返回作品目录</a>
        <a href="#project-top">回到顶部 ↑</a>
      </nav>
      <footer className="detail-footer"><span>WANG ZHENJIANG</span><a href="mailto:2898870015@qq.com">2898870015@qq.com</a><span>© 2026</span></footer>
    </main>
  );
}
