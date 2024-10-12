'use client'

import { 
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialReddit,

} from "react-icons/sl";

import { TbBrandGmail } from "react-icons/tb";
import { MdOutlineAddIcCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="footer" className=" p-8 w-full h-60 bg-black text-white flex-col justify-around items-center">
      <hr />
      <div className="conainer px-8 flex flex-col sm:flex-row w-full h-full">
      <div className="container flex flex-col h-full justify-center items-center">
        <h4 className="text-xl my-4" > Connect with us </h4>
        <ul id="social-contacts" className="flex justify-center items-center gap-8 text-4xl">
          <li>
          <a href="https://www.instagram.com/neverdieproductions" target="_blank"><SlSocialInstagram className="hover:text-orange-300 cursor-pointer" /></a>

          </li>
          <li>
          <a href="https://www.linkedin.com/in/neverdie-productions-284807332/" target="_blank"><SlSocialLinkedin className="hover:text-orange-300 cursor-pointer" /></a>

          </li>
          <li>
          <a href="https://www.reddit.com/user/NeverDieProductions/" target="_blank"><SlSocialReddit className="hover:text-orange-300 cursor-pointer" /></a>

          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61563240575500" target="_blank"><SlSocialFacebook className="hover:text-orange-300 cursor-pointer" /></a>
          </li>
        </ul>
      </div>

      <div className="container h-full flex flex-col justify-center items-center text-slate-400">
      <div>
      <h4 className="text-xl mx-1 my-4 text-white"> Contact us</h4>
        <MdOutlineAddIcCall className="inline text-2xl mr-2 text-white" /> +91 9302847292 
        <br/> 
        <TbBrandGmail className="inline text-2xl mr-2 text-white" /> mdgroups@gmail.com 
      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer