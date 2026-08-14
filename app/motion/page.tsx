const slots = [
  { no: "01", type: "BRAND MOTION", title: "品牌动态演绎" },
  { no: "02", type: "3D / PRODUCT", title: "三维与产品展示" },
  { no: "03", type: "PROCESS FILM", title: "设计过程与案例影片" },
];

export default function MotionPage() {
  return (
    <main className="motion-page">
      <header className="detail-nav"><a href="/" className="wordmark"><strong>WZJ</strong><span>王振江<br />BRAND DESIGNER</span></a><a href="/">← 返回首页</a></header>
      <section className="motion-head"><small>MOTION LAB / 2026</small><h1>动态作品<br /><em>展映空间</em></h1><p>为后续品牌动画、三维作品和项目影片预留的独立页面。新作品可直接替换下方视频位，不影响现有版式。</p></section>
      <section className="motion-slots">
        {slots.map((slot) => (
          <article className="motion-slot" key={slot.no}>
            <div className="motion-frame"><span>▶</span><small>16 : 9 VIDEO SLOT</small></div>
            <div><small>{slot.no} / {slot.type}</small><h2>{slot.title}</h2><p>COMING SOON</p></div>
          </article>
        ))}
      </section>
      <section className="motion-note"><span>动态内容更新说明</span><p>支持 MP4 / WebM 视频、封面图、项目名称和说明文字。后续你把动态作品发给我，我可以直接放入这些位置并重新发布。</p></section>
      <a className="next-project motion-back" href="/#work"><small>BACK TO PROJECTS</small><span>继续浏览</span><h2>平面作品</h2><b>→</b></a>
    </main>
  );
}
