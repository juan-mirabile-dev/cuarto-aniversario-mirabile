import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <>
      <div className='mb-5 text-start h-8'>
        <img src="logo_mirabile.png" alt="logo" className='h-full'/>
      </div>
      <div className="grid grid-cols-1">
        <div className="text-start text font-bold mb-2">Cuarto aniversario mirabile</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="w-full h-64 overflow-hidden">
          <img className="w-full h-full object-cover" src="https://placehold.co/160x90" alt="Placeholder Image" />
        </div>
        <div className="text-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nisi nihil eligendi maiores dolore earum,
          quia ipsum libero accusantium molestias! Alias tempora soluta dolore id nam ipsam sunt nesciunt quas.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start">
        <div className='mb-2'>
          <p className="font-bold text-lg">Coro</p>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </div>
        <div className='mb-2'>
          <ul>
            <p className="font-bold text-lg">Camerata</p>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </div>
      </div>
    </>
  )
}
