//favorite style

import {css} from '@emotion/react'
import styled from '@emotion/styled';

// favorite
const background = css`
  padding: 40px;
  min-height: calc(100vh - 80px);
  background: linear-gradient(to bottom right, #f64445, #7a00c7);
  @media screen and (max-width:768px) {
    padding: 30px;
  }
`
const Container = styled.div`
  min-height: 90vh;
  background-color: black;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgb(32, 32, 32);
  color: white; 
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 20px 30px;
  color: white; 
  font-size: 20px;
`
const hero = css`
  color: red;
`
const cursor = css`
  cursor: pointer;
`

// success
const Section = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 80px 50px 20px;
  @media screen and (max-width:1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width:768px) {
    padding: 20px;
  }
`
const HeroName = styled.p`
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`
const Img = styled.img`
  min-width: 200px;
  min-height: 640px;
  @media screen and (max-width:1024px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width:768px) {
    width: 100%;
    min-width: 300px;
    min-height: auto;
}
`
const Article = styled.article`
  min-width: 500px;
  width: 650px;
  min-height: 100%;
  .active {
    display: block;
  }
  @media screen and (max-width:768px) {
    width: 100%;
    min-width: 300px;
    margin-bottom: 70px;
  }
`
const Stats = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  button{
    font-size: 1.3rem;
    width: 34%;
    letter-spacing: 1px;
    padding: .5rem 0;
    background: none;
    border: 0;
    color: white;
    cursor: pointer;
    border-bottom: 2px solid gray;
    &:hover {
      border-bottom:2px solid red;
    }
  }
  .active {
    border-bottom:2px solid red;
  }
  @media screen and (max-width:768px) {
    flex-direction: column;
    align-items: center;
      button{
        width: 90%;
      }
  }
`
const StatsBody = styled.ul`
  display:none;
  font-size: 1.3rem;
  letter-spacing: 1.5px;
  li {
    display: flex;
    align-items: center;
    line-height: 55px;
  span {
    text-align: right;
    margin-left: auto;
  }
  img {
    width: 23px;
    margin-right: 5px;
  }
  @media screen and (max-width:768px) {
    flex-wrap: wrap;
  }
`

// fail
const FailSection = styled.section`
  height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FailContent = styled.p`
  text-align:center;
  font-size: 3rem;
`

export {background, Container, Header, hero, cursor, Section, HeroName,Img, Article,Stats, StatsBody, FailSection, FailContent}