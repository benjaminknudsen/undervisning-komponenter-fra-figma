"use client";

import { useState } from "react";
import FigmaMcpSection from "@/components/FigmaMcpSection";
import LaRougeSection from "@/components/LaRougeSection";
import RougeAgainSection from "@/components/RougeAgainSection";
import Pill from "@/components/Pill";
import Modal from "@/components/Modal";
import styles from "./page.module.css";

export default function Home() {
  // Figma Boolean Property "Show line" → React boolean prop.
  const [showLine, setShowLine] = useState(true);

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <h1>Components</h1>
        <p>Prøv Pill-varianterne, og klik på kortet for at åbne det som modal.</p>
      </header>
      <div className={styles.pills}>
        <section className={styles.example} aria-labelledby="primary-heading">
          <h2 id="primary-heading">Primary</h2>
          <Pill type="primary" label="Primary" />
        </section>
        <section className={styles.example} aria-labelledby="secondary-heading">
          <h2 id="secondary-heading">Secondary</h2>
          <Pill type="secondary" label="Secondary" />
        </section>
      </div>
      <label className={styles.toggle}>
        <input
          type="checkbox"
          role="switch"
          aria-label="Vis separator-linje"
          checked={showLine}
          onChange={(event) => setShowLine(event.target.checked)}
        />
        <span className={styles.switchTrack} aria-hidden="true" />
        <span>Vis separator-linje</span>
      </label>
      <Modal title="Philip Billing" showLine={showLine}>
        <p>Den aller bedste i branchen, ja det kan der ikke være tvivl om</p>
      </Modal>
      <p className={styles.hint}>Prøv hover, eller brug Tab og Enter. Luk med Escape, krydset eller et klik udenfor.</p>
      <FigmaMcpSection />
      <LaRougeSection />
      <RougeAgainSection />
    </main>
  );
}
