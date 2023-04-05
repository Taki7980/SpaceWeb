/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import './App.css';
import { Body } from './components/Main/Body';
import { AboutBody } from './components/About/AboutBody';
import {
  createBrowserRouter,
  RouterProvider,
  Switch,
  Link,
  Routes,
  Route,
  BrowserRouter as Router

} from "react-router-dom";
import { Navbar } from './components/Main/Navbar';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Body/>}></Route>
          <Route path='/about' element={<AboutBody/>}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
