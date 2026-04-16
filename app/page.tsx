"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const ORANGE = "#C8671A";
const DARK = "#0f0f0f";
const CREAM = "#f5f0e8";
const MUTED = "#888";

const slides = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

function Slide0() {
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", minHeight:"100%", textAlign:"center", padding:"16px clamp(16px,5vw,80px)", boxSizing:"border-box", width:"100%" }}>
      <div style={{ fontSize:"clamp(11px,1.5vw,13px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:24, fontWeight:500 }}>Website Development Proposal</div>
      <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(36px,7vw,88px)", color:CREAM, fontWeight:700, lineHeight:1.05, marginBottom:24, maxWidth:800 }}>
        Symbioza<br/>
        <span style={{ color:ORANGE }}>Group</span>
      </h1>
      <div style={{ width:60, height:1, background:ORANGE, margin:"0 auto 28px" }} />
      <p style={{ fontSize:"clamp(14px,2vw,18px)", color:"rgba(245,240,232,0.55)", lineHeight:1.7, maxWidth:480, marginBottom:48 }}>
        A proposal for a high-end, interactive B2B website — built to feel premium, focused, and alive.
      </p>
      <div style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap", justifyContent:"center" }}>
        <div style={{ fontSize:"clamp(13px,1.8vw,15px)", color:"rgba(245,240,232,0.5)" }}>Prepared by</div>
        <div style={{ background:"rgba(200,103,26,0.12)", border:"1px solid rgba(200,103,26,0.3)", borderRadius:50, padding:"8px 20px", fontSize:"clamp(13px,1.8vw,15px)", color:ORANGE, fontWeight:600 }}>Joshua Ovbiagele · Elite Traffic Media</div>
      </div>
      <div style={{ position:"absolute", bottom:40, fontSize:12, color:"rgba(255,255,255,0.2)", letterSpacing:"2px", textTransform:"uppercase" }}>Tap or press → to begin</div>
    </div>
  );
}

function Slide1() {
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", minHeight:"100%", padding:"16px clamp(20px,5vw,80px)", maxWidth:900, margin:"0 auto", width:"100%", boxSizing:"border-box" }}>
      <div style={{ fontSize:"clamp(11px,1.3vw,12px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:20, fontWeight:500 }}>01 — Platform</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,5vw,56px)", color:CREAM, fontWeight:700, marginBottom:24, lineHeight:1.1, wordBreak:"break-word" }}>
        Next.js 14 +<br/>Framer Motion
      </h2>
      <p style={{ fontSize:"clamp(14px,1.8vw,17px)", color:"rgba(245,240,232,0.65)", lineHeight:1.8, marginBottom:24, maxWidth:"100%", wordBreak:"break-word", overflowWrap:"break-word" }}>
        Not Webflow. Not Framer (the platform). The radial node system you've designed is a custom geometric interaction — both tools will fight against it. Next.js gives you full ownership.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:10 }}>
        {[
          { label:"Next.js 14", sub:"Full control, zero limits" },
          { label:"Framer Motion", sub:"Spring animations & panels" },
          { label:"Sanity CMS", sub:"Edit content without code" },
          { label:"Vercel", sub:"Deploy in seconds" },
        ].map(item => (
          <div key={item.label} style={{ background:"rgba(245,240,232,0.04)", border:"1px solid rgba(245,240,232,0.08)", borderRadius:12, padding:"14px 16px", minWidth:0, overflow:"hidden" }}>
            <div style={{ fontFamily:"'Inter', sans-serif", fontWeight:600, fontSize:"clamp(13px,1.6vw,15px)", color:CREAM, marginBottom:6 }}>{item.label}</div>
            <div style={{ fontSize:"clamp(11px,1.3vw,13px)", color:MUTED }}>{item.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", minHeight:"100%", padding:"16px clamp(20px,5vw,80px)", maxWidth:900, margin:"0 auto", width:"100%", boxSizing:"border-box" }}>
      <div style={{ fontSize:"clamp(11px,1.3vw,12px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:20, fontWeight:500 }}>02 — Cost</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,5vw,56px)", color:CREAM, fontWeight:700, marginBottom:24, lineHeight:1.1, wordBreak:"break-word" }}>Two Options,<br/>One Recommendation</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,220px),1fr))", gap:14, marginBottom:20 }}>
        <div style={{ background:"rgba(200,103,26,0.08)", border:"2px solid rgba(200,103,26,0.4)", borderRadius:16, padding:"clamp(20px,3vw,32px)", position:"relative" }}>
          <div style={{ position:"absolute", top:-13, left:24, background:ORANGE, borderRadius:50, padding:"4px 14px", fontSize:11, fontWeight:700, color:"white", letterSpacing:"1px" }}>RECOMMENDED</div>
          <div style={{ fontSize:"clamp(11px,1.3vw,12px)", color:ORANGE, letterSpacing:"2px", textTransform:"uppercase", marginBottom:12, fontWeight:500 }}>Interactive Version</div>
          <div style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(36px,5vw,54px)", color:CREAM, fontWeight:700, marginBottom:8 }}>$1,500</div>
          <div style={{ fontSize:"clamp(13px,1.6vw,15px)", color:"rgba(245,240,232,0.55)", lineHeight:1.7 }}>Full radial node system with animated content panels. The experience that makes Symbioza Group unforgettable.</div>
        </div>
        <div style={{ background:"rgba(245,240,232,0.03)", border:"1px solid rgba(245,240,232,0.08)", borderRadius:16, padding:"clamp(20px,3vw,32px)" }}>
          <div style={{ fontSize:"clamp(11px,1.3vw,12px)", color:MUTED, letterSpacing:"2px", textTransform:"uppercase", marginBottom:12, fontWeight:500 }}>Simplified Version</div>
          <div style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(36px,5vw,54px)", color:CREAM, fontWeight:700, marginBottom:8 }}>$1,400</div>
          <div style={{ fontSize:"clamp(13px,1.6vw,15px)", color:"rgba(245,240,232,0.55)", lineHeight:1.7 }}>Clean vertical block layout with video hero and the same funnel feel. For $100 less, you get a strong site — but without the signature radial system.</div>
        </div>
      </div>
      <p style={{ fontSize:"clamp(12px,1.5vw,14px)", color:MUTED, fontStyle:"italic" }}>My recommendation: the $100 difference buys the feature that defines the brand.</p>
    </div>
  );
}

function Slide3() {
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", minHeight:"100%", padding:"16px clamp(20px,5vw,80px)", maxWidth:900, margin:"0 auto", width:"100%", boxSizing:"border-box" }}>
      <div style={{ fontSize:"clamp(11px,1.3vw,12px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:20, fontWeight:500 }}>03 — Timeline</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,5vw,56px)", color:CREAM, fontWeight:700, marginBottom:20, lineHeight:1.1, wordBreak:"break-word" }}>Realistic,<br/>Not Optimistic</h2>
      <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
        {[
          { day:"Day 1–2", title:"Hero + Radial Structure", sub:"First milestone delivered for your review" },
          { day:"Day 3–5", title:"Full Interactive Build", sub:"All nodes, panels, transitions, and CMS connected" },
          { day:"Day 6–7", title:"Polish + Launch Ready", sub:"Revisions, cross-browser testing, Vercel deployment" },
        ].map((item, i) => (
          <div key={item.day} style={{ display:"flex", gap:"clamp(12px,2.5vw,28px)", alignItems:"flex-start", paddingBottom: i < 2 ? 20 : 0 }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
              <div style={{ width:44, height:44, borderRadius:"50%", background:ORANGE, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:"white", flexShrink:0 }}>{i+1}</div>
              {i < 2 && <div style={{ width:1, height:28, background:"rgba(200,103,26,0.25)", marginTop:0 }} />}
            </div>
            <div style={{ paddingTop:10 }}>
              <div style={{ fontSize:"clamp(11px,1.3vw,12px)", color:ORANGE, letterSpacing:"2px", textTransform:"uppercase", marginBottom:4, fontWeight:500 }}>{item.day}</div>
              <div style={{ fontSize:"clamp(15px,2vw,20px)", color:CREAM, fontWeight:600, marginBottom:4 }}>{item.title}</div>
              <div style={{ fontSize:"clamp(13px,1.6vw,15px)", color:MUTED }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop:36, background:"rgba(200,103,26,0.08)", border:"1px solid rgba(200,103,26,0.2)", borderRadius:12, padding:"16px 20px" }}>
        <div style={{ fontSize:"clamp(13px,1.6vw,14px)", color:"rgba(245,240,232,0.6)" }}>
          Simplified version: <span style={{ color:CREAM, fontWeight:500 }}>1–5 days</span> · Interactive version: <span style={{ color:CREAM, fontWeight:500 }}>1–7 days</span> · Timeline starts from the day assets are received.
        </div>
      </div>
    </div>
  );
}

function Slide4() {
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", minHeight:"100%", padding:"16px clamp(20px,5vw,80px)", maxWidth:900, margin:"0 auto", width:"100%", boxSizing:"border-box" }}>
      <div style={{ fontSize:"clamp(11px,1.3vw,12px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:20, fontWeight:500 }}>04 — Portfolio</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,5vw,56px)", color:CREAM, fontWeight:700, marginBottom:24, lineHeight:1.1, wordBreak:"break-word" }}>Relevant Work</h2>
      <div style={{ display:"flex", flexDirection:"column", gap:12, width:"100%" }}>
        {[
          {
            name:"Graded Interiors",
            loc:"Plymouth, UK",
            desc:"Modern B2B website for a luxury interior design firm. Built in Next.js with precision layout, clean UX, and attention to brand consistency. Comparable scope and premium feel to what Symbioza needs.",
            tags:["Next.js 14","B2B","Premium Design"],
          },
          {
            name:"FastTrack Literacy™ — CHEETAH®",
            loc:"USA / Jamaica",
            desc:"High-content EdTech platform built for a US/Jamaica education company. Features animated stat counters, slide-over drawers, Formspree-wired forms, and a full interactive resource library — all in Next.js 14 with Tailwind. Proof of complex interactive UI kept clean and focused.",
            tags:["Next.js 14","Interactive UI","Animated Components","Forms"],
          },
        ].map(item => (
          <div key={item.name} style={{ background:"rgba(245,240,232,0.03)", border:"1px solid rgba(245,240,232,0.08)", borderRadius:14, padding:"clamp(16px,2.5vw,24px)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:8, marginBottom:10 }}>
              <div>
                <div style={{ fontSize:"clamp(15px,2vw,19px)", color:CREAM, fontWeight:600 }}>{item.name}</div>
                <div style={{ fontSize:"clamp(11px,1.3vw,13px)", color:MUTED, marginTop:2 }}>{item.loc}</div>
              </div>
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {item.tags.map(t => (
                  <span key={t} style={{ background:"rgba(200,103,26,0.12)", border:"1px solid rgba(200,103,26,0.2)", borderRadius:50, padding:"3px 12px", fontSize:"clamp(10px,1.2vw,12px)", color:ORANGE }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ fontSize:"clamp(13px,1.6vw,15px)", color:"rgba(245,240,232,0.55)", lineHeight:1.75 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide5() {
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", minHeight:"100%", padding:"16px clamp(20px,5vw,80px)", maxWidth:900, margin:"0 auto", width:"100%", boxSizing:"border-box" }}>
      <div style={{ fontSize:"clamp(11px,1.3vw,12px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:20, fontWeight:500 }}>05 — Live Demo</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,5vw,56px)", color:CREAM, fontWeight:700, marginBottom:20, lineHeight:1.1, wordBreak:"break-word" }}>I Built a<br/>Working Demo</h2>
      <div style={{ background:"rgba(200,103,26,0.06)", border:"1px solid rgba(200,103,26,0.25)", borderRadius:16, padding:"clamp(20px,3.5vw,36px)", marginBottom:24 }}>
        <div style={{ fontSize:"clamp(14px,1.8vw,19px)", color:CREAM, fontWeight:600, marginBottom:14, lineHeight:1.4 }}>
          See the radial node system working — right now
        </div>
        <p style={{ fontSize:"clamp(13px,1.6vw,16px)", color:"rgba(245,240,232,0.6)", lineHeight:1.8, marginBottom:0 }}>
          Rather than just describe the concept, I built a functional sketch so you can experience how the radial nodes open content panels, how the animations feel, and how the hero layout translates to a live site. This is built using your actual visual direction and your exact headline copy.
        </p>
      </div>
      <div style={{ background:"rgba(245,240,232,0.03)", border:"1px solid rgba(245,240,232,0.08)", borderRadius:12, padding:"clamp(14px,2.5vw,22px)", marginBottom:24 }}>
        <div style={{ fontSize:"clamp(11px,1.2vw,12px)", letterSpacing:"2px", textTransform:"uppercase", color:MUTED, marginBottom:8 }}>Important note</div>
        <p style={{ fontSize:"clamp(12px,1.5vw,14px)", color:"rgba(245,240,232,0.5)", lineHeight:1.75 }}>
          This is a directional prototype — not the finished product. It was built without your video asset, full mockup details, or copy. Once you share the complete assets and brief, the delivered site will match your visual direction precisely and be built to production standard.
        </p>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:14 }}>
        <div style={{ width:8, height:8, borderRadius:"50%", background:ORANGE, flexShrink:0 }} />
        <div style={{ fontSize:"clamp(12px,1.5vw,14px)", color:MUTED }}>Staggered entrance animation already implemented: <span style={{ color:CREAM }}>included at no extra cost</span></div>
      </div>
    </div>
  );
}

function Slide6() {
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", minHeight:"100%", textAlign:"center", padding:"16px clamp(16px,5vw,80px)", boxSizing:"border-box", width:"100%" }}>
      <div style={{ fontSize:"clamp(11px,1.5vw,13px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:24, fontWeight:500 }}>Let's Build</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(32px,6vw,72px)", color:CREAM, fontWeight:700, lineHeight:1.1, marginBottom:24, maxWidth:700 }}>
        Ready to Start<br/>the Moment<br/>Assets Arrive
      </h2>
      <div style={{ width:60, height:1, background:ORANGE, margin:"0 auto 28px" }} />
      <p style={{ fontSize:"clamp(14px,1.8vw,17px)", color:"rgba(245,240,232,0.55)", lineHeight:1.8, maxWidth:480, marginBottom:48 }}>
        I value clarity and execution over endless revisions — the same way you do. If this sounds like the right fit, I'm ready.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:10, width:"100%", maxWidth:600, marginBottom:28 }}>
        {[
          { label:"Platform", val:"Next.js 14" },
          { label:"Interactive", val:"$1,500 · 7 days" },
          { label:"Simplified", val:"$1,400 · 5 days" },
          { label:"CMS", val:"Sanity" },
        ].map(item => (
          <div key={item.label} style={{ background:"rgba(245,240,232,0.04)", border:"1px solid rgba(245,240,232,0.08)", borderRadius:12, padding:"16px 14px" }}>
            <div style={{ fontSize:"clamp(10px,1.2vw,11px)", color:MUTED, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:6 }}>{item.label}</div>
            <div style={{ fontSize:"clamp(13px,1.5vw,14px)", color:CREAM, fontWeight:600 }}>{item.val}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize:"clamp(13px,1.6vw,15px)", color:MUTED }}>
        Joshua Enaholo · <span style={{ color:ORANGE }}>Elite Traffic Media</span>
      </div>
    </div>
  );
}

const slideComponents = [Slide0, Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];
const slideLabels = ["Cover", "Platform", "Cost", "Timeline", "Portfolio", "Live Demo", "Let's Build"];

export default function ProposalDeck() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next"|"prev">("next");
  const touchStartX = useRef<number>(0);
  const total = slideComponents.length;

  const goTo = useCallback((index: number, dir: "next"|"prev") => {
    if (transitioning || index < 0 || index >= total) return;
    setDirection(dir);
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 280);
  }, [transitioning, total]);

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
  };

  const SlideComponent = slideComponents[current];

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ width:"100vw", height:"100svh", background:DARK, overflow:"hidden", position:"relative", fontFamily:"'Inter', sans-serif" }}
    >
      {/* Background grid */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(200,103,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,103,26,0.04) 1px, transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />

      {/* Orange accent corner */}
      <div style={{ position:"absolute", top:0, right:0, width:"clamp(120px,20vw,200px)", height:"clamp(120px,20vw,200px)", background:`radial-gradient(circle at top right, rgba(200,103,26,0.15), transparent 70%)`, pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:0, left:0, width:"clamp(80px,15vw,150px)", height:"clamp(80px,15vw,150px)", background:`radial-gradient(circle at bottom left, rgba(200,103,26,0.08), transparent 70%)`, pointerEvents:"none" }} />

      {/* Top bar */}
      <div style={{ position:"absolute", top:0, left:0, right:0, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"clamp(16px,2.5vw,24px) clamp(20px,4vw,40px)", zIndex:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:8, height:8, borderRadius:"50%", background:ORANGE }} />
          <span style={{ fontSize:"clamp(11px,1.3vw,13px)", color:"rgba(245,240,232,0.35)", letterSpacing:"2px", textTransform:"uppercase", fontWeight:500 }}>Symbioza Group</span>
        </div>
        <div style={{ fontSize:"clamp(11px,1.3vw,12px)", color:"rgba(245,240,232,0.25)", letterSpacing:"1px" }}>
          {String(current + 1).padStart(2,"0")} / {String(total).padStart(2,"0")}
        </div>
      </div>

      {/* Slide content */}
      <div
        onClick={next}
        style={{
          position:"absolute", inset:0,
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? `translateX(${direction === "next" ? "24px" : "-24px"})` : "translateX(0)",
          transition: "opacity 0.28s ease, transform 0.28s ease",
          paddingTop:"clamp(60px,8vh,80px)",
          paddingBottom:"clamp(70px,10vh,90px)",
          cursor: current < total - 1 ? "pointer" : "default",
          overflowY:"auto",
          overflowX:"hidden",
          WebkitOverflowScrolling:"touch",
        }}
      >
        <SlideComponent />
      </div>

      {/* Bottom controls */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"clamp(14px,2vw,20px) clamp(20px,4vw,40px)", zIndex:10 }}>
        {/* Dots */}
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          {slides.map(s => (
            <button
              key={s.id}
              onClick={(e) => { e.stopPropagation(); goTo(s.id, s.id > current ? "next" : "prev"); }}
              title={slideLabels[s.id]}
              style={{
                width: s.id === current ? 24 : 6,
                height:6, borderRadius:3,
                background: s.id === current ? ORANGE : "rgba(245,240,232,0.15)",
                border:"none", cursor:"pointer", padding:0,
                transition:"all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Nav buttons */}
        <div style={{ display:"flex", gap:10 }}>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            disabled={current === 0}
            style={{ width:40, height:40, borderRadius:"50%", background:"rgba(245,240,232,0.06)", border:"1px solid rgba(245,240,232,0.1)", color:current === 0 ? "rgba(245,240,232,0.15)" : CREAM, cursor:current === 0 ? "not-allowed" : "pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" }}
          >←</button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            disabled={current === total - 1}
            style={{ width:40, height:40, borderRadius:"50%", background: current === total - 1 ? "rgba(200,103,26,0.1)" : ORANGE, border:"none", color:CREAM, cursor:current === total - 1 ? "not-allowed" : "pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" }}
          >→</button>
        </div>
      </div>

      {/* Slide label */}
      <div style={{ position:"absolute", bottom:"clamp(50px,7vh,65px)", left:"50%", transform:"translateX(-50%)", fontSize:"clamp(10px,1.2vw,11px)", color:"rgba(245,240,232,0.18)", letterSpacing:"2px", textTransform:"uppercase", whiteSpace:"nowrap" }}>
        {slideLabels[current]}
      </div>
    </div>
  );
}
