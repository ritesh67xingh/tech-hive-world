import NavbarMain from './components/NavbarMain'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import routes from './router/route';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // Animation global setting 
  AOS.init({
    disable: 'mobile',
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 70,
    delay: 0,
    duration: 800,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="App">
        <NavbarMain />
        <div className='content'>
          <Routes>
            {
              routes.map(x => (
                <Route key={x.to} path={x.to} element={x.components} exact/>
              ))
            }
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
