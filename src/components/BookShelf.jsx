
import Image from "next/image";
import { Signika } from 'next/font/google';
import styles from "@/app/page.module.css";


const signika = Signika({
  weight: '500',
  subsets: ['latin'],
});

const BookShelf = () => {

  return (
    <div className={`${signika.className}  container mx-auto items-center justify-center w-full flex flex-col md:h-[100vh] mt-8 border-b-2`}>
      <h1 className="text-4xl self-start text-blue-900 mt-6">Get the best deals here</h1>
      <div className="w-full overflow-x-auto md:container md:mx-8 md:my-4 md:h-full md:flex md:justify-center md:items-center ">
        <ul className={`flex gap-5 py-10 md:grid md:grid-cols-5 md:justify-around md:w-full md:h-full ${styles.hideScroll}`}>
          {[
            { src: '/tile/colorBook.webp', title: 'Color Books', price: 'Rs.99 /-', id: 'color-books' },
            { src: '/tile/globeBook.webp', title: 'Globe Books', price: 'Rs.99 /-', id: 'globe-books' },
            { src: '/tile/handBook.webp', title: 'Hand Books', price: 'Rs.99 /-', id: 'hand-books' },
            { src: '/tile/peaceBook.webp', title: 'Peace Books', price: 'Rs.99 /-', id: 'peace-books' },
            { src: '/tile/pileOfBook.webp', title: 'Pile Of Books', price: 'Rs.99 /-', id: 'pile-of-books' },
          ].map((book, index) => (
            <li key={index} id={book.id} className="min-w-[200px] flex-shrink-0 md:h-full md:flex-col md:w-full">

              <div className="relative w-full h-60 md:h-[80%]">

                <Image
                  src={book.src}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="image"
                  priority={index === 0}
                />

              </div>
              <h3 className="text-xl md:text-2xl m-2">{book.title}</h3>
              <h4 className="text-lg md:text-xl mx-3">{book.price}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookShelf;
