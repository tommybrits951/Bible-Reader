import { useContext } from "react";
import { BibleContext } from "../App";
function Home() {
  const { bible, nav, labels } = useContext(BibleContext);

  return (
    <section className="text-center px-10 py-32">
      {bible !== null ? (
        <>
        <h2 className="mb-10 text-6xl text-white">{`${labels !== null ? labels.book.name : null} ${nav.chapter}`}</h2>
        <p className="text-white font-mono text-lg  ">{bible.text}</p>
        </>
      ) : null}
    </section>
  );
}

export default Home;
