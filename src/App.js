import { NavLink, Route, Routes } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Home from './home';


function App() {
  return (
    <>
      <nav className='navBar'>
        <div className='logo'>
          <h1>React Router</h1>
        </div>
        

        <div className="navLinks">
          <NavLink activeClassName="active" className="link" to="/">HOME</NavLink>
          <NavLink activeClassName="active" className="link" to="/about">ABOUT</NavLink>
          <NavLink activeClassName="active" className="link" to="/contact">CONTACT</NavLink>
        </div>
      </nav>


      <Routes>
        <Route  path='/' element={ <Home /> } />
        <Route  path='/about' element={ <About /> } />
        <Route  path='/contact' element={ <Contact /> } />
      </Routes>
    </>
  );
}

export default App;
