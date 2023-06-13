/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {MyHero} from '../store/myhero';
import { SearchListData } from '../Service/hero';

// onchange이벤트 re-render 발생으로 input의 아웃포커싱 이슈 처리를 위해 styled-component를 외부로 꺼냄 
const Form = styled.form`
  position: relative;
  border-radius: 10px;
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

type list = {
  id: number,
  image: {
    url: string
  },
  name: string
}[]

const SearchBar = () => {
  const [name, setName] = useState<string>('');
  const [list, setList] = useState<list | null>(null);
  const value = useContext(MyHero);
  const searchList = document.querySelector<HTMLElement>('.search-list');
  useEffect(()=> {
    (async()=> {
      const result = await SearchListData(name);
      setList(result)
    })()
  },[name])

  //키워드 있을 경우에만 노출
  if(searchList) {
    searchList.style.display = name.length>=1 ? 'block' : 'none';
  }

  //키워드 감지 핸들러
  function handleGetName(e:React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  
  let navigate = useNavigate();
  // 검색으로 이동
  function handleFavoritePage (e:React.MouseEvent<HTMLButtonElement>) {
    //submit과 navigate의 충돌 방지 --> preventDefault()
    e.preventDefault();
    value?.changeName(name);
    navigate(`/favorite`);
  }
  // 자동완성 클릭으로 이동
  function handleNavigate (e:React.MouseEvent<HTMLLIElement>) {
    const text = (e.target as HTMLLIElement).innerText;
    value?.changeName(text);
    navigate('/favorite');
  }

  return (
    <Form>
      <Input type="text" placeholder='Search hero english name!' autoComplete='off' name="search" value={name} onChange={handleGetName} className='search-box'/>
      <Btn type="submit" onClick={handleFavoritePage}><img src='/img/search.png' alt='검색'/></Btn>
      <SearchList className='search-list'>
        {list ? list.map((e)=> {
          return(
            <li key={e.id} onClick={handleNavigate}>
              <img src={e.image.url} alt={e.name}/> {e.name}
            </li>

          )
        }) : <li></li>}
      </SearchList>
    </Form>
  )


}

export default SearchBar