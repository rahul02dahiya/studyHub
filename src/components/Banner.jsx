'use client'


import styles from '../app/page.module.css'
import { ReactTyped } from "react-typed";


const Banner = () => {
  return (
    <div className={`bg-slate-500 w-full bg-cover flex flex-grow ${styles.banner} flex`} >
      <h2 className='text-3xl text-black'>
      <ReactTyped strings={["Welcome to StudyHub", "Get the best deals"]} typeSpeed={50} backSpeed={60} backDelay={3000} loop/>
      </h2>
    </div>
  )
}

export default Banner