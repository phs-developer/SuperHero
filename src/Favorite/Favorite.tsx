/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {useState} from 'react';
import SearchBar from '../Common/SearchBar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchHero, HeroDataType } from '../Service/hero';


const Favorite = () => {
  const [data, setData] = useState<HeroDataType | null> (null);
  useEffect(() => {
    (async ()=> {
      const result = await fetchHero();
      setData(result);
    })()
  },[])

  let navigate = useNavigate();
  function moveHome () {
    navigate('/')
  }
  
  function detailHandler(event:React.MouseEvent<HTMLButtonElement>) {
    function hideAllStats() {
      stats.forEach(e => {
        e.classList.remove('active');
      })
    }
    function showCurrentStats() {
      currentStats?.classList.add('active');
    }   
    const stats = document.querySelectorAll('.detail')
    const currentStats = document.querySelector(`.${event.currentTarget.name}`)

    hideAllStats();
    showCurrentStats();
  }

  const background = css`
    padding: 70px;
    @media screen and (max-width:768px) {
      padding: 30px;
    }
  `
  const cursor = css`
    cursor: pointer;
  `
  const Container = styled.div`
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
  const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 50px 20px;
  `
  const HeroName = styled.p`
    color: white;
    font-size: 3rem;
  `
  const Img = styled.img`
    min-width: 400px;
    margin: 30px 0px 60px;
    @media screen and (max-width:768px) {
      width: 100%;
      min-width: 300px;
    }
  `
  const Article = styled.article`
    min-width: 580px;
    width: 100%;
    margin-bottom: 70px;
    @media screen and (max-width:768px) {
      min-width: 300px;
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
      border-bottom: 2px solid gray;
      &:hover {
        border-bottom:2px solid red;
      }
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
    list-style: none;
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
    }
  `

  return (
    <div css={background}>
      <Container  className='back'>
        <Header>
          <h1 css={cursor} onClick={moveHome}>
            Super<span css={hero}>Hero</span>
          </h1>
          <SearchBar />
        </Header>
        <Section>
          <HeroName>{data?.name}</HeroName>
          <Img src={data?.image.url} alt='흠'/>
          <Article>
            <Stats>
              <button type='button' name="appearance" onClick={detailHandler}>APPEARANCE</button>
              <button type='button' name="powerstats" onClick={detailHandler}>POWERSTATS</button>
              <button type='button' name="biography" onClick={detailHandler}>BIOGRAPHY</button>
            </Stats>
            <div>
              <StatsBody className='appearance detail active'>
                <li><img src='/img/yellow.png' alt='icon'/>Eye color<span>{data?.appearance['eye-color']}</span></li>
                <li><img src='/img/yellow.png' alt='icon'/>Gender<span>{data?.appearance.gender}</span></li>
                <li><img src='/img/yellow.png' alt='icon'/>Hair color<span>{data?.appearance['hair-color']}</span></li>
                <li><img src='/img/yellow.png' alt='icon'/>Height<span>{data?.appearance.height}</span></li>
                <li><img src='/img/yellow.png' alt='icon'/>Weight<span>{data?.appearance.weight}</span></li>
              </StatsBody>
              <StatsBody className='powerstats detail'>
                <li><img src='/img/red.png' alt='icon'/>Combat<span>{data?.powerstats.combat}</span></li>
                <li><img src='/img/red.png' alt='icon'/>Durability<span>{data?.powerstats.durability}</span></li>
                <li><img src='/img/red.png' alt='icon'/>Power<span>{data?.powerstats.power}</span></li>
                <li><img src='/img/red.png' alt='icon'/>Speed<span>{data?.powerstats.speed}</span></li>
                <li><img src='/img/red.png' alt='icon'/>Strength<span>{data?.powerstats.strength}</span></li>
              </StatsBody>
              <StatsBody className='biography detail'>
                <li><img src='/img/blue.png' alt='icon'/>Alignment<span>{data?.biography.alignment}</span></li>
                <li><img src='/img/blue.png' alt='icon'/>Full name<span>{data?.biography['full-name']}</span></li>
                <li><img src='/img/blue.png' alt='icon'/>Publisher<span>{data?.biography.publisher}</span></li>
              </StatsBody>
            </div>
          </Article>
        </Section>
      </Container>
    </div>
  )
}

export default Favorite