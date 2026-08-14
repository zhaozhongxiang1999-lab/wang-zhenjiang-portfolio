import type { Project } from "./project-data";
import { projects } from "./project-data";

export default function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const galleryImages = project.images.slice(2);
  const galleryRows = Array.from({ length: Math.ceil(galleryImages.length / 2) }, (_, rowIndex) =>
    galleryImages.slice(rowIndex * 2, rowIndex * 2 + 2),
  );

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

      <section className="detail-gallery">
        <header className="detail-gallery-head"><small>SELECTED VISUALS</small><span>{project.images.length - 1} PROJECT FRAMES</span></header>
        {project.images[1] && (
          <figure className="gallery-feature">
            <img src={project.images[1]} alt={`${project.title}项目展示 2`} loading="lazy" />
          </figure>
        )}
        <div className="detail-rows">
          {galleryRows.map((row, rowIndex) => (
            <div className={`detail-row${row.length === 1 ? " detail-row-single" : ""}`} key={rowIndex}>
              {row.map((image, imageIndex) => {
                const aspect = project.imageAspects[rowIndex * 2 + imageIndex + 2] ?? 16 / 9;
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
