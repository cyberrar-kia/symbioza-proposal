"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ORANGE = "#C8671A";
const DARK = "#0d0b09";
const CREAM = "#f5f0e8";

const nodes = [
  {
    id: "about",
    label: "About Us",
    angle: -90,
    icon: "◈",
    heading: "Who We Are",
    body: "Symbioza Group is a consulting and strategy firm built on one belief: sustainable growth only happens through aligned partnerships. We work with founders, leadership teams, and organisations navigating complex transitions — bringing systems thinking, clarity, and execution to every engagement.",
    stat1: { n: "12+", l: "Years Experience" },
    stat2: { n: "40+", l: "Clients Served" },
  },
  {
    id: "clients",
    label: "Our Clients",
    angle: 30,
    icon: "◉",
    heading: "Who We Work With",
    body: "We partner with growth-stage companies, mid-market firms, and mission-driven organisations across industries. Our clients share a common thread — they're ready to move from reactive to strategic, and they want a thinking partner who can hold the full picture.",
    stat1: { n: "94%", l: "Retention Rate" },
    stat2: { n: "3x", l: "Avg. Growth Multiple" },
  },
  {
    id: "services",
    label: "Services",
    angle: 150,
    icon: "◎",
    heading: "What We Offer",
    body: "Strategy design and facilitation. Partnership structuring and negotiation. Organisational systems audits. Executive advisory and coaching. Growth architecture. Each engagement is scoped precisely — no retainers that outlive their usefulness.",
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
  const radius = 190;

  return (
    <div style={{ minHeight:"100svh", background:DARK, fontFamily:"'Inter',sans-serif", color:CREAM, overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@300;400;500;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
        @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
        @keyframes nodeIn{from{opacity:0;transform:scale(0.4);}to{opacity:1;transform:scale(1);}}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(200,103,26,0.35);}50%{box-shadow:0 0 0 14px rgba(200,103,26,0);}}
        .node-btn{background:none;border:none;cursor:pointer;position:absolute;transform:translate(-50%,-50%);}
        .node-btn:hover .nc{transform:scale(1.1);background:rgba(200,103,26,0.16)!important;border-color:${ORANGE}!important;}
        .node-btn:hover .nl{color:${ORANGE}!important;}
        .nc{transition:all 0.25s ease;}
        .cta{background:${ORANGE};color:white;border:none;padding:16px 36px;border-radius:50px;font-size:15px;font-weight:600;cursor:pointer;letter-spacing:0.2px;transition:all 0.2s;font-family:'Inter',sans-serif;}
        .cta:hover{background:#a85516;transform:translateY(-2px);}
        .cta-ghost{background:transparent;border:1px solid rgba(245,240,232,0.2);color:${CREAM};padding:16px 36px;border-radius:50px;font-size:15px;cursor:pointer;transition:all 0.2s;font-family:'Inter',sans-serif;}
        .cta-ghost:hover{border-color:rgba(245,240,232,0.5);background:rgba(245,240,232,0.05);}
        .close-btn{background:rgba(245,240,232,0.07);border:1px solid rgba(245,240,232,0.1);color:${CREAM};width:42px;height:42px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;flex-shrink:0;}
        .close-btn:hover{background:rgba(245,240,232,0.14);}
        .mobile-card{background:rgba(245,240,232,0.03);border:1px solid rgba(245,240,232,0.07);border-radius:16px;padding:28px 24px;cursor:pointer;transition:all 0.25s;}
        .mobile-card:hover{border-color:rgba(200,103,26,0.35);background:rgba(200,103,26,0.05);}
        .nav-link{color:rgba(245,240,232,0.4);font-size:13px;text-decoration:none;transition:color 0.2s;letter-spacing:0.5px;}
        .nav-link:hover{color:${CREAM};}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px clamp(24px,6vw,72px)", background:"rgba(13,11,9,0.75)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(245,240,232,0.04)" }}>
        <div style={{ fontSize:"clamp(11px,1.3vw,13px)", letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.7)", fontWeight:400 }}>Symbioza Group</div>
        <div style={{ display:"flex", gap:36, alignItems:"center" }}>
          {!isMobile && ["About","Services","Clients"].map(l => <a key={l} href="#radial" className="nav-link">{l}</a>)}
          <button className="cta" style={{ padding:"10px 22px", fontSize:13 }}>Book a Call</button>
        </div>
      </nav>

      {/* HERO — matches mockup */}
      <section style={{ position:"relative", minHeight:"100svh", display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", alignItems:"center", overflow:"hidden", paddingTop:72 }}>
        {/* Dark background with warm tint */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,#0d0b09 0%,#12100d 50%,#0d0e10 100%)" }} />
        {/* Subtle vignette */}
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 30% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)" }} />

        {/* LEFT — text content */}
        <div style={{ position:"relative", zIndex:2, padding: isMobile ? "100px 28px 60px" : "0 clamp(32px,6vw,80px)", display:"flex", flexDirection:"column", justifyContent:"center" }}>
          <div style={{ fontSize:"clamp(10px,1.2vw,11px)", letterSpacing:"4px", textTransform:"uppercase", color:"rgba(245,240,232,0.35)", marginBottom:28, fontWeight:400, animation: mounted ? "fadeUp 0.8s ease 0.1s both" : "none" }}>
            Symbioza Group
          </div>

          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(36px,5.5vw,68px)", fontWeight:400, lineHeight:1.08, marginBottom:28, color:CREAM, animation: mounted ? "fadeUp 0.8s ease 0.25s both" : "none" }}>
            Growth Isn't<br/>
            Plug-and-Play.<br/>
            <span style={{ fontStyle:"italic", color:"rgba(245,240,232,0.75)" }}>It's Designed.</span>
          </h1>

          <p style={{ fontSize:"clamp(14px,1.6vw,17px)", color:"rgba(245,240,232,0.45)", lineHeight:1.85, maxWidth:420, marginBottom:40, fontWeight:300, animation: mounted ? "fadeUp 0.8s ease 0.4s both" : "none" }}>
            Symbioza aligns vision, infrastructure, and execution to build growth that compounds.
          </p>

          <div style={{ display:"flex", gap:14, flexWrap:"wrap", animation: mounted ? "fadeUp 0.8s ease 0.55s both" : "none" }}>
            <button className="cta">Book Strategy Call</button>
            <button className="cta-ghost" onClick={() => document.getElementById("radial")?.scrollIntoView({ behavior:"smooth" })}>
              Our Approach →
            </button>
          </div>
        </div>

        {/* RIGHT — hero image */}
        <div style={{ position: isMobile ? "absolute" : "relative", inset: isMobile ? 0 : "auto", zIndex: isMobile ? 1 : 2, opacity: isMobile ? 0.18 : 1, display:"flex", alignItems:"center", justifyContent:"center", padding: isMobile ? 0 : "40px clamp(20px,4vw,60px) 40px 0", animation: mounted ? "fadeIn 1.2s ease 0.3s both" : "none" }}>
          <Image
            src="/hero-visual.png"
            alt="Growth systems network — Symbioza Group"
            width={900}
            height={720}
            style={{ width:"100%", height:"100%", objectFit: isMobile ? "cover" : "contain", maxHeight:"90vh" }}
            priority
          />
        </div>
      </section>

      {/* RADIAL SECTION */}
      <section id="radial" style={{ minHeight:"100svh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"80px clamp(20px,5vw,60px)", background:"#0a0908", position:"relative" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(200,103,26,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(200,103,26,0.03) 1px,transparent 1px)", backgroundSize:"70px 70px" }} />

        <div style={{ textAlign:"center", marginBottom: isMobile ? 48 : 72, position:"relative", zIndex:1 }}>
          <div style={{ fontSize:"clamp(10px,1.2vw,11px)", letterSpacing:"4px", textTransform:"uppercase", color:ORANGE, marginBottom:14, fontWeight:500, opacity:0.8 }}>Our System</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,4.5vw,52px)", color:CREAM, fontWeight:400, lineHeight:1.1 }}>
            Everything Connects
          </h2>
          <p style={{ fontSize:"clamp(13px,1.5vw,16px)", color:"rgba(245,240,232,0.35)", marginTop:14, maxWidth:400, margin:"14px auto 0", lineHeight:1.7 }}>
            {isMobile ? "Explore what we do" : "Click any node to explore"}
          </p>
        </div>

        {isMobile ? (
          <div style={{ display:"flex", flexDirection:"column", gap:14, width:"100%", maxWidth:480, position:"relative", zIndex:1 }}>
            {nodes.map((node, i) => (
              <div key={node.id} className="mobile-card" onClick={() => openNode(node.id)}
                style={{ animation: mounted ? `fadeUp 0.6s ease ${i*0.12}s both` : "none" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:38, height:38, borderRadius:"50%", background:"rgba(200,103,26,0.08)", border:`1px solid rgba(200,103,26,0.25)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, color:ORANGE }}>{node.icon}</div>
                    <span style={{ fontSize:16, fontWeight:500, color:CREAM }}>{node.label}</span>
                  </div>
                  <span style={{ color:ORANGE }}>→</span>
                </div>
                <p style={{ fontSize:13, color:"rgba(245,240,232,0.35)", lineHeight:1.7 }}>{node.body.slice(0,90)}…</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ position:"relative", width:520, height:520, flexShrink:0, zIndex:1 }}>
            <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", overflow:"visible" }} viewBox="-260 -260 520 520">
              {nodes.map((node, i) => {
                const pos = polarToXY(node.angle, radius);
                return (
                  <line key={node.id} x1={0} y1={0} x2={pos.x} y2={pos.y}
                    stroke={active === node.id ? ORANGE : "rgba(200,103,26,0.18)"}
                    strokeWidth={active === node.id ? 1.5 : 0.8}
                    strokeDasharray={200}
                    style={{ strokeDashoffset: mounted ? 0 : 200, transition:`stroke-dashoffset 1s ease ${i*0.2}s, stroke 0.3s, stroke-width 0.3s` }}
                  />
                );
              })}
              <circle cx={0} cy={0} r={radius} fill="none" stroke="rgba(200,103,26,0.07)" strokeWidth={1} strokeDasharray="3 10" />
            </svg>

            {/* Centre */}
            <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", zIndex:5 }}>
              <div style={{ width:96, height:96, borderRadius:"50%", background:"rgba(200,103,26,0.07)", border:`1.5px solid ${ORANGE}`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:10, animation: mounted ? "nodeIn 0.5s ease both, pulse 3s ease 1s infinite" : "none" }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:10, fontWeight:400, color:CREAM, lineHeight:1.3, letterSpacing:"0.5px" }}>SYMBIOZA<br/>GROUP</div>
              </div>
            </div>

            {/* Satellite nodes */}
            {nodes.map((node, i) => {
              const pos = polarToXY(node.angle, radius);
              const isActive = active === node.id;
              const labelOffsets: Record<number, { top: number; left: number }> = {
                [-90]: { top: -38, left: -7 },
                [30]: { top: 80, left: -10 },
                [150]: { top: 80, left: -10 },
              };
              const off = labelOffsets[node.angle] || { top: 80, left: -7 };
              return (
                <button key={node.id} className="node-btn"
                  style={{ left:`calc(50% + ${pos.x}px)`, top:`calc(50% + ${pos.y}px)`, zIndex:4, animation: mounted ? `nodeIn 0.5s ease ${0.3+i*0.18}s both` : "none" }}
                  onClick={() => isActive ? closePanel() : openNode(node.id)}
                >
                  <div className="nc" style={{ width:72, height:72, borderRadius:"50%", background: isActive ? "rgba(200,103,26,0.18)" : "rgba(200,103,26,0.05)", border:`1.5px solid ${isActive ? ORANGE : "rgba(200,103,26,0.3)"}`, display:"flex", alignItems:"center", justifyContent:"center", boxShadow: isActive ? `0 0 28px rgba(200,103,26,0.25)` : "none" }}>
                    <span style={{ fontSize:22, color: isActive ? ORANGE : "rgba(200,103,26,0.7)" }}>{node.icon}</span>
                  </div>
                  <div className="nl" style={{ position:"absolute", width:90, textAlign:"center", top:off.top, left:off.left, fontSize:11, fontWeight:500, color: isActive ? ORANGE : "rgba(245,240,232,0.5)", letterSpacing:"0.8px", transition:"color 0.25s", whiteSpace:"nowrap", textTransform:"uppercase" }}>{node.label}</div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA SECTION */}
      <section style={{ padding:"clamp(60px,10vh,120px) clamp(24px,6vw,80px)", textAlign:"center", background:DARK, borderTop:"1px solid rgba(245,240,232,0.04)" }}>
        <div style={{ fontSize:"clamp(10px,1.2vw,11px)", letterSpacing:"4px", textTransform:"uppercase", color:ORANGE, marginBottom:20, opacity:0.8 }}>Ready to Start</div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,4.5vw,52px)", color:CREAM, fontWeight:400, marginBottom:20, lineHeight:1.1 }}>
          Let's Design Your Growth
        </h2>
        <p style={{ fontSize:"clamp(14px,1.6vw,17px)", color:"rgba(245,240,232,0.4)", lineHeight:1.8, maxWidth:440, margin:"0 auto 40px", fontWeight:300 }}>
          A single strategy call can clarify more than months of internal debate.
        </p>
        <button className="cta" style={{ fontSize:16, padding:"18px 48px" }}>Book Strategy Call</button>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop:"1px solid rgba(245,240,232,0.05)", padding:"28px clamp(24px,6vw,80px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
        <div style={{ fontSize:"clamp(10px,1.2vw,12px)", letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.2)", fontWeight:400 }}>
          Symbioza Group · In Concordia Crescimus
        </div>

      </footer>

      {/* CONTENT PANEL */}
      {active && activeNode && (
        <div style={{ position:"fixed", inset:0, zIndex:100, display:"flex", alignItems: isMobile ? "flex-end" : "stretch", justifyContent:"flex-end" }}>
          <div onClick={closePanel} style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.65)", backdropFilter:"blur(6px)", opacity: panelVisible ? 1 : 0, transition:"opacity 0.3s ease", cursor:"pointer" }} />
          <div style={{ position:"relative", zIndex:1, width: isMobile ? "100%" : "min(460px,42vw)", height: isMobile ? "auto" : "100svh", maxHeight: isMobile ? "82svh" : "100svh", background:"#141210", borderLeft: !isMobile ? `1px solid rgba(200,103,26,0.12)` : "none", borderTop: isMobile ? `1px solid rgba(200,103,26,0.15)` : "none", borderRadius: isMobile ? "20px 20px 0 0" : 0, padding:"clamp(28px,4vw,48px)", overflowY:"auto", transform: panelVisible ? "translate(0,0)" : isMobile ? "translateY(40px)" : "translateX(40px)", opacity: panelVisible ? 1 : 0, transition:"transform 0.32s cubic-bezier(0.16,1,0.3,1), opacity 0.28s ease" }}>
            {isMobile && <div style={{ width:36, height:3, borderRadius:2, background:"rgba(245,240,232,0.12)", margin:"0 auto 28px" }} />}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
              <div>
                <div style={{ fontSize:"clamp(10px,1.1vw,11px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:10, fontWeight:500 }}>{activeNode.label}</div>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,2.8vw,32px)", color:CREAM, fontWeight:400, lineHeight:1.2 }}>{activeNode.heading}</h3>
              </div>
              <button className="close-btn" onClick={closePanel}>✕</button>
            </div>
            <div style={{ width:40, height:1, background:ORANGE, marginBottom:28 }} />
            <p style={{ fontSize:"clamp(14px,1.5vw,15px)", color:"rgba(245,240,232,0.55)", lineHeight:1.9, marginBottom:32, fontWeight:300 }}>{activeNode.body}</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:32 }}>
              {[activeNode.stat1, activeNode.stat2].map(stat => (
                <div key={stat.l} style={{ background:"rgba(200,103,26,0.05)", border:"1px solid rgba(200,103,26,0.12)", borderRadius:12, padding:"18px 14px" }}>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:30, fontWeight:400, color:ORANGE, marginBottom:4 }}>{stat.n}</div>
                  <div style={{ fontSize:11, color:"rgba(245,240,232,0.35)", letterSpacing:"0.5px" }}>{stat.l}</div>
                </div>
              ))}
            </div>
            <button className="cta" style={{ width:"100%" }}>Book a Strategy Call →</button>
          </div>
        </div>
      )}
    </div>
  );
}
