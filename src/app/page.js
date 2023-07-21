import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}></div>
    </main>
  );
}
