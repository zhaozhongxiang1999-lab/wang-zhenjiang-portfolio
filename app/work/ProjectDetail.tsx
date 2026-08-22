import type { Project } from "./project-data";
import { projects } from "./project-data";

export default function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
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
    <main className="detail-page">
      <header className="detail-nav">
        <a href="/" className="wordmark"><strong>WZJ</strong><span>王振江<br />BRAND DESIGNER</span></a>
        <a href="/#work">← 返回全部项目</a>
      </header>
      <section className="detail-hero">
        <img src={project.images[0]} alt={`${project.title}项目主视觉`} />
        <div className="detail-shade" />
        <div className="detail-title"><small>{project.category} / {project.year}</small><h1>{project.title}</h1><p>{project.en}</p></div>
        <span className="detail-number">{project.number}</span>
        <div className="detail-hero-stats">
          <span><small>OUTPUT</small>{project.images.length} VISUALS</span>
          <span><small>SCOPE</small>{project.services.length} FIELDS</span>
          <span><small>EXPLORE</small>SCROLL ↓</span>
        </div>
      </section>

      <section className="detail-intro">
        <div><small>PROJECT OVERVIEW</small><h2>{project.summary}</h2></div>
        <p>{project.intro}</p>
        <ul>{project.services.map((service) => <li key={service}>{service}</li>)}</ul>
      </section>

      <section className="detail-gallery" aria-label={`${project.title}完整作品展示`}>
        <div className={`detail-rows${project.fullWidthFrom !== undefined ? " complete-detail-rows" : ""}`}>
          {galleryRows.map((row, rowIndex) => (
            <div className={`detail-row${row.length === 1 ? " detail-row-single" : ""}`} key={rowIndex}>
              {row.map(({ image, index: imageIndex }) => {
                const aspect = project.imageAspects[imageIndex] ?? 16 / 9;
                return (
                <figure key={image} style={{ flexGrow: aspect, aspectRatio: String(aspect) }}>
                  <img src={image} alt={`${project.title}项目展示`} loading="lazy" />
                </figure>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <a className="next-project" href={`/work/${next.slug}`}>
        <small>NEXT PROJECT / {next.number}</small><span>下一个项目</span><h2>{next.title}</h2><b>→</b>
      </a>
      <footer className="detail-footer"><span>WANG ZHENJIANG</span><a href="mailto:2898870015@qq.com">2898870015@qq.com</a><span>© 2026</span></footer>
    </main>
  );
}
