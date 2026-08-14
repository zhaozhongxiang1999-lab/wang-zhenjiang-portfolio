import type { Project } from "./project-data";
import { projects } from "./project-data";

export default function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const galleryImages = project.images.slice(2);
  const galleryColumns = [
    galleryImages.filter((_, imageIndex) => imageIndex % 2 === 0),
    galleryImages.filter((_, imageIndex) => imageIndex % 2 === 1),
  ];

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
        <div className="detail-columns">
          {galleryColumns.map((column, columnIndex) => (
            <div className="detail-column" key={columnIndex}>
              {column.map((image) => (
                <figure key={image}>
                  <img src={image} alt={`${project.title}项目展示`} loading="lazy" />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>

      {!(["cdn", "type", "poster", "xiaoxiao"].includes(project.slug)) && (
        <section className="project-motion-slot">
          <div className="motion-play"><span>▶</span></div>
          <div><small>MOTION SLOT / 16:9</small><h2>动态演绎预留位</h2><p>后续可在这里加入品牌动画、三维转场、过程视频或完整项目影片。</p></div>
          <a href="/#motion">查看首页动态作品区 ↗</a>
        </section>
      )}

      <a className="next-project" href={`/work/${next.slug}`}>
        <small>NEXT PROJECT / {next.number}</small><span>下一个项目</span><h2>{next.title}</h2><b>→</b>
      </a>
      <footer className="detail-footer"><span>WANG ZHENJIANG</span><a href="mailto:2898870015@qq.com">2898870015@qq.com</a><span>© 2026</span></footer>
    </main>
  );
}
