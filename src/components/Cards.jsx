
import { Signika } from "next/font/google";
import Image from "next/image";

const signika = Signika({
    weight: '500',
    subsets: ['latin'],
});

const Cards = () => {
    return (
        <div className={`${signika.className} container mx-auto items-center justify-center w-full flex flex-col p-8`}>
            <h1 className="text-4xl self-start text-blue-900 my-6">More on sale</h1>
            <div className="container h-max w-full m-auto">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

                    {
                        [
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 },
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 },
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 },
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 },
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 },
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 },
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 },
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 },
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 },
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 }
                        ].map((book, index) => (
                            <li className="w-full h-72 bg-slate-300 relative border-[1px] border-slate-300">
                                <div className="container relative w-[70%] m-auto h-full bg-black">
                                    <Image src={book.src} fill style={{objectFit:"cover"}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="image" />
                                </div>
                                <div className="w-full h-[30%] bg-white bottom-0 absolute flex flex-col justify-center items-center">
                                    <div className="m-1">
                                    <p className="text-[1rem] leading-none -mb-1">{book.title}</p>
                                    <p className="text-[1.5rem] font-serif text-slate-600" > <sup className="text-[0.8rem]">&#8377;</sup> {book.price}</p>
                                    </div>
                                    <div className="flex w-full h-full">
                                        <button className="bg-[#ffe54fde] text-blue-900 w-full">Buy Now</button>
                                        <button className="bg-[#ffb74fde] text-gray-700 w-full">Add to Cart</button>   
                                    </div>                                
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div >
    )
}

export default Cards