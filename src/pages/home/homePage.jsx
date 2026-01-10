import { Route, Routes } from 'react-router-dom';
import Header from '../../components/header';


import Home from "./home";
import Contact from "./contact";
import Gallery from "./gallery";
import Item from "./items";
import ErrorNotFound from "./error";

export default function HomePage() {
    return (
    <>
        <Header />
      <div className = "h-[calc(100vh-100px)] w-full bg-blue-200 ">
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/contact" element = {<Contact />} />
            <Route path = "/gallery" element = {<Gallery />} />
            <Route path = "/items" element = {<Item />} />
            <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </div>
      </>
    )
}






