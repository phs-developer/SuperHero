import styled from "@emotion/styled";
import searchImg from "../asset/img/search.png";

// onchange이벤트 re-render 발생으로 input의 아웃포커싱 이슈 처리를 위해 styled-component를 외부로 꺼냄
const breakpoints = {
    mobile: "480px",
    tablet: "768px",
    pc: "1024px",
};

const Form = styled.form`
    position: relative;
    width: 20%;
    min-width: 300px;
    .active {
        display: block;
    }
    @media (max-width: ${breakpoints.tablet}) {
        width: 60%;
        min-width: 250px;
    }
`;
const Input = styled.input`
    width: 100%;
    padding: 10px 50px 10px 20px;
    border: none;
    outline: none;
    border-radius: 10px;
    background: #ffffffa6;
    font-size: clamp(1rem, 2vw, 1.2rem);
    @media (max-width: ${breakpoints.tablet}) {
        padding: 7px 40px 7px 20px;
    }
`;
const Btn = styled.button`
    position: absolute;
    top: 12px;
    right: 20px;
    width: 20px;
    height: 20px;
    border: none;
    background: url(${searchImg}) no-repeat center / cover;
    @media (max-width: ${breakpoints.tablet}) {
        width: 15px;
        height: 15px;
    }
`;
const SearchList = styled.ul`
    display: none;
    width: 100%;
    color: #fff;
    border-radius: 10px;
    background: #000;
    font-family: "Roboto", sans-serif;
    button {
        display: flex;
        align-items: center;
        gap: 20px;
        width: 100%;
        padding: 15px;
    }
    img {
        width: 60px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        button {
            gap: 10px;
            padding: 10px 10px;
        }
        img {
            width: 50px;
        }
        span {
            font-size: 0.9rem;
        }
    }
`;

export { Form, Input, Btn, SearchList };
