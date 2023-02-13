import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';

export default function listes(props) {

  return (
    <div>
 <ul>
            {
              props.array.map(item =>(
                  <li key={uuidv4()}>
                  <Link href={Object.keys(item)[0]}>{Object.keys(item)[0]}</Link>
                  </li>
                 ))}
                    </ul>
    </div>
  )
}

export async function getStaticProps(){

    const listes = await import('/data/listes.json')
    const array = listes.englishList
    
    return{
        props:{
            array
        }
    }

}