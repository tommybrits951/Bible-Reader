import {useContext} from 'react'
import { BibleContext } from '../App'

export default function Footer() {
  const {nav, turnPage} = useContext(BibleContext)
  function pageHandler(e) {
    return turnPage(e)
  }
    return (
    <footer className='fixed bottom-0 w-full p-3 flex justify-between text-white text-lg'>
      <button onClick={turnPage} name='prev' className='bg-stone-500 p-2 rounded-xl'>Prev</button>
      <button onClick={turnPage} name='next' className='bg-stone-500 p-2 rounded-xl'>Next</button>
    </footer>
  )
}
