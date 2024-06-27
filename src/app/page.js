import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <main className={`${styles.hideScroll} h-screen`}>
      <Header/>
      <Navbar/>
    </main>
  );
}
