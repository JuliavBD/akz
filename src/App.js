import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Layout';
import Home from './Home';
import Offer from './Offer';
import Gallery from './Gallery';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/offer' element={<Offer />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
