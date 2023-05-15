import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/dist/server/api-utils';
import { useEffect, useState } from 'react';

export default function Home(props) {
  const uuidv9 = require('uuid');

  const [state,setState] = useState(false)
  
  useEffect(()=>{
    newWord()
  },[])
  const newWord = () =>{
    fetch('/api/vocapi')
    .then(response => response.json())
    .then(data => setState(data))
  }

  const id = "article"


  let randomWord;
  if(state){
    const array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
  }
  console.log(randomWord)
  return (
    <>
    <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Titre</title>
    </Head>
    <div className={styles.container}>
      {/* <table className={styles.tableau}>
        <tbody>
          {props.array.map(el =>(
            <tr>
              <td key={uuidv4()} >{el.en}</td>
              <td key={uuidv4()}>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <button
      onClick={newWord}
      >Random</button>
      <h2>{randomWord}</h2>
    </div>
    </>
  )
}

export async function getStaticProps(){

  const data = await import('/data/vocabulary.json')
  const array = data.vocabulary
  
  if(array.length === 0){
    return{
      notFound:true,
      // redirect:{
      //   destination: "/contact"
      // }
    }
  }

  return{
    props:{
      array
    }
  }
}

