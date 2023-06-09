/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {MyHero} from '../store/myhero';

// onchange이벤트 re-render 발생으로 input의 아웃포커싱 이슈 처리를 위해 styled-component를 외부로 꺼냄 
const Form = styled.form`
  border-radius: 100px;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 20px 10px 10px;
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

const SearchBar = () => {
  const [name, setName] = useState('');
  const value = useContext(MyHero);

  function handleGetName(e:React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  
  let navigate = useNavigate();
  function handleFavoritePage (e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    value?.changeName(name);
    navigate(`/favorite`);
}

  return (
    <Form>
      <Input type="text" placeholder='Search hero name!' name="search" value={name} onChange={handleGetName}/>
      <Btn type="submit" onClick={handleFavoritePage}><img src='/img/search.png' alt='검색'/></Btn>
    </Form>
  )


}

export default SearchBar