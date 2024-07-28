import logo from './logo.svg';
import './App.css';
import Addphotos from './components/Addphotos';
import Searchphotos from './components/Searchphotos';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Addphotos/>}/>
    <Route path="/search" element={<Searchphotos/>}/>
    <Route path="/view" element={<Viewall/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
