import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="border-y-2 border-black w-full hover">
      <ul className="flex my-4 mx-auto w-full md:w-1/3 justify-around font-semibold font-serif text-gray-500 :">
        
        <Link href='/'><li className="hover:text-black">Home</li></Link>
        <Link href='#cards'><li className="hover:text-black">Shop</li></Link>
        <Link href='#footer'><li className="hover:text-black">Contact Us</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar