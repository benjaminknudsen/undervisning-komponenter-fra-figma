"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./FigmaMcp.module.css";

export default function FigmaMcpModal({ title, children, showLine = true, design = "philip" }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const modalId = useId();
  const cardTitleId = useId();
  const dialogRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();
  const pointerStartedOutside = useRef(false);

  // showModal supplies focus containment and makes the rest of the page inert.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function isOutside(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom;
  }

  function closeModal() {
    setIsOpen(false);
  }

  function renderContent(headingId, bodyId) {
    return (
      <>
        {showLine && (design === "philip" ? (
          <span className={styles.philipLine} aria-hidden="true">
            {/* Preserve the original Figma SVG at its intrinsic dimensions. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/philip-line.svg" alt="" />
          </span>
        ) : <div className={styles.line} aria-hidden="true" />)}
        <h2 id={headingId} className={styles.title}>{title}</h2>
        <div id={bodyId} className={styles.description}>{children}</div>
      </>
    );
  }

  return (
    <>
      <article className={`${styles.tokens} ${styles.card} ${styles[design]} ${styles.preview}`}>
        <div className={styles.content}>{renderContent(cardTitleId)}</div>
        <button
          ref={triggerRef}
          type="button"
          className={styles.open}
          aria-label={`Åbn modal: ${title}`}
          aria-haspopup="dialog"
          aria-controls={modalId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        />
      </article>
      <dialog
        id={modalId}
        ref={dialogRef}
        className={`${styles.tokens} ${styles.card} ${styles[design]} ${styles.modal}`}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onCancel={(event) => {
          event.preventDefault();
          closeModal();
        }}
        onClose={() => {
          closeModal();
          triggerRef.current?.focus();
        }}
        onPointerDown={(event) => { pointerStartedOutside.current = isOutside(event); }}
        onClick={(event) => {
          if (pointerStartedOutside.current && isOutside(event)) closeModal();
          pointerStartedOutside.current = false;
        }}
      >
        <div className={styles.content}>
          <button
            type="button"
            className={styles.close}
            aria-label="Luk modal"
            autoFocus
            onClick={closeModal}
          >
            <span aria-hidden="true">×</span>
          </button>
          {renderContent(titleId, descriptionId)}
        </div>
      </dialog>
    </>
  );
}
