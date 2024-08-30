// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { Route, Routes} from 'react-router-dom';
// import { useAuthContext } from './context/AuthContext';
import Lenis from '@studio-freight/lenis';


import Login from './pages/login/Login';
// import SignUp from './pages/signup/SignUp';
import Schedules from './pages/schedules/Schedules';
import PersonalTrainer from './pages/personal-training/PersonalTrainer';
import Facilities from './pages/facilities/Facilities';
import { useEffect } from 'react';

function App() {
  // const {authUser} = useAuthContext();

  useEffect(() => {
    const lenis = new Lenis ({
      duration: 1.2,  // control the smoothness of the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      direction: 'vertical', // 'vertical' or 'horizontal'
      gestureDirection: 'vertical', // direction of gesture scrolling
      smooth: true, // enable or disable smooth scrolling
      mouseMultiplier: 1, // scroll speed
      smoothTouch: false, // smooth touch scrolling
      touchMultiplier: 2, // touch scrolling speed
      infinite: false, // infinite scrolling
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    //cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* <div className='p-4 h-screen flex items-center justify-center'> */}
        <Routes>
          {/* NAVBAR */}
          <Route path='/gym-website/' element={<Home />} />
          <Route path='/gym-website/horario-das-aulas' element={<Schedules />} />
          <Route path='/gym-website/personal-trainer' element={<PersonalTrainer />} />
          <Route path='/gym-website/instalacoes' element={<Facilities />} />
          <Route path='/gym-website/sobre-nos' element={<About />} />

          {/* USER */}
          <Route path='/gym-website/login' element={<Login />} />
          {/* <Route path='/register' element={<SignUp />} /> */}

        </Routes>
      {/* </div> */}

    </>
  );
}

export default App;
