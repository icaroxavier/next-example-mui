import { Button } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Example</title>
      </Head>
      <div style={{display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center"}}>
        <Link href='/login' passHref>
          <Button variant='contained'>Ir para a tela de Login</Button>
        </Link>
      </div>
    </>
  )
}
