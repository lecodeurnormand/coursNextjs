import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/dist/server/api-utils';

export default function Home(props) {
  const uuidv9 = require('uuid');
  console.log(uuidv9)

  const id = "article"
  return (
    <>
    <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Titre</title>
    </Head>
    <div className={styles.container}>
      <table className={styles.tableau}>
        <tbody>
          {props.array.map(el =>(
            <tr>
              <td key={uuidv4()} >{el.en}</td>
              <td key={uuidv4()}>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

