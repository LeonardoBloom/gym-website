import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';


import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Schedules from './pages/schedules/Schedules';
import PersonalTrainer from './pages/personal-training/PersonalTrainer';
import Facilities from './pages/facilities/Facilities';

function App() {
  const {authUser} = useAuthContext();
  return (
    <>
      {/* <div className='p-4 h-screen flex items-center justify-center'> */}
        <Routes>
          {/* NAVBAR */}
          <Route path='/' element={<Home />} />
          <Route path='/horario-das-aulas' element={<Schedules />} />
          <Route path='/personal-trainer' element={<PersonalTrainer />} />
          <Route path='/instalacoes' element={<Facilities />} />
          <Route path='/sobre-nos' element={<About />} />

          {/* USER */}
          <Route path='/login' element={<Login />} />
          {/* <Route path='/register' element={<SignUp />} /> */}

        </Routes>
      {/* </div> */}

    </>
  );
}

export default App;
