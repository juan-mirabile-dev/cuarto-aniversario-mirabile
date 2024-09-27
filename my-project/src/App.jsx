import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SectionTitle from './components/SectionTitle'
import Members from './components/Members'

export default function App() {
  return (
    <>
      <Header />
      <div className="bg-neutral-900 rounded-md p-4 mb-4">
        <SectionTitle content="Concierto del Cuarto Aniversario de Mirabile." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div class="w-full h-64 overflow-hidden">
            <img className="w-full h-full object-cover" src="png/mirabile_img_test.png" alt="Placeholder Image" />
          </div>
          <div className="text-start">
            Han pasado cuatro años desde la fundación de Mirabile como ensamble coral, años en los que ustedes nos han impulsado a llegar cada vez más lejos.
            Por ello, nos complace compartir que estamos próximos a celebrar nuestro cuarto aniversario.
            Y qué mejor manera de hacerlo que haciendo lo que mejor sabemos: cantar.
            En este concierto, interpretaremos dos obras reconocidas de la música clásica: el Concierto para Viola en Do menor, H. 104 de Carl Philipp Emanuel Bach
            y el "Gloria in D major, RV 589" de Antonio Vivaldi.
            <br />
            <br />
            Y tu, Ya tienes tus boletos?
          </div>
        </div>
      </div>

      <Members />

      <div className="mt-16 grid grid-cols-3 gap-4">
        <div className="col-span-full">
          <p className='mb-8 text-lg font-bold'>Siguenos en redes sociales</p>
        </div>
        <div className="text-center">
          <div className='mb-8 flex items-center justify-center h-16'>
            <img
              src="png/Facebook_icon.png"
              alt="Facebook_icon"
              className='h-full transition-transform duration-300 transform hover:scale-110'
              onClick={() => window.location.href = "https://www.facebook.com/mirabile.ags?locale=es_LA"}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="text-center">
          <div className='mb-8 flex items-center justify-center h-16'>
            <img
              src="png/Instagram_icon.png"
              alt="Instagram_icon"
              className='h-full transition-transform duration-300 transform hover:scale-110'
              onClick={() => window.location.href = "https://www.instagram.com/mirabile_ensamblecoral/"}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="text-center">
          <div className='mb-8 flex items-center justify-center h-16'>
            <img
              src="png/TikTok_icon.png"
              alt="TikTok_icon"
              className='h-full transition-transform duration-300 transform hover:scale-110'
              onClick={() => window.location.href = "https://www.tiktok.com/@mirabile_ensamble_coral?is_from_webapp=1&sender_device=pc"}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>

    </>
  )
}
