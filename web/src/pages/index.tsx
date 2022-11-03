import axios from 'axios'
import { GetServerSideProps } from 'next'
import Link from "next/link";
import { useEffect, useState } from 'react';


interface PoolCount {
  count: number
}



interface HomeProps {
  poolCount: PoolCount
}

export default function Home({poolCount}: HomeProps) {
  const [count, setCount] = useState({})

  useEffect(() => {
    fetch('http://localhost:3333/pools/counter')
    .then(response => response.json())
    .then(data => setCount(data))
  }, [])

  


  return (
    <div>
      <h1>your name is {poolCount.count}</h1>
      <p>{JSON.stringify(count  )}</p>
      <Link href={'/users'} prefetch={false}>go to Users Page</Link>
    </div>

  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const response  = await axios.get('http://localhost:3333/pools/counter')
  const poolCount : PoolCount = response.data
  return {
    props: {
      poolCount
    }
  }
}
