/** @jsxImportSource @emotion/react */ //-> emotion 문자열로 변환되지 않고 전달되는 이슈 방지
import './App.css';
import {css} from '@emotion/react'
import styled from '@emotion/styled';
import SearchBar from './Common/SearchBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Favorite from './Favorite/Favorite';
import MyHeroStore from './store/myhero';


function App() {

  const Main = () => {
    const background = css`
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    `
    const BackImg = css`
      position: absolute;
      top:0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background-image: url(./img/background.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
      z-index: -1;
    `
    const Section = styled.section`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 5%;
      @media screen and (max-width:768px) {
        align-items: center;
        padding: 0;
      }
    `
    const Title = styled.h1`
      color: white;
      font-size: 50px;
      text-shadow: 3px 3px 5px black, -3px -3px 5px black;
      margin-bottom: 30px;
      @media screen and (max-width:768px) {
        text-align: center;
      }
    `

    return (
      <div css={background}>
        <div css={BackImg}/>
        <Section>
          <Title className='title'>who is your hero?</Title>
          <SearchBar />
        </Section>
      </div>
    );
  }

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
