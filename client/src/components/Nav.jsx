import axios from 'axios'
import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { BibleContext } from "../App";
function Nav(props) {
  const { bible, nav, labels } = useContext(BibleContext);
  const { version, book, chapter } = nav;
  
    
  useEffect(() => {
    
  }, []);

  return (
    <header className="fixed top-0 z-10 left-0 flex justify-between h-auto py-auto w-full bg-indigo-200">
      
   {labels !== null ? <><Link to={"/books"} className='mx-5 my-2 bg-white px-5 py-2 rounded hover:scale-110'>
        {`${labels.book.abbr} ${chapter}`}
      </Link>
      <Link to={"/version"} className='mx-5 my-2 bg-white px-5 py-2 rounded hover:scale-110'>
        {`${labels.version}`}
      </Link></> : null
}
      
    </header>
  );
}

export default Nav;
