import styles from "./Pill.module.css";

// Figma Type becomes a prop; State=Hover is handled by CSS.
export default function Pill({ type = "primary", label, ...buttonProps }) {
  return (
    <button
      {...buttonProps}
      type="button"
      className={`${styles.pill} ${styles[type === "secondary" ? "secondary" : "primary"]}`}
    >
      {label}
    </button>
  );
}
