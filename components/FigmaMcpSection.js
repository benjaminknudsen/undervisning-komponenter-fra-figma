"use client";

import { useState } from "react";
import FigmaMcpModal from "./FigmaMcpModal";
import styles from "./FigmaMcp.module.css";

// Figma component set 3:28: Type=Primary/Secondary, State=Default/Hover.
export function FigmaMcpPill({ type = "Primary", state = "Default", children }) {
  return (
    <button type="button" className={styles.pill} data-type={type} data-state={state}>
      {children ?? type}
    </button>
  );
}

export default function FigmaMcpSection() {
  const [showLine, setShowLine] = useState(true);
  return (
    <section className={`${styles.tokens} ${styles.section}`} aria-labelledby="figma-mcp-heading">
      <h2 id="figma-mcp-heading">Figma MCP – Komponenter</h2>
      <div className={styles.pillGroups}>
        {["Primary", "Secondary"].map((type) => (
          <div className={styles.group} key={type}>
            <h3>{type}</h3>
            <div className={styles.states}>
              {["Default", "Hover"].map((state) => (
                <div className={styles.example} key={state}>
                  <span>{state}</span>
                  <FigmaMcpPill type={type} state={state} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <label className={styles.toggle}>
        <input type="checkbox" checked={showLine} onChange={(event) => setShowLine(event.target.checked)} />
        Vis separatorlinje
      </label>
      <FigmaMcpModal title="Philip Billing" showLine={showLine}>
        <p>Den aller bedste i branchen, ja det kan der ikke være tvivl om</p>
      </FigmaMcpModal>
      <FigmaMcpModal title="Hick's Law" design="hick" showLine={showLine}>
        <p>Jo flere valgmuligheder, jo længere tid tager det at vælge.</p>
      </FigmaMcpModal>
    </section>
  );
}
