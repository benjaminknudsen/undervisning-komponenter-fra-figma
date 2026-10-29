import Modal from "@/components/Modal";
import Pill from "@/components/Pill";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <Pill />
      </div>
      {/* A closed <dialog> is hidden. Give it isOpen to see it in step 1.1. From step 1.2, PillModal opens it. */}
      <Modal />
    </main>
  );
}
