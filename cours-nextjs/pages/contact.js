import React from 'react'

export default function contact(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.data.fact}</h1>
    </div>
  )
}

export async function getStaticProps(){
  
  const quote = await fetch('https://catfact.ninja/fact')
  const data = await quote.json()

  return{
    props:{
      data
    },
    revalidate:10
  }
}