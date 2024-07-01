import Image from "next/image"
import { Signika } from 'next/font/google'
 
const roboto = Signika({
  weight: '500',
  subsets: ['latin'],
})
const BookShelf = () => {
  return (
    <div className={`${roboto.className} container m-auto items-center justify-center w-full flex flex-col md:h-[100vh]`}>
      <h1 className="text-4xl self-start text-blue-900 mt-6">Get the best deals here</h1>
      <div className="container mx-8 my-4 w-full h-full flex justify-center items-center">
          <ul className="grid grid-cols-5 justify-around py-10 gap-5 w-full h-full">
            <li className="h-full flex flex-col w-full">
              <div className="relative w-full h-[80%]"><Image src="/tile/colorBook.webp" objectFit="cover" layout="fill" alt="image" /></div>
              <h3 className="text-xl md:text-2xl m-2">Color Books</h3>
              <h4 className="text-lg md:text-xl mx-3">Rs.99 /-</h4>
            </li>
            <li className="h-full flex flex-col w-full">
              <div className="relative w-full h-[80%]"><Image src="/tile/globeBook.webp"	objectFit="cover" layout="fill" alt="image" /></div>
              <h3 className="text-xl md:text-2xl m-2">Globe Books</h3>
              <h4 className="text-lg md:text-xl mx-3">Rs.99 /-</h4>
            </li>
            <li className="h-full flex flex-col w-full">
              <div className="relative w-full h-[80%]"><Image src="/tile/handBook.webp" objectFit="cover" layout="fill" alt="image" /></div>
              <h3 className="text-xl md:text-2xl m-2">Hand Books</h3>
              <h4 className="text-lg md:text-xl mx-3">Rs.99 /-</h4>
            </li>
            <li className="h-full flex flex-col w-full">
              <div className="relative w-full h-[80%]"><Image src="/tile/peaceBook.webp" objectFit="cover" layout="fill" alt="image" /></div>
              <h3 className="text-xl md:text-2xl m-2">Peace Books</h3>
              <h4 className="text-lg md:text-xl mx-3">Rs.99 /-</h4>
            </li>
            <li className="h-full flex flex-col w-full">
              <div className="relative w-full h-[80%]"><Image src="/tile/pileOfBook.webp" objectFit="cover" layout="fill" alt="image" /></div>
              <h3 className="text-xl md:text-2xl m-2">Pile Of Books</h3>
              <h4 className="text-lg md:text-xl mx-3">Rs.99 /-</h4>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default BookShelf