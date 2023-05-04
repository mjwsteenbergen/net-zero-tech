import Image from 'next/image'
import { Inter } from 'next/font/google';
import css from "./index.module.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='m-0 p-0 bg-blue-200'>
      <section className='p-10 m-0 h-screen bg-blue-300 flex flex-col justify-center'>
        <h1 className='text-red-500'>Net Zero Tech</h1>
        <p className='text-red-700'>Climate change is scary and the solution is complex. A host of different technological interventions will be necessary if we are to avert a climate disaster. Join us as we speak to expert scientists working on some of the breakthrough innovations and game-changing ideas for tackling climate change. Each episode is a power-packed introduction where we discuss the basics, opportunities and challenges of a specific technological solution.</p>
      </section>
      <section className='bg-blue-600 m-0 flex flex-col items-center justify-center p-4'>
        <h2>Amazingly reviewed</h2>
        <div className='p-2'>
          <p><i>{"\"Amazing\""}</i></p>
          <p> - Martijn</p>
        </div>
      </section>
      <section className={'m-6 overflow-hidden rounded-xl ' + css.about}>
        <img className={'' + css.about_img} src="https://www.some.ox.ac.uk/wp-content/uploads/2022/07/Snigdha-Lal-1.jpeg" alt=""></img>
        <div className={'bg-black bg-opacity-50 p-5 ' + css.about_text}>
          <h2 className='text-blue-100'>Created by <b>Snigdha Lal</b></h2>
          <p className='text-blue-100 text-xs font-semibold'>Sustainability, especially sustainable energy development, has always been an issue in which I have found my purpose. Coming all the way from India... </p>
        </div>
      </section>
      <section className='bg-blue-600 flex flex-col justify-center items-center'>
        <h2>Listen to a preview, right here, right now</h2>
        <p>{"//TODO insert play icon and maybe sound component? The default audio seems good https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"}</p>
      </section>
      <section className='bg-blue-800 h-96 flex flex-col justify-center items-center'>
        <h2 className='text-blue-50'>Listen now!</h2>
        <div className='flex gap-3 text-white'>
          <a className='reset'>Apple Podcasts</a>
          <a className='reset'>Spotify</a>
          <a className='reset'>RSS</a>
        </div>
      </section>
    </main>
  )
}
