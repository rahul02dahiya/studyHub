import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import styles from "@/app/page.module.css";
import Banner from "@/components/Banner";
import BookShelf from "@/components/BookShelf";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={`${styles.hideScroll} h-screen`}>
      <div className="h-screen flex flex-col">
      <Header/>
      <Navbar/>
      <Banner/>
      </div>
      <BookShelf/>
      <Cards/>
      <Footer/>
    </main>
  );
}
