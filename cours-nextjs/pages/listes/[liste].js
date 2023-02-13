import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
export default function liste(props) {

const router = useRouter();
  return (
    <div>
      <h1>{router.query.liste.charAt(0).toUpperCase()+router.query.liste.slice(1)}</h1>
 <ul>
    {
  props.listEncours.map(item =>(
    <li key={uuidv4()}>
      {item.en} --- {item.fr}
    </li>
    ))}
</ul>
</div>
  )
}

export async function getStaticProps(context){

    const slug = context.params.liste
    const data = await import('/data/listes.json')

    const listEncours = data.englishList.find(list => list.name === slug)
    return{
      props:{
        listEncours: listEncours.data
      }
    }
}

export async function getStaticPaths(){
  const data = await import('/data/listes.json')
  const paths = data.englishList.map(el=>({
    params:{liste:el.name}
  }))

  return{
    paths,
    fallback: false
  }
}