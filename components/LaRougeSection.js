"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import styles from "./LaRougeSection.module.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "500" });

// Figma 6wIJgOodnidPuSPEFE3685, instance 30:464.
export default function LaRougeSection() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <section className={styles.section} aria-labelledby="la-rouge-heading">
      <h2 id="la-rouge-heading">La Rōuge</h2>
      <article className={styles.card} aria-labelledby="camilla-dress-heading">
        <div className={styles.photo}>
          <Image src="/figma/la-rouge/camilla-dress.png" alt="Model iført Camilla Dress i khaki" fill sizes="185px" />
          <button
            type="button"
            className={styles.heart}
            aria-label="Favorit: Camilla Dress - Khaki"
            aria-pressed={isFavorite}
            onClick={() => setIsFavorite((favorite) => !favorite)}
          >
            {/* Keep Figma SVGs at their intrinsic dimensions. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.heartDefault} src="/figma/la-rouge/heart.svg" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.heartActive} src="/figma/la-rouge/heart-active.svg" alt="" />
          </button>
        </div>
        <div className={`${styles.details} ${cormorant.className}`}>
          <p className={styles.brand}>LA RŌUGE</p>
          <h3 id="camilla-dress-heading">Camilla Dress - Khaki</h3>
          <p className={styles.price}>350,00 kr.</p>
        </div>
        <span className={styles.bag} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma/la-rouge/bag.svg" alt="" />
        </span>
      </article>
    </section>
  );
}
