import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/table' element={<MainPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
