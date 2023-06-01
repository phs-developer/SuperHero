/** @jsxImportSource @emotion/react */ //-> emotion 문자열로 변환되지 않고 전달되는 이슈 방지
import {css} from '@emotion/react'
import styled from '@emotion/styled';
import SearchBar from './Common/SearchBar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Favorite from './Favorite/Favorite';
import { useEffect } from 'react';
import { fetchHero } from './Service/hero';

function App() {
  // useEffect(()=>{
  //   (async ()=> {
  //     const res = await fetchHero();
  //     console.log(res);
  //   })()
  // },[])


  const Main = () => {
    const background = css`
      background-color: black;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
    const Section = styled.section`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 20px;
    `
    const Title = styled.h1`
      color: red;
      font-size: 50px;
      text-align: center;
      text-shadow: .5px .5px 1px white, -.5px -.5px 1px white;
      margin-bottom: 30px;
      @media screen and (max-width:768px) {
        margin-bottom: 100px;
      }
    `

    return (
      <div css={background}>
        <Section>
          <Title className='title'>What's your favorite hero?</Title>
          <SearchBar />
        </Section>
      </div>
    );
  }


  return (
    <Routes>
      <Route path='/' element = {<Main />} />
      <Route path='/favorite/:name' element = {<Favorite />} />
    </Routes>
  );
}

export default App;
