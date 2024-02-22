import Footer from "./components/Footer";
import Version from "./components/Version";
import { useEffect, useRef, useState, createContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import axios from "axios";
import Nav from "./components/Nav";
import Books from "./components/Books";
import Chapters from "./components/Chapters";

const initNav = {
  version: 4,
  book: 0,
  chapter: 1,
};


export const BibleContext = createContext();
export default function App() {
  const [bible, setBible] = useState(null);
  const [nav, setNav] = useState(initNav);
  const [labels, setLabels] = useState(null)
  const [version, setVersion] = useState(null)
  
  function turnPage(e) {
    const {name, value} = e.target;
    if (name === "next" && nav.chapter < labels.book.chapters.length) {
      setNav({...nav, chapter: nav.chapter + 1})
    } else if (name === "prev" && nav.chapter > 1) {
      setNav({...nav, chapter: nav.chapter - 1})
    } 
  }
  function navigateBible(e) {
    const {title, value} = e.target
    console.log(title)
    console.log(value)
    if (title === "book") {
      return setNav({...nav, [title]: value})
    } else if (title === "chapter") {
      return setNav({...nav, [title]: value})
    }
  }

  useEffect(() => {
    axios
      .post("http://localhost:9000/bible/chapter", nav)
      .then(res => {
        setBible(res.data);
        
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .post("http://localhost:9000/bible/names", nav)
      .then(res => {
        
        setLabels(res.data)
      })
      .catch(err => console.log(err));
      axios.post(`http://localhost:9000/bible/chapterList`, nav)
      .then(res => {

        setVersion(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
useEffect(() => {
  axios
      .post("http://localhost:9000/bible/chapter", nav)
      .then(res => {
        setBible(res.data);
      })
      .catch(err => {
        console.log(err);
      });
}, [nav])
  return (
    <main className="absolute m-0 p-0 top-0 left-0 min-h-full w-full bg-stone-800">
      <BibleContext.Provider
        value={{
          nav,
          bible,
          version,
          labels, 
          turnPage,
          navigateBible
        }}
      >
        
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/versions" element={<Version />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<Chapters />} />
        </Routes>
        <Footer />
      </BibleContext.Provider>
    </main>
  );
}
