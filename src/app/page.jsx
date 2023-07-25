import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/header";
import FirstSection from "@/components/FirstSection/firstSecton";
import SecondSection from "@/components/SecondSection/secondSection";
import MostPopular from "@/components/MostPopular/mostPopular";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <FirstSection />
      <SecondSection />
      <MostPopular />
    </main>
  );
}
