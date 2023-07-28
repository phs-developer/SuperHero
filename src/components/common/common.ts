import styled from '@emotion/styled';

// onchange이벤트 re-render 발생으로 input의 아웃포커싱 이슈 처리를 위해 styled-component를 외부로 꺼냄 
const Form = styled.form`
  position: relative;
  border-radius: 10px;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 20px 10px 10px;
  .active {
    display: block;
  }
  @media screen and (max-width:768px) {
    max-width: 300px;
  }
`
const Input = styled.input`
  min-width: 250px;
  border: none;
  padding: 5px;
  outline: none;
  @media screen and (max-width:768px) {
    min-width: 200px;
  }
`
const Btn = styled.button`
  background-color: white;
  border: none;
  img{
    width: 20px;
  }
`
const SearchList = styled.ul`
  display: none;
  position: absolute;
  top: 45px;
  left: 0;
  width: 295px;
  color: white;
  border-radius: 10px;
  background: black;
  padding-left: 15px;
  li{
    margin: 15px 0px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
      width: 40px;
      margin-right: 20px;
    }
  }
  @media screen and (max-width:768px) {
    width: 245px;
  }
`

export {Form, Input, Btn, SearchList}