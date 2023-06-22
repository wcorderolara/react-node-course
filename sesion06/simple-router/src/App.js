import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Root from './components/Root';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path="home" element={<Home/>}/>
    <Route path="about-us" element={<AboutUs/>}/>
    <Route path="contact" element={<Contact/>}/>
  </Route>
));


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
