import { createFileRoute } from "@tanstack/react-router";
import { Hero, ImageGrid, SectionHeading, TestimonialGrid, image } from "@/components/site";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [
    { title: "Portfolio — Eliteztudio 3D Animation & Motion Work" },
    { name: "description", content: "Selected 3D industrial, product, offshore and SaaS animation projects by Eliteztudio." },
    { property: "og:title", content: "Portfolio — Eliteztudio" },
    { property: "og:description", content: "Ideas in. Cinematic motion out. Explore selected Eliteztudio projects." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/work" }] }),
  component: Work,
});

function Work() {
  const gallery = ["IMG_6691-FZ6WqWIClahdNaBkDnsOjqKOFLZ2kV.jpeg","IMG_6686-yC7zSe2ZMBS58qGnceAsnWQqwqxZeV.jpeg","IMG_6682-BYnUcmBUwPLgb0ZRWbbayK84a5MxFc.jpeg","IMG_6687-ODqP22ycWYopOZMK1KENehpR4dXrRA.webp","IMG_6434-vEUPvnPWAqVUAhAnLFbfqeLiUsdP7W.jpeg","IMG_6689-hRbJMimbjbmlZFm84mxJtzY6P8gho9.jpeg","IMG_6511-WsM9Wqg4NSb0rV7YneT9y3Gk3oKEgv.webp","IMG_6520-oZwpbQOAVFzrZg2Jd8P4y9YzhcUn36.jpeg"] as const;
  const impacts = [
    {img:"5838939856766176998-3wjgRcCcsYryoPXZjZFf2JEy4XQ6VO.jpg" as const,title:"SaaS Explainer Video",body:"3D explainer that turned complex dashboard features into 60s of clarity. Cut support tickets and boosted trial-to-paid conversions."},
    {img:"IMG_6495-MSFqPvUA2Iqhl6q6bpe6MfPCGSCn9C.jpeg" as const,title:"3D Industrial Animation",body:"We turn images, photos, and CAD files into clear 3D animations with cutaways, x-ray and exploded views."},
    {img:"IMG_7186-FMZkWNCDecO3J7XQcUQMsoK2V0HeSE.jpeg" as const,title:"Brand Story Film for Tech",body:"Cinematic narrative that positioned a B2B brand as the category leader. Used for homepage, pitch decks, and trade shows."},
    {img:"IMG_7201-v2qMJbpEzRsCYUUvXSguYbbkfJSUl0.jpeg" as const,title:"Motion Graphics Design",body:"Bold, data-driven motion graphics design that explain features in ads, LinkedIn, and onboarding. Consistent brand, faster sales."},
    {img:"5838939856766176972-pTK9o2BG1NnZ0OtAzaSPgs1b0bXYSR.jpg" as const,title:"Saas Demo video",body:"Turn your SaaS product into a clear visual experience with polished demo videos built to explain features, highlight value, and drive conversions."},
    {img:"IMG_7197-NSxLx6w00k7hbz3pQFME9H2nXltzpe.jpeg" as const,title:"Industrial Cutaway",body:"We rebuilt an outdated screen-recording into a 90s 3D demo. Sales team closed deals 40% faster with 1 link."},
  ];
  return <><Hero eyebrow="SELECTED WORK" title={<>Ideas in.<br/>Cinematic motion out.</>} body={"A curated selection of 3D industrial, product, offshore, and SaaS animation — crafted with precision, visual storytelling, and cinematic detail.\nEvery frame has a purpose. Every project tells a story."} imageUrl={image("IMG_7162-ozotM9VHFqQqzE63ZXLnn2VIHdppuL.jpeg")} primary={{label:"Browse projects",href:"/services"}} secondary={{label:"Start a project",href:"/contact"}}/>
  <section className="section"><SectionHeading eyebrow="PROJECT GALLERY" title="Nothing random. Everything intentional." body="A closer look at selected 3D industrial, product, offshore and SaaS animation — where every frame is crafted to communicate clearly, strengthen the message, and elevate the final experience."/><a href="/work" className="button button-primary gallery-action">Explore our projects</a><ImageGrid items={gallery.map(src=>({src:image(src),alt:"Eliteztudio selected project"}))}/></section>
  <section className="section section-contrast"><SectionHeading eyebrow="CLIENT IMPACT" title="Motion that moved the numbers."/><div className="impact-grid">{impacts.map(x=><article key={x.title}><img src={image(x.img)} alt="" loading="lazy"/><h3>{x.title}</h3><p>{x.body}</p></article>)}</div></section>
  <section className="section"><SectionHeading eyebrow="CLIENT FEEDBACK" title="Stories that land. Partnerships that last."/><TestimonialGrid items={[{quote:"The elevator animation Eliteztudio delivered was flawless. Clean mechanics, smooth camera moves, and it made our lift look premium. Our clients instantly understood the product. Highly recommend.",name:"Tommycurran",role:"CEO OF NORTH AMERICA ELEVATOR",image:image("IMG_6540-wX0ftBMAsBtCBaQtcf8XkUHhtdwLbU.jpeg")},{quote:"From the initial creative brief to the final master, the Eliteztudio team kept us informed with clear checkpoints throughout the process. Our SaaS launch video came out sharp, on-brand, and delivered right on schedule.",name:"Jonathan kopnick",role:"CO-FOUNDER, SAAS PLATFORM",image:image("download-kTD8auWfxjzKM0vatPBs08HXMOXkVW.jpg")},{quote:"Eliteztudio took our Pacific Grow products and made them actually make sense on video. What used to take us 20 minutes to explain, now takes 60 seconds. The animation is clean, the process was easy, and it’s selling for us non-stop. If you’re in agri, you need these guys.",name:"Guy Jakobi",role:"CO-FOUNDER OF PACIFIC GROW",image:image("IMG_6541-bKAubWZuroLuP65lijaKdQUytm9Y29.jpeg")}]}/></section></>;
}