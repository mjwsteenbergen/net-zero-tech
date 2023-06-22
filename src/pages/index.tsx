import Image from 'next/image'
import { Inter } from 'next/font/google';
import css from "./index.module.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='m-0 p-0 bg-greenpri-200'>
      <section className='p-10 m-0 h-screen bg-purple-300 justify-center overflow-hidden relative md:p-24 flex flex-col  gap-5 grid-flow-row'>
        <img src='https://i.scdn.co/image/ab67656300005f1f827985387096ee815bf6e8a3' alt="" className='sm:max-lg:hidden scale-[3] max-sm:absolute max-w-xs md:max-w-none md:w-28 -z-1 opacity-60 md:scale-100 md:opacity-100'/>
        <h1 className='text-greenpri-600 text-7xl md:text-9xl xl:text-[16rem] xl:font-extrabold md:w-1/3 z-0'>Net Zero Tech</h1>
        <p className='text-white z-0 sm:text-lg md:text-xl xl:text-2xl max-w-7xl col-span-2'>Climate change is scary and the solution is complex. A host of different technological interventions will be necessary if we are to avert a climate disaster. Join us as we speak to expert scientists working on some of the breakthrough innovations and game-changing ideas for tackling climate change. Each episode is a power-packed introduction where we discuss the basics, opportunities and challenges of a specific technological solution.</p>
      </section>
      {/* <section className='bg-greenpri-600 m-0 flex flex-col items-center justify-center p-4'>
        <h2>Amazingly reviewed</h2>
        <div className='p-2'>
          <p><i>{"\"Amazing\""}</i></p>
          <p> - Martijn</p>
        </div>
      </section> */}
      <section className={'max-md:m-6 xl:flex xl:justify-center 2xl:py-10 overflow-hidden max-md:rounded-xl max-md:max-w-lg md:flex md:bg-greenpri-50 ' + css.about}>
        <img className={' ' + css.about_img} src="https://www.some.ox.ac.uk/wp-content/uploads/2022/07/Snigdha-Lal-1.jpeg" alt=""></img>
        <div className={'max-md:bg-black max-md:max-w-lg max-md:bg-opacity-50 p-5 max-w-4xl md:flex md:justify-center md:flex-col md:p-10 ' + css.about_text}>
          <h2 className='text-greensec-700 md:text-6xl xl:text-9xl'>Created by <b>Snigdha Lal</b></h2>
          <p className='text-greensec-800 max-md:text-xs xl:text-lg font-semibold'>Sustainability, especially sustainable energy development, has always been an issue in which I have found my purpose. Coming all the way from India... </p>
        </div>
      </section>
      <section className='bg-greenpri-600 flex flex-col justify-center items-center p-10'>
        {/* <h2 className='text-3xl'>Listen to the first episode right here, right now</h2> */}
        <iframe className='max-w-3xl' style="border-radius:12px" src="https://open.spotify.com/embed/episode/4C5zFiNOTilZBaXPTtyhpR?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </section>
      <section className='bg-greenpri-300 h-96 flex flex-col justify-center items-center'>
        <h2 className='text-greenpri-50 sm:text-5xl sm:p-5'>Listen now!</h2>
        <div className='flex gap-3 text-white sm:text-3xl'>
          {/* <a className='reset cursor-pointer' href="">Apple Podcasts</a>| */}
          <a className='reset cursor-pointer' href="https://open.spotify.com/show/1QnbhsHHYsZAGG1cl7zUhS">Spotify</a>|
          <a className='reset cursor-pointer' href="https://feed.podbean.com/snigdhalal/feed.xml">RSS</a>
        </div>
      </section>
    </main>
  )
}
