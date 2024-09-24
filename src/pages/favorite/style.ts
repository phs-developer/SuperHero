//favorite style
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// 미디어쿼리
const breakpoints = {
    mobile: "480px",
    tablet: "768px",
    pc: "1024px",
};

// favorite
const background = css`
    height: 100vh;
    padding: 40px;
    background: linear-gradient(to bottom right, #f64445, #7a00c7);
    @media (max-width: ${breakpoints.tablet}) {
        height: 100%;
        padding: 10px;
    }
`;
const Container = styled.div`
    position: relative;
    height: 100%;
    color: white;
    background-color: #000;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgb(32, 32, 32);
`;
const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px 30px;
    width: 100%;
    height: 100px;
    color: white;
    font-size: 20px;
`;
const hero = css`
    color: red;
    font-weight: 700;
`;

// success
const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 100px 10vw;
    .inner {
        display: flex;
        gap: 15%;
        width: 100%;
        @media (max-width: ${breakpoints.pc}) {
            gap: 5%;
        }
        @media (max-width: ${breakpoints.tablet}) {
            flex-direction: column;
        }
    }
    @media (max-width: ${breakpoints.pc}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: ${breakpoints.mobile}) {
        padding: 150px 5vw 0;
    }
`;
const Img = styled.img`
    width: 25%;
    height: 100%;
    @media (max-width: ${breakpoints.pc}) {
        width: 40%;
        margin-bottom: 50px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        min-width: 300px;
        min-height: auto;
    }
    @media (max-width: ${breakpoints.mobile}) {
        min-width: auto;
    }
`;

const Article = styled.article`
    flex: 1;
    font-size: clamp(0.8rem, 1.2vw, 1.5rem);
    .active {
        display: block;
    }
    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        min-width: 300px;
        margin-bottom: 70px;
    }
`;
const HeroName = styled.p`
    color: white;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    text-align: center;
`;
const Stats = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    button {
        font-size: 1.2em;
        width: 34%;
        letter-spacing: 1px;
        padding: 0.5rem 0;
        background: none;
        border: 0;
        color: white;
        cursor: pointer;
        border-bottom: 2px solid gray;
        &:hover {
            border-bottom: 2px solid red;
        }
    }
    .active {
        border-bottom: 2px solid red;
    }
    @media (max-width: ${breakpoints.pc}) {
        flex-direction: column;
        align-items: center;
        button {
            width: 90%;
        }
    }
`;
const StatsBody = styled.ul`
  display:none;
  font-size: 1.1em;
  letter-spacing: 1.5px;
  li {
    display: flex;
    align-items: center;
    line-height: 3;
  span {
    text-align: right;
    margin-left: auto;
  }
  img {
    width: 23px;
    margin-right: 5px;
  }
   @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`;

// fail
const FailSection = styled.section`
    height: 82vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FailContent = styled.p`
    text-align: center;
    font-size: 3rem;
`;

export {
    background,
    Container,
    Header,
    hero,
    Section,
    HeroName,
    Img,
    Article,
    Stats,
    StatsBody,
    FailSection,
    FailContent,
};
