import React from 'react'
import Image from 'next/image'
import img1 from "../public/assets/img1.jpg"
import img2 from "../public/assets/img2.jpg"
import img3 from "../public/assets/img3.jpg"
import styles from "../styles/Galery.module.scss"

export default function galery() {
  return (
    <div className={styles.container}>
        <Image 
            placeholder='blur'
            src={img1}
            width="5657"
            height="3771"
        />
            <Image 
            src={img2}
            placeholder='blur'
            width="3253"
            height="2440"
        />
            <Image 
            src={img3}
            placeholder='blur'
            width="2671"
            height="4000"
        />


        {/* <img src="/assets/img1.jpg" alt="" />
        <img src="/assets/img2.jpg" alt="" />
        <img src="/assets/img3.jpg" alt="" /> */}
    </div>
  )
}

/* 
4.9mb
718kb
544kb
*/
