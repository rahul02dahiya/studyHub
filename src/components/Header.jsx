import { IoLogIn } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdShoppingCart } from "react-icons/md";
import { Monoton } from 'next/font/google'

const monoton = Monoton({subsets:['latin'], weight:'400' });

const Header = () => {

  // To change profile icons 
  const isLoggedIn = false;

  return (
    <div className="h-[12%] w-full flex justify-between items-center border-black px-12">
        <h3 className={`text-2xl  ${monoton.className}`}>StudyHub</h3>
        <div className="flex w-fit gap-8 justify-between items-center font-extrabold text-3xl text-[#111a5bc0]">
          <div id="profileBtn" className="hover:text-blue-400">
              { isLoggedIn ? <CgProfile/> : <IoLogIn/>}
          </div>
          <div id="cartBtn" className="hover:text-blue-400">
              <MdShoppingCart/>
          </div>
        </div>
    </div>
  )
}

export default Header