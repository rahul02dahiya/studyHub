
const Navbar = () => {
  return (
    <nav className="border-y-2 border-black w-full hover">
      <ul className="flex my-4 mx-auto w-full md:w-1/3 justify-around font-semibold font-serif text-gray-500 :">
        <li className="hover:text-black">Home</li>
        <li className="hover:text-black">Shop</li>
        <li className="hover:text-black">Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar