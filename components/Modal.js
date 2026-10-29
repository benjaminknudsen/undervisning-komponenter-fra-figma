"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./Modal.module.css";

export default function Modal({ title, children, showLine = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const modalId = useId();
  const cardTitleId = useId();
  const dialogRef = useRef(null);
  const titleId = useId();
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

  function renderContent(headingId) {
    return (
      <>
        {showLine && <div className={styles.line} aria-hidden="true" />}
        <h2 id={headingId} className={styles.title}>{title}</h2>
        <div className={styles.description}>{children}</div>
      </>
    );
  }

  return (
    <>
      <article className={`${styles.card} ${styles.preview}`}>
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
        className={`${styles.card} ${styles.modal}`}
        aria-labelledby={titleId}
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
          {renderContent(titleId)}
        </div>
      </dialog>
    </>
  );
}
