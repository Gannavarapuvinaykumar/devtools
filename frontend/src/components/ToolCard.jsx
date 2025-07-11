import React from "react";

const ToolCard = ({ tool }) => (
  <div
    className="tool-card"
    tabIndex={0}
    style={{
      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      transition: "box-shadow 0.3s, transform 0.3s, border 0.2s",
      outline: "none",
      /* Add a glassmorphism effect and border for more depth */
      background: "rgba(255,255,255,0.10)",
      border: "1.5px solid rgba(255,255,255,0.18)",
      backdropFilter: "blur(10px)",
      borderRadius: "22px",
      position: "relative",
      overflow: "hidden",
    }}
    onMouseMove={e => {
      // Card tilt effect
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.045)`;
      card.style.boxShadow = `0 8px 32px rgba(31,38,135,0.25), 0 2px 8px rgba(25,118,210,0.09)`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.10)";
    }}
    onFocus={e => {
      e.currentTarget.style.boxShadow = "0 12px 36px rgba(25,118,210,0.18), 0 2px 8px rgba(25,118,210,0.09)";
      e.currentTarget.style.border = "2px solid #1976d2";
    }}
    onBlur={e => {
      e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.10)";
      e.currentTarget.style.border = "2px solid transparent";
    }}
  >
    {/* Animated gradient border */}
    <span style={{
      position: "absolute",
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 0,
      borderRadius: "22px",
      pointerEvents: "none",
      background: "linear-gradient(120deg, #43e97b 0%, #38f9d7 50%, #764ba2 100%)",
      opacity: 0.13,
      filter: "blur(8px)",
      animation: "borderGlow 3s linear infinite alternate"
    }} />
    <span className="category-badge" style={{zIndex: 1}}>{tool.category}</span>
    <span className="price-badge" style={{zIndex: 1}}>{tool.price}</span>
    <h2 style={{zIndex: 1, position: "relative"}}>{tool.name}</h2>
    <p style={{zIndex: 1, position: "relative"}}>{tool.description}</p>
    <a
      href={tool.link}
      target="_blank"
      rel="noreferrer"
      tabIndex={0}
      style={{ position: "relative", zIndex: 2, display: "inline-block", marginTop: 12, fontWeight: 600, letterSpacing: 0.5, color: "#1976d2", background: "rgba(255,255,255,0.18)", borderRadius: 8, padding: "0.5rem 1.2rem", boxShadow: "0 2px 8px rgba(25,118,210,0.09)", border: "none", outline: "none", cursor: "pointer", overflow: "hidden", transition: "background 0.2s, color 0.2s, transform 0.2s" }}
      onMouseDown={e => {
        // Button ripple effect
        const btn = e.currentTarget;
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        ripple.style.position = "absolute";
        ripple.style.left = `${e.nativeEvent.offsetX}px`;
        ripple.style.top = `${e.nativeEvent.offsetY}px`;
        ripple.style.width = ripple.style.height = "0px";
        ripple.style.background = "rgba(25,118,210,0.18)";
        ripple.style.borderRadius = "50%";
        ripple.style.transform = "translate(-50%, -50%)";
        ripple.style.pointerEvents = "none";
        ripple.style.transition = "width 0.5s, height 0.5s, opacity 0.5s";
        btn.appendChild(ripple);
        setTimeout(() => {
          ripple.style.width = ripple.style.height = "120px";
          ripple.style.opacity = "0";
        }, 10);
        setTimeout(() => {
          ripple.remove();
        }, 510);
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "#1976d2";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.transform = "scale(1.06)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.18)";
        e.currentTarget.style.color = "#1976d2";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <span style={{
        display: "inline-block",
        transition: "transform 0.2s",
      }}>
        Visit Site
        <svg style={{marginLeft: 6, verticalAlign: "middle"}} width="16" height="16" fill="#1976d2" viewBox="0 0 16 16"><path d="M6.354 13.354a.5.5 0 0 1-.708-.708l6.647-6.646H9.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V7.061l-6.646 6.647z"/><path d="M13.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11A.5.5 0 0 1 2.5 2h11zm-11-1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1h-11z"/></svg>
      </span>
    </a>
  </div>
);

export default ToolCard;