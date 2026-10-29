"use client";

import { useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import styles from "./RougeAgainSection.module.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

function Icon({ name, className }) {
  // Original Figma exports retain their intrinsic SVG dimensions.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={`/figma/rouge-again/${name}.svg`} alt="" aria-hidden="true" />;
}

export default function RougeAgainSection() {
  const [visible, setVisible] = useState(true);
  const reopenRef = useRef(null);
  const closeRef = useRef(null);

  function dismiss() {
    setVisible(false);
    requestAnimationFrame(() => reopenRef.current?.focus());
  }

  return (
    <section className={styles.section} aria-label="ROUGE AGAIN – Introduktion">
      {visible ? (
        <article className={`${styles.card} ${cormorant.className}`} aria-labelledby="rouge-again-title">
          <header className={styles.header}>
            <div className={styles.logo} aria-label="ROUGE AGAIN by LA ROUGE">
              <p className={styles.logoName} aria-hidden="true">ROUGE<br />AGAIN</p>
              <p className={styles.byline} aria-hidden="true">BY LA ROUGE</p>
              <Icon name="logo-line" className={styles.logoLine} />
              <Icon name="logo-small-line" className={styles.logoSmallLine} />
            </div>
            <button ref={closeRef} className={styles.close} type="button" aria-label="Luk introduktion" onClick={dismiss}>
              <Icon name="close" />
            </button>
          </header>
          <div className={styles.hero}>
            <Image src="/figma/rouge-again/hero.png" alt="Model i en olivengrøn kjole fra LA RŌUGE" fill sizes="(max-width: 438px) 100vw, 390px" />
            <div className={styles.shade} />
            <h2 id="rouge-again-title">Hvad er<br />ROUGE AGAIN?</h2>
            <p className={styles.description}>ROUGE AGAIN er LA RŌUGE’s secondhand univers, hvor du kan give dine styles nyt liv<br />- Og finde styles fra andre</p>
          </div>
          <div className={styles.bottom}>
            <ul className={styles.benefits}>
              <li><span className={styles.circle}><span className={styles.leaf}><Icon name="leaf" /></span></span><p>En mere cirkulær garderobe</p></li>
              <li><span className={styles.circle}><Icon name="hanger" /></span><p>Sælgt nemt dine styles</p></li>
              <li><span className={styles.circle}><Icon name="shirt" /></span><p>Find unikke<br />styles</p></li>
            </ul>
            <button type="button" className={styles.confirm} onClick={dismiss}>FORSTÅET<Icon name="arrow" /></button>
          </div>
        </article>
      ) : (
        <button ref={reopenRef} type="button" className={styles.reopen} onClick={() => {
          setVisible(true);
          requestAnimationFrame(() => closeRef.current?.focus());
        }}>Vis ROUGE AGAIN-introduktion</button>
      )}
    </section>
  );
}
