import {useContext} from 'react'
import { BibleContext } from '../App'
import { Link, useParams } from 'react-router-dom'
export default function Chapters() {
    const {version, nav, navigateBible} = useContext(BibleContext)
  function navHandle(e) {
    console.log(nav)
    return navigateBible(e)
  }
  return (
    <ul className='absolute w-2/6 text-center left-1/4 h-3/5 overflow-scroll top-36 border-2 rounded-2xl'>
        {version !== null ? version.map((chp, idx) => {
          return(
            <Link to={"/"} key={idx}>

              <li>
            <button key={idx} onClick={navHandle} value={idx} title="chapter" className='text-white border-2 w-full p-3' >

              {chp.number}
              </button>
              </li>
            </Link>
            
          )
        }) : null} 
    </ul>
  )
}
