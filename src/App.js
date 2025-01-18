import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage'
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/table' element={<MainPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
