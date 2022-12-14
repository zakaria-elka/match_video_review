import Head from 'next/head'
import Image from 'next/image'
import { useEffect,useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const url = 'https://free-football-soccer-videos.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dd5f45a2a2msh9f20ebb4a97c990p191e2bjsne88f1b456e71',
      'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
  };

  const [results,setResults] = useState([])

  useEffect(()=>{

    fetch(url, options)
	.then(res => res.json())
	//.then(json => console.log(json))
  .then((data)=>{setResults(data)})
	.catch(err => console.error('error:' + err));
  



 },[])

 
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      {results.map(function(data, i){
         return (
          <main className={styles.main} key={i}>
          <p><h2>{data.title}</h2>  Date: {data.date.substring(0, 10)}<br></br>time: {data.date.substring(11, 19)} </p>
          <div dangerouslySetInnerHTML={{ __html: data.embed}}>

          </div>
          <br></br><br></br><br></br>
          </main> 
          
          )
       })}
     

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
