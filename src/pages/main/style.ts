import {css} from '@emotion/react'
import styled from '@emotion/styled';
import bacImg from '../../asset/img/background.jpg'

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
  background-image: url(${bacImg});
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

export {background, BackImg, Section, Title}