import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link href="/">
           <li>Accueil</li>
        </Link>
        <Link href="/blog">
            <li>Blog</li>
        </Link>
        <Link href="/contact">
            <li>Contact</li>
        </Link>
    </nav>
  )
}
