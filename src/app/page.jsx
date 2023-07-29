import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/header";
import FirstSection from "@/components/FirstSection/firstSecton";
import SecondSection from "@/components/SecondSection/secondSection";
import MostPopular from "@/components/MostPopular/mostPopular";
import Comments from "@/components/Comments/comments";
import Location from "@/components/Location/location";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <FirstSection />
      <SecondSection />
      <MostPopular />
      <Comments />
      <Location />
      <Footer />
    </main>
  );
}
