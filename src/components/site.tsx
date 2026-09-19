import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Menu, Plus } from "lucide-react";
import { media } from "@/assets/media";

export const image = (name: keyof typeof media) => media[name];

export const navItems = [
  { to: "/" as const, label: "Home" },
  { to: "/work" as const, label: "Work" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="Eliteztudio home">
        <span>Elitez</span><b>tudio</b>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }}>{item.label}</Link>)}
      </nav>
      <Link to="/work" className="button button-primary header-cta">Our portfolio</Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation menu"><Menu size={21} /></summary>
        <nav>{navItems.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</nav>
      </details>
    </header>
  );
}

export function Hero({ eyebrow, title, body, imageUrl, align = "center", primary, secondary }: {
  eyebrow: string; title: React.ReactNode; body: string; imageUrl: string; align?: "center" | "left";
  primary: { label: string; href: string }; secondary: { label: string; href: string };
}) {
  const internal = (href: string) => href.startsWith("/");
  return (
    <section className={`hero hero-${align}`}>
      <img className="hero-image" src={imageUrl} alt="" />
      <div className="hero-shade" />
      <div className="hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-copy">{body}</p>
        <div className="button-row">
          {internal(primary.href) ? <Link to={primary.href as "/work" | "/services" | "/contact"} className="button button-primary">{primary.label}</Link> : <a href={primary.href} className="button button-primary">{primary.label}</a>}
          {internal(secondary.href) ? <Link to={secondary.href as "/work" | "/services" | "/contact"} className="button button-secondary">{secondary.label}</Link> : <a href={secondary.href} className="button button-secondary">{secondary.label}</a>}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, body, center = false }: { eyebrow?: string; title: React.ReactNode; body?: string; center?: boolean }) {
  return <div className={`section-heading ${center ? "center" : ""}`}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

export function ImageGrid({ items }: { items: { src: string; alt: string }[] }) {
  return <div className="image-grid">{items.map((item, i) => <figure key={item.src} className={`gallery-${i % 4}`}><img src={item.src} alt={item.alt} loading="lazy" /></figure>)}</div>;
}

export function VideoGrid({ items }: { items: { id: string; title: string; body: string }[] }) {
  return <div className="video-grid">{items.map((item) => <article className="video-item" key={item.id}><div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${item.id}?controls=1&rel=0&modestbranding=1&iv_load_policy=3`} title={item.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>;
}

export function TestimonialGrid({ items }: { items: { quote: string; name: string; role: string; image?: string }[] }) {
  return <div className="testimonial-grid">{items.map((item) => <article className="testimonial" key={item.name}><p className="quote">“{item.quote}”</p><div className="person">{item.image && <img src={item.image} alt={item.name} loading="lazy" />}<div><strong>{item.name}</strong><span>{item.role}</span></div></div></article>)}</div>;
}

export function FAQ({ title, intro, items, contactHref, contactLabel }: { title: string; intro: string; items: { q: string; a: string }[]; contactHref: string; contactLabel: string }) {
  return <section className="section faq-section"><div className="faq-intro"><p className="eyebrow">FAQ</p><h2>{title}</h2><p>{intro}</p><a className="text-link" href={contactHref}>{contactLabel} <ArrowRight size={16} /></a></div><div className="faq-list">{items.map((item, i) => <details key={item.q} open={i === 0}><summary><span>{String(i + 1).padStart(2, "0")}</span>{item.q}<Plus size={18} /></summary><p>{item.a}</p></details>)}</div></section>;
}

export function CTA({ imageUrl, title, body, primary, secondary }: { imageUrl: string; title: string; body: string; primary: { label: string; href: string }; secondary: { label: string; href: string } }) {
  return <section className="cta"><img src={imageUrl} alt="" loading="lazy" /><div className="cta-shade"/><div className="cta-inner"><h2>{title}</h2><p>{body}</p><div className="button-row"><a href={primary.href} className="button button-primary">{primary.label}</a><a href={secondary.href} className="button button-secondary">{secondary.label}</a></div></div></section>;
}

export function SiteFooter() {
  return <footer className="footer"><div><Link to="/" className="wordmark"><span>Elitez</span><b>tudio</b></Link><p>Cinematic 3D animation and motion design for products, industry, offshore, and SaaS.</p></div><div><h3>Menu</h3>{navItems.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div><div><h3>Ryan</h3><a href="mailto:Ryan@eliteztudio.com">Ryan@eliteztudio.com</a><a href="https://wa.me/14697688897">WhatsApp</a></div><div><h3>Umar</h3><a href="mailto:Umar@eliteztudio.com">Umar@eliteztudio.com</a><a href="https://wa.me/2349133106484">WhatsApp</a></div><div><h3>Studio</h3><a href="mailto:Alex@eliteztudio.com">Alex</a><a href="mailto:Paul@eliteztudio.com">Paul</a></div><p className="copyright">© 2026 Eliteztudio. All rights reserved.</p></footer>;
}

export function ServiceList({ items }: { items: { title: string; body: string }[] }) {
 return <div className="service-list">{items.map((item, i) => <article key={item.title}><span>{String(i + 1).padStart(2,"0")}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><ArrowRight /></article>)}</div>
}

export function ProcessGrid({ items }: { items: { title: string; body: string; image: string }[] }) {
 return <div className="process-grid">{items.map((item,i)=><article key={item.title}><div className="process-image"><img src={item.image} alt="" loading="lazy"/><span>{String(i+1).padStart(2,"0")}</span></div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
}

export function PricingGrid({ items }: { items: { title: string; cadence: string; body: string; features: string[]; popular?: boolean }[] }) {
 return <div className="pricing-grid">{items.map(item=><article key={item.title} className={item.popular?"popular":""}>{item.popular&&<span className="popular-label">Most popular</span>}<h3>{item.title}</h3><strong>Custom quote</strong><small>{item.cadence}</small><p>{item.body}</p><a className="button button-secondary" href="mailto:Ryan@eliteztudio.com">Request a quote</a><ul>{item.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul></article>)}</div>
}

export function CarouselControls(){return <div className="carousel-controls"><button aria-label="Previous"><ArrowLeft/></button><span className="active"/><span/><span/><button aria-label="Next"><ArrowRight/></button></div>}
