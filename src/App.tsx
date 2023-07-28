/** @jsxImportSource @emotion/react */ //-> emotion 문자열로 변환되지 않고 전달되는 이슈 방지
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MyHeroStore from './store/myhero';
import Main from './pages/main/Main';
import Favorite from './pages/favorite/Favorite';


function App() {
  return (
    <MyHeroStore>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element = {<Main />} />
          <Route path='/favorite' element = {<Favorite />} />
        </Routes>
      </BrowserRouter>
    </MyHeroStore>
  );
}

export default App;
