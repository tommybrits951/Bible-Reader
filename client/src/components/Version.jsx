import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Version() {
  const [list, setList] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:9000/bible/0/ver")
      .then(res => setList(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <ul className="mt-20 w-5/6 bg-white mx-auto p-2">
      {list !== null
        ? list.map((itm, idx) => {
            return (
              <li key={idx} className="border-2 p-1 h-20">
                <Link to={"/"}>
                  <p className="text-left font-serif">{itm.name}</p>
                  <p className="text-right font-mono font-bold">{itm.abbr}</p>
                </Link>
              </li>
            );
          })
        : null}
    </ul>
  );
}

export default Version;
