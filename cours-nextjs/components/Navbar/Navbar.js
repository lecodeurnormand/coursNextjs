import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <Link href="/">
           <li>Accueil</li>
        </Link>
        <Link href="/blog/article">
            <li>Article</li>
        </Link>
        <Link href="/contact">
            <li>Contact</li>
        </Link>
    </nav>
  )
}
