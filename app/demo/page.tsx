"use client";
import { useState, useEffect, useRef } from "react";

const ORANGE = "#C8671A";
const DARK = "#0a0a0a";
const CREAM = "#f5f0e8";

const nodes = [
  {
    id: "about",
    label: "About Us",
    angle: -90,
    icon: "◈",
    heading: "Who We Are",
    body: "Symbioza Group is a consulting and strategy firm built on one belief: sustainable growth only happens through aligned partnerships. We work with founders, leadership teams, and organizations navigating complex transitions — bringing systems thinking, clarity, and execution to every engagement.",
    stat1: { n: "12+", l: "Years Experience" },
    stat2: { n: "40+", l: "Clients Served" },
  },
  {
    id: "clients",
    label: "Our Clients",
    angle: 30,
    icon: "◉",
    heading: "Who We Work With",
    body: "We partner with growth-stage companies, mid-market firms, and mission-driven organizations across industries. Our clients share a common thread — they're ready to move from reactive to strategic, and they want a thinking partner who can hold the full picture.",
    stat1: { n: "94%", l: "Retention Rate" },
    stat2: { n: "3x", l: "Avg. Growth Multiple" },
  },
  {
    id: "services",
    label: "Services",
    angle: 150,
    icon: "◎",
    heading: "What We Offer",
    body: "Strategy design and facilitation. Partnership structuring and negotiation. Organizational systems audits. Executive advisory and coaching. Growth architecture. Each engagement is scoped precisely — no retainers that outlive their usefulness.",
    stat1: { n: "6", l: "Core Services" },
    stat2: { n: "100%", l: "Custom Scoped" },
  },
];

function polarToXY(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

export default function SymbiozaDemo() {
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openNode = (id: string) => {
    setActive(id);
    setTimeout(() => setPanelVisible(true), 20);
  };

  const closePanel = () => {
    setPanelVisible(false);
    setTimeout(() => setActive(null), 320);
  };

  const activeNode = nodes.find(n => n.id === active);
  const radius = isMobile ? 0 : 190;

  return (
    <div style={{ minHeight: "100svh", background: DARK, fontFamily: "'Inter', sans-serif", color: CREAM, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes nodeIn { from { opacity:0; transform:scale(0.5); } to { opacity:1; transform:scale(1); } }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(200,103,26,0.4); } 50% { box-shadow: 0 0 0 12px rgba(200,103,26,0); } }
        @keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        @keyframes lineGrow { from { stroke-dashoffset:200; } to { stroke-dashoffset:0; } }
        .node-btn { background:none; border:none; cursor:pointer; position:absolute; transform:translate(-50%,-50%); }
        .node-btn:hover .node-circle { transform:scale(1.12); background:rgba(200,103,26,0.18) !important; border-color:${ORANGE} !important; }
        .node-btn:hover .node-label { color:${ORANGE} !important; }
        .node-circle { transition: all 0.25s ease; }
        .cta-btn { background:${ORANGE}; color:white; border:none; padding:14px 32px; border-radius:50px; font-size:15px; font-weight:600; cursor:pointer; letter-spacing:0.3px; transition:all 0.2s; }
        .cta-btn:hover { background:#a85516; transform:translateY(-2px); }
        .close-btn { background:rgba(245,240,232,0.08); border:1px solid rgba(245,240,232,0.12); color:${CREAM}; width:40px; height:40px; border-radius:50%; font-size:18px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.2s; flex-shrink:0; }
        .close-btn:hover { background:rgba(245,240,232,0.15); }
        .mobile-card { background:rgba(245,240,232,0.03); border:1px solid rgba(245,240,232,0.08); border-radius:16px; padding:28px 24px; cursor:pointer; transition:all 0.25s; }
        .mobile-card:hover { border-color:rgba(200,103,26,0.4); background:rgba(200,103,26,0.06); }
        .nav-link { color:rgba(245,240,232,0.45); font-size:13px; text-decoration:none; transition:color 0.2s; letter-spacing:0.3px; }
        .nav-link:hover { color:${CREAM}; }
        @media(max-width:768px){ .hero-title { font-size:clamp(38px,10vw,60px) !important; } }
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px clamp(20px,5vw,60px)", background:"rgba(10,10,10,0.7)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:28, height:28, borderRadius:"50%", border:`1.5px solid ${ORANGE}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ width:10, height:10, borderRadius:"50%", background:ORANGE }} />
          </div>
          <span style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:700, color:CREAM }}>Symbioza Group</span>
        </div>
        <div style={{ display:"flex", gap:32, alignItems:"center" }}>
          {["About","Services","Clients"].map(l => <a key={l} href="#radial" className="nav-link">{l}</a>)}
          <button className="cta-btn" style={{ padding:"9px 20px", fontSize:13 }}>Book a Call</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position:"relative", height:"100svh", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        {/* Video placeholder — dark gradient simulates video */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, #0a0808 0%, #1a0f08 40%, #0a0a0f 100%)" }} />
        {/* Grain texture */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")", opacity:0.4 }} />
        {/* Orange glow */}
        <div style={{ position:"absolute", top:"30%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle, rgba(200,103,26,0.12) 0%, transparent 70%)", pointerEvents:"none" }} />
        {/* Grid */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(200,103,26,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(200,103,26,0.04) 1px,transparent 1px)", backgroundSize:"80px 80px" }} />

        <div style={{ position:"relative", zIndex:2, textAlign:"center", padding:"0 clamp(20px,5vw,60px)", animation:"fadeUp 1s ease 0.3s both" }}>
          <div style={{ fontSize:"clamp(11px,1.4vw,13px)", letterSpacing:"4px", textTransform:"uppercase", color:ORANGE, marginBottom:24, fontWeight:500, opacity:0.9 }}>
            In Concordia Crescimus
          </div>
          <h1 className="hero-title" style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(52px,8vw,96px)", fontWeight:700, lineHeight:1.0, marginBottom:28, color:CREAM }}>
            Guiding Growth<br/>
            <span style={{ color:ORANGE }}>&amp; Partnership</span>
          </h1>
          <p style={{ fontSize:"clamp(15px,1.8vw,19px)", color:"rgba(245,240,232,0.5)", lineHeight:1.8, maxWidth:520, margin:"0 auto 40px" }}>
            A consulting and strategy firm built around systems thinking, aligned execution, and lasting growth.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <button className="cta-btn">Book Strategy Call</button>
            <button style={{ background:"transparent", border:`1px solid rgba(245,240,232,0.2)`, color:CREAM, padding:"14px 32px", borderRadius:50, fontSize:15, cursor:"pointer", transition:"all 0.2s" }}
              onClick={() => document.getElementById("radial")?.scrollIntoView({ behavior:"smooth" })}>
              Explore →
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, animation:"fadeUp 1s ease 1.2s both" }}>
          <div style={{ width:1, height:40, background:`linear-gradient(${ORANGE}, transparent)`, animation:"fadeUp 2s ease infinite" }} />
          <span style={{ fontSize:11, color:"rgba(245,240,232,0.3)", letterSpacing:"2px", textTransform:"uppercase" }}>Scroll</span>
        </div>
      </section>

      {/* RADIAL SECTION */}
      <section id="radial" style={{ minHeight:"100svh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"80px clamp(20px,5vw,60px)", position:"relative" }}>
        <div style={{ textAlign:"center", marginBottom: isMobile ? 48 : 80, animation: mounted ? "fadeUp 0.8s ease both" : "none" }}>
          <div style={{ fontSize:"clamp(11px,1.3vw,12px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:16, fontWeight:500 }}>Our System</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,5vw,52px)", color:CREAM, fontWeight:700, lineHeight:1.1 }}>
            {isMobile ? "What We Do" : "Everything Connects"}
          </h2>
        </div>

        {isMobile ? (
          /* MOBILE: stacked cards */
          <div style={{ display:"flex", flexDirection:"column", gap:16, width:"100%", maxWidth:480 }}>
            {nodes.map((node, i) => (
              <div
                key={node.id}
                className="mobile-card"
                onClick={() => openNode(node.id)}
                style={{ animation: mounted ? `fadeUp 0.6s ease ${i * 0.12}s both` : "none" }}
              >
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:40, height:40, borderRadius:"50%", background:"rgba(200,103,26,0.1)", border:`1px solid rgba(200,103,26,0.3)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, color:ORANGE }}>{node.icon}</div>
                    <span style={{ fontSize:17, fontWeight:600, color:CREAM }}>{node.label}</span>
                  </div>
                  <span style={{ color:ORANGE, fontSize:20 }}>→</span>
                </div>
                <p style={{ fontSize:13, color:"rgba(245,240,232,0.45)", lineHeight:1.7 }}>{node.body.slice(0,100)}…</p>
              </div>
            ))}
          </div>
        ) : (
          /* DESKTOP: radial system */
          <div style={{ position:"relative", width:520, height:520, flexShrink:0 }}>
            {/* SVG connecting lines */}
            <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", overflow:"visible" }} viewBox="-260 -260 520 520">
              {nodes.map((node, i) => {
                const pos = polarToXY(node.angle, radius);
                return (
                  <line
                    key={node.id}
                    x1={0} y1={0} x2={pos.x} y2={pos.y}
                    stroke={active === node.id ? ORANGE : "rgba(200,103,26,0.2)"}
                    strokeWidth={active === node.id ? 1.5 : 1}
                    strokeDasharray={200}
                    style={{
                      strokeDashoffset: mounted ? 0 : 200,
                      transition: `stroke-dashoffset 0.8s ease ${i * 0.15}s, stroke 0.3s ease, stroke-width 0.3s ease`,
                    }}
                  />
                );
              })}
              {/* Orbit ring */}
              <circle cx={0} cy={0} r={radius} fill="none" stroke="rgba(200,103,26,0.08)" strokeWidth={1} strokeDasharray="4 8" />
            </svg>

            {/* Center node */}
            <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", zIndex:5 }}>
              <div style={{
                width:100, height:100, borderRadius:"50%",
                background:"rgba(200,103,26,0.08)",
                border:`1.5px solid ${ORANGE}`,
                display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
                textAlign:"center", padding:8,
                animation: mounted ? "nodeIn 0.5s ease both, pulse 3s ease 1s infinite" : "none",
              }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:11, fontWeight:700, color:CREAM, lineHeight:1.2 }}>Symbioza</div>
                <div style={{ fontSize:9, color:ORANGE, letterSpacing:"1px", marginTop:3 }}>GROUP</div>
              </div>
            </div>

            {/* Satellite nodes */}
            {nodes.map((node, i) => {
              const pos = polarToXY(node.angle, radius);
              const isActive = active === node.id;
              return (
                <button
                  key={node.id}
                  className="node-btn"
                  onClick={() => isActive ? closePanel() : openNode(node.id)}
                  style={{ left:`calc(50% + ${pos.x}px)`, top:`calc(50% + ${pos.y}px)`, zIndex:4,
                    animation: mounted ? `nodeIn 0.5s ease ${0.2 + i * 0.15}s both` : "none",
                  }}
                >
                  <div className="node-circle" style={{
                    width:76, height:76, borderRadius:"50%",
                    background: isActive ? "rgba(200,103,26,0.2)" : "rgba(200,103,26,0.06)",
                    border: `1.5px solid ${isActive ? ORANGE : "rgba(200,103,26,0.35)"}`,
                    display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4,
                    boxShadow: isActive ? `0 0 24px rgba(200,103,26,0.3)` : "none",
                    transition:"all 0.25s ease",
                  }}>
                    <span style={{ fontSize:20, color: isActive ? ORANGE : "rgba(200,103,26,0.8)" }}>{node.icon}</span>
                  </div>
                  <div className="node-label" style={{ position:"absolute", width:90, textAlign:"center",
                    top: node.angle === -90 ? -32 : node.angle === 30 ? 82 : 82,
                    left: node.angle === -90 ? -7 : node.angle === 30 ? -7 : -7,
                    fontSize:12, fontWeight:600, color: isActive ? ORANGE : "rgba(245,240,232,0.6)",
                    letterSpacing:"0.5px", transition:"color 0.25s",
                    whiteSpace:"nowrap",
                  }}>{node.label}</div>
                </button>
              );
            })}
          </div>
        )}

        {/* Click hint */}
        {!isMobile && !active && mounted && (
          <p style={{ marginTop:40, fontSize:12, color:"rgba(245,240,232,0.2)", letterSpacing:"2px", textTransform:"uppercase", animation:"fadeUp 1s ease 1s both" }}>
            Click a node to explore
          </p>
        )}
      </section>

      {/* CONTENT PANEL */}
      {active && activeNode && (
        <div style={{ position:"fixed", inset:0, zIndex:100, display:"flex", alignItems:"flex-end", justifyContent: isMobile ? "center" : "flex-end" }}>
          {/* Backdrop */}
          <div
            onClick={closePanel}
            style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.6)", backdropFilter:"blur(4px)",
              opacity: panelVisible ? 1 : 0, transition:"opacity 0.3s ease", cursor:"pointer" }}
          />
          {/* Panel */}
          <div
            ref={panelRef}
            style={{
              position:"relative", zIndex:1,
              width: isMobile ? "100%" : "min(480px,45vw)",
              height: isMobile ? "auto" : "100svh",
              maxHeight: isMobile ? "85svh" : "100svh",
              background:"#141414",
              border: isMobile ? "none" : "none",
              borderTop: isMobile ? `1px solid rgba(200,103,26,0.2)` : "none",
              borderLeft: !isMobile ? `1px solid rgba(200,103,26,0.15)` : "none",
              borderRadius: isMobile ? "20px 20px 0 0" : "0",
              padding:"clamp(28px,4vw,48px)",
              overflowY:"auto",
              transform: panelVisible ? "translate(0,0)" : isMobile ? "translateY(40px)" : "translateX(40px)",
              opacity: panelVisible ? 1 : 0,
              transition:"transform 0.32s cubic-bezier(0.16,1,0.3,1), opacity 0.28s ease",
            }}
          >
            {/* Mobile drag handle */}
            {isMobile && <div style={{ width:40, height:4, borderRadius:2, background:"rgba(245,240,232,0.15)", margin:"0 auto 28px" }} />}

            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:28 }}>
              <div>
                <div style={{ fontSize:"clamp(10px,1.2vw,11px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:10, fontWeight:500 }}>{activeNode.label}</div>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(24px,3vw,34px)", color:CREAM, fontWeight:700, lineHeight:1.15 }}>{activeNode.heading}</h3>
              </div>
              <button className="close-btn" onClick={closePanel}>✕</button>
            </div>

            <div style={{ width:48, height:1, background:ORANGE, marginBottom:28 }} />

            <p style={{ fontSize:"clamp(14px,1.6vw,16px)", color:"rgba(245,240,232,0.65)", lineHeight:1.85, marginBottom:36 }}>{activeNode.body}</p>

            {/* Stats */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:36 }}>
              {[activeNode.stat1, activeNode.stat2].map(stat => (
                <div key={stat.l} style={{ background:"rgba(200,103,26,0.06)", border:"1px solid rgba(200,103,26,0.15)", borderRadius:12, padding:"20px 16px" }}>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:32, fontWeight:700, color:ORANGE, marginBottom:4 }}>{stat.n}</div>
                  <div style={{ fontSize:12, color:"rgba(245,240,232,0.4)", letterSpacing:"0.5px" }}>{stat.l}</div>
                </div>
              ))}
            </div>

            <button className="cta-btn" style={{ width:"100%" }}>Book a Strategy Call →</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ borderTop:"1px solid rgba(245,240,232,0.06)", padding:"40px clamp(20px,5vw,60px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:15, color:"rgba(245,240,232,0.35)" }}>
          Symbioza Group · <span style={{ fontStyle:"italic" }}>In Concordia Crescimus</span>
        </div>
        <div style={{ fontSize:12, color:"rgba(245,240,232,0.2)", letterSpacing:"1px" }}>
          Demo built by <span style={{ color:ORANGE }}>Elite Traffic Media</span>
        </div>
      </footer>
    </div>
  );
}
