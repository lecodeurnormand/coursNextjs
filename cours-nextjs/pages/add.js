import React from 'react'
import styles from '../styles/Home.module.css'
import { useRef } from 'react'

export default function add() {

    const enWord = useRef()
    const frWord = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault()

        const newWord = {
            en: enWord.current.value,
            fr: frWord.current.value
        }

        fetch('api/vocapi',{
            method:"POST",
            body:JSON.stringify(newWord),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data)
        })
        enWord.current.value="";
            frWord.current.value=""
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="" className={styles.formulaire}>
            <label htmlFor="">Ajouter un mot en Anglais</label>
            <input ref={enWord} type="text" id="addEn" />
            <label htmlFor="">Ajouter un mot en Francais</label>
            <input ref={frWord} type="text" id="addFr" />
            <button>Add</button>
        </form>
    </div>
  )
}
