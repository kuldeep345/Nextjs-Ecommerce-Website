import Head from 'next/head'


const Home = () => {
  return (
    <div className="flex min-h-screen flex-col max-w-[100vw]">
      <Head>
        <title>CodeStore.com - store of code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <div>
          <img src="store.jpg" className='w-[100vw] h-[40vh] md:h-[60vh] object-cover' alt=""/>
        </div>
    
    </div>
  )
}

export default Home
