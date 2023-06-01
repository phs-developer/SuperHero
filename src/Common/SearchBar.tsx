/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
  const Form = styled.form`
    border-radius: 100px;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 10px 20px 10px 10px;
    @media screen and (max-width:768px) {
      max-width: 300px;
    }

  `
  const Input = styled.input`
    min-width: 300px;
    border: none;
    padding: 5px;
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

  let navigate = useNavigate();
  function handleClick () {
    navigate('/favorite/:name')
  }

  return (
    <Form>
      <Input type="text" placeholder='Search hero name!' name="search" />
      <Btn type="submit" onClick={handleClick}><img src='/img/search.png' alt='검색'/></Btn>
    </Form>
  )


}

export default SearchBar