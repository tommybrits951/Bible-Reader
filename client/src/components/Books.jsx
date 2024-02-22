import { useEffect, useContext, useState } from "react";
import { BibleContext } from "../App";
import axios from "axios";
import { Link } from "react-router-dom";
function Books() {
  const [list, setList] = useState(null);
  const { nav, navigateBible } = useContext(BibleContext);
  function navHandle(e) {
    return navigateBible(e)
  }
  useEffect(() => {
    nav
      ? axios
          .get(`http://localhost:9000/bible/${nav.version}`)
          .then(res => setList(res.data))
          .catch(err => console.log(err))
      : null;
  }, []);
  return (
    <ul className="w-3/6 text-center absolute overflow-scroll left-1/4 border-2 rounded-xl h-4/5 z-0 top-28">
      {list !== null
        ? list.books.map((bk, idx) => {
            return <Link key={idx} to={`/books/${idx}`}>
                <li>
              <button title="book" className="text-white w-full border-2 text-xl p-3" value={idx} onClick={navHandle}>

              {bk.name}
                </button>  
                </li>
              </Link>
          })
        : null}
    </ul>
  );
}

export default Books;
