import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div>
      <h1>blog</h1>
      <Link href={`/blog/test`}>
        <li>test</li>
      </Link>
    </div>
  )
}
