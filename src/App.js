
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFount from './Component/NotFount/NotFount';
import Reviews from './Component/Reviews/Reviews';

function App() {
  return (
    <div>
      <h1 className=' text-center text-6xl text-orange-300 font-serif font-bold my-5'>Welcome To</h1>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<NotFount></NotFount>}></Route>
      </Routes>
    </div>
  );
}

export default App;
