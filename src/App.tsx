import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Rate from "./components/Rate/Rate";
import NavBottom from "./components/NavBottom/NavBottom";
import Catalog from "./components/Catalog/Catalog";
import Search from "./components/Search/Search";
//CSSTransitions need to try

export default function App() {

  const [tab, setTab] = useState('catalog')

  return (
    <>
      <Nav active={ tab } onChange={ c => setTab(c) }/>
      <NavBottom />
      { tab === 'home' && <Home /> }
      { tab === 'about' && <About /> }
      { tab === 'catalog' && <Catalog /> }
      { tab === 'contact' && <Contact /> }
      { tab === 'rate' && <Rate /> }
      { tab === 'search' && <Search /> }
    </>
  )
}
